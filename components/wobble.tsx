'use client';
import Image from 'next/image';
import React from 'react';
import { WobbleCard } from './ui/wobble';

export function Wobble() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
			<WobbleCard
				containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
				className=""
			>
				<h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
					What is a hackathon?
				</h2>
				<p className="mt-4 text-left  text-base/6 text-neutral-200">
					A hackathon is an invention marathon where students come together to build, learn and share. The
					project can be anything as long it solves a problem. Everyone will create their own project in teams
					of up to 8 and at the end each team presents its project. The best projects will get prizes, and
					there will be swag and food and drinks for everyone.
				</p>
			</WobbleCard>
			<WobbleCard containerClassName="col-span-1 min-h-[300px]">
				<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
					Do I need to know how to code?
				</h2>
				<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
					<span>No, everyone is welcomed since there will be workshops that introduces some to </span>
					<span className="here">programming basic and much more.</span>
				</p>
			</WobbleCard>
			<WobbleCard containerClassName="col-span-1 bg-black-800 min-h-[300px]">
				<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
					Can I use past projects?
				</h2>
				<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
					<span>
					{"Unfortunately, you can use them and if caught using one you and your team won't be able to get cool awards"}
					</span>
				</p>
			</WobbleCard>
			<WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-green-800 min-h-[500px] lg:min-h-[300px]">
				<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
					How much does Kigali Hacks cost?
				</h2>
				<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
					<span>
						It cost nothing basically it is free, but remember we wont be able to provde transport when coming
						to the venue but we will offer transport when getting back home.
					</span>
				</p>
			</WobbleCard>
			<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
				<div className="max-w-sm">
					<h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
						Who can attend?
					</h2>
					<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
						Everyone is eligible to particpate in Kigali Hacks 2024 if only you are in high school, and if you
						already graduated and still want to attend you can consider volunteering or mentoring for the
						event
					</p>
					<span className="here"> email us at info@kigalihacks.live</span>
				</div>
				<Image
					src="/students.jpg"
					width={800}
					height={800}
					alt="image"
					className="absolute right-[100%] md:-right-[100%] lg:-right-[20%] -bottom-[10px] object-contain rounded-2xl"
				/>
			</WobbleCard>
		</div>
	);
}
