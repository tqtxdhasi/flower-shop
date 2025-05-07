const Submenu = ({ items, isOpen, className, itemClassName, onItemClick }) => {
  return (
    <ul
      className={`${className} ${
        typeof isOpen === "boolean"
          ? `overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-96" : "max-h-0"
            }`
          : "opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-200"
      }`}
      role="menu"
    >
      {items.map((sub, subIndex) => (
        <li key={sub.href}>
          <a
            href={sub.href}
            className={`block ${itemClassName}`}
            title={sub.title}
            onClick={onItemClick}
          >
            <span>{sub.text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Submenu;
