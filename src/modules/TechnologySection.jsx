import { Fade } from "react-awesome-reveal";

const TechnologySection = () => {
  return (
    <section className="text-center mt-[191px] container mx-auto">
      <Fade direction={"up"} triggerOnce={true}>
        <span className="uppercase text-indigo-400 text-xs">TOP BLOCKCHAINS ARE AT YOUR DISPOSAL</span>
        <h2 className="text-4xl lg:text-6xl text-PolySans font-light mt-3">Technologies we work with</h2>
      </Fade>
      <div className="lg:text-left lg:flex-row items-center gap-y-6 flex flex-col border-b-2 border-neutral-800 pb-6 mt-14">
        <Fade direction={"up"} triggerOnce={true}>
          <h3 className="lg:mr-[136px] text-xl lg:w-[280px]">Backend</h3>
          <div className="flex flex-wrap gap-y-2 gap-x-8 lg:gap-9 lg:justify-start justify-center">
            <span className="text-base text-[#a3a3a3] font-extralight">PHP7</span>
            <span className="text-base text-[#a3a3a3] font-extralight">Python</span>
            <span className="text-base text-[#a3a3a3] font-extralight">Java</span>
            <span className="text-base text-[#a3a3a3] font-extralight">Docker</span>
        </div>
        </Fade>
      </div>
      <div className="lg:text-left lg:flex-row items-center gap-y-6 flex flex-col border-b-2 border-neutral-800 pb-6 mt-11">
        <Fade direction={"up"} triggerOnce={true}>
          <h3 className="lg:mr-[136px] text-xl lg:w-[280px]">Frontend</h3>
          <div className="flex flex-wrap gap-y-2 gap-x-8 lg:gap-9 lg:justify-start justify-center">
            <span className="text-base text-[#a3a3a3] font-extralight">React</span>
            <span className="text-base text-[#a3a3a3] font-extralight">Vue.js</span>
            <span className="text-base text-[#a3a3a3] font-extralight">Angular</span>
            <span className="text-base text-[#a3a3a3] font-extralight">Node.js</span>
            <span className="text-base text-[#a3a3a3] font-extralight">TypeScript</span>
            <span className="text-base text-[#a3a3a3] font-extralight">GraphQL</span>
          </div>
        </Fade>
      </div>
      <div className="lg:text-left lg:flex-row items-center gap-y-6 flex flex-col border-b-2 border-neutral-800 pb-6 mt-11">
        <Fade direction={"up"} triggerOnce={true}>
          <h3 className="lg:mr-[136px] text-xl lg:w-[280px]">iOS / Android</h3>
          <div className="flex flex-wrap gap-y-2 gap-x-8 lg:gap-9 lg:justify-start justify-center">
            <span className="text-base text-[#a3a3a3] font-extralight">Kotlin</span>
            <span className="text-base text-[#a3a3a3] font-extralight">Swift</span>
            <span className="text-base text-[#a3a3a3] font-extralight">Flutter</span>
            <span className="text-base text-[#a3a3a3] font-extralight">Solid</span>
            <span className="text-base text-[#a3a3a3] font-extralight">Objectivec</span>
            <span className="text-base text-[#a3a3a3] font-extralight">Clean Architecture</span>
          </div>
        </Fade>
      </div>
      <div className="lg:text-left lg:flex-row items-center gap-y-6 flex flex-col border-b-2 border-neutral-800 pb-6 mt-11">
        <Fade direction={"up"} triggerOnce={true}>
          <h3 className="lg:mr-[136px] text-xl lg:w-[280px]">Analytics</h3>
          <div className="flex flex-wrap gap-y-2 gap-x-8 lg:gap-9 lg:justify-start justify-center">
            <span className="text-base text-[#a3a3a3] font-extralight">SRS</span>
            <span className="text-base text-[#a3a3a3] font-extralight">UML</span>
            <span className="text-base text-[#a3a3a3] font-extralight">SQL / noSQL</span>
            <span className="text-base text-[#a3a3a3] font-extralight">SOAP</span>
            <span className="text-base text-[#a3a3a3] font-extralight">REST</span>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default TechnologySection;
