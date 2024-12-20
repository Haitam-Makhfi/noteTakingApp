import { useContext } from "react";
import { tagContext } from "../App";
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
  function handleTagClick(tag: string) {
    if (!tagControle.chosenTags.includes(tag)) {
      tagControle.setChosenTags((p: string[]) => [...p, tag]);
    }
  }
  return (
    <div className="tag-container" {...props}>
      {tagArray.map((tag: any) => (
        <button key={tag} onClick={() => handleTagClick(tag)}>
          {tag}
        </button>
      ))}
      {addtag && <button className="add-tag">add new tag +</button>}
    </div>
  );
}
