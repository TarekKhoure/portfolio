interface TimeLineProps {
  setSideBarShow: (sideBarshown: boolean) => void;
}

const TimeLine = ({ setSideBarShow }: TimeLineProps) => {
  const handleClick = () => {
    setSideBarShow(false);
  };

  return (
    <ul className="time-line">
      <li onClick={handleClick}>
        <a href="#about">About</a>
      </li>
      <li onClick={handleClick}>
        <a href="#experience">Experience</a>
      </li>
    </ul>
  );
};

export default TimeLine;
