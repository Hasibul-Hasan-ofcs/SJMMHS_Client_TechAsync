import React from "react";
import SetPageTitle from "./../../components/page_title/SetPageTitle";
import IntroCarousel from "./../../components/intro_carousel/IntroCarousel";
import SpecialAnnouncements from "../../components/special_announcements/SpecialAnnouncements";
import InstitutionHistory from "../../components/institution_history/InstitutionHistory";
import PrincipalsMessage from "../../components/principals_message/PrincipalsMessage";
import MiscellaneousCards from "../../components/miscellaneous_cards/MiscellaneousCards";
import {
  studentInfoItemsArray,
  academicInfoItemsArray,
  downloadInfoItemsArray,
  teacherInfoItemsArray,
} from "./../../data/miscellaneous/MiscellaneousCardData";
import ShortCutNavigatorHome from "../../components/shortcut_nav_home/ShortCutNavigatorHome";
import NoticeBoard from "../../components/notice_board/NoticeBoard";
import OfficialLinks from "../../components/official_links/OfficialLinks";
import ImportantInformation from "../../components/important_information/ImportantInformation";
import { NoticeAPI } from "../../api/NoticeAPI";

const Home = () => {
  SetPageTitle("Sattar Jute Mills Model High School");

  const { isLoading, data } = NoticeAPI();

  return (
    <div className="container my-4 p-2 md:p-3 mx-auto bg-white shadow">
      <IntroCarousel></IntroCarousel>
      {!isLoading && <SpecialAnnouncements data={data}></SpecialAnnouncements>}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-[75%] lg:pe-2 flex flex-col justify-between">
          <InstitutionHistory></InstitutionHistory>
          <PrincipalsMessage></PrincipalsMessage>
          <div className="flex flex-wrap gap-4">
            <MiscellaneousCards
              color="pink"
              imgLink="https://educational.deshiit.net/wp-content/uploads/2023/08/menu01.jpg-copy.png"
              listArr={studentInfoItemsArray}
              title="ছাত্রছাত্রীদের তথ্য"
            ></MiscellaneousCards>
            <MiscellaneousCards
              color="green"
              imgLink="https://educational.deshiit.net/wp-content/uploads/2023/08/te.png"
              listArr={teacherInfoItemsArray}
              title="শিক্ষকদের তথ্য"
            ></MiscellaneousCards>
            <MiscellaneousCards
              color="yellow"
              imgLink="https://educational.deshiit.net/wp-content/uploads/2023/08/do.png"
              listArr={downloadInfoItemsArray}
              title="ডাউনলোড"
            ></MiscellaneousCards>
            <MiscellaneousCards
              color="blue"
              imgLink="https://educational.deshiit.net/wp-content/uploads/2023/08/ca.png"
              listArr={academicInfoItemsArray}
              title="একাডেমীক তথ্য"
            ></MiscellaneousCards>
          </div>
        </div>
        <div className="w-full lg:w-[25%] lg:ps-2 flex flex-col gap-5">
          <ShortCutNavigatorHome></ShortCutNavigatorHome>
          {!isLoading && <NoticeBoard data={data}></NoticeBoard>}
          <OfficialLinks></OfficialLinks>
          <ImportantInformation></ImportantInformation>
        </div>
      </div>
    </div>
  );
};

export default Home;
