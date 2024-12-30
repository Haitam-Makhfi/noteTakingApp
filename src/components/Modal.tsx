import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ReactDom from "react-dom";
type propTypes = {
  openModal: boolean;
};
export default function Modal({ openModal }: propTypes) {
  if (!openModal) return null;
  console.log(openModal);
  return ReactDom.createPortal(
    <>
      <div className="overlay" />
      <div className="new-tag-container">
        <label htmlFor="newTag">Name:</label>
        <input type="text" name="newTag" id="newTag" />
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </>,
    document.getElementById("portal")
  );
}
