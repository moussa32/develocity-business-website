import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fade } from "react-awesome-reveal";

const SuccessModal = ({ isOpen, onCloseModal }) => {
  const cancelBtnRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40 shadow-xl" initialFocus={cancelBtnRef} onClose={onCloseModal}>
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
              <div>
                <Fade direction={"up"} triggerOnce={true}>
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 h-[250px] md:h-[420px] md:w-[800px]">
                    <h1 className="font-PolySans text-center text-2xl md:text-4xl md:text-[48px] text-indigo-500 font-semibold mt-16 md:mt-40 mb-3 md:mb-6">
                      Thank you for your inquiry!
                    </h1>
                    <p className="text-center text-sm px-10 text-neutral-700 md:text-lg">
                      We’ll review your message and will get back to you shortly.
                    </p>
                  </Dialog.Panel>
                </Fade>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SuccessModal;
