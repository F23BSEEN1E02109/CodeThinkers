import Flickity from "../Homepage/Flickity";
import Standout from "../Homepage/Standout";
import About from "../Homepage/About";
import Services from "../Homepage/Services";
import Features from "../Homepage/Features";
import Value from "../Homepage/Value";
import Progress from "../Homepage/Progress";
import Client from "../Homepage/Client";
import Collaborate from "../Homepage/Collaborate";
import Frequently from "../Homepage/Frequently";

function Homepage() {
  return (
    <div>
      <Flickity />
      <Standout />
      <About />
      <Services />
      <Features/>
      <Value />
      <Progress />
      <Client />
      <Collaborate />
      <Frequently />

    </div>
  );
}

export default Homepage;