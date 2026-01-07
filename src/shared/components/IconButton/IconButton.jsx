import "./IconButton.scss";

const IconButton = ({ pic, alt, location, iconClassName = "", ...props }) => {
  return (
    <button className="icon-button" {...props}>
      <img
        src={pic}
        alt={alt}
        className={`icon-button__icon ${iconClassName}`}
      />
      {location && <span className="location">{location}</span>}
    </button>
  );
};

export default IconButton;
