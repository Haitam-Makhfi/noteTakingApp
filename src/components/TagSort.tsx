import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Tooltip from "./Tooltip";
type propType = {
  setTagValue: any;
};
export default function TagSort({ setTagValue }: propType) {
  const [tooltipactive, setTooltipActive] = useState(false);
  const [chosenTags, setChosenTags] = useState([]);
  useEffect(() => {
    if (setTagValue) setTagValue(chosenTags);
  }, [chosenTags]);
  return (
    <div>
      <span className="sort-title">tag</span>
      <label htmlFor="tagsort" className="tagsort">
        <div className="sort-input" id="tagsort">
          {chosenTags.map((tag, index) => (
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
            tagControle={{ chosenTags, setChosenTags }}
            style={{ right: "0", left: "auto" }}
          />
        )}
      </label>
    </div>
  );
}
