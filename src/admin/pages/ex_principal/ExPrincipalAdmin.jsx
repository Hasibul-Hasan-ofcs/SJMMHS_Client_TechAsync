import React, { useState } from "react";
import { Oval } from "react-loader-spinner";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { Button } from "@material-tailwind/react";
import { ExPrincipalAPI } from "../../../api/ExPrincipalAPI";
import EditExPrincipal from "./edit_ex_principal_modal/EditExPrincipal";

const ExPrincipalAdmin = () => {
  const { isLoading, refetch, data } = ExPrincipalAPI();
  const [open, setOpen] = useState(false);
  const [stName, setStName] = useState("");
  const [stPhone_number, setStPhone_number] = useState("");
  const [stImage_link, setStImage_link] = useState("");
  const [stDesignation, setStDesignation] = useState("");
  const [stDescription, setStDescription] = useState("");
  const [stId, setStId] = useState("");

  const handleOpen = (
    _id,
    name,
    phone_number,
    image_link,
    designation,
    description
  ) => {
    setOpen(!open);
    setStName(name);
    setStPhone_number(phone_number);
    setStImage_link(image_link);
    setStDesignation(designation);
    setStDescription(description);
    setStId(_id);
  };

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Oval
            height={80}
            width={80}
            color="#013c57"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#013c57"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <>
          {data.map(
            (
              { _id, name, phone_number, image_link, designation, description },
              indx
            ) => (
              <div className="py-12 flex flex-col" key={_id}>
                <div className="h-auto w-full lg:w-[30%] pe-4 pb-4 flex items-center justify-center flex-col">
                  <img
                    src={image_link}
                    alt="school image"
                    className="rounded-2xl w-[500px]"
                  />
                  <div className="flex gap-2 py-3 justify-center">
                    <a
                      className="transition_common border border-[#013c57] text-[#013c57] h-[30px] w-[30px] flex justify-center items-center hover:border-[#74010d] hover:text-[#74010d]"
                      href="https://www.facebook.com/"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      className="transition_common border border-[#013c57] text-[#013c57] h-[30px] w-[30px] flex justify-center items-center hover:border-[#74010d] hover:text-[#74010d]"
                      href="https://twitter.com/"
                    >
                      <BsTwitter />
                    </a>
                    <a
                      className="transition_common border border-[#013c57] text-[#013c57] h-[30px] w-[30px] flex justify-center items-center hover:border-[#74010d] hover:text-[#74010d]"
                      href="https://www.whatsapp.com/"
                    >
                      <FaWhatsapp />
                    </a>
                    <a
                      className="transition_common border border-[#013c57] text-[#013c57] h-[30px] w-[30px] flex justify-center items-center hover:border-[#74010d] hover:text-[#74010d]"
                      href="https://www.linkedin.com/"
                    >
                      <BiLogoLinkedin />
                    </a>
                  </div>
                </div>
                <div className="w-full flex gap-4 flex-col">
                  <h1 className="text-4xl text-[#051939]">{name}</h1>
                  <p className="text-[#9A462D]">
                    {designation} <br /> নাম্বার : {phone_number}
                  </p>
                  <p className="text-[#353535] text-justify">{description}</p>
                </div>

                <Button
                  onClick={() =>
                    handleOpen(
                      _id,
                      name,
                      phone_number,
                      image_link,
                      designation,
                      description
                    )
                  }
                  variant="gradient"
                  className="my-6"
                >
                  Edit
                </Button>
              </div>
            )
          )}
        </>
      )}
      <EditExPrincipal
        open={open}
        handleOpen={handleOpen}
        refetch={refetch}
        stId={stId}
        stName={stName}
        stPhone_number={stPhone_number}
        stImage_link={stImage_link}
        stDesignation={stDesignation}
        stDescription={stDescription}
        setStName={setStName}
        setStPhone_number={setStPhone_number}
        setStImage_link={setStImage_link}
        setStDesignation={setStDesignation}
        setStDescription={setStDescription}
      ></EditExPrincipal>
    </div>
  );
};

export default ExPrincipalAdmin;
