import { motion } from 'framer-motion'
import Lottie from "react-lottie";
import { FaLinkedin } from 'react-icons/fa';
// import Lottie from "lottie-react";

import { CONTENT, SOCIAL_MEDIA, RESUME_LINK } from "../constants";
import Button from './Button';

const Hero = () => {
	const { hero } = CONTENT;
	const { link: linkedInLink } = SOCIAL_MEDIA[0];

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: hero.image,
		progressiveLoad: true,
		HorizontalOptions: "FillAndExpand",
		VerticalOptions: "FillAndExpand",
		rendererSettings: {
			preserveAspectRatio: "xMaxYmax meet"
		}
	};

	return (
		<motion.section
			initial={{ x: -100, opacity: 0.25 }}
			animate={{ x: 0, opacity: 1.5 }}
			transition={{ duration: 1 }}
			id="home" className="overflow-hidden bg-primaryLinear md:bg-none w-full h-full xl:h-svh ">	
			<div className="relative flex laptop:flex-row flex-col justify-around items-center">
				<div
					data-aos="slide-right"
					data-aos-delay="500"
					className="absolute hidden md:block w-screen h-full md:h-svh top-0 right-0 bg-primaryLinear bottom-0 -z-10"
				>
				</div>

				{/* First Column */}
				<div className="pb-1 pt-8 sm:pt-5 mt-10 laptop:pl-10 w-auto flex flex-col">
					<div className='flex flex-col justify-between items-center w-full p-1'>
						{/* <h2 className='flex-1 flex flex-col items-center font-Inria text-center font-semibold text-[40px]  sm:text-[52px] text-[#1c4896] leading-[45px] sm:leading-[70px]'> */}
						<h2 className='flex-1 flex flex-col items-center font-Inria text-center font-semibold text-[40px]  sm:text-[52px] text-[#1c4896] leading-[45px] sm:leading-[70px]'>
							{hero.title}
							<br className='xs:hidden block' /> {" "}
							{hero.sub1 + " "}
							<br className='block' /> {" "}
							{hero.sub2}
						</h2>
						<div className="flex flex-col w-full items-center">
							<h1 className="text-dark_primary font-Poppins text-[45px] sm:text-[56px]  sm:flex sm:justify-center sm:gap-2 sm:items-center leading-[55px] sm:leading-[70px]">
								{/* First and Middle Name */}
								<span className="sm:inline-block block">{hero.firstName}</span>
								<span className="sm:inline-block block">{hero.middleName}</span>
							</h1>
							{/* Last Name */}
							<h1 className="text-dark_primary font-Poppins text-[45px] sm:text-[56px] text-center leading-[55px] sm:leading-[70px]">
								{hero.lastName}
							</h1>
						</div>
					</div>

					<br/>

					<div className="text-center mx-auto mb-4">
						{hero.hero_content.map((content, i) => (
							<motion.div
								whileInView={{ y: [20, 0], opacity: [0, 1] }}
								transition={{ duration: 1, type: 'spring', stiffness: "120" }}
								key={i}
								className={`flex items-center w-auto xs:w-80 gap-1 ${i === 1 && " flex-row-reverse text-right"}  `}>
								<h3>{content.count}</h3>
								<p className="text-light_secondary items-center bg-red">{content.text}</p>
							</motion.div>
						))}
					</div>


					<motion.div
						whileInView={{ y: [20, 0], opacity: [0, 1] }}
						transition={{ duration: 1, type: 'spring', stiffness: "120" }}
					>
						<div className="flex space-x-4">
							<a href={linkedInLink} style={{ flex: 7 }} target="_blank" >
								<Button styles={'w-full bg-letsConnect font-bold transition duration-200 ease-in delay-20 hover:bg-letsConnect2 hover:scale-105'} className="" text={'Lets connect'} />
							</a>
							<a href={RESUME_LINK} style={{ flex: 3 }} target="" >
								<Button styles={'w-full bg-letsConnect font-bold transition duration-200 ease-in delay-20 hover:bg-letsConnect2 hover:scale-105'} className="" text={'Resume '} />
							</a>
						</div>

					</motion.div>
					
				</div>

				{/* Second Column */}
				<div className="h-[20rem] md:h-[37rem] pointer-events-none mt-0 sm:mt-5 ">
					<Lottie options={defaultOptions} />
				</div>
			</div>
		</motion.section>
	);
};

export default Hero;
