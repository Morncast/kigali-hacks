'use client';
import { cn } from '@/utils/cn';
import React from 'react';
//import {BentoGrid, BentoGridItem} from './ui/bento-grid'
import {
	IconBoxAlignRightFilled,
	IconClipboardCopy,
	IconFileBroken,
	IconSignature,
	IconTableColumn,
} from '@tabler/icons-react';
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
		<div className="max-w-4xl mx-auto md:auto-rows-[20rem] p-4">
			<h1 id="description-heading">Prices</h1>

			<motion.div
				initial="initial"
				animate="animate"
				whileHover="hover"
				className="flex flex-col justify-center items-center flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] md:flex-row md:space-x-2 md:my-4 "
			>
				<motion.div
					variants={first}
					className="h-full w-1/3 rounded-2xl  p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center"
				>
					x<p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">1st place:</p>
					<p className="border border-red-500 bg-red-100 bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
						To be updated
					</p>
				</motion.div>
				<motion.div className="h-full relative z-20 w-1/3 rounded-2xl  p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center">
					<p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">2nd place:</p>
					<p className="border border-green-500  bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
						To be updated
					</p>
				</motion.div>
				<motion.div
					variants={second}
					className="h-full w-1/3 rounded-2xl  p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center"
				>
					<p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">3rd place:</p>
					<p className="border border-orange-500  bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
						To be updated
					</p>
				</motion.div>

				<motion.div
					variants={first}
					className="h-full w-1/3 rounded-2xl  p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center"
				>
					x
					<p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
						Best Beginner Project
					</p>
					<p className="border border-red-500 bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
						To be updated
					</p>
				</motion.div>
				<motion.div className="h-full relative z-20 w-1/3 rounded-2xl  p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center">
					<p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">Best Design</p>
					<p className="border border-green-500  bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
						To be updated
					</p>
				</motion.div>
				<motion.div
					variants={second}
					className="h-full w-1/3 rounded-2xl p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center"
				>
					<p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
						Most Meme Project
					</p>
					<p className="border border-orange-500  bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
						To be updated
					</p>
				</motion.div>
			</motion.div>

			<motion.div
				variants={second}
				className="h-full rounded-2xl p-4 bg-black border-white/[0.1] border flex flex-col items-center justify-center"
			>
				x
				<p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
					Your prize, for attending!
				</p>
				<p className="border border-green-500  bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
					To be updated
				</p>
			</motion.div>
		</div>
	);
}
const Skeleton = () => (
	<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   bg-dot-white/[0.2]  border  border-white/[0.2]  bg-black"></div>
);
