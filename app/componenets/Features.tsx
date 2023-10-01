import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import config from '../../sanity/config/client-config';

interface Feature {
  title: string;
  description: string;
  subtitle?: string;
  pic?: {
    asset?: {
      _ref?: string | undefined;
    };
  };
}

interface FeaturesProps {
  feature: Feature;
}

const Features = ({ feature }: FeaturesProps) => {
  const builder = imageUrlBuilder(config);

  function urlFor(source: string) {
    return builder.image(source);
  }

  return (
    <div className='text-white text-center mt-12 '>
      <h1 className='text-[#44d62c] text-lg font-bold lg:text-xl mb-2'>
        {feature.title}
      </h1>
      {feature.subtitle !== undefined && (
        <h3 className=''>{feature.subtitle}</h3>
      )}

      <p className='text-gray-500 mt-4'>{feature.description}</p>
      {feature.pic?.asset._ref !== undefined && (
        <div className='w-full h-[40vh] md:h-[60vh] relative'>
          <Image
            src={urlFor(feature.pic.asset._ref).width(450).height(450).url()}
            alt={feature.title}
            fill
            style={{ objectFit: 'cover' }}
            className='block my-4 mx-auto'
          />
        </div>
      )}
    </div>
  );
};

export default Features;
