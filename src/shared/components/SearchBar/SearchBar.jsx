import "./SearchBar.scss";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <img
        className="search-bar__icon"
        src="/search-icon.svg"
        alt=""
        aria-hidden="true"
      />

      <input
        type="text"
        className="search-bar__input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for games..."
      />

      {value?.trim() && (
        <button
          type="button"
          className="search-bar__clear"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}
