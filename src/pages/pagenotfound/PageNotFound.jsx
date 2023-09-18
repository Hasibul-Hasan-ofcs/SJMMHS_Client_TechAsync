import React from "react";
import { Helmet } from "react-helmet";
import SetPageTitle from "./../../components/page_title/SetPageTitle";
import { BsSearch } from "react-icons/bs";

const PageNotFound = () => {
  SetPageTitle("404! Page Not Found");

  const searchHandler = (event) => {
    event.preventDefault();

    const from = event.target;
  };

  return (
    <div className="min-h-[300px] flex flex-col items-center justify-center gap-5 bg-white container mx-auto my-12">
      <h1 className="text-[40px] text-center font-semibold">
        This page doesn't seem to exist.
      </h1>
      <h3 className="text-[24px] text-center">
        It looks like the link pointing here was faulty. Maybe try searching?
      </h3>

      <form
        onSubmit={searchHandler}
        className="border border-gray-300 flex rounded-[4px] overflow-hidden w-[250px] sm:w-[350px] bg-[#FAFAFA]"
      >
        <input
          type="text"
          name="search"
          id="search"
          className="border-0 outline-none px-2 text-base flex-grow"
          placeholder="Search ..."
        />
        <button className="transition_common bg-gray-800 text-white h-[60px] w-[60px] flex items-center justify-center hover:bg-gray-700">
          <BsSearch></BsSearch>
        </button>
      </form>
    </div>
  );
};

export default PageNotFound;
