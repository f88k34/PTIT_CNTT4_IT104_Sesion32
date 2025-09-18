// store/Reducer/Random.ts
export const ADD_RANDOM = "ADD_RANDOM";

export const addRandom = (num: number) => ({
  type: ADD_RANDOM,
  payload: num,
});

const initialState: number[] = [];

export const randomReducer = (
  state: number[] = initialState,
  action: { type: string; payload?: number }
): number[] => {
  switch (action.type) {
    case ADD_RANDOM:
      return [...state, action.payload as number];
    default:
      return state;
  }
};
