import type { TetrisLabAction, TetrisLabState } from '@/types';

export const reducer = (state: TetrisLabState, action: TetrisLabAction): TetrisLabState => {
  switch (action.type) {
    case "ADD_INFO_SHEET":
      return {
        ...state,
        infoSheet: action.infoSheet
      }
    case "ADD_PARTICULARS":
      return {
        ...state,
        gender: action.gender,
        age: action.age,
        requirements: action.requirements
      }
    case "ADD_CONSENT":
      return {
        ...state,
        consent: action.consent
      }
    case "ADD_MMTR":
      return {
        ...state,
        mmtr: action.mmtr
      };
    case "ADD_GAME_START":
      return {
        ...state,
        gameStart: new Date()
      };
    case "ADD_GAME_END":
      return {
        ...state,
        ...action.game,
        gameEnd: new Date()
      };
    case "ADD_NOTIFICATION":
      return {
        ...state,
        notifications: [...state.notifications, action.notification]
      };
    case "ADD_FSS":
      return {
        ...state,
        fss: action.fss
      }
    case "ADD_DEBRIEF":
      return {
        ...state,
        debrief: action.debrief
      }
      case "ADD_PARTICIPANT_CODE":
        return {
          ...state,
          participantCode: action.participantCode
        }
    default:
      throw new Error(`Unknown action type: ${action}`);
  }
};