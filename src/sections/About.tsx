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
]

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
      eyebrow="About me"
      title="A glimpse Into my World"
      description="Learn more about who i am what i do and what inspires me"/>
        <div>
            <Card>
              <div>
                <StarIcon/>
                <h3>My Reads</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <Image src={bookImage} alt="Book cover"/>
            </Card>

            <Card>
              <div>
                <StarIcon/>
                <h3>My Toolbox</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
                <div>
                  {toolboxItems.map(item =>(
                    <div key={item.title}>
                      <TechIcon component={item.iconType}/>
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>
            </Card>

            <Card>
              <div>
                <StarIcon/>
                <h3>Beyodn the Code</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
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
  );
};
