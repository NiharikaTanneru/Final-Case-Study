import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            srcSet="./../Images/carousel_1.png"
            alt="First slide"
          />
          <Carousel.Caption className="text-white bg-dark border border-2">
            <h3>Come & Let's Explore</h3>
            <p>Highest Paying Jobs</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            srcSet="./../Images/carousel_2.png"
            alt="Second slide"
          />
          <Carousel.Caption className="text-white bg-dark border border-2">
            <h3>Register With Us</h3>
            <p>Lots of Openings are coming Soon</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            srcSet="./../Images/carousel_3.png"
            alt="Third slide"
          />
          <Carousel.Caption className="text-white bg-dark border border-2">
            <h3>Get Notified</h3>
            <p>Notifications are updated in every social media</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
