import SearchBar from "../SearchBar";
import Logo from "../Logo";
import IconButton from "../IconButton";
import "./NavBar.scss";

const NavBar = ({ search, onSearchChange }) => {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <div className="navbar__left">
          <Logo />
        </div>

        <div className="navbar__search">
          <SearchBar search={search} onSearchChange={onSearchChange} />
          <IconButton
            pic="./lithuania-flag-icon.svg"
            alt="lithuania-icon"
            location="EU | EUR"
            iconClassName="icon-button__media"
          />
        </div>

        <div className="navbar__right">
          <IconButton pic="./heart-thin-icon.svg" />
          <IconButton pic="./shopping-cart-icon.svg" />
          <IconButton
            pic="/profile.jpeg"
            alt="Profile"
            iconClassName="profile"
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
