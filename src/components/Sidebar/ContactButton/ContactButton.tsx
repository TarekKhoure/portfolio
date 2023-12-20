import SendIcon from "../../../../public/assets/svgs/send-icon";

interface ContactButtonProps {
  onClick: () => void;
}

const ContactButton = ({ onClick }: ContactButtonProps) => {
  return (
    <button className="btn" onClick={onClick}>
      Contact Me
      <SendIcon />
    </button>
  );
};

export default ContactButton;
