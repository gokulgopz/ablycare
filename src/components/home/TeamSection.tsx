import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import ChalkTitle from "../ChalkTItle";

const TeamSection = () => {
  return (
    <>
      <div className="flex justify-start md:justify-center">
        <ChalkTitle
          title="Join Our Passionate Team"
          className="mt-10"
          underlineColor="#f8ab39"
        />
      </div>
      <div className="mt-7 flex flex-col items-center justify-center">
        <div className="flex flex-col items-start justify-center md:items-center w-full font-inter text-gray-600 text-sm text-center">
          <p>Make a Real Impact.</p>
        </div>
        <div className="mt-8 flex gap-6 w-full lg:max-w-4xl sm:h-[500px] justify-center items-center">
          <div className="hidden sm:block w-1/2 h-full relative pt-4 pl-4">
            <h2 className="relative font-poppins text-white drop-shadow-md text-3xl z-10 font-medium">
                Be Part of Something Meaningful.
            </h2>

            <div className="absolute w-[205px] lg:w-[245px] h-[250px] lg:h-[300px] left-[-8px] bottom-0 z-10">
              <Image
                src={"/images/char-draft01.png"}
                alt="Ably Care Persona"
                fill
                className="absolute w-full h-full object-contain"
              />
            </div>
            <div className="w-full h-full absolute top-0 left-0 z-[5] rounded-xl overflow-hidden">
                <div className="w-full h-full absolute top-0 left-0 z-[3] bg-gradient-to-t from-customAccent to-black/05"></div>
                <div className="w-full h-full absolute top-0 left-0 z-[2]">
                <Image
                    src={"/images/HOMEPAGE/jointeam.jpeg"}
                    alt="Ably Care Team"
                    fill
                    className="w-full h-full object-cover"
                />
                </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex flex-col items-start justify-center gap-6">
            <p className="font-inter text-xl sm:text-3xl font-light">
              Are you passionate about making a meaningful impact? Ably Care is looking for dedicated individuals to join our expanding team. 
              We always welcome those who are ready to make a difference.
              If you're eager to bring your skills and compassion to a supportive environment, explore our career opportunities and help us empower lives.
            </p>
            <Button className="rounded-xl bg-complementary text-white hover:bg-customAccent">
              Find out more
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
