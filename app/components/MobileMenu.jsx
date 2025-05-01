import Submenu from "./Submenu";

const MobileMenu = ({
  menuItems,
  isOpen,
  openSubmenu,
  toggleSubmenu,
  closeMenu,
}) => {
  return (
    <div
      className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-[600px] py-4" : "max-h-0"
      }`}
      role="navigation"
      aria-label="Menu mobilne"
    >
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li
            key={`mobile-${item.text}`}
            itemScope
            itemType={`https://schema.org/${item.schemaType}`}
          >
            {item.submenu ? (
              <>
                <button
                  className="w-full text-left px-4 py-2 flex justify-between items-center hover:bg-rose-700 rounded-md"
                  aria-controls={`mobile-submenu-${index}`}
                  aria-expanded={openSubmenu === index}
                  onClick={() => toggleSubmenu(index)}
                >
                  <span itemProp="name">{item.text}</span>
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      openSubmenu === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <Submenu
                  items={item.submenu}
                  isOpen={openSubmenu === index}
                  className="pl-6 space-y-1"
                  itemClassName="py-2 px-2 text-sm hover:bg-rose-700 rounded-md"
                  onItemClick={closeMenu}
                />
              </>
            ) : (
              <a
                href={item.href}
                className="block py-2 px-4 hover:bg-rose-700 rounded-md"
                onClick={closeMenu}
                title={item.title}
                itemProp="url"
              >
                <span itemProp="name">{item.text}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
