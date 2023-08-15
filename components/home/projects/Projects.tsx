import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Chama Hub",
    imgSrc: "project-imgs/chamalogo.png",
    code: "https://github.com/moriisaac/Chama-APP",
    projectLink: "https://chamahub.pythonanywhere.com",
    tech: ["Django", "SQLite3", "Python", "FastAPI"],
    description:
      "A real-time coaching app for Chama's and financial groups to manage their financial systems, This app makes me proud",
    modalContent: (
      <>
        <p>
        ChamaHub.A real-time coaching app for Chama's and financial groups to manage their financial systems, 
        This app makes me proud
        </p>
        <p>
          The tech stack is based on top of Django for the web app,
          connected to a Python & Django backend, with data stored in Postgres,
          deployed on Pythonanywhere.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          
        </p>
        <p>
          
        </p>
      </>
    ),
  },
  {
    title: "The Hot Platform App",
    imgSrc: "project-imgs/hotplat.PNG",
    code: "https://github.com/the-hot-platform-23",
    projectLink: "https://thp-frontend.vercel.app/",
    tech: ["Python", "Django", "Nextjs", "Postgres"],
    description:
      "The Hot Platform is a revolutionary app that offers a comprehensive ecosystem to individuals in undeserved markets.",
    modalContent: (
      <>
        
        <p>
          With cutting edge business tools, creative resources, extensive networks, and career opportunities, it serves as a one-stop destination for users to unlock their full potential in personal, professional and businee endeavors
        </p>
        <p>
          I serve as the CIO and Backend Lead for The Hot Platform app
        </p>
        <p>
          The team in total consists of 12 developers. This is a passion project
          for all of us.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        
      </>
    ),
  }

//     title: "BrushWire",
//     imgSrc: "project-imgs/example-project.jpg",
//     code: "https://www.github.com",
//     projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//     tech: ["NextJS", "Java", "Spring", "AWS Aurora"],
//     description:
//       "Think Zapier but for paint. Built with a team of four college friends and scaled to > 1 billion requests per day. This was a fun one.",
//     modalContent: (
//       <>
//         <p>
//           Brush wire is essentially Zapier but for paint. Built with a team of
//           four college friends and scaled to {">"} 1 billion requests per day.
//           This was a fun one.
//         </p>
//         <p>
//           Since &quot;Zapier for paint&quot; doesn&apos;t mean anything, be
//           creative {":)"}
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
//           quia officia odio nulla consectetur aperiam ad tempora magni magnam
//           nesciunt.
//         </p>
//         <p>
//           Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
//           rerum dolorum. Deserunt soluta modi culpa animi.
//         </p>
//       </>
//     ),
//   },
//   {
//     title: "Paint Reference 4",
//     imgSrc: "project-imgs/example-project.jpg",
//     code: "https://www.github.com",
//     projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
//     tech: ["Python", "FastAPI", "SQLAlchemy"],
//     description:
//       "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
//     modalContent: (
//       <>
//         <p>Alright, you got me. I&apos;m all out of paint references.</p>
//         <p>
//           Point is, use this space to explain a bit further WHAT this project
//           is, as well as what YOU contributed to it.
//         </p>
//         <p>You get the idea. Now more lorem {":)"}</p>
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
//           quia officia odio nulla consectetur aperiam ad tempora magni magnam
//           nesciunt.
//         </p>
//         <p>
//           Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
//           rerum dolorum. Deserunt soluta modi culpa animi.
//         </p>
//       </>
//     ),
//   },
// 
];
