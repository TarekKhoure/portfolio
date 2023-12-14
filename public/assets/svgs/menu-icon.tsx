interface MenuIconProps {
  style?: object;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

const MenuIcon = ({ onClick, style }: MenuIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0,0,256,256"
    width="30px"
    height="30px"
    id="menu-icon"
    onClick={onClick}
    style={{ ...style }}
  >
    <g
      fill="#164863"
      fillRule="nonzero"
      stroke="none"
      strokeWidth="1"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeDasharray=""
      strokeDashoffset="0"
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
    >
      <g transform="scale(5.33333,5.33333)">
        <path d="M6,22h36v4h-36zM6,10h36v4h-36zM6,34h36v4h-36z"></path>
      </g>
    </g>
  </svg>
);

export default MenuIcon;
