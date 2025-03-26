import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import tests from '@/assets/images/test.jpg'
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import proj1 from '@/assets/projects/AR_project.png';
import proj2 from '@/assets/projects/game_proj.png';
import proj3 from '@/assets/projects/sign_language_proj.png';
import proj4 from '@/assets/projects/ecommerce_proj.jpg';

const portfolioProjects = [
  {
    company: "Dolores Tourism",
    year: "2023",
    title: "Informative Tourism Website with the use of AR",
    results: [
      { title: "Enhanced user experience" },
      { title: "Improved Tourism " },
      { title: "Increased mobile traffic" },
    ],
    link: "#",
    image: proj1,
  },
  {
    company: "Project Game STI Collge",
    year: "2023",
    title: "The Explorer Game Unity",
    results: [
      { title: "Enhanced 3D Learning Experiences" },
      { title: " Interactive Exploration for Deeper Understanding" },
      { title: "Boost Creativity & Problem-Solving Skills" },
    ],
    link: "#",
    image: proj2,
  },
  {
    company: "GreenPlanet",
    year: "2019",
    title: "GreenPlanet Ecomerce Website Wordpress",
    results: [
      { title: "Effortless Navigation for Easy Product Discovery" },
      { title: "Optimized for a Flawless Mobile Shopping Experience" },
      { title: "Fast, Responsive, and User-Friendly Design" },
    ],
    link: "#",
    image: proj4,
  },
];

export const ProjectsSection = () => {
  return (
  <section className="pb-16 lg:py-24" id="projects">
    <div className="container">
      <SectionHeader eyebrow="Real-world Results" 
      title="Featured projects" 
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, saepe rerum?"/>

      <div className="mt-10 md:mt-20 flex flex-col gap-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card 
            key={project.title} 
            className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
            style={{
              top: `calc(64px + ${projectIndex * 20}px`,
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
             {project.results.map(result => (
              <li className="flex gap-2 text-sm md:text-base text-white/50">
                <CheckCircleIcon className="size-5 md:size-6"/>
                <span>{result.title}</span>
                </li>
             ))}
            </ul>
              <a href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold 
                inline-flex items-center justify-center gap-2 mt-8">
                 <span>View Live site</span> 
                 <ArrowUpRightIcon className="size-4"/>
                </button>
              </a>
              </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title}
                  className="mt-8 -mb-4 md:-mb-0 lg:mt-0  lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
  );
};
