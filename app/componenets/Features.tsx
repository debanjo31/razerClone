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
    <div className='text-white text-center'>
      <h1 className='text-[#44d62c] '>{feature.title}</h1>
      {feature.subtitle != undefined && (
        <h3 className=''>{feature.subtitle}</h3>
      )}

      <p className='text-gray-500'>{feature.description}</p>
      <div className='w-full h-[40vh]'>
        {feature.pic?.asset._ref != undefined && (
          <Image
            src={urlFor(feature.pic.asset._ref).width(450).height(450).url()}
            alt={feature.title}
            height='450'
            width='450'
            className='w-36 h-36 block my-4 mx-auto'
          />
        )}
      </div>
    </div>
  );
};

export default Features;
