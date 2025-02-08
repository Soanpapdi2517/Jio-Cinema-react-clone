import { useEffect, useState } from "react";
import Carousel from "../Components/Carousel/Carousel";
import Channel from "../Components/Channel.jsx/Channel";
import Featured from "../Components/Featured/Featured";
import Header from "../Components/Header/Header";
import ShowsList from "../Components/ShowsList/ShowsList";
import Spotlight from "../Components/Spotlight/Spotlight";
import Tags from "../Components/tags/tags";

const Home = () => {
  const showsTitles = [
    "English Movies",
    "Top Picks For You",
    "Must Watch Movies",
  ];
  const [data, setData] = useState({ movies: [], anime: [] });
  const [featuredContent, setFeaturedContent] = useState([]);
  const [englishContent, setEnglishContent] = useState([]);
  const [topPicks, setTopPicks] = useState([]);
  const [thrillerContent, setThrillerContent] = useState([]);
  const content = [englishContent, topPicks, thrillerContent];
  useEffect(() => {
    try {
      Promise.all([
        fetch("http://localhost:5000/movies").then((res) => res.json()),
        fetch("http://localhost:5000/anime").then((res) => res.json()),
      ]).then(([moviesData, animeData]) => {
        setData({ movies: moviesData, anime: animeData });

        // filters for movies featured
        let featuredMovies = moviesData.filter((movie) => movie.featured);
        let featuredAnime = animeData.filter((anime) => anime.featured);
        setFeaturedContent([...featuredMovies, ...featuredAnime]);
        // filters for movies,anime english
        let englishMovies = moviesData.filter((movies) =>
          movies.language.includes("English")
        );
        let EnglishAnime = animeData.filter((anime) =>
          anime.language.includes("English")
        );
        setEnglishContent([...englishMovies, ...EnglishAnime]);
        // filters for movies, anime Top picks
        let topMovies = moviesData.filter((movies) => {
          return movies.imdb_rating >= 8.5
        });
        let topAnime = animeData.filter((anime) => {
          return anime.imdb_rating >= 8.5
        });
        setTopPicks([...topMovies, ...topAnime]);


        // filters for movies, anime Action
        let englishActionMovies = moviesData.filter((movies) =>
          movies.genre.includes("Thriller")
        );
        let EnglishActionAnime = animeData.filter((anime) =>
          anime.genre.includes("Thriller")
        );
        setThrillerContent([...englishActionMovies, ...EnglishActionAnime]);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(englishContent);
  console.log(topPicks);
  console.log(thrillerContent);
  return (
    <>
      <Header></Header>
      <Tags></Tags>
      <Carousel></Carousel>
      <Channel />
      <Spotlight></Spotlight>
      <Featured Featured = {featuredContent}></Featured>
      {showsTitles.map((titles, index) => (
        <ShowsList key={index} Titles={titles} Content={content[index]}></ShowsList>
      ))}
    </>
  );
};

export default Home;
