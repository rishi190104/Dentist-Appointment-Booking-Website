import React, { useState } from "react";
import Svg from "./Svg";

const Treatment = () => {
  const [treatment, setTreatment] = useState(false);
  const [btn, setBtn] = useState(false);

  return (
    <main className="w-full h-full bg-gradient-to-t from-teal-300 via-teal-200 to-transparent py-10 ">
      <h1
        className="md:text-5xl font-semibold flex items-center justify-center py-7 text-teal-950 underline
      text-3xl 
      "
      >
        Treatments
      </h1>
      <div className=" md:flex md:flex-col flex-wrap md:m-0 mx-4">
        <div
          className="bg-gradient-to-t from-teal-400 to-teal-600 max-w-screen-xl mx-auto rounded-md p-3 py-5
        animate-fade-right animate-once animate-duration-1000 animate-ease-out animate-normal animate-fill-forwards
        "
        >
          <h1 className="text-2xl font-bold  pb-2 flex items-center">
           <Svg />
            Root Canal
          </h1>
          <p className="text-lg">
            Root canal treatment is a dental procedure used to fix and save a
            tooth that is badly damaged or infected. Inside every tooth, there
            is a soft tissue called pulp, which contains nerves and blood
            vessels. If this pulp gets infected due to deep cavities, cracks, or
            an injury, it can cause severe pain or swelling. A root canal is
            done to remove....{" "}
            <span className="font-bold cursor-pointer hover:text-white">
              Read More
            </span>
          </p>
        </div>
        <br />
        <div
          className="bg-gradient-to-t from-teal-400 to-teal-600 max-w-screen-xl mx-auto rounded-md p-3 py-5
        animate-fade-left animate-once animate-duration-1500 animate-ease-out animate-normal animate-fill-forwards
        "
        >
          <h1 className="text-2xl font-bold  pb-2 flex items-center">
          <Svg />
            Dental Fillings
          </h1>
          <p className="text-lg">
            Dental fillings are used to repair teeth that have been damaged by
            cavities or minor cracks. A cavity is a hole in a tooth caused by
            decay. If left untreated, it can grow bigger and cause pain or even
            infection. Fillings help restore the tooth's shape and function,
            making it strong again.The process of getting a filling is simple
            and quick. First, the dentist....{" "}
            <span className="font-bold cursor-pointer hover:text-white">
              Read More
            </span>
          </p>
        </div>
        <br />
        <div
          className="bg-gradient-to-t from-teal-400 to-teal-600 max-w-screen-xl mx-auto rounded-md p-3 py-5
        animate-fade-right animate-once animate-duration-2000 animate-ease-out animate-normal animate-fill-forwards
        "
        >
          <h1 className="text-2xl font-bold  pb-2 flex items-center">
          <Svg />
            Dentures
          </h1>
          <p className="text-lg">
            Dentures are removable artificial teeth that replace missing teeth
            and help restore your smile. They are made to look and function like
            natural teeth, allowing you to eat, speak, and smile confidently.
            Dentures are an option for people who have lost some or all of their
            teeth due to aging, gum disease, injury, or decay.There are two main
            types of dentures....{" "}
            <span className="font-bold cursor-pointer hover:text-white">
              Read More
            </span>
          </p>
        </div>
        <br />
        <div
          className="bg-gradient-to-t from-teal-400 to-teal-600 max-w-screen-xl mx-auto rounded-md p-3 py-5
        animate-fade-left animate-once animate-duration-2500 animate-delay-500 animate-ease-out animate-normal animate-fill-forwards
        "
        >
          <h1 className="text-2xl font-bold  pb-2 flex items-center">
          <Svg />
            Dental Implants
          </h1>
          <p className="text-lg">
            Dental implants are a permanent solution for replacing missing
            teeth. They look and feel like natural teeth and help restore your
            ability to chew, speak, and smile confidently. A dental implant is a
            small metal post, usually made of titanium, that is placed in your
            jawbone to act like the root of a tooth. Once the implant is
            securely....{" "}
            <span className="font-bold cursor-pointer hover:text-white">
              Read More
            </span>
          </p>
        </div>
        <br />
        <div
          className="bg-gradient-to-t from-teal-400 to-teal-600 max-w-screen-xl mx-auto rounded-md p-3 py-5
        animate-fade-right animate-once animate-duration-3000 animate-delay-500 animate-ease-out animate-normal animate-fill-forwards
        "
        >
          <h1 className="text-2xl font-bold  pb-2 flex items-center">
          <Svg />
            Aligners & Braces
          </h1>
          <p className="text-lg">
            Aligners and braces are orthodontic treatments used to straighten
            teeth, fix gaps, and correct bite issues. They improve not only the
            appearance of your smile but also your oral health by making it
            easier to clean your teeth and maintain healthy gums. Braces are
            metal or ceramic brackets attached to the teeth....{" "}
            <span className="font-bold cursor-pointer hover:text-white">
              Read More
            </span>
          </p>
        </div>
        <br />
        <div
          className="bg-gradient-to-t from-teal-400 to-teal-600 max-w-screen-xl mx-auto rounded-md p-3 py-5
        animate-fade-right animate-once animate-duration-3000  animate-ease-out animate-normal animate-fill-forwards
        "
        >
          <h1 className="text-2xl font-bold  pb-2 flex items-center">
          <Svg />
            Teeth Cleaning
          </h1>
          <p className="text-lg">
            Teeth cleaning is a simple and essential dental procedure that helps
            keep your teeth and gums healthy. It removes plaque, tartar
            (hardened plaque), and stains that regular brushing and flossing
            can’t fully eliminate. This professional cleaning is done by a
            dentist or dental hygienist and is usually recommended every six
            months.....{" "}
            <span className="font-bold cursor-pointer hover:text-white">
              Read More
            </span>
          </p>
        </div>

        {btn ? null : (
          <button
            onClick={() => {
              setBtn(true);
            }}
            className="flex item-center justify-center bg-teal-700 text-white font-bold h-10  md:w-1/6 px-3 py-2 rounded-md  
            mx-auto mt-5 hover:bg-teal-500 "
          >
            Show More
          </button>
        )}

        {btn ? (
          <>
            <br />
            <div className="animate-fade-down animate-once animate-duration-1000 animate-ease-in-out">
              <div
                className="bg-gradient-to-t from-teal-400 to-teal-600 max-w-screen-xl mx-auto rounded-md p-3 py-5
        animate-fade-left animate-once animate-duration-3000  animate-ease-out animate-normal animate-fill-forwards
        "
              >
                <h1 className="text-2xl font-bold  pb-2 flex items-center">
                <Svg />
                  Teeth Whitening
                </h1>
                <p className="text-lg">
                  Teeth whitening is a cosmetic dental procedure that makes your
                  teeth look brighter and whiter by removing stains and
                  discoloration. Over time, teeth can become stained due to
                  foods, drinks like coffee or tea, smoking, or natural aging.
                  Teeth whitening helps improve your smile and boost your
                  confidence. There are different ways to whiten teeth.
                  Professional whitening ....{" "}
                  <span className="font-bold cursor-pointer hover:text-white">
                    Read More
                  </span>
                </p>
              </div>
              <br />
              <div
                className="bg-gradient-to-t from-teal-400 to-teal-600 max-w-screen-xl mx-auto rounded-md p-3 py-5
        animate-fade-left animate-once animate-duration-3000  animate-ease-out animate-normal animate-fill-forwards
        "
              >
                <h1 className="text-2xl font-bold  pb-2 flex items-center">
                <Svg />
                  Smile Makeovers
                </h1>
                <p className="text-lg">
                  A smile makeover is a cosmetic dental treatment that improves
                  the appearance of your smile. It combines different procedures
                  to address issues like discolored, chipped, misaligned, or
                  missing teeth. The goal is to create a beautiful and confident
                  smile that suits your face and personality. The process starts
                  with a consultation where the dentist examines your teeth ....{" "}
                  <span className="font-bold cursor-pointer hover:text-white">
                    Read More
                  </span>
                </p>
              </div>
              <br />
              <div
                className="bg-gradient-to-t from-teal-400 to-teal-600 max-w-screen-xl mx-auto rounded-md p-3 py-5
        animate-fade-left animate-once animate-duration-3000  animate-ease-out animate-normal animate-fill-forwards
        "
              >
                <h1 className="text-2xl font-bold  pb-2 flex items-center">
                <Svg />
                  Crowns & Bridges
                </h1>
                <p className="text-lg">
                  Crowns and bridges are dental restorations used to fix damaged
                  or missing teeth, helping restore the function and appearance
                  of your smile. Crowns are like caps that cover a damaged or
                  weak tooth. They can restore a tooth that is cracked, decayed,
                  or has had a root canal. .....{" "}
                  <span className="font-bold cursor-pointer hover:text-white">
                    Read More
                  </span>
                </p>
              </div>
              <br />
              <div
                className="bg-gradient-to-t from-teal-400 to-teal-600 max-w-screen-xl mx-auto rounded-md p-3 py-5
        animate-fade-left animate-once animate-duration-3000  animate-ease-out animate-normal animate-fill-forwards
        "
              >
                <h1 className="text-2xl font-bold  pb-2 flex items-center">
                <Svg />
                  Kids Dental Care
                </h1>
                <p className="text-lg">
                  Dental care for kids is essential to ensure they develop
                  healthy teeth and gums that will last a lifetime. Taking care
                  of a child’s teeth from an early age can help prevent
                  cavities, gum disease, and other dental issues......{" "}
                  <span className="font-bold cursor-pointer hover:text-white">
                    Read More
                  </span>
                </p>
              </div>
              <br />
              <div
                className="bg-gradient-to-t from-teal-400 to-teal-600 max-w-screen-xl mx-auto rounded-md p-3 py-5
        animate-fade-left animate-once animate-duration-3000  animate-ease-out animate-normal animate-fill-forwards
        "
              >
                <h1 className="text-2xl font-bold  pb-2 flex items-center">
                <Svg />
                  Tooth Extraction
                </h1>
                <p className="text-lg">
                  Tooth extraction is the removal of a tooth from its socket in
                  the jaw. This procedure is usually done when a tooth is too
                  damaged or decayed to be saved. Tooth extractions may also be
                  necessary for other reasons, like overcrowding, impacted
                  wisdom teeth, or infection......{" "}
                  <span className="font-bold cursor-pointer hover:text-white">
                    Read More
                  </span>
                </p>
              </div>
              <br />
              <div
                className="bg-gradient-to-t from-teal-400 to-teal-600 max-w-screen-xl mx-auto rounded-md p-3 py-5
        animate-fade-left animate-once animate-duration-3000  animate-ease-out animate-normal animate-fill-forwards
        "
              >
                <h1 className="text-2xl font-bold  pb-2 flex items-center">
                <Svg />
                  Scaling & Polishing
                </h1>
                <p className="text-lg">
                  Scaling and polishing are dental treatments designed to clean
                  and maintain your teeth, keeping them healthy and looking
                  good. These procedures help remove plaque, tartar, and stains
                  that regular brushing and flossing might miss.......{" "}
                  <span className="font-bold cursor-pointer hover:text-white">
                    Read More
                  </span>
                </p>
              </div>
              <br />
              <div
                className="bg-gradient-to-t from-teal-400 to-teal-600 max-w-screen-xl mx-auto rounded-md p-3 py-5
        animate-fade-left animate-once animate-duration-3000  animate-ease-out animate-normal animate-fill-forwards
        "
              >
                <h1 className="text-2xl font-bold  pb-2 flex items-center">
                <Svg />
                  Regular Dental Check-ups
                </h1>
                <p className="text-lg">
                  Regular dental checkups are an essential part of maintaining
                  good oral health. Visiting the dentist every six months (or as
                  recommended by your dentist) helps catch dental problems
                  early, often before they become serious or painful. During a
                  checkup, the dentist will examine your teeth......{" "}
                  <span className="font-bold cursor-pointer hover:text-white">
                    Read More
                  </span>
                </p>
              </div>
            </div>
            {btn ? (
              <button
                onClick={() => {
                  setBtn(false);
                }}
                className="flex item-center justify-center bg-teal-700 text-white font-bold h-10 md:w-1/6 px-3 py-2 rounded-md  
            mx-auto mt-5 hover:bg-teal-500 "
              >
                Show Less
              </button>
            ) : null}
          </>
        ) : null}
      </div>
    </main>
  );
};

export default Treatment;
