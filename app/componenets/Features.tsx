import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import config from '../../sanity/config/client-config';

interface Feature {
  title: string;
  description: string;
  pic: {
    asset: {
      _ref: string | null;
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
    <div>
      <h1>{feature.title}</h1>
      <p>{feature.description}</p>
      {feature.pic.asset._ref != null && (
        <Image
          src={urlFor(feature.pic.asset._ref).width(450).height(450).url()}
          alt={feature.title}
          height='450'
          width='450'
          className='w-36 h-36 block my-4 mx-auto'
        />
      )}
    </div>
  );
};

export default Features;
