import React from "react";
import Banner from "../../organisms/Banner";
import FilmPopular from "../../organisms/FilmPopular";
import FilmTop from "../../organisms/FilmTop";
import FilmTrending from "../../organisms/FilmTrending";

const HomePage = () => {
  return (
    <div className="bg-primaryColor">
      <Banner />
      <div className="z-12 container h-full mx-auto">
        <FilmTop />
        {/* <FilmTrending /> */}
        <FilmPopular />
      </div>
    </div>
  );
};

export default HomePage;
