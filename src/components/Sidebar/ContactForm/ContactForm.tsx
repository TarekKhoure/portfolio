import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { DialogContent, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import classNames from "classnames";
import { useRef, useState } from "react";
import { FieldValues, FormState, useForm } from "react-hook-form";
import ContactButton from "../ContactButton/ContactButton";

type EMAIL_STATE = "loading" | "success" | "error" | "default";

const ContactForm = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [emailState, setEmailState] = useState<EMAIL_STATE>("default");

  const { register, handleSubmit, formState, reset } = useForm();
  const { errors }: FormState<FieldValues> = formState;

  const form = useRef<HTMLFormElement | null>(null);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const onSubmit = () => {
    setEmailState("loading");
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current || "",
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          setEmailState("success");
        },
        (error: EmailJSResponseStatus) => {
          console.log(error.text);
          setEmailState("error");
        }
      )
      .finally(() => {
        setTimeout(() => {
          setEmailState("default");
          handleClose();
        }, 1500);
      });
  };

  const getSubmitButton = () => {
    switch (emailState) {
      case "default":
        return (
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            id="submit-btn"
            onClick={handleSubmit(onSubmit)}
          >
            Send
          </Button>
        );
      case "loading":
        return <CircularProgress />;
      case "success":
        return (
          <img
            width={50}
            height={50}
            src="/public/assets/gifs/email-success.gif"
          />
        );
    }
  };

  return (
    <>
      <ContactButton onClick={handleClickOpen} />
      <Dialog fullScreen open={open} onClose={handleClose}>
        <div className="content-container">
          <IconButton
            edge="start"
            color="inherit"
            id="close-icon"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <DialogContent>
            <DialogTitle>Contact Me</DialogTitle>
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
              <div className="input-row">
                <textarea
                  placeholder="Your Message"
                  {...register("message", { required: "Message is required" })}
                />
                <small
                  className={classNames("error", {
                    "error-visible": errors.message,
                  })}
                >
                  {"* " + errors.message?.message}
                </small>
              </div>
              <div className="input-row">
                <input
                  type="text"
                  placeholder="Your name"
                  {...register("user_name", { required: "Name is required" })}
                />
                <small
                  className={classNames("error", {
                    "error-visible": errors.user_name,
                  })}
                >
                  {"* " + errors.user_name?.message}
                </small>
              </div>
              <div className="input-row">
                <input
                  type="email"
                  placeholder="Your email"
                  {...register("user_email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                <small
                  className={classNames("error", {
                    "error-visible": errors.user_email,
                  })}
                >
                  {"* " + errors.user_email?.message}
                </small>
              </div>
              {getSubmitButton()}
            </form>
          </DialogContent>
        </div>
      </Dialog>
    </>
  );
};

export default ContactForm;
