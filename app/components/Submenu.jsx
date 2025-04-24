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
        <li
          key={sub.href}
          itemScope
          itemType="https://schema.org/ListItem"
          itemProp="itemListElement"
        >
          <a
            href={sub.href}
            className={`block ${itemClassName}`}
            title={sub.title}
            itemProp="url"
            onClick={onItemClick}
          >
            <meta itemProp="position" content={String(subIndex + 1)} />
            <span itemProp="name">{sub.text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
export default Submenu;
