import ChalkTitle from "@/components/ChalkTItle";
import SupportCoordinationHero from "@/components/supportCoordination/SupportCoordinationHero";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { supportCoordinationServices } from "@/data/supportCoordinationsData";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "Support Coordination | Ably Care",
}


const SupportCoordination = () => {
  return (
    <>
      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-20">
        <SupportCoordinationHero />
      </main>
      <section className="mx-auto p-2 w-full lg:max-w-7xl" id="learn-more">
        <div className="py-6 md:py-16 container mx-auto px-4 max-w-6xl">
          <div className="mb-7 flex flex-col items-start justify-center lg:items-center">
            <ChalkTitle
              title=" About our Support Coordination"
              className="mt-10"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              At Ably Care, we understand how important it is to navigate the NDIS and make the most of your plan. 
              We work closely with you to help plan and coordinate your supports, ensuring you find the right local services 
              that meet your needs and arrange visits at times that suit you. We’re here to support you in establishing and maintaining your services, 
              guiding you through the costs and ensuring everything is set up just the way you need. If you ever need to find new services or change providers, 
              we’ll be with you every step of the way. We also assist with making adjustments to your plan and help prepare for reassessments, ensuring that your 
              support continues to meet your goals and needs. 3.Section: Icons and text – Our Services.

            </p>
          </div>

          <div className="mb-7 flex flex-col items-start justify-center lg:items-center mt-24">
            <ChalkTitle
              title="Support Coordination Services"
              className="mt-10 lg:w-[65%] text-start lg:text-center"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              We provide a holistic approach to support, covering informal,
              community, mainstream, and funded services. Our team helps you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 rounded-2xl gap-10 mb-36">
            {supportCoordinationServices.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-start justify-center p-10 overflow-hidden group hover:bg-customAccent min-h-[400px] rounded-2xl ${
                  index % 2 === 0 ? "bg-customAccent/20" : "bg-complementary/10"
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

          {/* <div className="mb-7 flex flex-col items-start justify-center lg:items-center mt-28">
            <ChalkTitle
              title="Empowering You to Take Control"
              className="mt-10 md:w-2/3 lg:text-center"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              Our Support Coordinators are committed to helping you
            </p>
          </div>
          <div className="w-full lg:w-[500px] mx-auto flex flex-col rounded-2xl overflow-hidden mt-6">
            {[
              "Make Informed Decisions about your services and future.",
              "Connect with Local Resources for additional support.",
              "Maximize the Value of Your NDIS Plan to access the best services.",
              "Build Meaningful Social Connections to foster a sense of belonging.",
              "Develop Confidence & Independence in managing daily life.",
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
          </div> */}


          {/* the new section goes here */}
          <div className="mb-7 flex flex-col items-start justify-center lg:items-center mt-28 p-4">
            {/* Heading remains centered above the two-column layout */}
            <ChalkTitle
              title="Empowering You to Take Control"
              className="mt-10 md:w-2/3 lg:text-center"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              Our Support Coordinators are committed to helping you
            </p>
          </div>

          {/* New flex container for the left content and right image */}
          {/* Key: `md:flex-row` ensures content on left, image on right for larger screens */}
          <div className="flex flex-col md:flex-row items-start justify-center gap-8 px-4 pb-16 lg:max-w-6xl mx-auto">

            {/* Left Column: Introductory Paragraph and List of Items */}
            <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
              {/* Existing paragraph content */}
              <div className="p-6 bg-gray-50 text-gray-700 font-inter text-base leading-relaxed rounded-xl shadow-sm">
                 <ul className="space-y-4 text-lg text-gray-700">
            {/* Each list item with a leading bullet point */}
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2 text-xl">&bull;</span>
              Make Informed Decisions about your services and future.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2 text-xl">&bull;</span>
              Connect with Local Resources for additional support.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2 text-xl">&bull;</span>
              Maximize the Value of Your NDIS Plan to access the best services.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2 text-xl">&bull;</span>
              Build Meaningful Social Connections to foster a sense of belonging.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-bold mr-2 text-xl">&bull;</span>
              Develop Confidence & Independence in managing daily life.
            </li>
          </ul>
              </div>

              {/* The list of items, now aligned to the left */}
             
            </div>

            {/* Right Column: Image */}
            <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/support/1.jpeg" // IMPORTANT: Replace with your actual image path for this section
                alt="Empowering control"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                className="object-cover object-center"
              />
              {/* Optional: Add a subtle overlay for visual depth if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
          


          {/* the newer section will be here */}


          <div className="mb-7 flex flex-col items-start justify-center lg:items-center mt-28 p-4">
            {/* Heading remains centered above the two-column layout */}
            <ChalkTitle
              title="Empowering You to Take Control"
              className="mt-10 md:w-2/3 lg:text-center"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              Our Support Coordinators are committed to helping you
            </p>
          </div>

          {/* New flex container for the left image and right content */}
          {/* Key: `md:flex-row` will place the first child (image) on the left */}
          <div className="flex flex-col md:flex-row items-start justify-center gap-8 px-4 pb-16 lg:max-w-6xl mx-auto">

            {/* Left Column: Image */}
            <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/support/3.jpeg" // IMPORTANT: Replace with your actual image path for this section
                alt="Empowering control"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                className="object-cover object-center"
              />
              {/* Optional: Add a subtle overlay for visual depth if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Right Column: Introductory Paragraph and List of Items */}
            <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
              {/* Existing paragraph content */}
              <div className="p-6 bg-gray-50 text-gray-700 font-inter text-base leading-relaxed rounded-xl shadow-sm">
                <p className="mb-4">
                 At Ably Care, we're here to guide you through the NDIS process with confidence. 
                 We’ll help you understand eligibility and documentation, ensuring you access the right 
                 support services for your needs. You're never alone –we’re with you every step of the way.

                </p>
                
              </div>

              {/* The list of items, now aligned to the left */}
              
            </div>
          </div>

          <div className="relative w-full h-96 flex justify-center items-center flex-col mt-24 overflow-hidden rounded-2xl">
            <div className="flex flex-col items-center justify-start w-full p-4 relative z-10">
              <h3 className="text-2xl lg:text-3xl font-poppins text-white font-semibold text-center">
                Let’s Navigate Your NDIS Plan Together!
              </h3>
              <p className="text-xs font-inter text-white font-light text-center mt-1">
                Our team is ready to guide you every step of the way helping you
                feel <br className="hidden sm:block" /> confident, supported,
                and in control.
              </p>
              <Link href={"/contact"}>
                <Button
                  variant={"default"}
                  className="mt-6 lg:mt-3 bg-customAccent hover:bg-complementary text-white"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="absolute top-0 z-[5] w-full h-full">
              <Image
                src={"/images/support-bg.jpg"}
                alt="Referral background"
                fill
                sizes="100%"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="absolute top-0 bg-gradient-to-t from-black to-transparent z-[7] w-full h-full"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportCoordination;
