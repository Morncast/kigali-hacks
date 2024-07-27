'use client';

import React from 'react';

import { motion } from 'framer-motion';

export function Awards() {
	const first = {
		initial: {
			x: 20,
			rotate: -5,
		},
		hover: {
			x: 0,
			rotate: 0,
		},
	};
	const second = {
		initial: {
			x: -20,
			rotate: 5,
		},
		hover: {
			x: 0,
			rotate: 0,
		},
	};
	return (
		<>
			<div className="max-w-4xl mx-auto md:auto-rows-[20rem] p-4">
				<h1 id="description-heading">Prizes</h1>
				<h1 id="description-heading">More prizes to come stay tuned</h1>
				<>
					<div>
						<motion.div
							initial="initial"
							animate="animate"
							whileHover="hover"
							className="flex justify-center items-center flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] md:space-x-2 md:my-4 "
						>
							<motion.div
								variants={first}
								className="h-full w-1/3 col-span-1 rounded-2xl  p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center"
							>
								x
								<p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
									1st place:
								</p>
								<p className="text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
								One more certificate for the Best Design
								</p>
								<p className="bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
								Get internships in the USA 
								</p>
								<p className=" border border-red-500  bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
								Life time access on Codecrafters
								</p>
							</motion.div>
							<motion.div className="h-full relative z-20 w-1/3 rounded-2xl  p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center">
								<p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
									2nd place:
								</p>
								<p className="border border-green-500  bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
								One more certificate for the Best Design
								</p>
								<p className="border border-green-500  bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
								subscription license of Axure RP Team
								</p>
								<p className="border border-green-500  bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
								Life time access on Codecrafters
								</p>
							</motion.div>
							<motion.div
								variants={second}
								className="h-full w-1/3 rounded-2xl  p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center"
							>
								<p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
									3rd place:
								</p>
								<p className=" text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
								One more certificate for the Best Design
								</p>
								<p className=" border border-orange-500  bg-orange-900/20  text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
								Life time access on Codecrafters
								</p>
							</motion.div>
						</motion.div>
					</div>

				{/* 	<div >
						<motion.div
							initial="initial"
							animate="animate"
							whileHover="hover"
							className="flex justify-center items-center flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2]  md:space-x-2 md:my-4 "
						>
							{/* <motion.div
								variants={first}
								className="h-full w-1/3 rounded-2xl  p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center"
							>
								x
								<p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
									BesthProject
								</p>
								<p className="border border-red-500 bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
									To be updated
								</p>
							</motion.div> 
							<motion.div
								variants={first}
								className="h-full w-1/3 rounded-2xl  p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center"
							>
								<p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
									Best Design
								</p>
								<p className="text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
								1-year subscription license of Axure RP Team
								</p>
								<p className="text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
								One more certificate for the Best Design
								</p>
							</motion.div>
							
						</motion.div>
					</div> */}
				</>

				<motion.div
					variants={second}
					className="h-full rounded-2xl p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center"
				>
					x
					<p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
						Your prize, for attending!
					</p>
					<p className="text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
						Get a certificate
					</p>
					<p className="text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
						Get free domains
					</p>
					<p className="border border-green-500  bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
						Get access to premium account on echo3d for 1 month
					</p>
					<p className="border border-green-500  bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
						Get access to premium account on interviewcake
					</p>
					<p className="border border-green-500  bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
					Get enrolled in professional courses By Natcom ICT.
					</p>
				</motion.div>
			</div>
		</>
	);
}
const Skeleton = () => (
	<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   bg-dot-white/[0.2]  border  border-white/[0.2]  bg-black"></div>
);
