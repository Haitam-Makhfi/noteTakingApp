// import { useEffect, useState } from "react";

interface propType {
  setTitleValue: any;
  titleValue: string;
}
export default function TitleSort({ setTitleValue, titleValue }: propType) {
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
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
      </label>
    </div>
  );
}
