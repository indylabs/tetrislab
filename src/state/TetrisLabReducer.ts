import type { TetrisLabAction, TetrisLabState } from '@/types';

export const reducer = (state: TetrisLabState, action: TetrisLabAction): TetrisLabState => {
  switch (action.type) {
    case "ADD_MMTR":
      return {
        ...state,
        mmtr: action.mmtr
      };
    case "ADD_GAME_START":
      return {
        ...state,
        start: new Date()
      };
    case "ADD_GAME_END":
      console.log('action.game:', action.game);
      return {
        ...state,
        ...action.game,
        end: new Date()
      };
    case "ADD_NOTIFICATION":
      return {
        ...state,
        notifications: [...state.notifications, action.notification]
      };
    default:
      throw new Error(`Unknown action type: ${action}`);
  }
};