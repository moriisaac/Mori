import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "The Hot Platform",
    position: "Chief Technology Officer",
    time: "2023 - present",
    location: "Zambia",
    description:
      "I currently Hold this position as the Chief Technology Officer and it is fun.",
    tech: ["Team Management", "Leadership", "Time Management"],
  },
  {
    title: "CargoAI",
    position: "Python Engineer",
    time: "2023 - Present",
    location: "Singapore",
    description:
      "I help build and scale automation by developing reliable and effective web crawlers. Increased throughput of our primary services by 70%. ",
    tech: [

      "Python",
      "Selenium",
      "BeautifulSoup",
      "Scrapy",      
      "GCP",
      "Git",
      "GitHub",
      
    ],
  },
  {
    title: "DoWell Research GMBH",
    position: "Python Developer",
    time: "2023 - present",
    location: "Germany",
    description:
      "Python Developer I helped develop and design the database Schema in MongoDB.  Also played some ping pong. It was fun.",
    tech: ["Python", "Django", "MongoDB", "GraphQL", "Presto", "Cassandra"],
  },
  {
    title: "Empins Travel Agency",
    position: "Full Stack Developer",
    time: "2023 - present",
    location: "Kenya",
    description:
      "Senior Full Stack engineer I helped develop and design the Company's Ecommerce Websites, Emfresh, Empins and Empins realestate.  Also played some ping pong. It was fun.",
    tech: ["Python", "Django", "React", "GraphQL", "Angualar", "Digital Ocean"],
  },
  {
    title: "Ivy",
    position: "Machine Learning Engineer Intern",
    time: "2022 - 2023",
    location: "USA",
    description:
      "Machine Learnging Engineer I helped contribute To Ivy's goal of having Machine learning on one framework ",
    tech: [
      "Tensorflow",
      "Python",
      "Pandas",
      "Numpy",
      "Pytorch",
      "PySpark",
      "HDFS",
      
    ],
  },
];
