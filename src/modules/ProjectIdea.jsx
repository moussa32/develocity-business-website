import React from "react";
import ideaIcon from "../assets/project-idea.svg";
import { Fade } from "react-awesome-reveal";

const ProjectIdea = () => {
  return (
    <div className="text-center mt-20 md:mt-44">
      <Fade direction={"up"} triggerOnce={true}>
        <span className="uppercase text-indigo-400 text-xs">For Successful Digital Transformation</span>
        <h2 className="text-5xl mt-2">Have a Project Idea?</h2>
        <p className="text-base text-neutral-400 md:w-2/4 mx-auto mt-6 mb-8">
          No matter if you already have a project specification or you're at the early stages of evaluating vendors, drop
          us a line and get a free estimation of our service costa.
        </p>
        <button
          className="bg-indigo-500 
          py-3.5 px-5 mx-auto lg:mx-0 lg:ml-auto rounded"
        >
          Get a Quote
          <img className="inline pl-2" src={`${ideaIcon}`} />
        </button>
      </Fade>
    </div>
  );
};

export default ProjectIdea;
