import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import config from '../../sanity/config/client-config';

interface FeaturesProps {
  title: string;
  description: string;
  img: string;
}

const Features = ({ title, description, img }: FeaturesProps) => {
  const builder = imageUrlBuilder(config);

  function urlFor(source: string) {
    return builder.image(source);
  }
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Features;
