import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='bg-slate-900 p-4'>
      <div className='flex justify-between flex-wrap gap-4'>
        <p className='text-white text-center w-full sm:w-auto font-light'>
          © {year} Nithin. All rights reserved.
        </p>
        <div className='text-white flex justify-around sm:w-[250px] w-full'>
          {/** Social Media Icons */}
          <a href="mailto:nithintejesh@gmail.com" className='transition duration-300 hover:scale-110'>
            <FiMail className='text-xl' />
          </a>
          <a href="https://x.com/nithintejesh" target='_blank' rel="noreferrer" className='transition duration-300 hover:scale-110'>
            <FaTwitter className='text-xl' />
          </a>
          <a href="https://www.linkedin.com/in/nithintejesh/" target='_blank' rel="noreferrer" className='transition duration-300 hover:scale-110'>
            <AiFillLinkedin className='text-xl' />
          </a>
          <a href="https://github.com/nithintejesh" target='_blank' rel="noreferrer" className='transition duration-300 hover:scale-110'>
            <FaGithub className='text-xl' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
