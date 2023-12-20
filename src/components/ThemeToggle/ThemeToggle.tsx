import { SetStateAction, useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  const audio = new Audio("/assets/audio/light-switch.mp3");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    audio.play();
    setTheme((prevState: SetStateAction<string>) =>
      prevState === "dark" ? "light" : "dark"
    );
  };

  return (
    <div className={`lamp ${theme === "light" ? "on" : "off"}`}>
      <input type="checkbox" className="switch" onChange={handleThemeSwitch} />
      <div className="light" />
    </div>
  );
};

export default ThemeToggle;
