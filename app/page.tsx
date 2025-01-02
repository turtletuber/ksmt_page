'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const IMAGEKIT_URL = "https://ik.imagekit.io/klu2pqgpo"

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setScrollY(window.scrollY)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const opacity = scrollY === null ? 1 : Math.max(0, Math.min(1, 1 - (scrollY / 100)))

  return (
      <div className="relative w-full h-[50vh] md:h-[70vh] mb-8 md:mb-16">
        <Image
            src={`${IMAGEKIT_URL}/KSMT_hero.png`}
            alt="Kids Should Make Things Hero"
            fill
            className="object-cover w-full"
            priority
        />
        <div
            className="absolute inset-0 bg-black"
            style={{ opacity: opacity * 0.2 }}
        />
        <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"
        />
        <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity }}
        >
          <h1
              className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-[#f8c738] text-center tracking-wide font-grandstander px-4"
              style={{
                WebkitTextStroke: '2px #e6b730',
                textShadow: '4px 4px 0px #b88f22'
              }}
          >
            KIDS SHOULD MAKE THINGS.
          </h1>
        </div>
      </div>
  )
}

export default function Page() {
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
      title: 'create digital worlds',
      emoji: '🌐',
      image: `${IMAGEKIT_URL}/digital_world.png`
    },
  ]

  return (
      <div className="font-[var(--font-montserrat)]">
        <HeroSection />

        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Mission Statement */}
          <div className="text-center mb-16 md:mb-24">
            <p className="text-xl md:text-2xl mb-6 font-medium">
              Our mission is to provide project plans, materials, and support to kids to create in their homes, libraries, and community spaces.
            </p>
            <p className="text-lg md:text-xl font-bold mb-8 md:mb-12">Everything they make, they keep.</p>
            <button
                className="shimmer-button px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-bold text-white hover:-translate-y-1 transition-all duration-200 ease-in-out"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
            >
              Support a kid&apos;s project 💛
            </button>
          </div>

          {/* Projects Section */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Kids are capable of projects like...</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
                    <div className="relative aspect-square w-full">
                      <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-base md:text-lg font-semibold text-center">
                        {project.title} {project.emoji}
                      </h3>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Approach Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
            <div className="bg-green-50 p-6 md:p-8 rounded-lg text-center">
              <div className="text-3xl md:text-4xl mb-6">👥</div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Community</h3>
              <p className="text-sm md:text-base">By working with community spaces we pursue delivering <span className="text-green-600">directly to learners</span>.</p>
            </div>
            <div className="bg-blue-50 p-6 md:p-8 rounded-lg text-center">
              <div className="text-3xl md:text-4xl mb-6">✨</div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Interest Driven</h3>
              <p className="text-sm md:text-base"><span className="text-blue-600">Learners have the choice</span> to personalize what they make within the scaffold of our projects.</p>
            </div>
            <div className="bg-purple-50 p-6 md:p-8 rounded-lg text-center">
              <div className="text-3xl md:text-4xl mb-6">🫶</div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Scaled Support</h3>
              <p className="text-sm md:text-base">Human and AI chat systems <span className="text-purple-600">help learners overcome</span> technical and conceptual challenges.</p>
            </div>
          </div>

          {/* Community Spaces */}
          <div className="bg-gray-100 p-8 md:p-12 rounded-lg mb-16 md:mb-24">
            <h3 className="text-center mb-6">Community space includes:</h3>
            <p className="text-center text-base md:text-lg font-semibold mb-6">
              Urban Neighborhood Centers • Local Libraries<br />
              Native American Tribal Centers • Rural Community Organizations
            </p>
            <p className="text-center italic text-sm md:text-base">
              &quot;Can I have a kit to take home and work on?&quot;<br />
              - my students
            </p>
          </div>

          {/* About Section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-16 md:mb-24">
            <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full flex-shrink-0 mx-auto md:mx-0 overflow-hidden">
              <Image
                  src={`${IMAGEKIT_URL}/mike.png`}
                  alt="Mike Amato"
                  fill
                  className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">Mike Amato</h2>
              <p className="italic mb-6 text-center md:text-left">Mr. Mike or Maker Mike</p>
              <p className="mb-6 text-sm md:text-base">
                Growing up I experienced K-8 public school, online highschool, in-person & online university.
                If I wasn&apos;t moving or doing, I wasn&apos;t learning. I wanted to make and create things.
                Every day I thought, &quot;someone will come and fix this.&quot; Its 2024 and I&apos;m still waiting.
              </p>
              <p className="font-bold text-sm md:text-base">
                Kids Should Make Things is here to innovatively solve the problems that stand in the way
                of kids seeing something inspiring and being able to make it.
              </p>
            </div>
          </div>

          {/* Guiding Principles */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Guiding Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-purple-50 p-6 md:p-8 rounded-lg text-center">
                <div className="text-2xl md:text-3xl mb-6">🧰</div>
                <p className="text-sm md:text-base">Kits, content, and tech let us be there when we can&apos;t be in person.</p>
              </div>
              <div className="bg-blue-50 p-6 md:p-8 rounded-lg text-center">
                <div className="text-2xl md:text-3xl mb-6">🔥</div>
                <p className="text-sm md:text-base">Learning content should be as engaging as your favorite social feed.</p>
              </div>
              <div className="bg-green-50 p-6 md:p-8 rounded-lg text-center">
                <div className="text-2xl md:text-3xl mb-6">💫</div>
                <p className="text-sm md:text-base">Create for all kids, knowing some learn without schools, systems, or guardians.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-16 md:mb-24">
            <button
                className="shimmer-button px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-bold text-white hover:-translate-y-1 transition-all duration-200 ease-in-out"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
            >
              Support a kid&apos;s project 💛
            </button>
            <p className="italic mt-6 text-sm md:text-base">
              &quot;I could start a GoFundMe or something, so the other kids can experience it too.&quot;<br />
              - 8th grade student after STEM program ended
            </p>
          </div>

          {/* Footer */}
          <footer className="text-center py-8 md:py-12 bg-gray-100 rounded-lg text-sm md:text-base">
            <p className="font-bold mb-4">© Kids Should Make Things (501c3)</p>
            <p>Hands-on learning shouldn&apos;t be limited by location or resources.</p>
          </footer>
        </div>
      </div>
  )
}