import Link from 'next/link';

export default function Home() {
  return (
    <main className='mt-16 md:mt-[80px] z-10'>
      <p className='text-center p-2 bg-[#555555] text-white text-md md:text-lg'>
        All orders over US$79 will enjoy free standard shipping to the United
        State
      </p>
      <section className='relative w-full flex'>
        <Link
          href={'/education'}
          className=' min-h-[85vh] md:h-screen w-full'
        >
          <div className='school-bg h-full w-full bg-cover bg-center  text-center p-12 text-white'>
            <p className='pt-8 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:mb-2 lg:mb-4'>
              SCHOOL THE COMPETITION
            </p>
            <p className='mt-2 lg:mt-4 text-lg md:text-2xl lg:text-3xl xl:text-4xl md:mb-2 lg:mb-4'>
              ENJOY EXCLUSIVE EDUCATION PRICING
            </p>
            <p className='text-xl lg:text-2xl xl:text-3xl'>
              Shop now <span className='text-[#3CCA2B]  '> &gt;</span>
            </p>
          </div>
        </Link>
      </section>

      <section className='relative w-full flex '>
        <Link
          href={'/education'}
          className=' min-h-[85vh] md:h-screen w-full'
        >
          <div className='razerBlade-bg h-full w-full bg-cover bg-center text-center p-12 text-white'>
            <p className='pt-8 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:mb-2 lg:mb-4'>
              NEW RAZER BLADE 14
            </p>
            <p className='mt-2 lg:mt-4 text-lg md:text-2xl lg:text-3xl xl:text-4xl md:mb-2 lg:mb-4'>
              SMALL SIZE. BIG PERFORMANCE,
            </p>
            <div className='flex justify-center gap-8'>
              <p className='text-xl lg:text-2xl xl:text-3xl'>
                Learn More<span className='text-[#3CCA2B] '> &gt;</span>
              </p>
              <p className='text-xl lg:text-2xl xl:text-3xl'>
                Buy<span className='text-[#3CCA2B] '> &gt;</span>
              </p>
            </div>
          </div>
        </Link>
      </section>

      <section className='relative w-full flex '>
        <Link
          href={'/education'}
          className=' min-h-[85vh] md:h-screen w-full'
        >
          <div className='razerBlackWidow-bg h-full w-full bg-cover bg-center text-center p-12 text-white'>
            <p className='pt-8 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:mb-2 lg:mb-4'>
              RAZER BLACKWIDOW V4
            </p>
            <p className='mt-2 lg:mt-4 text-lg md:text-2xl lg:text-3xl xl:text-4xl md:mb-2 lg:mb-4'>
              FULL-BLOWN BATTLESTATION IMMERSION
            </p>
            <div className='flex justify-center gap-8'>
              <p className='text-xl lg:text-2xl xl:text-3xl'>
                Learn More<span className='text-[#3CCA2B] '> &gt;</span>
              </p>
              <p className='text-xl lg:text-2xl xl:text-3xl'>
                Buy<span className='text-[#3CCA2B] '> &gt;</span>
              </p>
            </div>
          </div>
        </Link>
      </section>
      <div className='lg:grid lg:grid-cols-2'>
        <section className='relative w-full flex '>
          <Link
            href={'/education'}
            className=' min-h-[85vh] md:h-screen w-full'
          >
            <div className='razerCobra-bg h-full w-full bg-cover bg-center text-center p-12 text-white'>
              <p className='pt-8 text-3xl md:text-5xl font-bold md:mb-2 lg:mb-4'>
                RAZER COBRA PRO
              </p>
              <p className='mt-2 lg:mt-4 text-lg md:text-2xl md:mb-2 lg:mb-4'>
                PERFECTED FOR PLAY
              </p>
              <div className='flex justify-center gap-8'>
                <p className='text-xl '>
                  Learn More<span className='text-[#3CCA2B] '> &gt;</span>
                </p>
                <p className='text-xl '>
                  Buy<span className='text-[#3CCA2B] '> &gt;</span>
                </p>
              </div>
            </div>
          </Link>
        </section>

        <section className='relative w-full flex '>
          <Link
            href={'/education'}
            className=' min-h-[85vh] md:h-screen w-full'
          >
            <div className='razerMecury-bg h-full w-full bg-cover bg-center text-center p-12 text-white'>
              <p className='pt-8 text-3xl md:text-5xl  font-bold md:mb-2 lg:mb-4'>
                NEW RAZER BLADE 16 & 18 MERCURY
              </p>
              <p className='mt-2 lg:mt-4 text-lg md:text-2xl  md:mb-2 lg:mb-4'>
                PERFORMANCE REIMAGINED
              </p>
              <div className='flex justify-center gap-8'>
                <p className='text-xl '>
                  Razer Blade 16<span className='text-[#3CCA2B] '> &gt;</span>
                </p>
                <p className='text-xl '>
                  Razer Blade 18<span className='text-[#3CCA2B] '> &gt;</span>
                </p>
              </div>
            </div>
          </Link>
        </section>

        <section className='relative w-full flex '>
          <Link
            href={'/education'}
            className=' min-h-[85vh] md:h-screen w-full'
          >
            <div className='razerXanthus-bg h-full w-full bg-cover bg-center text-center p-12 text-white'>
              <p className='pt-8 text-3xl md:text-5xl  font-bold md:mb-2 lg:mb-4'>
                RAZER XANTHUS COLLECTION
              </p>
              <p className='mt-2 lg:mt-4 text-lg md:text-2xl md:mb-2 lg:mb-4'>
                THE FUSION OF UTILITY AND STYLE
              </p>
              <p className='text-xl '>
                {' '}
                Learn More<span className='text-[#3CCA2B] '> &gt;</span>
              </p>
            </div>
          </Link>
        </section>

        <section className='relative w-full flex '>
          <Link
            href={'/education'}
            className=' min-h-[85vh] md:h-screen w-full'
          >
            <div className='razerBlackWidow-bg h-full w-full bg-cover bg-center text-center p-12 text-white'>
              <p className='pt-8 text-3xl md:text-5xl font-bold md:mb-2 lg:mb-4'>
                RAZER BLACKWIDOW V4
              </p>
              <p className='mt-2 lg:mt-4 text-lg md:text-2xl  md:mb-2 lg:mb-4'>
                FULL-BLOWN BATTLESTATION IMMERSION
              </p>
              <div className='flex justify-center gap-8'>
                <p className='text-xl '>
                  {' '}
                  Learn More<span className='text-[#3CCA2B] '> &gt;</span>
                </p>
                <p className='text-xl '>
                  Buy<span className='text-[#3CCA2B] '> &gt;</span>
                </p>
              </div>
            </div>
          </Link>
        </section>

        <section className='relative w-full flex '>
          <Link
            href={'/education'}
            className=' min-h-[85vh] md:h-screen w-full'
          >
            <div className='razerHonkai-bg h-full w-full bg-cover bg-center text-center p-12 text-white'>
              <p className='pt-8 text-3xl md:text-5xl  font-bold md:mb-2 lg:mb-4'>
                HONKAI: STAR RAIL IS NOW AVAILABLE
              </p>
              <p className='mt-2 lg:mt-4 text-lg md:text-2xl  md:mb-2 lg:mb-4'>
                ONLY THE BEST DEALS ON RAZER GOLD
              </p>
              <p className='text-xl '>
                Find Out More<span className='text-[#3CCA2B] '> &gt;</span>
              </p>
            </div>
          </Link>
        </section>

        <section className='relative w-full flex '>
          <Link
            href={'/education'}
            className=' min-h-[85vh] md:h-screen w-full'
          >
            <div className='razerEdge-bg h-full w-full bg-cover bg-center text-center p-12 text-white'>
              <p className='pt-8 text-3xl md:text-5xl  font-bold md:mb-2 lg:mb-4'>
                RAZER EDGE
              </p>
              <p className='mt-2 lg:mt-4 text-lg md:text-2xl  md:mb-2 lg:mb-4'>
                THE ULTIMATE ANDRIOD GAMING HANDHELD
              </p>
              <div className='flex justify-center gap-8'>
                <p className='text-xl '>
                  {' '}
                  Learn More<span className='text-[#3CCA2B] '> &gt;</span>
                </p>
                <p className='text-xl '>
                  Buy<span className='text-[#3CCA2B] '> &gt;</span>
                </p>
              </div>
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
