import React from "react";
import algvisualizer from '../assets/algvisualizer.png'
import extractive from '../assets/extractive.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies, url }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={url} target="_blank" rel="noreferrer">
                <img className="w-full rounded-t-lg h-auto object-cover " src={image} alt={title} />
            </a>
            <div className="p-4 sm:p-6">
                <a href={url} target="_blank" rel="noreferrer">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 dark:text-gray-400 mt-2">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};

  
const Projects = () => {
    return (
        <>
            <div className="bg-black h-screen">
                <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                    {project.map((item, index) => (
                        <ProjectCard
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            git={item.git}
                            url={item.url} // Pass the url prop here
                            technologies={item.technologies}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};



export const project = [
    {
        title: 'AlgVisualizer',
        description: 'About Interactive Algorithm Visualizer using HTML, CSS, JavaScript, and D3.js.',
        image: algvisualizer,
        git: 'https://github.com/nithintejesh/algvisualizer',
        url: 'https://algvisualizer-site.netlify.app/', // Add this line
        technologies: ['HTML', 'CSS', 'Javascript', 'D3.js']
    },
    {
        title: 'Extractive Summarizer',
        description: 'An extractive text summarizer built with Django. This application processes textual content and provides summarized versions using extractive summarization techniques.',
        image: extractive,
        git: "https://github.com/nithintejesh/extractice-summarizer-django",
        url: 'https://easyextractivesummarizer.pythonanywhere.com/', // Add this line
        technologies: ['Python', 'Django']
    }
];


export default Projects