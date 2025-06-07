import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import proj1 from '@/assets/projects/ar_projectnobgv22.webp';
import proj2 from '@/assets/projects/game_proj_v2.webp';
import proj4 from '@/assets/projects/GREENPLANET.webp';
import proj5 from '@/assets/projects/starbucks-react_vite.webp';
import proj6 from '@/assets/projects/MichiRamen_SASSv2.webp';
import proj7 from '@/assets/projects/blog_SASSv2.webp';
import proj8 from '@/assets/projects/GymWebsitev2.webp';
import proj9 from '@/assets/projects/music_webv2.webp';
import proj10 from '@/assets/projects/meralco_webv2.webp';
import proj11 from '@/assets/projects/agency_webv2.webp';
import proj12 from '@/assets/projects/sushi_webv2.webp';
import proj13 from '@/assets/projects/travel_webv2.webp';
import proj14 from '@/assets/projects/blog_webv2.webp';
import proj15 from '@/assets/projects/sunglasses_webv2.webp';
import proj16 from '@/assets/projects/portfoliov3.1_webv2.webp';
import proj17 from '@/assets/projects/bandticket_webv2.webp';
import proj18 from '@/assets/projects/digitalStud_webv2.webp';
import trailer from '@/assets/images/ComingSoonv2.png'


