import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { validateEmail } from "../utils/helpers";

// Contact section = contact form with name, email, message... when you move cursor out of one of the form fields without entering text, receive a notification that this field is required... verify email and notify if valid or invalid

const Form = () => {
  // use this for sending to email
  const form = useRef();
  // set state variables using `useState`
  const [senderName, setSenderName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [messageMessage, setMessageMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // set the state based on input type
    if (inputType === "senderName") {
      setSenderName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "senderName") {
      inputValue === ""
        ? setNameMessage("Name is required")
        : setNameMessage("");
    } else if (inputType === "email") {
      if (inputValue === "") {
        setEmailMessage("Email is required");
      } else if (!validateEmail(email)) {
        setEmailMessage("Email is invalid");
        return;
      } else {
        setEmailMessage("");
      }
    } else {
      inputValue === ""
        ? setMessageMessage("Message is required")
        : setMessageMessage("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // send to my email
    emailjs
      .sendForm(
        "service_jd32mue",
        "template_z2aucda",
        form.current,
        "gx05LR7FLJTXQRaXp"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    // Alert the user, clear the inputs
    alert(`Thanks for your message, ${senderName}!`);
    setSenderName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <form ref={form} onSubmit={handleFormSubmit}>
        <h1>Send a Message</h1>
        <div className="spacer"></div>
        <input
          value={senderName}
          name="senderName"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Name"
          required
        />
        <label htmlFor="senderName">{nameMessage}</label>
        <br></br>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Email"
          required
        />
        <label htmlFor="email">{emailMessage}</label>
        <br></br>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Message"
          required
        />
        <label htmlFor="message">{messageMessage}</label>
        <br></br>
        <button className="btn-green" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

function ContactPage() {
  return (
    <>
      <section>
        <div className="spacer"></div>
        <Form />
      </section>
    </>
  );
}

export default ContactPage;
