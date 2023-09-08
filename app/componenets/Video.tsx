import React from 'react';

const Video = ({ vid }: any) => {
  return (
    <div className='w-full md:w-4/6'>
      <video
        loop
        controls
        className='object-cover w-[100%] h-64'
      >
        <source
          src={vid}
          type='video/mp4'
        />
        Sorry, your browser doesnt suppport embedded videos.
      </video>
    </div>
  );
};

export default Video;
