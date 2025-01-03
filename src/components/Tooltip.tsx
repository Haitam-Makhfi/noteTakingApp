import { useContext, useState } from "react";
import { notesContext, tagContext } from "../App";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
type propTypes = {
  addtag?: boolean;
  tagControle?: any;
  style?: any;
};
export default function Tooltip({
  addtag = false,
  tagControle,
  ...props
}: propTypes) {
  const { tagArray, setTagArray } = useContext(tagContext);
  const { setNotes } = useContext(notesContext);
  const [openModal, setOpenModal] = useState(false);
  function handleTagClick(tag: string) {
    if (!addtag) {
      if (!tagControle.tagValue.includes(tag)) {
        tagControle.setTagValue((p: string[]) => [...p, tag]);
      }
    }
  }
  return (
    <div className="tag-container" {...props}>
      {tagArray.map((tag: any) => (
        <button key={tag} onClick={() => handleTagClick(tag)}>
          {tag}
          {addtag && (
            <FontAwesomeIcon
              icon={faXmark}
              className="close-tag-icon"
              onClick={(e) => {
                e.stopPropagation();
                setTagArray((ta: string[]) => ta.filter((el) => el !== tag));
                setNotes(
                  (
                    pn: {
                      data: any;
                      noteValue: string;
                      titleValue: string;
                      tagValue: string[];
                      id: number;
                    }[]
                  ) =>
                    pn.map((note) => ({
                      ...note,
                      tagValue: note.tagValue.filter((el) => el != tag),
                    }))
                );
              }}
            />
          )}
        </button>
      ))}
      {addtag && (
        <button
          className="add-tag"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          add new tag +
        </button>
      )}
      <Modal openModal={openModal}>
        <>
          <div className="overlay" />
          <div className="new-tag-container">
            <label htmlFor="newTag">Name:</label>
            <input
              type="text"
              name="newTag"
              id="newTag"
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  setTagArray((t: string[]) => [...t, e.target.value]);
                  setOpenModal(false);
                }
              }}
            />
            <FontAwesomeIcon
              icon={faXmark}
              className="close-icon"
              onClick={() => setOpenModal(false)}
            />
          </div>
        </>
      </Modal>
    </div>
  );
}
