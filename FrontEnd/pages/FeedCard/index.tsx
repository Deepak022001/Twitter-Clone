import React from 'react';
import Image from 'next/image';
import { BiMessageRounded } from 'react-icons/bi';
import { BiRepost } from 'react-icons/bi';
import { FiUpload } from 'react-icons/fi';
import { CiHeart } from 'react-icons/ci';
const FeedCard: React.FC = () => {
  return (
    <div className=' p-5 border border-r-0 border-l-0 border-b-0 border-gray-600  hover:bg-slate-900 transition-all duration-800 cursor-pointer'>
      <div className='grid grid-cols-12 gap-3'>
        <div className='col-span-1'>
          <Image
            src='https://avatars.githubusercontent.com/u/100062244?v=4'
            alt='user-image'
            height={50}
            layout='fixed'
            width={50}
          />
        </div>
        <div className='col-span-11'>
          <h5>Deepak Singh</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            tempora nam aliquam, soluta atque molestias quisquam minima error
            quas, magni ex exercitationem rerum quibusdam at possimus. Tenetur
            blanditiis aliquam odit!
          </p>

          <div className='flex justify-between  text-1xl  p-2  items-center mt-5  w-[90%]'>
            {/* icons */}
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <BiRepost />
            </div>
            <div>
              <CiHeart />
            </div>
            <div>
              <FiUpload />
            </div>
            {/* icons */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeedCard;
