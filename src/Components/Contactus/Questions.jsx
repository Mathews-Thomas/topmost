import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { questions } from "../../Data/Data";
import Modal from "@mui/material/Modal";

function Questions() {
  const [openParagraphIndex, setOpenParagraphIndex] = useState(null);
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const toggleParagraph = (index) => {
    if (window.innerWidth < 768) {
      setOpenModalIndex(index);
    } else {
      setOpenParagraphIndex((prevIndex) =>
        prevIndex === index ? null : index
      );
    }
  };

  const handleClose = () => {
    setOpenModalIndex(null);
  };

  return (
    <>
      {/* questions section */}
      <div className="flex justify-center items-center flex-wrap px-10 w-full bg-[#FEF0F9] gap-4 py-7 md:my-14">
        {/* frequently asked Questions */}
        <div className="my-10 bg-[#FEF0F9] text-center 2xl:w-[1440px] w-auto mx-auto">
          <h1 className="font-bold md:text-2xl text-center">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="flex my-1 justify-center text-[#652D91] text-base text-[14px]">
            ANSWERS TO YOUR TOP QUESTIONS
          </p>
        </div>
        {/* Render questions and answers */}
        {questions.map((question, index) => (
          <div
            key={index}
            className={`py-5 px-5 my-2 flex  justify-between gap-5 border bg-white shadow-md 2xl:w-[1440px] w-auto mx-auto ${
              openParagraphIndex === index ? "border-[#652D91]" : ""
            }  md:w-3/4`}
          >
            <div>
              <h1 className="font-medium text-[#652D91] md:text-lg xs:text-sm">
                {question.question}
              </h1>
              {/* paragraph section */}
              {openParagraphIndex === index && (
                <p className="text-[#6F6C90] md:my-3 md:text-[15px]">
                  {question.answer}
                </p>
              )}
            </div>
            <div>
              {/* paragraph handling button section */}
              <button onClick={() => toggleParagraph(index)}>
                {openParagraphIndex === index ? (
                  <ChevronDownIcon className="h-8 w-8  text-white rounded-2xl bg-[#A962E1]" />
                ) : (
                  <ChevronRightIcon className="h-8 w-8  rounded-2xl text-[#A962E1] shadow-md shadow-gray-600" />
                )}
              </button>
            </div>
          </div>
        ))}
        {/* Render modal */}
        {openModalIndex !== null && (
          <Modal
            open={true}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 250,
                bgcolor: "background.paper",
                border: "1px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {questions[openModalIndex]?.answer}
              </Typography>
              <Typography id="modal-modal-end" sx={{ mt: 2 }}>
                <button
                  onClick={handleClose}
                  className="bg-[#652D91] text-white rounded p-2"
                >
                  close
                </button>
              </Typography>
            </Box>
          </Modal>
        )}
      </div>
    </>
  );
}

export default Questions;
