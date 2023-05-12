import { data } from "../data";
import { REMOVE_ITEM, RESET_LIST, CLEAR_LIST } from "./actions";
const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, users: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, users: data };
  }
  if (action.type === REMOVE_ITEM) {
    const newUser = state.users.filter((user) => user.id !== action.payload.id);
    return { ...state, users: newUser };
  }
  throw new Error(`no matching "${action.type}" - action type`);
};

export default reducer;
