"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const googleFormsEndpoint =
      "https://docs.google.com/forms/d/e/1FAIpQLSdd47DRYPNCXeMhCycRqa_svrw0qaN5vgxEvTJHyE06w_by7w/formResponse";

    try {
      const formDataEncoded = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        const entryKey = `entry.${getEntryKey(key)}`;
        formDataEncoded.append(entryKey, value);
      });

      await fetch(googleFormsEndpoint, {
        method: "POST",
        body: formDataEncoded,
      });

      setShowPopup(true);
      setTimeout(() => {
        router.push("/");
      }, 6000);
    } catch {
      setShowPopup(true);
      setTimeout(() => {
        router.push("/");
      }, 6000);
    }
  };

  const getEntryKey = (key: string) => {
    const entryKeys: Record<string, string> = {
      name: "931457875",
      email: "133516482",
      subject: "1458966825",
      message: "778862622",
    };

    return entryKeys[key];
  };

  return (
    <div className="flex flex-col space-y-5 w-full h-screen">
      <h1 className="text-2xl font-semibold tracking-[5px] text-center my-16 border-8 border-white w-48 mx-auto uppercase px-6 py-3 galaxyS9:my-8 galaxyZF5:my-12 blackBerryZ30:my-8 blackBerryPlayBook:my-16">
        Contact
      </h1>
      {showPopup && (
        <div className="p-5 rounded-xl bg-[#1B7DE5]/40 text-white mx-auto my-8 z-50 shadow-md top-2/4 w-1/2 text-center font-sans">
          <h1 className="text-lg font-bold ">Thank You For Your Message</h1>
          <p>We Will Get Back To You Shortly</p>
        </div>
      )}
      <p className="text-3xl font-light tracking-wide text-center pb-10 galaxyS9:px-3 galaxyS9:text-2xl ipadMini:text-5xl ipadMini:px-20">
        Turning your ideas into digital solutions. <br />
        <span className="text-[#FDDA0D]">Let&apos;s talk!</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex-col space-y-8 mx-auto px-10"
      >
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-1">
            <input
              placeholder="Name"
              className="contactInput w-1/2"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              placeholder="Email"
              className="contactInput w-1/2"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <input
            placeholder="Subject"
            className="contactInput"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Message"
            className="contactInput"
            type="text"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            className=" md:py-5 md:px-10 rounded-md bg-[#d7d7d7] text-black font-bold md:text-md cursor-pointer hover:bg-[#FDDA0D] galaxyS9:text-sm galaxyS9:py-2 galaxyS9:px-5 blackBerryPlayBook:px-10 blackBerryPlayBook:py-6 blackBerryPlayBook:text-lg"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
