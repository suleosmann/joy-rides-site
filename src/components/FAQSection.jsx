import React, { useState } from 'react';
import './css/FAQSection.css'; // Make sure the path to your CSS file is correct

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Why should I buy from Joy and Rides?',
      answer: 'Accessibility, transparent and easy procedures, competent market market prices and a reputable brand reputation.',
    },
    {
      question: 'What service do we offer?',
      answer: [
        'General consultancy to help you select the right car based on your needs.',
        'Purchase assistance, vehicle collection, inspection, shipping & all requisite documentation before your vehicle arrives in Mombasa (additional 200 Point mechanical inspection also available at an extra cost in selected regions).',
        'Tax consultancy services to ensure you pay the correct taxes.',
        'Clearing & final delivery assistance.',
        'Lifetime technical support (ie sourcing parts & recommending mechanics).',
      ],
    },
    {
        question: "How does the vehicle importation process work?",
        answer: [
          "Identify a Vehicle: We will routinely post selected units available ready for import units sourced by our global team that you can make an enquiry on direct from this page.",
          "Payment: This is done in two batches. The first payment is the CIF (cost & freight) which covers the cost of the car up to the port of Mombasa. The second payment is done once we confirm that the vehicle is in Mombasa and covers taxation, clearing & our 3% commission.",
        ],
      },
      {
        question: "How do we rate our marketplace vehicles?",
        answer: [
          "Accident/Salvage: Seriously damaged vehicle. NOT in running condition.",
          "Below Average: Vehicle is running but has major mechanical/body defects that require significant repairs.",
          "Average: Vehicle in running condition, but requires minor mechanical repairs and body repairs.",
          "Very Good: Vehicle in good working condition but might have some slight wear and tear.",
          "Excellent Condition: The ultimate car. No single defect on this vehicle. Exceptionally clean and in near perfect condition.",
        ],
      }
    // ... (other FAQs)
  ];

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderAnswer = (answer) => {
    if (Array.isArray(answer)) {
      return (
        <ol>
          {answer.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ol>
      );
    }
    return answer;
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
          </div>
          <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
            {renderAnswer(faq.answer)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
