import {
  Ellipse,
  Ellipse2,
  AccordionIcon1,
  AccordionIcon2,
  AccordionIcon3,
  AccordionIcon4,
  AccordionIcon5,
} from "../../Utilities/Svgs";
import AccordionItem from "./AccordionItem";
import { useState } from "react";
const About = () => {
  const [activeAccordions, setActiveAccordions] = useState([]);
  const handleAccordionClick = (name) => {
    setActiveAccordions((prev) => {
        if (prev.includes(name)) {
          return prev.filter((item) => item!== name);
        } else {
          return [...prev, name];
        }
    });
  };
  return (
    <section id="about" className="relative">
      <Ellipse className="circle -z-20 absolute top-28" />
      <Ellipse2 className="circle -z-20 absolute  right-0 top-72" />
      <Ellipse className="circle -z-20 absolute top-3/4" />
      <div className="container mx-auto px-4 py-16">
        <h2 className="about__title text-4xl text-center font-extrabold mb-6">
          About Company Easier
        </h2>
        <div className="accordion flex flex-col gap-6">
          <div className="space-y-4 sm:grid sm:grid-cols-2 md:grid-cols-1 sm:space-y-0 sm:gap-4">
            <AccordionItem
              onSelect={() => handleAccordionClick("our-story")}
              isActive={activeAccordions.includes("our-story")}
              headerText="Our Story"
              icon={<AccordionIcon1 />}
              text="Company Easier was founded with the vision of simplifying access to company information. Our story is a testament to our commitment to transparency and accessibility."
            />
            <AccordionItem
              onSelect={() => handleAccordionClick("mission-values")}
              isActive={activeAccordions.includes("mission-values")}
              headerText="Mission & Values"
              icon={<AccordionIcon2 />}
              text="At Company Easier, our mission is to empower individuals with accurate and timely information about their favorite companies. Our values revolve around integrity, innovation, and user-centricity."
            />
            <AccordionItem
              onSelect={() => handleAccordionClick("team-culture")}
              isActive={activeAccordions.includes("team-culture")}
              headerText="Team & Culture"
              icon={<AccordionIcon3 />}
              text="Meet our diverse team of passionate individuals who contribute to our vibrant and collaborative culture. We believe in fostering creativity and collaboration."
            />
            <AccordionItem
              onSelect={() => handleAccordionClick("innovation")}
              isActive={activeAccordions.includes("innovation")}
              headerText="Innovation Focus"
              icon={<AccordionIcon4 />}
              text="Innovation is at the heart of what we do. Explore how we leverage cutting-edge technologies to provide a seamless and efficient experience for our users."
            />
            <AccordionItem
              onSelect={() => handleAccordionClick("benefits")}
              isActive={activeAccordions.includes("benefits")}
              headerText="User Benefits"
              icon={<AccordionIcon5 />}
              text="Discover the numerous benefits of using Company Easier, from staying updated on company news to making informed investment decisions. Your journey with us is filled with advantages."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
