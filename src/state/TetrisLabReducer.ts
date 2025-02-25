import type { TetrisLabAction, TetrisLabState } from '@/types';
import { INITIAL_STATE } from "@/constants";

export const reducer = (state: TetrisLabState, action: TetrisLabAction): TetrisLabState => {
  switch (action.type) {
    case "INIT_PARTICIPANT":
      return {
        ...state,
        variant: action.variant,
        participantCode: action.participantCode,
        overallStart: Date.now()
      }
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
        gameStart: Date.now()
      };
    case "ADD_GAME_END":
      return {
        ...state,
        ...action.game,
        gameEnd: Date.now()
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
    case "ADD_OVERALL_END":
      return {
        ...state,
        overallEnd: Date.now()
      }
    case "RESET_STATE":
      return {
        ...INITIAL_STATE
      }
    default:
      throw new Error(`Unknown action type: ${action}`);
  }
};