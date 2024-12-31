import { useState } from "react";
import { Link } from "react-router-dom";
import Tooltip from "./Tooltip";
import { useNavigate } from "react-router-dom";
export default function Nav() {
  const [tooltipactive, setTooltipActive] = useState(false);
  const navigate = useNavigate();
  return (
    <nav>
      <h1 onClick={() => navigate("/")}>Clipy</h1>
      <div className="nav-btns">
        <div className="edit-btn-container">
          <div
            className="nav-btn editBtn"
            onClick={() => {
              setTooltipActive((p) => !p);
            }}
          >
            Edit Tags
          </div>
          {tooltipactive && <Tooltip addtag={true} style={{ zIndex: "11" }} />}
        </div>
        <div className="nav-btn createBtn">
          <Link to={"/createNote"} className="Link">
            Creat
          </Link>
        </div>
      </div>
    </nav>
  );
}
