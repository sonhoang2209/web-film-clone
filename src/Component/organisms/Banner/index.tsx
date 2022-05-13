/* eslint-disable react/no-children-prop */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IFilmProps } from "../../../../types/IProps";
import filmAPI from "../../../pages/api/axios/filmAPI";
import ButtonMore from "../../atoms/Button/ButtonMore";
import ButtonPlay from "../../atoms/Button/ButtonPlay";
import Slider from "react-slick";

type IBannerProps = Pick<
  IFilmProps,
  "id" | "title" | "overview" | "backdrop_path"
>;

const Banner: React.FC = () => {
  const pathImage = "https://image.tmdb.org/t/p/original";
  const router = useRouter();

  const [films, setFilms] = useState<IBannerProps[]>([]);
  useEffect(() => {
    const getFilmDetail = async () => {
      const film = await filmAPI.getFilmPopular();
      setFilms(film.data.results);
    };
    getFilmDetail();
  }, []);
  const handleClickWatch = (id: number) => {
    router.push(`movie/${id}/watch`);
  };
  const handleClickMore = (id: number) => {
    router.push(`movie/${id}`);
  };
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    arrows: false,
    // cssEase: "linear",
  };
  return (
    <div className="space-y-2 py-16 md:space-y-4 lg:h-[95vh]">
      <div className="absolute top-0 left-0 -z-1 h-[95vh] w-[100%]">
        <Slider {...settings}>
          {films.map((film, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="relative p-0 m-0">
                <img
                  className="lg:h-[95vh] w-[100%]"
                  src={pathImage + film.backdrop_path}
                  object-fit="cover"
                />
                <div className="absolute top-0 left-0 z-10 h-[75vh] w-[100%] flex lg:justify-end flex-col lg:pb-12 lg:p-12 space-y-2 md:space-y-4">
                  <h1 className="text-4xl md:text-6xl">{film.title}</h1>
                  <p className="my-6">{film.overview}</p>
                  <div className="flex">
                    <div className="mr-4">
                      <ButtonPlay
                        onClick={() => handleClickWatch(film.id)}
                        children="Xem phim"
                      />
                    </div>
                    <ButtonMore
                      onClick={() => handleClickMore(film.id)}
                      children="Chi tiết"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
