import React from "react";
import {Tilt} from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {resume} from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-stone-700 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='Electronic-Ing'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <motion.div variants ={textVariant()}>
      <p className = {styles.sectionSubText}>
        introduction
      </p>
      <h2 className = {styles.sectionHeadText}>
        Overview
      </h2>
    </motion.div>

    <motion.p 
    variants = {fadeIn("", "", 0.1, 1)} className = ' mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Electronic engineer with emphasis in digital signals and artificial intelligence from Pontificia Universidad Javeriana. In my career, I have learned low and high level programming languages for advanced data processing and visualization. All this I have worked following the path of discipline, responsibility and leadership, the latter being a determining factor in the success of my projects. I am a persevering person, who looks for concrete solutions and easy execution.  I emphasize my honesty and flexibility to adapt to different technologies required by projects or tasks.
    </motion.p>

    <motion.div variants = {textVariant()}>
        <div className='text-[#A29E9E] mt-5 bg-stone-700 py-3 px-8 rounded-xl outline-none w-fit  font-bold shadow-md shadow-primary justify  hover:text-white text-[18px] font-medium cursor-pointer'>
        <a className = 'btn btn-success' href = {resume} download ="resume.pdf">
            Download resume
        </a>
    </div>
        </motion.div>
    
    <div className='mt-20 flex flex-wrap gap-10 justify-center'>
    {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
    </div>


    </>
  );
};

export default SectionWrapper(About, "about");