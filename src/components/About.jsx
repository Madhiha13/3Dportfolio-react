import React from 'react'
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion'
import {styles} from "../styles"
import {services} from "../constants";
import { SectionWrapper } from '../hoc';
const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const ServiceCard = ({index,title,icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
         variants={fadeIn("right","spring",0.5*index,0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
          <div
          options={{
            max:45,
            scale:1,
            speed:450
          }} 
          className="bg-tertiary rounded-[20px] py-5
            px-12 min-h-[280px] flex justify-evenly items-center flex-col ">
              <img src={icon} alt={title} className="w-16 h-16 object-contain "/>
              <h3 className="text-white font-bold text-[20px] text-center">{title}</h3>

          </div>

        </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-center">
          Introduction
        </p>
        <h2 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-center">
          Overview
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] xs:ml-[50px] lg:ml-[220px]
        max-w-3xl leading-[30px] text-center justify-center items-center">
        A passionate front end developer using frameworks 
        like React and using html,css ,js .I'm a quick learner
        and create efficient , scalable , user friendly web applications.
        Let's work together to bring your ideas to life. 

      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
         {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index} 
            {...service} />
         ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");