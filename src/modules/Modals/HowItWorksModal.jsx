import { Fragment, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Dialog, Transition } from "@headlessui/react";
import { ReactComponent as HowItWorksSvg } from "../../assets/HowItWorks.svg";
import GoArrowIcon from "../../assets/images/GoArrowIcon.png";

const HowItWorksModal = ({ isOpen, onCloseModal, handleCurrentModal }) => {
  const cancelButtonRef = useRef(null);
  const [CheckedMsg, setCheckedMsg] = useState("Does not require NDA");
  const form = useRef();

  const handleChange = (e) => {
    if(e.target.checked == true )
      setCheckedMsg("I require NDA")
    else setCheckedMsg("Does not require NDA")   
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleCurrentModal("success");

    // Send form data to develocity
    emailjs
      .sendForm(
        "service_dcamzsb",
        "template_ba300wn",
        form.current,
        "-DbgStYLt_QSi5uVS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Send confirmation mail to client
    emailjs
      .sendForm(
        "service_dcamzsb",
        "template_100ls1s",
        form.current,
        "-DbgStYLt_QSi5uVS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40"
          initialFocus={cancelButtonRef}
          onClose={onCloseModal}
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
                  <HowItWorksSvg className="w-full px-4 center mx-auto my-6" />
                  {/* <div className="flex flex-col md:flex-row justify-around mt-12 text-center">
                    <div>
                      <img className="mt-3 md:mt-0 mx-auto" src={DoubleArrowIcon} alt="DoubleArrowIcon" />
                      <p className="px-16 text-base font-medium text-[#404040] mt-3">Tell us about your needs</p>
                    </div>
                    <div>
                      <img className="mt-3 md:mt-0 mx-auto" src={DoubleArrowIcon} alt="DoubleArrowIcon" />
                      <p className="px-16 text-base font-medium text-[#404040] mt-3">We‘ll discuss the project</p>
                    </div>
                    <div>
                      <img className="mt-3 md:mt-0 mx-auto" src={DoubleArrowIcon} alt="DoubleArrowIcon" />
                      <p className="px-16 text-base font-medium text-[#404040] mt-3">You‘ll get a free quote from us</p>
                    </div>
                  </div> */}
                  <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="px-5 mt-16"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="mx-auto">
                        <label className="block text-sm text-neutral-500 font-medium ml-2 mb-2">
                          Name *
                        </label>
                        <input
                          className="border text-base text-neutral-700 border-neutral-300 outline-none transition-all ease-in-out duration-300 rounded md:w-[312px] p-4 focus:border-indigo-500"
                          type="text"
                          name="first-name"
                        />
                      </div>
                      <div className="mx-auto mt-7 md:mt-0">
                        <label className="block text-sm text-neutral-500 font-medium ml-2 mb-2">
                          Last Name *
                        </label>
                        <input
                          className="border text-base text-neutral-700 border-neutral-300 outline-none transition-all ease-in-out duration-300 rounded md:w-[312px] p-4 focus:border-indigo-500"
                          type="text"
                          name="last-name"
                        />
                      </div>
                      <div className="mx-auto mt-7">
                        <label className="block text-sm text-neutral-500 font-medium ml-2 mb-2">
                          Email *
                        </label>
                        <input
                          className="border text-base text-neutral-700 border-neutral-300 outline-none transition-all ease-in-out duration-300 rounded md:w-[312px] p-4 focus:border-indigo-500"
                          type="text"
                          name="email"
                        />
                      </div>
                      <div className="mx-auto mt-7">
                        <label className="block text-sm text-neutral-500 font-medium ml-2 mb-2">
                          Company *
                        </label>
                        <input
                          className="border text-base text-neutral-700 border-neutral-300 outline-none transition-all ease-in-out duration-300 rounded md:w-[312px] p-4 focus:border-indigo-500"
                          type="text"
                          name="company"
                        />
                      </div>
                    </div>
                    <div className="mx-auto grid grid-cols-1">
                      <div className="mx-auto mt-7 md:w-[695px]">
                        <label className="block text-sm text-neutral-500 font-medium ml-2 mb-2">
                          About your project *
                        </label>
                        <textarea
                          className="border text-base text-neutral-700 border-neutral-300 outline-none transition-all ease-in-out duration-300 rounded p-4 focus:border-indigo-500 md:h-44 w-[280px] md:w-[695px]"
                          name="about-project"
                        />
                      </div>
                      <div className="flex items-center mt-3 ml-3 md:ml-8">
                        <input
                          name="NDA-checkbox"
                          type="checkbox"
                          onChange={(e) => handleChange(e)}
                          value = {CheckedMsg}
                          className="w-[18px] h-[18px] border-neutral-300 outline-none shadow-none"
                        />
                        <label className="text-sm font-medium text-neutral-700 ml-2">
                          I require NDA
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="mx-auto md:mx-0 md:ml-8 w-[164px] text-white bg-indigo-500 hover:bg-indigo-700 transition ease-in-out duration-500 cursor-pointer py-3 px-4 rounded-sm mt-8 mb-10"
                      >
                        Send Inquiry
                        <img
                          className="inline pl-2"
                          src={`${GoArrowIcon}`}
                          alt="Go arrow"
                        />
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default HowItWorksModal;
