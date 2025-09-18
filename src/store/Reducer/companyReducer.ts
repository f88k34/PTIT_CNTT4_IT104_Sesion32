
export const CHANGE_COMPANY = "CHANGE_COMPANY"
export const changeCompany = () => ({
  type: CHANGE_COMPANY,
})
const initialState: string = "Rikkei Academy";
export const companyReducer = (
  state: string = initialState,
  action: { type: string }
): string => {
  switch (action.type) {
    case CHANGE_COMPANY:
      return "RikkeiSoft";
    default:
      return state;
  }
};
