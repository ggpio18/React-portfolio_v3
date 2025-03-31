import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import proj1 from '@/assets/projects/ar_projectnobgv22.webp';
import proj2 from '@/assets/projects/game_proj_v2.webp';
import proj4 from '@/assets/projects/GREENPLANET.webp';

const portfolioProjects = [
  {
    company: "Dolores Tourism",
    year: "2023",
    title: "Informative Tourism Website with the use of AR",
    results: [
      { id: 1, title: "Enhanced user experience" },
      { id: 2, title: "Improved Tourism" },
      { id: 3, title: "Increased mobile traffic" },
    ],
    link: "#",
    image: proj1,
  },
  {
    company: "Project Game STI College",
    year: "2023",
    title: "The Explorer Game Unity",
    results: [
      { id: 1, title: "Enhanced 3D Learning Experiences" },
      { id: 2, title: "Interactive Exploration for Deeper Understanding" },
      { id: 3, title: "Boost Creativity & Problem-Solving Skills" },
    ],
    link: "#",
    image: proj2,
  },
  {
    company: "GreenPlanet",
    year: "2019",
    title: "GreenPlanet E-commerce Website WordPress",
    results: [
      { id: 1, title: "Effortless Navigation for Easy Product Discovery" },
      { id: 2, title: "Optimized for a Flawless Mobile Shopping Experience" },
      { id: 3, title: "Fast, Responsive, and User-Friendly Design" },
    ],
    link: "#",
    image: proj4,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured projects"
          description="Showcasing impactful projects that deliver real-world results."
        />

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={`${project.title}-${projectIndex}`} // ✅ Unique key for each project
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 20}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-500 to-sky-400 inline-flex gap-2 
                    font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>

                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.id} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold 
                      inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
