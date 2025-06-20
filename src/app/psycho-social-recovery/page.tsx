import ChalkTitle from "@/components/ChalkTItle";
import PsychoSocialRecoveryHero from "@/components/psycho-social-recovery/PsychoSocialRecoveryHero";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { psychoSocialTilesData, psychoSocialTilesData2 } from "@/data/psychoSocialTilesData";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Psycho-Social Recovery | Ably Care",
};

const PsychoSocialRecovery = () => {
  return (
    <>
      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-20">
        <PsychoSocialRecoveryHero />
      </main>

      <div className="flex flex-col min-h-screen" id="learn-more">
        <section className="py-6 md:py-16 container mx-auto px-4 max-w-6xl">
          <div className="mb-4 flex flex-col items-start justify-center lg:items-center">
            <ChalkTitle
              title="About Our Psychosocial Recovery Coaching"
              className="mt-10 md:w-2/3 lg:text-center"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              Our Psychosocial Recovery Coaching service provides personalised support for individuals with mental health challenges, helping them build resilience, develop life skills, and achieve their goals. We work closely with you to navigate the NDIS, access the right services, and create a pathway to greater independence and well-being.
            </p>
          </div>
           
        </section>        

        <section className="mx-auto  p-2 w-full lg:max-w-7xl">
          <div className="py-3 container mx-auto px-4 max-w-6xl">
            <div className="mb-1 flex flex-col items-start justify-center lg:items-center mt-24">
              <ChalkTitle
                title="How We Support You"
                className="mt-1 lg:w-[65%] text-start lg:text-center"
                underlineColor="#f8ab39"
              />
              <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
                Our approach to Psychosocial Recovery Coaching includes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 rounded-2xl gap-10 mb-36">
              {psychoSocialTilesData.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-start justify-center p-10 overflow-hidden group hover:bg-customAccent min-h-[400px] rounded-2xl ${
                    index % 2 === 0
                      ? "bg-customAccent/20"
                      : "bg-complementary/10"
                  } ${index % 3 === 0 || index % 3 === 2 ? "lg:translate-y-32" : ""}`}
                >
                  <div className="w-full gap-3 flex flex-col items-start justify-center translate-y-5 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                    <div className="relative w-32 h-32 group-hover:w-20 group-hover:h-20 left-[50%] translate-x-[-50%] group-hover:translate-x-0 group-hover:left-[26%] transition-all duration-300 ease-out">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="100%"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center w-full group-hover:justify-start">
                      <h1 className="text-gray-800 group-hover:text-white text-2xl font-poppins font-semibold text-center group-hover:text-start transition-all duration-300 ease-in-out">
                        {item.title}
                      </h1>
                    </div>
                    <p className="text-sm text-white text-inter opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                      {item.subTitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


         <section className="py-6 container mx-auto px-4 max-w-6xl">
          <div className="mb-7 flex flex-col items-start justify-center lg:items-center">
            <ChalkTitle
              title="Why is it Important?"
              className="mt-10 md:w-2/3 lg:text-center"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              At Ably Care, our Recovery Coaches bring either lived experience
              of mental health recovery or formal training in mental health.
              They are committed to recovery-oriented, strengths-based, and
              relationship-focused approaches. Their responsibilities include
            </p>
          </div>
          <div className="w-full lg:w-[500px] mx-auto flex flex-col rounded-2xl overflow-hidden mt-6">
            {[
              " Identify short-term and long-term goals",
              "Recognize strengths and challenges",
              "Understand where they have control over decision",
              "Find the right support services and resources",
              "Plan for unexpected changes in mental health needs",
              " Coordinate NDIS and mental health services effectively",
               
            ].map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer flex gap-2 items-start w-full p-6 ${
                  index % 2 === 0 ? "bg-customAccent/20" : "bg-complementary/20"
                } hover:bg-customAccent transition-all duration-300 ease-in-out group`}
              >
                <CircleCheckBig className="text-green-500 w-5 h-5 mt-1 sm:mt-[3px]" />
                <p className="w-[90%] md:w-auto font-inter text-gray-600 group-hover:text-white transition-all duration-300 ease-in-out">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* imporved scetion */}


        <section className="py-6 md:py-16 container mx-auto px-4 max-w-6xl">
            <div className="mb-7 flex flex-col items-start justify-center lg:items-center">
              {/* Heading remains centered above the two-column layout */}
              <ChalkTitle
                title="Key Outcomes of Recovery Coaching"
                className="mt-10 md:w-2/3 lg:text-center"
                underlineColor="#f8ab39"
              />
            </div>

            {/* New flex container for the left image and right content */}
            {/* `md:flex-row` ensures image (first child) is on the left for larger screens */}
            <div className="flex flex-col md:flex-row items-start justify-center gap-8 mt-12">

              {/* Left Column: Image */}
              <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/psycho/1.jpeg" // IMPORTANT: Replace with your actual image path
                  alt="Key outcomes of recovery coaching"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                  className="object-cover object-center"
                />
                {/* Optional: Add a subtle overlay for visual depth if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Right Column: Existing List of Items */}
              <div className="w-full md:w-1/2 flex flex-col items-start">
                <div className="w-full flex flex-col rounded-2xl overflow-hidden">
                  {[
                    "Improved emotional well-being and resilience to manage challenges.",
                    "Achieving personal goals that bring meaning and fulfilment.",
                    "Building confidence and skills to live more independently.",
                    "Strengthening connections with family, friends, and the community.",
                    "Developing strategies for better self-management and daily life.",
                    "Gaining control over decisions and feeling empowered in your journey.",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer flex gap-2 items-start w-full p-6 ${
                        index % 2 === 0 ? "bg-customAccent/20" : "bg-complementary/20"
                      } hover:bg-customAccent transition-all duration-300 ease-in-out group`}
                    >
                      <CircleCheckBig className="text-green-500 w-5 h-5 mt-1 sm:mt-[3px]" />
                      <p className="w-[90%] md:w-auto font-inter text-gray-600 group-hover:text-white transition-all duration-300 ease-in-out">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

        {/* <section className="py-6 md:py-16 container mx-auto px-4 max-w-6xl">
          <div className="mb-7 flex flex-col items-start justify-center lg:items-center">
            <ChalkTitle
              title="Key Outcomes of Recovery Coaching"
              className="mt-10 md:w-2/3 lg:text-center"
              underlineColor="#f8ab39"
            />
          </div>
          <div className="w-full lg:w-[500px] mx-auto flex flex-col rounded-2xl overflow-hidden mt-12">
            {[
              "Improved emotional well-being and resilience to manage challenges.",
              "Achieving personal goals that bring meaning and fulfilment. ",
              " Building confidence and skills to live more independently. ",
              " Strengthening connections with family, friends, and the community.  ",
              "Developing strategies for better self-management and daily life. ",
              "Gaining control over decisions and feeling empowered in your journey. ",
               
            ].map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer flex gap-2 items-start w-full p-6 ${
                  index % 2 === 0 ? "bg-customAccent/20" : "bg-complementary/20"
                } hover:bg-customAccent transition-all duration-300 ease-in-out group`}
              >
                <CircleCheckBig className="text-green-500 w-5 h-5 mt-1 sm:mt-[3px]" />
                <p className="w-[90%] md:w-auto font-inter text-gray-600 group-hover:text-white transition-all duration-300 ease-in-out">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section> */}

        <section className="py-6 md:py-16 container mx-auto px-4 max-w-6xl">
          <div className="w-full flex items-center justify-start lg:justify-center">
            <ChalkTitle
              title="Partnering with You on Your Journey"
              className="mt-10"
              underlineColor="#f8ab39"
            />
          </div>
          <p className="text-gray-600 my-8 text-center max-w-3xl mx-auto font-inter text-sm">
            We are committed to:
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {psychoSocialTilesData2.map((item, index) => (
              <Card
                className="rounded-xl overflow-hidden bg-gray-50"
                key={index}
              >
                <CardHeader className="pl-0">
                  <div className="relative bg-customAccent rounded-xl rounded-l-none p-4 flex flex-col items-start justify-center">
                    <CardTitle className="text-white font-poppins">
                      {index + 1} .
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-inter">
                    <h1 className="mb-2 font-poppins text-gray-700 font-semibold text-lg">
                      {item.title}
                    </h1>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default PsychoSocialRecovery;
