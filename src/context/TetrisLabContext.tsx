import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
} from "react";

export interface TetrisLabContextStateTypes {
  playing: boolean;
  setPlaying: Dispatch<SetStateAction<boolean>>;
  openActionRequiringNotification: boolean;
  setOpenActionRequiringNotification: Dispatch<SetStateAction<boolean>>;
  openPassiveNotification: boolean;
  setOpenPassiveNotification: Dispatch<SetStateAction<boolean>>;
}

interface TetrisLabContextProps {
  state: TetrisLabContextStateTypes;
}

interface TetrisLabContextProviderProps {
  value: TetrisLabContextProps;
  children: ReactNode;
}

export const TetrisLabContext = createContext<
  TetrisLabContextProps | undefined
>(undefined);
TetrisLabContext.displayName = "TetrisLabContext";

export const useTetrisLabContext = () => {
  const context = useContext(TetrisLabContext);

  if (!context) {
    throw new Error(
      "useTetrisLabContext just be used within the TetrisLabContext.Provider"
    );
  }

  return context;
};

export const TetrisLabContextProvider = (
  props: TetrisLabContextProviderProps
) => <TetrisLabContext.Provider {...props} />;
