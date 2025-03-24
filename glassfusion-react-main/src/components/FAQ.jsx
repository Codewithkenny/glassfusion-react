import React, { useState } from 'react';

const faqData = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a range of glass solutions including shower glass, glass balustrades, and custom mirrors.',
  },
  {
    question: 'How can I contact you?',
    answer: 'You can contact us via our website or call us at (234) 815 757-4317.',
  },
  {
    question: 'Do you offer consultations?',
    answer: 'Yes, we provide free consultations to discuss your needs and preferences.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We have a 30-day return policy on all our products.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-slate-300">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="w-full max-w-2xl mx-auto">
        {faqData.map((item, index) => (
          <div key={index} className="mb-4 border-b">
            <div
              className="flex justify-between items-center cursor-pointer py-4 px-6 bg-gray-200 hover:bg-gray-300 transition"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <span>{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="py-2 px-6 text-gray-900 font-semibold">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
