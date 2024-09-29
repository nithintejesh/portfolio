import React from 'react';
import '../App.css';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const About = () => {
  return (
    <div>

      {/* <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'> */}
      <div className='bg-black h-screen w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>

        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Nithin Tejesh, an upcoming 2025graduate🎓 and passionate <a className='text-lime-400 hover:text-lime-500 duration-300' href='https://www.linkedin.com/in/nithintejesh/' target='_blank' rel="noreferrer">Software developer</a> dedicated to crafting solutions across various platforms.I thrive on learning new technologies and transforming creative ideas into impactful applications.
              <br />
              ✍️ Beyond coding, I enjoy sharing my insights and experiences on <a className=' text-green-300 hover:text-green-400 duration-300' href="https://x.com/nithintejesh" target='_blank' rel="noreferrer">X (Twitter)</a>, where I explore the latest trends in software development and technology
            </p>

            <ButtonLink
              url='https://drive.google.com/file/d/1IpdNwK3GjHeXZcje2rhEuaP1jHCvTzaZ/view?usp=drive_link'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;