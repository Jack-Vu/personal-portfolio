import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import emailjs from "@emailjs/browser";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (form.email && form.message && form.name) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [disableButton, form.email, form.message, form.name]);

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    const { name, value } = target;

    setForm({
      ...form,
      [name]: value.trim(),
    });
  };

  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = e;

    const { name, value } = target;

    setForm({
      ...form,
      [name]: value.trim(),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const emailServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_KEY;

    if (!emailServiceId || !templateId || !publicKey) {
      alert(
        "Please fill out your name, email and a message before submitting!"
      );
      setLoading(false);
      return;
    }

    emailjs
      .send(
        emailServiceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Jack Vu",
          from_email: form.email,
          to_email: "jacknvu98@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div className="bg-[#141c27] ">
      <div className="w-[85%] mx-auto bg-[#141c27] pb-[6rem] pt-[2rem] md:pt-[8rem] rounded-xl">
        <p className="heading">
          Contact <span className="text-blue-400">Me</span>
        </p>
        <div className="flex items-center justify-center bg-black-100 p-8 rounded-2xl">
          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name?"
                className="py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium w-[400px] sm:w-[400px] md:w-[600px] lg:w-[800px]"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                className="py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium  w-[400px] sm:w-[400px] md:w-[600px] lg:w-[800px]"
              />
            </label>
            {/* <p className="text-red-700 flex gap-2">
              <ExclamationCircleIcon className="h-6 w-6" />
              <span> Must be a valid email</span>
            </p> */}
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChangeTextArea}
                placeholder="What would you like to ask me?"
                className="py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              disabled={disableButton}
              type="submit"
              className="bg-blue-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary disabled:bg-slate-600 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
