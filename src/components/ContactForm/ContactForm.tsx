import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { register, handleSubmit, formState } = useForm({
    mode: "onBlur",
  });
  const { errors }: any = formState;

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = () => {
    setLoading(true);
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
          toast.success("Great News! Your Message Was Successfully Sent.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error: EmailJSResponseStatus) => {
          console.log(error.text);
          toast.error("Oops! Something Went Wrong. Please Try Again Later.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      )
      .finally(() => {
        setLoading(false);
        form.current?.reset();
      });
  };

  return (
    <>
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
        <h1>Contact Me</h1>
        <div className="input-row">
          <label>Name</label>
          <input
            type="text"
            {...register("user_name", { required: "Name is required" })}
          />
          {errors.user_name && (
            <small className="error">{"* " + errors.user_name.message}</small>
          )}
        </div>
        <div className="input-row">
          <label>Email</label>
          <input
            type="email"
            {...register("user_email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.user_email && (
            <small className="error">{"* " + errors.user_email.message}</small>
          )}
        </div>
        <div className="input-row">
          <label>Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <small className="error">{"* " + errors.message.message}</small>
          )}
        </div>
        <button type="submit" disabled={formState.isSubmitting}>
          {loading ? <i className="fa fa-spinner fa-spin" /> : "Send"}
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
