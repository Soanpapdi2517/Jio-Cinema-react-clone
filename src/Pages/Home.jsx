import { useEffect, useState } from "react";
import Carousel from "../Components/Carousel/Carousel";
import Channel from "../Components/Channel.jsx/Channel";
import Featured from "../Components/Featured/Featured";
import Header from "../Components/Header/Header";
import ShowsList from "../Components/ShowsList/ShowsList";
import Spotlight from "../Components/Spotlight/Spotlight";
import Tags from "../Components/tags/Tags";

const Home = () => {
  const showsTitles = [
    "English Movies",
    "Top Picks For You",
    "Must Watch Movies",
  ];
  const [seriesData, setSeriesData] = useState([]);
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
        fetch("http://localhost:5000/series").then((res) => res.json()),
      ]).then(([moviesData, animeData, seriesData]) => {
        setData({ movies: moviesData, anime: animeData });
        setSeriesData(seriesData);

        // filters for movies featured
        let featuredMovies = moviesData.filter((movie) => movie.featured);
        let featuredAnime = animeData.filter((anime) => anime.featured);
        setFeaturedContent([...featuredMovies, ...featuredAnime]);
        // filters for movies,anime english
        let englishMovies = moviesData.filter((movies) =>
          movies.language.includes("English")
        );
        setEnglishContent([...englishMovies]);
        // filters for movies, anime Top picks
        let topMovies = moviesData.filter((movies) => {
          return movies.imdb_rating >= 7;
        });
        setTopPicks([...topMovies]);

        // filters for movies, anime Action
        let englishActionMovies = moviesData.filter((movies) =>
          movies.genre.includes("Drama")
        );
        setThrillerContent([...englishActionMovies]);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <>
      <Header></Header>
      <Tags></Tags>
      <Carousel SeriesData={seriesData}></Carousel>
      <Channel />
      <Spotlight></Spotlight>
      <Featured FeaturedData={featuredContent}></Featured>
      {showsTitles.map((titles, index) => (
        <ShowsList
          key={index}
          Titles={titles}
          Content={content[index]}
        ></ShowsList>
      ))}
    </>
  );
};

export default Home;
