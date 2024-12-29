import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Tooltip from "./Tooltip";
type propType = {
  setTagValue: any;
  tagValue: string[];
};
export default function TagSort({ setTagValue, tagValue }: propType) {
  const [tooltipactive, setTooltipActive] = useState(false);
  return (
    <div className="tag-sort-container">
      <span className="sort-title">tag</span>
      <label htmlFor="tagsort" className="tagsort">
        <div className="sort-input" id="tagsort">
          {tagValue.map((tag, index) => (
            <span className="tags" key={index}>
              {tag}
            </span>
          ))}
        </div>
        <div className="drop-down" onClick={() => setTooltipActive((p) => !p)}>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        {tooltipactive && (
          <Tooltip
            tagControle={{ tagValue, setTagValue }}
            style={{ right: "0", left: "auto" }}
          />
        )}
      </label>
    </div>
  );
}
