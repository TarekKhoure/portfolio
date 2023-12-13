import Github from "./../../../public/assets/svgs/github";
import Facebook from "../../../public/assets/svgs/facebook";
import LinkedIn from "./../../../public/assets/svgs/linkedin";

const Social = () => {
  return (
    <div className="social-wrapper">
      <a href="https://facebook.com/tarek.yousef.7" target="_blank">
        <Facebook />
      </a>
      <a href="https://github.com/TarekKhoure" target="_blank">
        <Github />
      </a>
      <a href="https://www.linkedin.com/in/tarekkhouryy" target="_blank">
        <LinkedIn />
      </a>
    </div>
  );
};

export default Social;
