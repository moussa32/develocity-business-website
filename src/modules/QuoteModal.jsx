import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import GoArrowIcon from "../assets/images/GoArrowIcon.png";
import DoubleArrowIcon from "../assets/images/DoubleArrowIcon.svg";
import CompeleteInquiry from "./CompeleteInquiry";

const QuoteModal = () => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  const closeModal = () =>{
    setOpen(false)
  }
  return (
    <>
      <button
        className="bg-indigo-500 hover:bg-indigo-700 transition ease-in-out duration-500 cursor-pointer py-3 px-4 mb-20"
        onClick={() => setOpen(true)}
      >
        Get a Free Quote
        <img className="inline pl-2" src={`${GoArrowIcon}`} alt="Go arrow" />
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[800px]">
                  <h1 className="text-center text-5xl text-[#171717] font-semibold mt-10">
                    How it works?
                  </h1>
                  <div className="flex flex-col md:flex-row justify-around mt-12 text-center">
                    <div>
                      <img
                        className="mt-3 md:mt-0 mx-auto"
                        src={DoubleArrowIcon}
                        alt="DoubleArrowIcon"
                      />
                      <p className="px-16 text-base font-medium text-[#404040] mt-3">
                        Tell us about your needs
                      </p>
                    </div>
                    <div>
                      <img
                        className="mt-3 md:mt-0 mx-auto"
                        src={DoubleArrowIcon}
                        alt="DoubleArrowIcon"
                      />
                      <p className="px-16 text-base font-medium text-[#404040] mt-3">
                        We‘ll discuss the project
                      </p>
                    </div>
                    <div>
                      <img
                        className="mt-3 md:mt-0 mx-auto"
                        src={DoubleArrowIcon}
                        alt="DoubleArrowIcon"
                      />
                      <p className="px-16 text-base font-medium text-[#404040] mt-3">
                        You‘ll get a free quote from us
                      </p>
                    </div>
                  </div>
                  <form className="px-5 mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="mx-auto">
                        <label className="block text-sm text-[#737373] font-medium ml-2 mb-2">
                          Name *
                        </label>
                        <input
                          className="border border-[#6466E9] rounded h-14 md:w-[312px]"
                          type="text"
                          name="first-name"
                        />
                      </div>
                      <div className="mx-auto mt-7 md:mt-0">
                        <label className="block text-sm text-[#737373] font-medium ml-2 mb-2">
                          Last Name *
                        </label>
                        <input
                          className="border border-[#6466E9] rounded h-14 md:w-[312px]"
                          type="text"
                          name="last-name"
                        />
                      </div>
                      <div className="mx-auto mt-7">
                        <label className="block text-sm text-[#737373] font-medium ml-2 mb-2">
                          Email *
                        </label>
                        <input
                          className="border border-[#6466E9] rounded h-14 md:w-[312px]"
                          type="text"
                          name="email"
                        />
                      </div>
                      <div className="mx-auto mt-7">
                        <label className="block text-sm text-[#737373] font-medium ml-2 mb-2">
                          Company *
                        </label>
                        <input
                          className="border border-[#6466E9] rounded h-14 md:w-[312px]"
                          type="text"
                          name="company"
                        />
                      </div>
                    </div>
                    <div className="mx-auto mt-7 w-[250px] md:w-[695px]">
                      <label className="block text-sm text-[#737373] font-medium ml-2 mb-2">
                        About your project *
                      </label>
                      <textarea
                        className="border border-[#6466E9] rounded h-44 w-[250px] md:w-[695px]"
                        name="about-project"
                      />
                    </div>
                    <div className="ml-2 md:ml-8">
                      <input name="NDA-checkbox" type="checkbox" />
                      <label className="text-sm font-medium text-[#404040] ml-2">
                        I require NDA
                      </label>
                    </div>
                  </form>
                  <CompeleteInquiry handleClick = {() => closeModal} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default QuoteModal;
