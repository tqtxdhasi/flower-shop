const MenuIcon = ({ isOpen }) => {
  return isOpen ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <line x1="5" y1="5" x2="25" y2="25" stroke="#fff" strokeWidth="2" />
      <line x1="25" y1="5" x2="5" y2="25" stroke="#fff" strokeWidth="2" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <rect y="5" width="25" height="2" fill="#fff" />
      <rect y="13" width="25" height="2" fill="#fff" />
      <rect y="21" width="25" height="2" fill="#fff" />
    </svg>
  );
};

export default MenuIcon;
