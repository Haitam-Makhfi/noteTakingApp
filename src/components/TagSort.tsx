import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
export default function TagSort() {
  return (
    <div>
      <span>tag</span>
      <label htmlFor="tagsort" className="tagsort">
        <input
          className="sort-input"
          placeholder="sort by tag"
          type="text"
          name="tagsort"
          id="tagsort"
        />
        <div className="drop-down">
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </label>
    </div>
  );
}
