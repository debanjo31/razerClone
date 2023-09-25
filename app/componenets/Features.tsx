import Image from 'next/image';

interface FeaturesProps {
  title: string;
  description: string;
  // img: string | null;
}

const Features = ({ title, description}: FeaturesProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {/* {img != null && (
        <Image
          src={img}
          alt={title}
          height='450'
          width='450'
          className='w-36 h-36 block my-4 mx-auto'
        />
      )} */}
    </div>
  );
};

export default Features;
