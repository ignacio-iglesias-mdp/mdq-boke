import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  const whatsappNumber = "2235860230";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 lg:right-16 bg-green-500 p-4 rounded-full text-white hover:bg-green-600 transition "
    >
      <FaWhatsapp size={50} />
    </a>
  );
};

export default Whatsapp;

