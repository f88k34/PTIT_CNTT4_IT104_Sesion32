interface CounterState {
  count: number;
  status: boolean;
}
const initialState: CounterState = {
  count: 0,
  status: true,
};
type CounterAction =
  | { type: "INCREMENT" }
  | { type: "REDUCE" };
export const reducerCounter = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      console.log("thực hiện tăng count", state.count + 1);
      return { ...state, count: state.count + 1 };

    case "REDUCE":
      console.log("thực hiện giảm count", state.count - 1);
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};
