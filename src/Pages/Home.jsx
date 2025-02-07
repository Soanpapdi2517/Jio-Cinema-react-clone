import Carousel from "../Components/Carousel/Carousel";
import Channel from "../Components/Channel.jsx/Channel";
import Featured from "../Components/Featured/Featured";
import Header from "../Components/Header/Header";
import Spotlight from "../Components/Spotlight/Spotlight";
import Tags from "../Components/tags/tags";

const Home = () => {
  return (<>
    <Header></Header>
    <Tags></Tags>
    <Carousel></Carousel>
    <Channel/>
    <Spotlight></Spotlight>
    <Featured></Featured>
    </>
  )
}

export default Home;