import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const percentageScrolled = window.scrollY / window.innerHeight;

    if (percentageScrolled >= 0.3) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      className="rounded-[4px] h-[35px] w-[35px] text-white bg-[#046BD2] fixed bottom-6 right-6 text-2xl flex items-center justify-center"
      href="#top-main"
      style={{ visibility: isVisible ? "visible" : "hidden" }}
    >
      <MdKeyboardArrowUp />
    </a>
  );
};

export default ToTopButton;
