import { useContext, useState } from "react";
import { tagContext } from "../App";
export default function Nav() {
  const { tagArray } = useContext(tagContext);
  const [tooltipactive, setTooltipActive] = useState(false);
  return (
    <nav>
      <h1>Clipy</h1>
      <div className="nav-btns">
        <div className="nav-btn">Creat</div>
        <div className="nav-btn" onClick={() => setTooltipActive((p) => !p)}>
          Edit Tags
          {tooltipactive && (
            <div className="tag-container">
              {tagArray.map((tag: any) => (
                <button key={tag}>{tag}</button>
              ))}
              <button>add new tag +</button>
            </div>
          )}
        </div>
        <div className="nav-btn">darkMode</div>
      </div>
    </nav>
  );
}
