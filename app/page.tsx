'use client'
import TornPaperCard from '@/components/TornPaperCard'
import CollageImage from '@/components/CollageImage'
import ScrapbookText, { MixedHeadline } from '@/components/ScrapbookText'
import { LayeredPaperBackground } from '@/components/PaperTexture'

const IMAGEKIT_URL = "https://ik.imagekit.io/klu2pqgpo"

const HeroSection = () => {
  return (
    <div className="w-full mb-12 md:mb-16 pt-20 md:pt-24">
      {/* Title at the top like a newspaper header */}
      <div className="text-center mb-8 px-6 md:px-12">
        <h1
          className="text-4xl md:text-6xl lg:text-8xl font-bold text-black text-center tracking-wide font-newspaper"
          style={{
            WebkitTextStroke: '1px #333',
            textShadow: '2px 2px 0px #ddd',
          }}
        >
          KIDS SHOULD MAKE THINGS.
        </h1>
      </div>

      {/* Hero image below title */}
      <div className="flex items-center justify-center">
        <img
          src={`${IMAGEKIT_URL}/KSMT_hero.png`}
          alt="Kids Should Make Things Hero"
          className="w-[95vw] h-[30vh] md:h-[40vh] object-cover max-w-6xl"
          style={{
            clipPath: 'polygon(1% 3%, 15% 1%, 30% 4%, 45% 2%, 60% 3%, 75% 1%, 90% 2%, 98% 15%, 99% 30%, 97% 45%, 98% 60%, 96% 75%, 98% 90%, 95% 97%, 80% 99%, 65% 97%, 50% 98%, 35% 96%, 20% 98%, 5% 97%, 2% 85%, 1% 70%, 3% 55%, 1% 40%, 2% 25%, 1% 10%)',
          }}
        />
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
      title: 'creating digital worlds',
      emoji: '🌐',
      image: `${IMAGEKIT_URL}/digital_world.png`
    },
  ]

  return (
      <div className="font-[var(--font-kalam)]">
        <HeroSection />


        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Mission Statement */}
          <section className="text-center mb-16 md:mb-24 relative">
            <TornPaperCard paperType="cream" torn="top" className="max-w-4xl mx-auto mb-8" shadow="medium" maxRotation={0}>
              <ScrapbookText 
                variant="newspaper" 
                className="text-lg md:text-xl mb-6 leading-relaxed"
                as="p"
                maxRotation={0}
              >
                Our mission is to provide project plans, materials, and support to kids on their journey to create in their homes, libraries, and community spaces.
              </ScrapbookText>
              <ScrapbookText 
                variant="newspaper" 
                highlight={true}
                highlightColor="yellow"
                className="text-xl md:text-2xl font-bold mb-8"
                as="p"
                maxRotation={0}
              >
                Everything they make, they keep.
              </ScrapbookText>
            </TornPaperCard>
            
            <button
                onClick={() => window.open('https://donate.stripe.com/00g5mbflr4VRfM4145', '_blank')}
                className="px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl font-bold text-black font-newspaper bg-yellow-200 hover:bg-yellow-300 border-2 border-black hover:scale-105 transition-all duration-200 ease-in-out paint-drip relative"
                style={{
                  boxShadow: '3px 3px 0px black',
                }}
            >
              Support a kid&apos;s project 💛
            </button>
          </section>

          {/* Projects Section */}
          <section className="mb-16 md:mb-24">
            <TornPaperCard paperType="newsprint" torn="top" className="mb-12" shadow="light" maxRotation={0}>
              <ScrapbookText 
                variant="newspaper" 
                className="text-2xl md:text-3xl font-bold text-center"
                as="h2"
                maxRotation={0}
              >
                Kids are capable of projects like
              </ScrapbookText>
            </TornPaperCard>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {projects.map((project, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-3 pb-16 shadow-lg hover:scale-105 transition-all duration-300 relative"
                       style={{
                         boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                       }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      width={532}
                      height={532}
                      className="w-full aspect-square object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute bottom-1 left-1 right-1 text-center flex items-center justify-center min-h-[3.5rem] px-1">
                      <ScrapbookText 
                        variant="newspaper"
                        className="text-base md:text-lg font-semibold text-black leading-tight break-words hyphens-auto"
                        as="p"
                        style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                        maxRotation={0}
                      >
                        {project.title} {project.emoji}
                      </ScrapbookText>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Approach Section */}
          <section className="mb-16 md:mb-24 relative">
            <div className="text-center mb-12">
              <ScrapbookText 
                variant="newspaper" 
                className="text-2xl md:text-3xl font-bold"
                as="h2"
                maxRotation={0}
              >
                Our Approach
              </ScrapbookText>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <TornPaperCard paperType="cream" torn="all" className="text-center" shadow="medium" hover={true} maxRotation={0}>
                <div className="text-4xl md:text-5xl mb-6">👥</div>
                <ScrapbookText variant="newspaper" className="text-xl md:text-2xl font-bold mb-4" as="h3" maxRotation={0}>
                  Community
                </ScrapbookText>
                <ScrapbookText variant="newspaper" className="text-base md:text-lg leading-relaxed" as="p" maxRotation={0}>
                  By working with community spaces we pursue delivering directly to learners.
                </ScrapbookText>
              </TornPaperCard>
              
              <TornPaperCard paperType="aged" torn="all" className="text-center" shadow="medium" hover={true} maxRotation={0}>
                <div className="text-4xl md:text-5xl mb-6">✨</div>
                <ScrapbookText variant="newspaper" className="text-xl md:text-2xl font-bold mb-4" as="h3" maxRotation={0}>
                  Interest Driven
                </ScrapbookText>
                <ScrapbookText variant="newspaper" className="text-base md:text-lg leading-relaxed" as="p" maxRotation={0}>
                  Learners have the choice to personalize what they make within the scaffold of our projects.
                </ScrapbookText>
              </TornPaperCard>
              
              <TornPaperCard paperType="stained" torn="all" className="text-center" shadow="medium" hover={true} maxRotation={0}>
                <div className="text-4xl md:text-5xl mb-6">🫶</div>
                <ScrapbookText variant="newspaper" className="text-xl md:text-2xl font-bold mb-4" as="h3" maxRotation={0}>
                  Scaled Support
                </ScrapbookText>
                <ScrapbookText variant="newspaper" className="text-base md:text-lg leading-relaxed" as="p" maxRotation={0}>
                  Human and AI chat systems help learners overcome technical and conceptual challenges.
                </ScrapbookText>
              </TornPaperCard>
            </div>
          </section>

          {/* Community Spaces */}
          <section className="mb-16 md:mb-24 relative">
            {/* Add some scattered color splashes behind this section */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 left-10 w-32 h-32 color-splash-purple rounded-full"></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 color-splash-red rounded-full"></div>
              <div className="absolute top-1/2 left-1/3 w-24 h-24 color-splash-blue rounded-full"></div>
            </div>
            <TornPaperCard paperType="newsprint" torn="all" className="text-center max-w-4xl mx-auto" shadow="heavy" maxRotation={0}>
              <ScrapbookText variant="newspaper" className="text-lg md:text-xl mb-6" as="h3" maxRotation={0}>
                Community space includes:
              </ScrapbookText>
              <ScrapbookText variant="newspaper" className="text-base md:text-lg font-semibold mb-6" as="p" maxRotation={0}>
                Urban Neighborhood Centers • Local Libraries<br />
                Native American Tribal Centers • Rural Community Organizations
              </ScrapbookText>
              <TornPaperCard paperType="kraft" torn="top" className="inline-block px-4 py-2" shadow="light" maxRotation={0}>
                <ScrapbookText variant="newspaper" className="text-base md:text-lg" as="p" maxRotation={0}>
                  &quot;Can I have a kit to take home and work on?&quot;<br />
                  <ScrapbookText variant="newspaper" as="span" className="text-sm md:text-base" maxRotation={0}>- my students</ScrapbookText>
                </ScrapbookText>
              </TornPaperCard>
            </TornPaperCard>
          </section>

          {/* About Section */}
          <section className="mb-16 md:mb-24">
            <div className="text-center mb-12">
              <ScrapbookText 
                variant="newspaper" 
                className="text-2xl md:text-3xl font-bold"
                as="h2"
                maxRotation={0}
              >
                About the Founder
              </ScrapbookText>
            </div>
            
            <TornPaperCard paperType="aged" torn="all" className="max-w-5xl mx-auto" shadow="heavy" maxRotation={0}>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                <div className="relative flex-shrink-0 mx-auto md:mx-0">
                  <CollageImage
                    src={`${IMAGEKIT_URL}/mike.png`}
                    alt="Mike Amato"
                    width={255}
                    height={255}
                    torn="all"
                    tape={true}
                    pin={true}
                    hover={true}
                    maxRotation={2}
                    className="w-44 h-44 md:w-64 md:h-64"
                  />
                </div>
                
                <div className="flex-1">
                  <ScrapbookText variant="typewriter" className="text-xl md:text-2xl font-bold mb-2 text-center md:text-left" as="h3" maxRotation={0}>
                    Mike Amato
                  </ScrapbookText>
                  <ScrapbookText variant="typewriter" className="mb-2 text-center md:text-left" as="p" maxRotation={0}>
                    Mr. Mike or Maker Mike
                  </ScrapbookText>
                  <ScrapbookText variant="typewriter" className="mb-6 text-center md:text-left text-sm md:text-base" as="p" maxRotation={0}>
                    <a href="https://www.makermike.me/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">
                      www.makermike.me
                    </a>
                  </ScrapbookText>
                  <ScrapbookText variant="typewriter" className="mb-6 text-sm md:text-base leading-relaxed" as="p" maxRotation={0}>
                    Growing up I experienced K-8 public school, online highschool, in-person & online university.
                    If I wasn&apos;t moving or doing, I wasn&apos;t learning. I wanted to make and create things.
                    Every day I thought, &quot;someone will come and fix this.&quot; Its 2025 and I&apos;m still waiting.
                  </ScrapbookText>
                  <TornPaperCard paperType="kraft" torn="bottom" className="inline-block" shadow="light" maxRotation={0}>
                    <ScrapbookText variant="typewriter" className="font-bold text-sm md:text-base" as="p" maxRotation={0}>
                      Kids Should Make Things is here to innovatively solve the problems that stand in the way
                      of kids seeing something inspiring and being able to make it.
                    </ScrapbookText>
                  </TornPaperCard>
                </div>
              </div>
            </TornPaperCard>
          </section>

          {/* Guiding Principles */}
          <section className="mb-16 md:mb-24">
            <div className="text-center mb-12">
              <ScrapbookText 
                variant="newspaper" 
                className="text-2xl md:text-3xl font-bold"
                as="h2"
                maxRotation={0}
              >
                Guiding Principles
              </ScrapbookText>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <TornPaperCard paperType="newsprint" torn="all" className="text-center" shadow="medium" hover={true} maxRotation={0}>
                <div className="text-4xl md:text-5xl mb-6">🧰</div>
                <ScrapbookText variant="newspaper" className="text-base md:text-lg leading-relaxed" as="p" maxRotation={0}>
                  Kits, content, and tech let us be there when we can&apos;t be in person.
                </ScrapbookText>
              </TornPaperCard>
              
              <TornPaperCard paperType="kraft" torn="all" className="text-center" shadow="medium" hover={true} maxRotation={0}>
                <div className="text-4xl md:text-5xl mb-6">🔥</div>
                <ScrapbookText variant="newspaper" className="text-base md:text-lg leading-relaxed" as="p" maxRotation={0}>
                  Learning content should be as engaging as your favorite social feed.
                </ScrapbookText>
              </TornPaperCard>
              
              <TornPaperCard paperType="aged" torn="all" className="text-center" shadow="medium" hover={true} maxRotation={0}>
                <div className="text-4xl md:text-5xl mb-6">💫</div>
                <ScrapbookText variant="newspaper" className="text-base md:text-lg leading-relaxed" as="p" maxRotation={0}>
                  Create for all kids, knowing some learn without schools, systems, or guardians.
                </ScrapbookText>
              </TornPaperCard>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center mb-16 md:mb-24">
            <div className="mb-8">
              <button
                  onClick={() => window.open('https://donate.stripe.com/00g5mbflr4VRfM4145', '_blank')}
                  className="px-10 md:px-12 py-5 md:py-6 text-xl md:text-2xl font-bold text-black font-newspaper bg-yellow-200 hover:bg-yellow-300 border-2 border-black hover:scale-110 transition-all duration-300 ease-in-out"
                  style={{
                    boxShadow: '4px 4px 0px black',
                  }}
              >
                Support a kid&apos;s project 💛
              </button>
            </div>
            <TornPaperCard paperType="newsprint" torn="bottom" className="inline-block max-w-lg mx-auto" shadow="light" maxRotation={0}>
              <ScrapbookText variant="newspaper" className="text-base md:text-lg" as="p" maxRotation={0}>
                &quot;I could start a GoFundMe or something, so the other kids can experience it too.&quot;<br />
                <ScrapbookText variant="newspaper" as="span" className="text-sm md:text-base" maxRotation={0}>- 8th grade student after STEM program ended</ScrapbookText>
              </ScrapbookText>
            </TornPaperCard>
          </section>

          {/* Footer */}
          <footer className="text-center py-8 md:py-12 bg-gray-100 rounded-lg text-sm md:text-base font-newspaper mb-8">
            <p className="font-bold mb-4">© Kids Should Make Things (501c3)</p>
            <p>Hands-on learning shouldn&apos;t be limited by location or resources.</p>
          </footer>
        </div>
      </div>
  )
}