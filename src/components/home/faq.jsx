import React, { useState } from "react";
import { BsCaretDownSquare } from "react-icons/bs";
import { BsCaretRightSquare } from "react-icons/bs";

function Faq() {
  const [questions, setquestions] = useState([
    {
      question: "What is commissionsfunnels ?",
      answer: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
      minima vero excepturi tempora facilis quam, accusantium quae`,
      isOpen: false,
    },
    {
      question: "How do i make money ?",
      answer: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
        minima vero excepturi tempora facilis quam, accusantium quae`,
      isOpen: false,
    },
    {
      question: "Can digital Products be listed ?",
      answer: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
        minima vero excepturi tempora facilis quam, accusantium quae`,
      isOpen: false,
    },
    {
      question: "What if i dont get the product delivered ?",
      answer: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
        minima vero excepturi tempora facilis quam, accusantium quae`,
      isOpen: false,
    },
    {
      question: "can i be taught how to sell products ?",
      answer: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
        minima vero excepturi tempora facilis quam, accusantium quae`,
      isOpen: false,
    },
    {
      question: "can i be taught how to sell products ?",
      answer: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          minima vero excepturi tempora facilis quam, accusantium quae`,
      isOpen: false,
    },
  ]);

  const toggleQuestion = (id) => {
    setquestions(
      questions.map((quest, index) => {
        if (index === id) {
          if (quest.isOpen) {
            quest.isOpen = false;
          } else {
            quest.isOpen = true;
          }
        } else {
          quest.isOpen = false;
        }
        return quest;
      })
    );
  };

  return (
    <section className="w-full h-fit pb-16 bg-gray-50 pt-4">
      <div className="md:w-10/12 md:mx-auto mx-2  mt-10">
        <h2 className="text-left uppercase text-3xl font-bold mb-8 ">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((quest, index) => (
            <div key={index} onClick={(e) => toggleQuestion(index)}>
              <div className="shadow bg-gray-100 border-[.03rem] border-[#ffce1a] px-4 py-3 rounded-md flex justify-between items-center">
                <h3 className="text-lg font-semibold">{quest.question}</h3>
                {quest.isOpen ? (
                  <BsCaretDownSquare size={25} className="text-blue-400" />
                ) : (
                  <BsCaretRightSquare size={25} className="text-[#ffce1a]" />
                )}
              </div>
              {quest.isOpen ? (
                <div className="py-4 px-4 bg-white rounded-b-lg shadow">
                  <p className="">{quest.answer}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
