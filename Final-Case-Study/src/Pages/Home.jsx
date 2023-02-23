import CarouselComponent from "../components/Home/CarouselComponent";
import HomeButtons from "../components/Home/HomeButtons";

const Home = () => {
  return (
    <div className="home bg-light">
      <CarouselComponent />
      <HomeButtons />
    </div>
  );
};

export default Home;