import memojiImage from '@/assets/images/memoji-computer.png';
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg';

export const HeroSection = () => {
  return ( 
  <div className='py-32'>
    <div className="container">
      <div className='flex flex-col items-center'>
        <Image src={memojiImage} 
        className='size-[100px]'
         alt="Person peeking from behind the laptop"/>
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
              <div className='bg-green-500 size-2.5 rounded-full'></div>
              <div className='text-sm font-medium'>Available for new projects</div>
          </div>
      </div>
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide">Building expetional user exepreinceis</h1>
          <p className="mt-4 text-center text-white/60">2
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat corporis odit ad consectetur, debitis culpa excepturi?
          </p>
          <div className='flex flex-col items-center'>
            <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
              <span className='font-semibold'>Explore my work here</span>
              <ArrowDown className="size-4"/>
            </button>

            <button>
              <span>👋</span>
              <span>Lets Connect</span>
            </button>
          </div>
    </div>
  </div>
  );
};
