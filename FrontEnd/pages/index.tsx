import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from 'react-icons/bs';
import { SlOptions } from 'react-icons/sl';
import { BiHash, BiHomeCircle, BiMoney, BiUser } from 'react-icons/bi';
import FeedCard from './FeedCard';
import { GoogleLogin } from '@react-oauth/google';

interface TwitterSideBarIcons {
  title: string;
  icon: React.ReactNode;
}
const sideBarItems: TwitterSideBarIcons[] = [
  {
    title: 'Home',
    icon: <BiHomeCircle />,
  },
  {
    title: 'Explore',
    icon: <BiHash />,
  },
  {
    title: 'Notification',
    icon: <BsBell />,
  },
  {
    title: 'Messages',
    icon: <BsEnvelope />,
  },
  {
    title: 'TwitterBlue',
    icon: <BiMoney />,
  },
  {
    title: 'BookMarks',
    icon: <BsBookmark />,
  },
  {
    title: 'Profile',
    icon: <BiUser />,
  },
  {
    title: 'More',
    icon: <SlOptions />,
  },
];
export default function Home() {
  return (
    <div>
      {/* main div */}
      <div className='grid grid-cols-12 h-screen w-screen px-56'>
        {/* left part */}
        <div className='col-span-3  pt-1 ml-28'>
          {/* extra div for bstwitter */}
          <div className='text-4xl cursor-pointer hover:bg-gray-600 w-fit h-fit rounded-full p-4'>
            <BsTwitter />
          </div>
          {/* finished extra div for bstwitter */}
          {/* icons */}
          <div className='mt-2 text-xl  pr-4'>
            <ul>
              {sideBarItems.map((item) => (
                <li
                  className='flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer mt-2'
                  key={item.title}
                >
                  <span className='text-2xl'>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            {/* Tweet Button */}
            <div className='mt-5 px-3'>
              <button className='bg-[#1d9bf0] font-semibold py-2 px-4 rounded-full text-lg mt-5 w-full'>
                Tweet
              </button>
            </div>
            {/* finished Tweet Button */}
          </div>
          {/* finished icons */}
        </div>
        {/* leftpart finished */}
        <div className='col-span-5 border-r-[1px] border-l-[1px]  border-gray-600'>
          {/* FeedCard */}
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className='col-span-3 p-5'>
          <div className='border p-5 bg-slate-700'>
            <h1>New to Twitter?</h1>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </div>
        </div>
      </div>
      {/* main div finished here */}
    </div>
  );
}
