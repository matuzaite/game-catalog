import "./SearchBar.scss";

export default function SearchBar({ search, onSearchChange }) {
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
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search for games..."
      />

      {search?.trim() && (
        <button
          type="button"
          className="search-bar__clear"
          onClick={() => onSearchChange("")}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}
