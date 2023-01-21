import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import GoArrowIcon from "../assets/images/GoArrowIcon.png";

const CompeleteInquiry = ({handleClick}) => {
  const [openModal, setOpenModal] = useState(false);

  const cancelBtnRef = useRef(null);

  return (
    <>
      <button
        className=" text-white ml-14 bg-indigo-500 hover:bg-indigo-700 transition ease-in-out duration-500 cursor-pointer py-3 px-4 rounded-sm mt-8 mb-10"
        onClick={() => {
          setOpenModal(true)
          handleClick()
        }}
      >
        Send Inquiry
        <img className="inline pl-2" src={`${GoArrowIcon}`} alt="Go arrow" />
      </button>
      <Transition.Root show={openModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelBtnRef}
          onClose={setOpenModal}
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
            <div className="flex mt-52 md:mt-0 md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 h-[320px] md:h-[420px] w-[800px]">
                  <h1 className="text-center text-4xl md:text-[48px] text-indigo-500 font-semibold mt-20 md:mt-40">
                  Thank you for your inquiry!
                  </h1>
                  <h4 className="text-center text-neutral-700">We’ll review your message and will get back to you shortly.</h4>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default CompeleteInquiry;
