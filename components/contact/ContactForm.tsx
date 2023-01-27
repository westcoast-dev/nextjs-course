import React, { useEffect, useState } from "react";
import classes from "./ContactForm.module.css";
import Notification from "../ui/notification";

interface FormData {
  email: string;
  name: string;
  message: string;
}

const sendContactData = async (formData: FormData) => {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [reqStatus, setReqStatus] = useState("");
  const [reqError, setReqError] = useState("");

  useEffect(() => {
    if (reqStatus !== "pending") {
      const timer = setTimeout(() => {
        setReqStatus("");
        setReqError("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [reqStatus]);

  const changeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendMessageHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    setReqStatus("pending");

    try {
      await sendContactData(formData);
      setReqStatus("success");
      setFormData({ email: "", name: "", message: "" });
    } catch (error: any) {
      setReqError(error.message);
      setReqStatus("error");
    }
  };

  let notification;

  if (reqStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }

  if (reqStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (reqStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: reqError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={changeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            required
            value={formData.message}
            onChange={changeHandler}
          ></textarea>
        </div>
        <div className={classes.action}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
