import ChalkTitle from "@/components/ChalkTItle";
import PlanManagementHero from "@/components/planManagement/PlanManagementHero";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "Plan Management | Ably Care",
}


const PlanManagement = () => {
  return (
    <>
      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-20">
        <PlanManagementHero />
      </main>
      <div className="w-full p-4">
        <div className="py-6 md:py-16 container mx-auto px-4 max-w-6xl" id="learn-more">
          <div className="mb-7 flex flex-col items-start justify-center lg:items-center  p-4">
            <ChalkTitle
              title="About our Plan Management"
              className="mt-10 md:w-2/3 lg:text-center"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              Managing your NDIS plan shouldn’t be overwhelming.               
            </p>
          </div>
          <div className="w-full lg:w-[900px] mx-auto flex flex-col rounded-2xl overflow-hidden mt-6">
            {/* The content you provided will go here */}
            <div className="p-1 bg-gray-10 text-gray-700 font-inter text-base leading-relaxed text-center">
              <p className="mb-4">
                At Ably Care, our NDIS plan management is designed to support you every step of the way. We work closely with you to ensure your plan is managed with care, professionalism, and attention to detail.
              </p>
              <p className="mb-4">
                From budgeting and managing your funds to liaising with service providers, we’re here to make the process as smooth and stress-free as possible. Our team is dedicated to helping you achieve your goals, providing the support you need to access the services that matter most to you.
              </p>
              <p>
                With Ably Care, you can focus on what truly matters while we handle the rest.
              </p>
            </div>
          </div>

          {/* <div className="w-full flex flex-col items-start md:items-center justify-start lg:justify-center mt-24">
            <ChalkTitle
              title="Our services"
              className="mt-10"
              underlineColor="#f8ab39"
            />

            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              our NDIS plan management is designed to support you every step of the way
            </p>
          </div>

          <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 p-6 sm:max-w-4xl">
            {[
              {
                title: "Choice and Control",
                subTitle:
                  "Our mission is to create an inclusive Australia where everyone has the opportunity to reach their full potential. ",
              },
              {
                title: "Transparency",
                subTitle:
                  "we ensure full transparency keeping you informed, in control, and confident in every decision.",
              },
              {
                title: "Budget Monitoring",
                subTitle:
                  "Your budget balances are automatically updated once invoices are paid, so you will always know how much you have spent and how much is left in your budget.",
              },
            ].map((item, index) => (
              <Card
                className="rounded-xl overflow-hidden bg-gray-50"
                key={index}
              >
                <CardHeader className="p-0">
                  <div className="relative bg-customAccent rounded-xl rounded-l-none p-4 flex flex-col items-start justify-center">
                    <CardTitle className="text-white font-poppins">
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-4">
                  <CardDescription className="font-inter  text-gray-700 font-normal text-base leading-relaxed">
                    <p className="mb-2 font-poppins text-gray-700 font-semibold text-sm">
                      {item.subTitle}
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div> */}

          <div className="mb-7 flex flex-col items-start justify-center lg:items-center mt-24">
            <ChalkTitle
              title="Our Services"
              className="mt-10 lg:w-[55%] text-start lg:text-center"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              our NDIS plan management is designed to support you every step of the way
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 rounded-2xl gap-10 mb-36">
            {[
              {
                image: "/icons/fund-monitoring-icon.png",
                title: "Choice and Control",
                description: " Our mission is to create an inclusive Australia where everyone has the opportunity to reach their full potential. ",
              },
              {
                image: "/icons/plan_management.png",
                title: "Transparency",
                description: "we ensure full transparency—keeping you informed, in control, and confident in every decision. ",
              },
              {
                image: "/icons/ndis-pricing-elegibility.jpg.png",
                title: "Budget Monitoring",
                description: "Your budget balances are automatically updated once invoices are paid, so you will always know how much you have spent and how much is left in your budget.",
              },
            ].map((item, index) => (
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
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="w-full flex flex-col items-start md:items-center justify-start lg:justify-center mt-24">
            <ChalkTitle
              title="Expert Guidance & Personalized Support"
              className="mt-10"
              underlineColor="#f8ab39"
            />

            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              Our NDIS specialists provide
            </p>
          </div>

          <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 p-4 sm:max-w-4xl">
            {[
              {
                title: "Regulation Compliance",
                subTitle: "We navigate NDIS guidelines for you.",
              },
              {
                title: "Proactive Problem Solving",
                subTitle:
                  "Addressing financial & administrative challenges swiftly.",
              },
              {
                title: "Tailored Plan Management",
                subTitle: "Services customized to your needs and preferences.",
              },
            ].map((item, index) => (
              <Card
                className="rounded-xl overflow-hidden bg-gray-50"
                key={index}
              >
                <CardHeader className="pl-0">
                  <div className="relative bg-customAccent rounded-xl rounded-l-none p-4 flex flex-col items-start justify-center">
                    <CardTitle className="text-white font-poppins">
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-inter">
                    <p className="mb-2 font-poppins text-gray-700 font-semibold text-sm">
                      {item.subTitle}
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div> */}

     
          <div className="mb-7 flex flex-col items-start justify-center lg:items-center mt-20 p-4">
                {/* Heading remains centered above the new two-column layout */}
                <ChalkTitle
                  title="Unlocking choice and Control"
                  className="mt-10 md:w-2/3 lg:text-center"
                  underlineColor="#f8ab39"
                />
                <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
                  Helping You Build Capacity We don’t just manage your
                  <br className="hidden md:block" />
                  NDIS plan we empower you to make the most of it
                </p>
              </div>

              {/* New flex container for the image and content side-by-side */}
              <div className="flex flex-col md:flex-row items-start justify-center gap-8 px-4 pb-16 lg:max-w-6xl mx-auto">
                {/* Left Column: Image */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/plan/1.jpeg" // IMPORTANT: Replace with your actual image path
                    alt="Empowering choice and control"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                    className="object-cover object-center"
                  />
                  {/* Optional: Add a subtle overlay for visual depth if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Right Column: Existing Text and List */}
                <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
                  {/* This is the paragraph content you previously modified */}
                 

                  {/* The list of items, now aligned to the left */}
                  <div className="w-full flex flex-col rounded-2xl overflow-hidden">
                    {[
                      {
                        title: "Freedom to Choose Provider",
                        subTitle: "You have the freedom to choose any provider that meets your needs and budget, without any restrictions.",
                      },
                      {
                        title: "Stress-Free Financial Administration ",
                        subTitle: "We handle invoices, payments, and tracking",
                      },
                      {
                        title: "Full Transparency & Compliance",
                        subTitle:
                          "We ensure your funds are managed accurately.",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`cursor-pointer flex gap-2 items-start w-full p-6 ${
                          index % 2 === 0 ? "bg-customAccent/20" : "bg-complementary/20"
                        } hover:bg-customAccent transition-all duration-300 ease-in-out group`}
                      >
                        <CircleCheckBig className="text-green-500 w-5 h-5 mt-1" />
                        <div className="w-full flex flex-col items-start justify-center gap-1">
                          <h1 className="font-poppins text-lg text-gray-800 group-hover:text-white transition-all duration-300 ease-in-out">
                            {item.title}
                          </h1>
                          <p className="w-[90%] text-sm md:w-auto font-inter text-gray-600 group-hover:text-white transition-all duration-300 ease-in-out">
                            {item.subTitle}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>



              {/* {nexrt left} */}


              <div className="mb-7 flex flex-col items-start justify-center lg:items-center mt-20 p-4">
                  {/* Updated Heading for this section, remains centered above the two-column layout */}
                  <ChalkTitle
                    title="Beyond Financials"
                    className="mt-10 md:w-2/3 lg:text-center"
                    underlineColor="#f8ab39"
                  />
                  <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
                    Helping You Build Capacity. We don’t just manage your
                    <br className="hidden md:block" />
                    NDIS plan; we empower you to make the most of it.
                  </p>
                </div>

                {/* New flex container for the content and image side-by-side */}
                {/* Key change: `md:flex-row-reverse` to put the image on the right on larger screens */}
                <div className="flex flex-col md:flex-row-reverse items-start justify-center gap-8 px-4 pb-16 lg:max-w-6xl mx-auto">

                  {/* Right Column: Image */}
                  <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/plan/2.jpeg" // IMPORTANT: Replace with your actual image path for this section
                      alt="Beyond Financials"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                      className="object-cover object-center"
                    />
                    {/* Optional: Add a subtle overlay for visual depth if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Left Column: Placeholder Text and List */}
                  <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
                    {/* Placeholder for your new content */}
                   

                    {/* The list of items, now aligned to the left and accompanying the placeholder text */}
                    <div className="w-full flex flex-col rounded-2xl overflow-hidden">
                      {[
                        {
                          title: "Budgeting & Financial Planning",
                          subTitle: "Ensuring effective fund utilization.",
                        },
                        {
                          title: "Educational Resources",
                          subTitle: "Enhancing your understanding of plan management.",
                        },
                        {
                          title: "Provider Selection Guidance",
                          subTitle:
                            "Helping you choose the best services for your needs.",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className={`cursor-pointer flex gap-2 items-start w-full p-6 ${
                            index % 2 === 0 ? "bg-customAccent/20" : "bg-complementary/20"
                          } hover:bg-customAccent transition-all duration-300 ease-in-out group`}
                        >
                          <CircleCheckBig className="text-green-500 w-5 h-5 mt-1" />
                          <div className="w-full flex flex-col items-start justify-center gap-1">
                            <h1 className="font-poppins text-lg text-gray-800 group-hover:text-white transition-all duration-300 ease-in-out">
                              {item.title}
                            </h1>
                            <p className="w-[90%] text-sm md:w-auto font-inter text-gray-600 group-hover:text-white transition-all duration-300 ease-in-out">
                              {item.subTitle}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

          <div className="relative w-full h-96 flex justify-center items-center flex-col mt-24 overflow-hidden rounded-2xl">
            <div className="flex flex-col items-center justify-start w-full p-4 relative z-10">
              <h3 className="text-2xl lg:text-3xl font-poppins text-white font-semibold text-center">
                Take Control of Your NDIS Plan Today!
              </h3>
              <p className="text-xs font-inter text-white font-light text-center mt-1">
                Let Ably Care handle your financial & administrative tasks, so you can focus on <br className="hidden sm:block"/> what truly matters—living life to the fullest.
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
                src={"/images/management-bg.jpg"}
                alt="Referral background"
                fill
                sizes="100%"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="absolute top-0 bg-gradient-to-t from-black to-transparent z-[7] w-full h-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanManagement;
