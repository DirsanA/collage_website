import Hero from "./Hero/Hero";
import NavBar from "./NavBar/NavBar";
import Programs from "./Programs/Programs";
import Title from "./Title/Title";
import About from "./About/About";
import Campus from "./Campus/Campus";
import Testimonals from "./Testimonals/Testimonals";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import { useState } from "react";
function App() {
  const [playState, setPlayState] = useState(false);
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle="Our program" title="What we offer" />
        <Programs></Programs>
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Campuase Photos" />
        <Campus />
        <Title subTitle="Testimonals" title="What student says" />
        <Testimonals></Testimonals>
        <Title subTitle="ContactUs" title="Get in touch" />
        <Contact></Contact>
        <Footer></Footer>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </>
  );
}
export default App;
