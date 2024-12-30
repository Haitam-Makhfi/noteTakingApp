import ReactDom from "react-dom";
type propTypes = {
  openModal: boolean;
  children: any;
};
export default function Modal({ openModal, children }: propTypes) {
  if (!openModal) return null;
  return ReactDom.createPortal(children, document.getElementById("portal"));
}
