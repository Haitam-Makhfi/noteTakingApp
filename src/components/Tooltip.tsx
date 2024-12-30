import { useContext, useState } from "react";
import { tagContext } from "../App";
import Modal from "./Modal";
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
  const { tagArray } = useContext(tagContext);
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
        </button>
      ))}
      {addtag && (
        <button
          className="add-tag"
          onClick={() => {
            setOpenModal((prev) => !prev);
          }}
        >
          add new tag +
        </button>
      )}
      <Modal openModal={openModal} />
    </div>
  );
}
