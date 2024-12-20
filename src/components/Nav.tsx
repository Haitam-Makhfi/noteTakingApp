import { useState } from "react";
import Tooltip from "./Tooltip";
export default function Nav() {
  const [tooltipactive, setTooltipActive] = useState(false);
  return (
    <nav>
      <h1>Clipy</h1>
      <div className="nav-btns">
        <div className="nav-btn">Creat</div>
        <div className="nav-btn" onClick={() => setTooltipActive((p) => !p)}>
          Edit Tags
          {tooltipactive && <Tooltip addtag={true} style={{ zIndex: "11" }} />}
        </div>
        <div className="nav-btn">darkMode</div>
      </div>
    </nav>
  );
}