const portfolioProjects = [
  
  {
    company: "Personal Project Templates",
    year: "2025",
    title: "American Signed Language Web App",
    results: [
      { id: 1, title: "#" },
      { id: 2, title: "#" },
      { id: 3, title: "#" },
    ],
    link: "#",
    image: trailer,
  },
   
   {
    company: "Personal Project Templates",
    year: "2025",
    title: "Digital Creative Studio",
    results: [
      { id: 1, title: "Buttery-smooth Lenis scroll animations" },
      { id: 2, title: "UI micro-interactions for engagement" },
      { id: 3, title: "Vite-optimized performance" },
    ],
    link: "https://react-creat-stud-lenis-vite.vercel.app/",
    image: proj18,
  },
   {
    company: "Personal Project Templates",
    year: "2024",
    title: "DarkMoon Web",
    results: [
      { id: 1, title: "Dynamic 3D tilt interactions" },
      { id: 2, title: "GSAP animations for immersive flow" },
      { id: 3, title: "Next.js SSR for blazing-fast loads" },
    ],
    link: "https://react-dark-moon-nextjs.vercel.app/",
    image: proj17,
  },
   {
    company: "Personal Project Templates",
    year: "2025",
    title: "Portfolio_v3.1",
    results: [
      { id: 1, title: "Showcase Project in Creative Way" },
      { id: 2, title: "Bold, content-first design" },
      { id: 3, title: "Silky hover animations" },
    ],
    link: "https://react-portfolio-v3-1-vite.vercel.app/",
    image: proj16,
  },
   {
    company: "Personal Project Templates",
    year: "2024",
    title: "Sunglasses Web",
    results: [
      { id: 1, title: "Built with HTML5 & GSAP" },
      { id: 2, title: "Animated product transitions" },
      { id: 3, title: "Interactive frame customization" },
    ],
    link: "https://van-glasses-greenshock.vercel.app/",
    image: proj15,
  },
   {
    company: "Personal Project Templates",
    year: "2024",
    title: "Minimalist Blog Platform",
    results: [
      { id: 1, title: "Clean reading experience" },
      { id: 2, title: "Content-first architecture" },
      { id: 3, title: "Distraction-free interface" },
    ],
    link: "https://van-simpleblog-web-html-5-css.vercel.app/",
    image: proj14,
  },
   {
    company: "Personal Project Templates",
    year: "2024",
    title: "Travel Explorer Portal",
    results: [
      { id: 1, title: "Immersive destination showcases" },
      { id: 2, title: "Interactive booking journey" },
      { id: 3, title: "Location-based recommendations" },
    ],
    link: "https://van-travel-web-html-5-css.vercel.app/",
    image: proj13,
  },
   {
    company: "Personal Project Templates",
    year: "2024",
    title: "Sushi Website Experience",
    results: [
      { id: 1, title: "Visual culinary storytelling" },
      { id: 2, title: "Seamless mobile navigation" },
      { id: 3, title: "Accessible food discovery UI" },
    ],
    link: "https://van-react-sushi-website.vercel.app/",
    image: proj12,
  },
   {
    company: "Personal Project Templates",
    year: "2024",
    title: "Agency Landing Page",
    results: [
      { id: 1, title: "Copy-optimized for leads" },
      { id: 2, title: "Clean layout and standard design" },
      { id: 3, title: "Business-focused UI components" },
    ],
    link: "https://van-funnel-landing-page.vercel.app/",
    image: proj11,
  },
   {
    company: "Redesign Web_Event",
    year: "2024",
    title: "Meralco Website Redesign",
    results: [
      { id: 1, title: "Redesigned using HTML and CSS" },
      { id: 2, title: "Modern and user-friendly interface" },
      { id: 3, title: "Improved layout and readability" },
    ],
    link: "https://van-meralco-redesigned.vercel.app/",
    image: proj10,
  },
   {
    company: "Personal Project Templates",
    year: "2024",
    title: "Music Website Landing Page",
    results: [
      { id: 1, title: "Clean layout with artist theme" },
      { id: 2, title: "Responsive across all screen sizes" },
      { id: 3, title: "Smooth transitions and simple UI" },
    ],
    link: "https://van-music-website-html-css.vercel.app/",
    image: proj9,
  },
   {
    company: "FBS-OJT-Gym",
    year: "2024",
    title: "Gym Website Landing Page",
    results: [
      { id: 1, title: "Bold and energetic design style" },
      { id: 2, title: "Responsive layout for all devices" },
      { id: 3, title: "Modern sections and smooth scrolling" },
    ],
    link: "https://ojt-sass-gym-proj-4.vercel.app/",
    image: proj8,
  },
  //  {
  //   company: "FBS-OJT-Blog",
  //   year: "2024",
  //   title: "Blog Dark Mode",
  //   results: [
  //     { id: 1, title: "Clean and minimal blog layout" },
  //     { id: 2, title: "Responsive and mobile-friendly design" },
  //     { id: 3, title: "Static content with styled posts" },
  //   ],
  //   link: "#",
  //   image: proj7,
  // },
   {
    company: "FBS-OJT-Ramen",
    year: "2024",
    title: "Michi Ramen Website",
    results: [
      { id: 1, title: "Built with HTML, Sass, JavaScript" },
      { id: 2, title: "Clean and modern UI design" },
      { id: 3, title: "Interactive and scroll-based layout" },
    ],
    link: "https://ojt-sass-michiramen-proj-5.vercel.app/",
    image: proj6,
  },
  //  {
  //   company: "FBS-Ojt-Starbucks",
  //   year: "2024",
  //   title: "Starbucks Website Clone",
  //   results: [
  //     { id: 1, title: "Responsive and mobile-friendly design" },
  //     { id: 2, title: "Pixel-perfect UI and layout" },
  //     { id: 3, title: "Modern component-based structure" },
  //   ],
  //   link: "https://github.com/ggpio18/OJT-REACT-STARBUCKS-proj-1-",
  //   image: proj5,
  // },
  {
    company: "Dolores Tourism",
    year: "2023",
    title: "Informative Tourism Website with the use of AR",
    results: [
      { id: 1, title: "Enhanced user experience" },
      { id: 2, title: "Improved Tourism" },
      { id: 3, title: "Increased mobile traffic" },
    ],
    link: "https://github.com/ggpio18/t-guide-design-v3-1-thesis",
    image: proj4,
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
    link: "https://github.com/ggpio18/Greenplanet-E_Commerce-WP",
    // srcCode:"#",
    image: proj1,
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
                    {/* in Works */}
                  {/* <a href={project.srcCode}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold 
                      inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Code</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a> */}
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
