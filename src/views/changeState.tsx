import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCompany } from "../store/Reducer/companyReducer";
import { RootState } from "../store/store";

export default function ChangeState() {
  const dispatch = useDispatch();
  const company = useSelector((state: RootState) => state.companyReducer);

  const handleChange = () => {
    dispatch(changeCompany());
  };

  return (
    <div>
      <h1>Company: {company}</h1>
      <button onClick={handleChange}>Change state</button>
    </div>
  );
}
