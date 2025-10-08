
import Image from 'next/image';
import DonateButton from '@/components/DonateButton';

const IMAGEKIT_URL = "https://ik.imagekit.io/klu2pqgpo"

const HeroSection = () => {
  return (
    <section className="scroll-section bg-blue-100 flex flex-col justify-center items-center">
      <div className="text-center px-8">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-black tracking-wide">
          KIDS SHOULD MAKE THINGS.
        </h1>
      </div>
      <div className="bg-white p-4 shadow-lg rounded-md transform -rotate-2 mt-8">
        <Image
          src={`${IMAGEKIT_URL}/KSMT_hero.png`}
          alt="Kids Should Make Things Hero"
          width={1200}
          height={720}
          className="w-full h-auto object-contain max-w-7xl"
        />
      </div>
    </section>
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
      title: 'creating digital worlds',
      emoji: '🌐',
      image: `${IMAGEKIT_URL}/digital_world.png`
    },
  ]

  return (
    <main className="scroll-container">
      <HeroSection />

      {/* Mission Statement */}
      <section className="scroll-section bg-yellow-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl mb-6 leading-relaxed">
            Our mission is to provide project plans, materials, and support to kids on their journey to create in their homes, libraries, and community spaces.
          </p>
          <p className="text-3xl md:text-4xl font-bold mb-8">
            Everything they make, they keep.
          </p>
          <DonateButton />
        </div>
      </section>

      {/* Approach Section */}
      <section className="scroll-section bg-purple-100">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Our Approach</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <div className="text-6xl mb-6">👥</div>
            <h3 className="text-3xl font-bold mb-4">Community</h3>
            <p className="text-xl leading-relaxed">
              By working with community spaces we pursue delivering directly to learners.
            </p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <div className="text-6xl mb-6">✨</div>
            <h3 className="text-3xl font-bold mb-4">Interest Driven</h3>
            <p className="text-xl leading-relaxed">
              Learners have the choice to personalize what they make within the scaffold of our projects.
            </p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <div className="text-6xl mb-6">🫶</div>
            <h3 className="text-3xl font-bold mb-4">Scaled Support</h3>
            <p className="text-xl leading-relaxed">
              Human and AI chat systems help learners overcome technical and conceptual challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="scroll-section bg-green-100">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Kids are capable of projects like</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-3 shadow-lg text-center rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={200}
                height={200}
                className="w-full h-56 object-cover mb-4 rounded-md"
              />
              <p className="text-base font-semibold">{project.title} {project.emoji}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guiding Principles Section */}
      <section className="scroll-section bg-orange-100">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Guiding Principles</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <div className="text-6xl mb-6">🧰</div>
            <p className="text-xl leading-relaxed">
              Kits, content, and tech let us be there when we can&apos;t be in person.
            </p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <div className="text-6xl mb-6">🔥</div>
            <p className="text-xl leading-relaxed">
              Learning content should be as engaging as your favorite social feed.
            </p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <div className="text-6xl mb-6">💫</div>
            <p className="text-xl leading-relaxed">
              Create for all kids, knowing some learn without schools, systems, or guardians.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="scroll-section bg-pink-100">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">About the Founder</h2>
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <Image
              src={`${IMAGEKIT_URL}/mike.png`}
              alt="Mike Amato"
              width={200}
              height={200}
              className="rounded-full"
            />
            <div className="text-left">
              <h3 className="text-3xl font-bold mb-2">Mike Amato</h3>
              <p className="text-xl mb-4">Mr. Mike or Maker Mike</p>
              <p className="mb-6 text-lg">
                <a href="https://www.makermike.me/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  www.makermike.me
                </a>
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Growing up I experienced K-8 public school, online highschool, in-person & online university. If I wasn&apos;t moving or doing, I wasn&apos;t learning. I wanted to make and create things. Every day I thought, &quot;someone will come and fix this.&quot; Its 2025 and I&apos;m still waiting.
              </p>
              <p className="font-bold text-xl">
                Kids Should Make Things is here to innovatively solve the problems that stand in the way of kids seeing something inspiring and being able to make it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="scroll-section bg-gray-200">
        <footer className="text-center">
          <p className="text-2xl font-bold mb-4">© Kids Should Make Things (501c3)</p>
          <p className="text-xl">Hands-on learning shouldn&apos;t be limited by location or resources 💛</p>
        </footer>
      </section>
    </main>
  )
}
