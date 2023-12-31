import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";


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

const ProjectCard = ({index, name, description , tags, image, source_code_link})=>{
  return (
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
       <Tilt
          options={{max:45,
          scale:1,
          speed:450
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
       
       >
          <div className="relative w-fill h-[230px]">
              <img src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div
                    onClick={()=>window.open(source_code_link, "_blank")}
                     className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                        <img 
                          src={github}
                          alt=""
                          className="w-1/2 h-1/2 object-contain"
                        />
                  </div>
              </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag)=>(
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}

          </div>
       </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Work
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Projects
        </h2>
      </motion.div>
      <div>
        <motion.p variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 xl:ml-[400px] sm:ml-[20px] text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and knowledge in front-end.
          Each project is briefly described with links to code repositories
          and some live demos in it. It reflects my ability to work in this technology
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 ml-[150px] flex flex-wrap gap-7">
         {projects.map((project,index)=>(
               <ProjectCard key={`project-${index}`} index={index} {...project} />
         ))}

      </div>
    </>
  )
}

export default Works;
