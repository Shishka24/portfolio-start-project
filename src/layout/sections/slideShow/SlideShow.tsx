import { useState } from "react";
import { Header } from "../../Header/Header";
import { Footer } from "../../footer/Footer";
import { Contacts } from "../contacts/Contacts";
import { Main } from "../main/Main";
import { Skills } from "../skills/Skills";
import { Slogan } from "../slogan/Slogan";
import { Testimony } from "../testimony/Testimony";
import { Works } from "../works/Works";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";

const SlideShow = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <Skills />;
      case 2:
        return <Works />;
      case 3:
        return <Testimony />;
      case 4:
        return <Contacts />;
      case 5:
        return <Slogan />;
      default:
        return null;
    }
  };
  return (
    <div>
      {renderCurrentPage()}
      <button
        style={{ position: "fixed", bottom: "20px", left: "20px" }}
        onClick={prevPage}
      >
        Previous
      </button>
      <button
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
};

export default SlideShow;
