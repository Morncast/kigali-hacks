'use client';
import React from 'react';
import { SparklesCore } from './ui/sparkles';

export function Sparkles() {
	return (
		<div className="kigaliHacksHack">
			Kigali Hacks, Hack The Future.
			<div className="w-[60rem]  absolute bottom-4  rounded-md ">
				
				{/* Core component */}
				<SparklesCore
					background="transparent"
					minSize={0.4}
					maxSize={1}
					particleDensity={1200}
					className="w-full h-full"
					particleColor="#ebffda"
				/>
			</div>
		</div>
	);
}
