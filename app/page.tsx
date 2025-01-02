'use client'
import { Users, Sparkles, Heart } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// Replace with your ImageKit URL
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
      <div className="relative w-full h-[70vh] mb-16">
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
              className="text-8xl font-extrabold text-[#f8c738] text-center tracking-tight font-grandstander"
              style={{
                WebkitTextStroke: '2px #e6b730',
                textShadow: '4px 4px 0px #d4a928'
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
      title: 'expressing through digital design',
      emoji: '🖥️',
      image: `${IMAGEKIT_URL}/digital_design.png`
    },
    {
      title: 'exploring created digital worlds',
      emoji: '🌐',
      image: `${IMAGEKIT_URL}/digital_world.png`
    },
  ]

  return (
      <div>
        <HeroSection />

        <div className="max-w-6xl mx-auto px-4">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <p className="text-xl mb-4">
              Our mission is to provide project plans, materials, and support to kids to create in their homes, libraries, and community spaces.
            </p>
            <p className="text-lg font-bold mb-8">Everything they make, they keep.</p>
            <button className="bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-orange-500 transition-colors">
              Support a kid&apos;s project 💛
            </button>
          </div>

          {/* Projects Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Kids are capable of projects like...</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="relative aspect-square w-full mb-4 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           33vw"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-center">
                      {project.title} {project.emoji}
                    </h3>
                  </div>
              ))}
            </div>
          </div>
          {/* Approach Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-green-50 p-6 rounded-lg">
              <Users className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p>By working with community spaces we pursue delivering <span className="text-green-600">directly to learners</span>.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <Sparkles className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Interest Driven</h3>
              <p><span className="text-blue-600">Learners have the choice</span> to personalize what they make within the scaffold of our projects.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <Heart className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Scaled Support</h3>
              <p>Human and AI chat systems <span className="text-purple-600">help learners overcome</span> technical and conceptual challenges.</p>
            </div>
          </div>

          {/* Community Spaces */}
          <div className="bg-gray-100 p-8 rounded-lg mb-16">
            <h3 className="text-center mb-4">Community space includes:</h3>
            <p className="text-center text-lg font-semibold mb-4">
              Urban Neighborhood Centers • Local Libraries<br />
              Native American Tribal Centers • Rural Community Organizations
            </p>
            <p className="text-center italic">
              &quot;Can I have a kit to take home and work on?&quot;<br />
              - my students
            </p>
          </div>

          {/* About Section */}
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="relative w-48 h-48 rounded-full flex-shrink-0 mx-auto md:mx-0 overflow-hidden">
              <Image
                  src={`${IMAGEKIT_URL}/mike.png`}
                  alt="Mike Amato"
                  fill
                  className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Mike Amato</h2>
              <p className="italic mb-4">Mr. Mike or Maker Mike</p>
              <p className="mb-4">
                Growing up I experienced K-8 public school, online highschool, in-person & online university.
                If I wasn&apos;t moving or doing, I wasn&apos;t learning. I wanted to make and create things.
                Every day I thought, &quot;someone will come and fix this.&quot; Its 2024 and I&apos;m still waiting.
              </p>
              <p className="font-bold">
                Kids Should Make Things is here to innovatively solve the problems that stand in the way
                of kids seeing something inspiring and being able to make it.
              </p>
            </div>
          </div>

          {/* Guiding Principles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Guiding Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-4">🧰</div>
                <p>Kits, content, and tech let us be there when we can&apos;t be in person.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-4">🔥</div>
                <p>Learning content should be as engaging as your favorite social feed.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-4">💫</div>
                <p>Create for all kids, knowing some learn without schools, systems, or guardians.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-16">
            <button className="bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-orange-500 transition-colors mb-4">
              Support a kid&apos;s project 💛
            </button>
            <p className="italic">
              &quot;I could start a GoFundMe or something, so the other kids can experience it too.&quot;<br />
              - 8th grade student after STEM program ended
            </p>
          </div>

          {/* Footer */}
          <footer className="text-center py-8 bg-gray-100 rounded-lg">
            <p className="font-bold mb-2">© Kids Should Make Things (501c3)</p>
            <p>Hands-on learning shouldn&apos;t be limited by location or resources.</p>
          </footer>
        </div>
      </div>
  )
}