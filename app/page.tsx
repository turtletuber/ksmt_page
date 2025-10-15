'use client';

import Image from 'next/image';
import DonateButton from '@/components/DonateButton';
import { Patrick_Hand } from "next/font/google";
import { useState, useEffect } from 'react';

const patrickHand = Patrick_Hand({
    subsets: ['latin'],
    weight: ['400']
})

const IMAGEKIT_URL = "https://ik.imagekit.io/klu2pqgpo"

const HeroSection = () => {
  return (
    <section className="scroll-section bg-blue-100 flex flex-col justify-center items-center">
                  <div className="relative bg-white p-1 sm:p-2 md:p-4 shadow-lg rounded-md mt-4 sm:mt-8">
                    <div className="absolute -top-4 -left-4 w-32 h-10 bg-masking-tape bg-opacity-50 transform -rotate-45 shadow-md"></div>
                    <div className="absolute -top-4 -right-4 w-32 h-10 bg-masking-tape bg-opacity-50 transform rotate-45 shadow-md"></div>
                    <Image
                      src={`${IMAGEKIT_URL}/KSMT_hero.png`}
                      alt="Kids Should Make Things Hero"
                      width={1200}
                      height={720}
                      className="w-full h-auto object-contain max-w-7xl"
                    />
                  </div>
                  <div className="text-center px-2 sm:px-4 md:px-8 mt-8">
                    <h1 className={`${patrickHand.className} text-2xl sm:text-3xl md:text-6xl lg:text-8xl font-bold text-black tracking-wide`}>
                      KIDS SHOULD MAKE THINGS.
                    </h1>
                  </div>
                </section>
  )
}
            
            const ProjectsSection = () => {
              const [activeIndex, setActiveIndex] = useState(0);
              const projects = [
                {
                  title: 'backyard construction',
                  emoji: '🪛',
                  image: `${IMAGEKIT_URL}/drilling.png`
                },
                {
                  title: 'gardening in soil and water',
                  emoji: '🌱',
                  image: `${IMAGEKIT_URL}/plant_lights.png`
                },
                {
                  title: 'circuits and electricity',
                  emoji: '⚡️',
                  image: `${IMAGEKIT_URL}/soldering.png`
                },
                {
                  title: '3D modeling and printing ideas',
                  emoji: '🧠',
                  image: `${IMAGEKIT_URL}/model_print.png`
                },
                {
                  title: 'expressing with digital design',
                  emoji: '🖥️',
                  image: `${IMAGEKIT_URL}/digital_design.png`
                },
                {
                  title: 'creating digital worlds',
                  emoji: '🌐',
                  image: `${IMAGEKIT_URL}/digital_world.png`
                },
              ]
            
              useEffect(() => {
                    const interval = setInterval(() => {
                      setActiveIndex((prev) => (prev + 1) % projects.length);
                    }, 8000);
                return () => clearInterval(interval);
                // eslint-disable-next-line react-hooks/exhaustive-deps
              }, []);
            
              return (
                <section className="scroll-section bg-green-100 py-12 flex flex-col justify-center items-center">
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-12 text-center">Kids are capable of projects like</h2>
                  <div className="h-16"></div>
                  <div className="relative w-80 h-96">
                    {projects.map((project, index) => {
                      const rotations = [8, -12, 15, -6, 18, -10];
                      const xOffsets = [-15, 20, -8, 25, -18, 12];
                      const yOffsets = [5, -8, 12, -5, 15, -3];
                      const scale = 1 - index * 0.015;
                      
                      const isActive = index === activeIndex;
                      const effectiveZIndex = isActive ? 100 : projects.length - index;
                      
                      return (
                        <div
                          key={project.title}
                          className={`absolute w-full bg-white p-4 rounded-lg shadow-xl transition-all duration-700`}
                          style={{
                            transform: `rotate(${isActive ? 0 : rotations[index]}deg) translateX(${isActive ? 0 : xOffsets[index]}px) translateY(${isActive ? -20 : yOffsets[index]}px) scale(${isActive ? 1.1 : scale})`,
                            transformOrigin: 'center center',
                            zIndex: effectiveZIndex,
                            opacity: isActive ? 1 : 0.85
                          }}
                        >
                          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                            <Image 
                              src={project.image} 
                              alt={project.title}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                          <div className="mt-4">
                            <p className={`${patrickHand.className} text-center text-gray-700 text-lg`}>
                              {project.title} {project.emoji}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
}

export default function Page() {
  return (
    <main className="scroll-container">
      <HeroSection />
      <ProjectsSection />
      <section className="scroll-section bg-yellow-100">
        <div className="max-w-4xl mx-auto text-center flex flex-col justify-center items-center h-full">
          <p className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 leading-relaxed">
            Our mission is to help kids make things by providing project plans, materials, and support for their homes, libraries, and community spaces.
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
            Everything they make, they keep.
          </p>
          <DonateButton />
        </div>
      </section>

            <section className="scroll-section bg-purple-100 flex flex-col justify-center items-center">

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-12 text-center">Our Approach</h2>

              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">

                <div className="text-center bg-white p-4 sm:p-8 rounded-lg shadow-lg flex flex-col">

                  <div className="text-4xl sm:text-5xl md:text-6xl mb-4">🏘️</div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Community</h3>

                  <p className="text-base sm:text-lg md:text-xl leading-relaxed flex-grow">

                    We meet learners where they are. Connecting in their community spaces.

                  </p>

                </div>

                <div className="text-center bg-white p-4 sm:p-8 rounded-lg shadow-lg flex flex-col">

                  <div className="text-4xl sm:text-5xl md:text-6xl mb-4">✨</div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Interest Driven</h3>

                  <p className="text-base sm:text-lg md:text-xl leading-relaxed flex-grow">

                    Learners have <span className="italic">choice</span> and personalize within the scaffold of our projects.

                  </p>

                </div>

                <div className="text-center bg-white p-4 sm:p-8 rounded-lg shadow-lg flex flex-col">

                  <div className="text-4xl sm:text-5xl md:text-6xl mb-4">🫶</div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Scaled Support</h3>

                  <p className="text-base sm:text-lg md:text-xl leading-relaxed flex-grow">

                    Human and AI support for  learners whenever they can make time.

                  </p>

                </div>

              </div>
            </section>

            <section className="scroll-section bg-orange-100 flex flex-col justify-center items-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-12 text-center">Guiding Principles</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
          <div className="relative">
            <div className="text-center bg-white p-4 sm:p-8 rounded-lg shadow-lg">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4">🧰</div>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Kits, content, and tech let us be there when we can&apos;t be in person.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="text-center bg-white p-4 sm:p-8 rounded-lg shadow-lg">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4">🔥</div>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Learning content should be as engaging as your favorite social feed.
              </p>
            </div>
            <div className="absolute -top-4 -right-4 bg-yellow-200 p-4 rounded-md shadow-lg transform rotate-6 w-[180px] h-[180px] flex flex-col justify-center items-center relative">
              <div className="absolute top-0 left-0 right-0 h-8 bg-yellow-300"></div>
              <div className="pt-8">
                <p className={`${patrickHand.className} text-[1.55rem] leading-tight mb-0 text-center`}>The kids call this "fire".</p>
                <p className={`${patrickHand.className} text-[1.55rem] leading-tight mb-0 text-center`}>"These are some fire projects."</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="text-center bg-white p-4 sm:p-8 rounded-lg shadow-lg">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4">💫</div>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Knowing alot of kids learn without schools, systems, or guardians.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-section bg-pink-100 flex flex-col justify-center items-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-12 text-center">About the Founder</h2>
        <div className="max-w-5xl mx-auto bg-white p-4 sm:p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 sm:gap-12 items-center text-center md:text-left">
            <Image
              src={`${IMAGEKIT_URL}/mike.png`}
              alt="Mike Amato"
              width={150}
              height={150}
              className="rounded-full w-32 h-32 sm:w-48 sm:h-48"
            />
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">Mike Amato</h3>
              <p className="text-base sm:text-lg md:text-xl mb-2 sm:mb-4">Mr. Mike or Maker Mike</p>
              <p className="mb-3 sm:mb-6 text-sm sm:text-base md:text-lg">
                <a href="https://www.makermike.me/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  www.makermike.me
                </a>
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-6">
                Growing up I experienced K-8 public school, online highschool, in-person & online university. If I wasn&apos;t moving or doing, I wasn&apos;t learning. I wanted to make and create things. Every day I thought, &quot;someone will come and fix this.&quot; Its 2025 and I&apos;m still waiting.
              </p>
              <p className="font-bold text-base sm:text-lg md:text-xl">
                Kids Should Make Things is here to innovatively solve the problems that stand in the way of kids seeing something inspiring and being able to make it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-section bg-gray-200 flex flex-col justify-center items-center">
        <footer className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">© Kids Should Make Things (501c3)</p>
          <p className="text-base sm:text-lg md:text-xl">Hands-on learning shouldn&apos;t be limited by location or resources 💛</p>
        </footer>
      </section>
    </main>
  )
}
