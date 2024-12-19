export default function TitleSort() {
  return (
    <div>
      <span>title</span>
      <label htmlFor="titlesort" className="titlesort">
        <input
          className="sort-input"
          placeholder="sort by title"
          type="text"
          name="titlesort"
          id="titlesort"
        />
      </label>
    </div>
  );
}
