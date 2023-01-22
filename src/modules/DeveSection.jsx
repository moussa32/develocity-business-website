import DoubleArrowIcon from "../assets/images/DoubleArrowIcon.svg";
import { Fade } from "react-awesome-reveal";

const DeveSection = () => {
  return (
    <div className="bg-black text-center py-[95px]">
      <div className="container mx-auto">
        <Fade direction={"up"} triggerOnce={true}>
          <p className="text-xs text-indigo-400 uppercase">for successful digital transformation</p>
          <h3 className="text-white text-[48px] mt-1.5 font-PolySans mb-12">Why Develocity</h3>
        </Fade>
        <div className="grid px-4 text-left mt-10 gap-8 md:grid-cols-2 lg:grid-cols-3 md:px-0">
          <Fade direction={"up"} triggerOnce={true}>
            <div className="bg-neutral-800/50 p-5 rounded-lg h-full">
              <img src={DoubleArrowIcon} alt="double arrow" title="double arrow" />
              <h4 className="text-white mt-8 text-xl">Full service cycle</h4>
              <p className="text-neutral-400 mt-2.5 leading-relaxed">
                We can provide a full-service solution for your software development projects, from architecture design
                to production deployment. Our professional teams handle challenges at any stage of the product
                development cycle.
              </p>
            </div>
          </Fade>
          <Fade direction={"up"} triggerOnce={true}>
            <div className="bg-neutral-800/50 p-5 rounded-lg h-full">
              <img src={DoubleArrowIcon} alt="double arrow" title="double arrow" />
              <h4 className="text-white mt-8 text-xl">Discovery phase</h4>
              <p className="text-neutral-400 mt-2.5 leading-relaxed">
                Every project starts with a discovery phase where we gather complete requirements and take a deep dive
                into your vertical. We try to map out the entire project to figure out and match resources and
                competencies across the team as early as possible.
              </p>
            </div>
          </Fade>
          <Fade direction={"up"} triggerOnce={true}>
            <div className="bg-neutral-800/50 p-5 rounded-lg h-full">
              <img src={DoubleArrowIcon} alt="double arrow" title="double arrow" />
              <h4 className="text-white mt-8 text-xl">Quality-driven team</h4>
              <p className="text-neutral-400 mt-2.5 leading-relaxed">
                We’re obsessed with quality development and strive for perfection. Our project and delivery managers
                align the teams to the best practices in defect prevention to minimize the needed re-works and shorten
                the time to launch.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default DeveSection;
