import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";
import { AuthContext } from "./AuthContext";
import { User } from "firebase/auth";

interface ChatContextState {
  chatId: string;
  user: User | null | undefined;
}

interface Action {
  type: string;
  payload?: any;
}

interface ContextProps {
  data: ChatContextState;
  dispatch: Dispatch<Action>;
}

export const ChatContext = createContext<ContextProps>({
  data: {
    chatId: "",
    user: null,
  },
  dispatch: () => {},
});

export const ChatContextProvider = ({ children }: { children: ReactNode }) => {
  const { currentUser } = useContext(AuthContext);
  const INITIAL_STATE: ChatContextState = {
    chatId: "null",
    user: currentUser,
  };

  const chatReducer = (state: ChatContextState, action: Action) => {
    switch (action.type) {
      case "CHANGE_USER":
        if (currentUser) {
          return {
            user: action.payload,
            chatId:
              currentUser.uid > action.payload.uid
                ? currentUser.uid + action.payload.uid
                : action.payload.uid + currentUser.uid,
          };
        }
        return state;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
