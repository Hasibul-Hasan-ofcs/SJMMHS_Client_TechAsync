import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

const TeachersAdmin = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="py-8 pe-6">
      <div className="flex items-center justify-center py-10">
        <Button
          onClick={handleOpen}
          className="text-white rounded-md bg-[#013C57] w-[250px] py-4 text-base flex items-center justify-center"
        >
          <FiPlusCircle className="pe-3 text-4xl" /> ADD NEW HOLIDAY
        </Button>
      </div>
    </div>
  );
};

export default TeachersAdmin;
