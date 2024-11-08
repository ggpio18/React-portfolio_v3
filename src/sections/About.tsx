import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HtmlIcon from '@/assets/icons/html5.svg';
import CSSIcon from '@/assets/icons/square-js.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from '@/assets/images/memoji-smile.png';
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: 'javascript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon,
  },
  {
    title: 'CSS3',
    iconType: CSSIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: 'Gaming',
    emoji: '😂'
  },
  {
    title: 'Photography',
    emoji: '🤞'
  },
  {
    title: 'Painting',
    emoji: '🎂'
  },
  {
    title: 'Biking',
    emoji: '🐱‍👤'
  },
  {
    title: 'Music',
    emoji: '🐱‍🏍'
  },
  {
    title: 'Reading',
    emoji: '🎶'
  },
  {
    title: 'Code',
    emoji: '🤣'
  },
];



export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
        eyebrow="About me"
        title="A glimpse Into my World"
        description="Learn more about who i am what i do and what inspires me"/>
          <div className="mt-20 flex flex-col gap-8">
              <Card className="h-[320px]">
               <CardHeader 
               title="My reads" 
               description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
               />
                <div className="w-40 mx-auto mt-8">
                  <Image src={bookImage} alt="Book cover"/>
                </div>
              </Card>

              <Card className="h-[320px] p-0">
                <CardHeader 
                title="My Toolbox" 
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                className="px-6 pt-6"
                />
                  <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName=""/>
                  <ToolboxItems 
                  items={toolboxItems} 
                  className="mt-6 "
                  itemsWrapperClassName="-translate-x-1/2"/>
              </Card>

              <Card>
                <CardHeader 
                title="Beyodn the Code" 
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                />

                    <div>
                      {hobbies.map(hobby => (
                        <div key={hobby.title}>
                          <span>{hobby.title}</span>
                          <span>{hobby.emoji}</span>
                        </div>
                      ))}
                    </div>
              </Card>

              <Card>
                <Image src={mapImage} alt="map"/>
                <Image src={smileMemoji} alt="smilling memoji"/>
              </Card>
          </div>
      </div>
    </div>
  );
};
