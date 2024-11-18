import React from "react";

const Dentist = () => {
  return (
    <section className="w-full h-full ">
      <h1 className="flex justify-center items-center text-4xl font-bold text-teal-900 pt-7">
        About the Dentist's
      </h1>
      <div className="flex md:flex-row flex-col justify-center items-center p-10 max-w-screen-xl mx-auto ">
        <img
          src="https://img.freepik.com/premium-vector/dentist-woman-examining-patient-teeth-white-background_1308-92207.jpg"
          alt=""
          className="h-[333px]"
        />
        <div className="bg-teal-400 md:mx-36 p-3 rounded-lg">
          <h1 className="text-xl">
            Meet <strong>Dr. [Dentist's Name]</strong>: Your Partner in
            Exceptional Dental Care
          </h1>
          <br />
          <p>
            <strong>Dr. [Dentist's Name]</strong> is more than just a dentist;
            they are a trusted partner in your journey to optimal oral health.
            With a foundation built on advanced education from{" "}
            <strong>Dr. [Dentist's Name]</strong> and <strong>[X years]</strong>{" "}
            of hands-on experience, <strong>Dr. [Last Name]</strong> has earned
            a reputation for delivering exceptional care that combines
            precision, innovation, and a personal touch.
          </p>
          <p>
            <strong>Dr. [Last Name]</strong> has continually honed their skills
            through ongoing education and training, staying at the forefront of
            the latest advancements in dental technology. Specializing in{" "}
            <strong>
              [list specialties, e.g., preventive care, cosmetic dentistry,
              restorative treatments], Dr. [Last Name]
            </strong>{" "}
            is known for their meticulous attention to detail and patient-first
            approach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dentist;
