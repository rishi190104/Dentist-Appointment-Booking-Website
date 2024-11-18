import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  const faq = [
    {
      id: 1,
      question: "What are your clinic's working hours?",
      answer:
        "Our clinic is open [days and times, e.g., Monday to Saturday, 9 AM to 6 PM].",
    },
    {
      id: 2,
      question: "Do you accept walk-in appointments?",
      answer:
        "Yes, we accommodate walk-ins based on availability. However, booking online guarantees your slot.",
    },
    {
      id: 3,
      question: "Are your services suitable for children?",
      answer:
        "Absolutely! We provide gentle, child-friendly dental care for kids of all ages.",
    },
    {
      id: 4,
      question: "Do I need to make a deposit when booking?",
      answer:
        "Deposits are not required for online booking, but a confirmation email will secure your appointment.",
    },
    {
      id: 5,
      question: "How often should I visit the dentist?",
      answer:
        "We recommend routine check-ups every six months to maintain optimal oral health.",
    },
    {
      id: 6,
      question: "Are the treatments painful?",
      answer:
        "We strive to ensure all treatments are as comfortable and pain-free as possible, using advanced techniques and local anesthesia when necessary.",
    },
    {
      id: 7,
      question: "How do I know which treatment is right for me?",
      answer:
        "Our dentists will evaluate your oral health and discuss your goals to recommend the most suitable treatment options.",
    },
    {
      id: 8,
      question: "What precautions do you take for patient safety?",
      answer:
        "We adhere to strict sterilization protocols, use disposable materials, and follow all recommended guidelines for a safe environment.",
    },
  ];

  return (
    <section className="w-full h-full">
      <h1 className="flex justify-center items-center text-4xl font-bold text-teal-900 py-7">
        FAQ
      </h1>
      <div className="max-w-screen-xl mx-auto">
        {faq.map(({ id, question, answer }) => (
          <Accordion sx={{ backgroundColor: "#19A6A6" }} key={id}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon fontSize="medium" sx={{ fontWeight: "bold" }} />
              }
              aria-controls="panel1-content"
              id="panel1-header"
              className="font-bold"
            >
              {question}
            </AccordionSummary>
            <AccordionDetails>{answer}</AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default Faq;
