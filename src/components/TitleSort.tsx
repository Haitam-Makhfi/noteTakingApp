import { useEffect, useState } from "react";
// import { Dispatch, SetStateAction } from "react";

interface propType {
  setTitleValue: any;
}
export default function TitleSort({ setTitleValue }: propType) {
  const [state, setState] = useState("");
  useEffect(() => {
    if (setTitleValue) setTitleValue(state);
  }, [state]);
  return (
    <div className="title-sort-container">
      <span className="sort-title">title</span>
      <label htmlFor="titlesort" className="titlesort">
        <input
          className="sort-input"
          placeholder="sort by title"
          type="text"
          name="titlesort"
          id="titlesort"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </label>
    </div>
  );
}
