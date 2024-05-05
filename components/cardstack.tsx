'use client';
import { CardStack } from './ui/card-stack';
import { cn } from '@/utils/cn';
export function CardStacker({offset, scaleFactor}:{
	offset?: number;
  scaleFactor?: number;
}) {
	return (
		<div className="flex items-center justify-center w-full ">
			<CardStack items={CARDS} offset={offset} scaleFactor={scaleFactor}/>
		</div>
	);
}

export const Highlight = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return (
		<span
			className={cn(
				'font-bold bg-emerald-100 text-emerald-700 bg-emerald-700/[0.2] text-emerald-500 px-1 py-0.5',
				className,
			)}
		>
			{children}
		</span>
	);
};

const CARDS = [
	{
		id: 0,
		content: (
			<p>
				<Highlight>Exposure to Industry Leaders</Highlight>Your students will have the opportunity to interact
				with and learn from tech leaders, entrepreneurs, and experts from various fields.
			</p>
		),
	},
	{
		id: 1,
		content: (
			<p>
				<Highlight>Learn</Highlight>
				{"We'll be hosting many workshops throughout the event covering varying topics"}
				<Highlight>Skill Enhancement</Highlight> Access diverse technical workshops, sessions, and talks to
				enhance skills and stay up-to-date with tech trends.
			</p>
		),
	},
	{
		id: 2,
		content: (
			<p>
				Inspiration
				<Highlight>Exposure to tech innovation</Highlight>
				<Highlight>and thought leadership</Highlight> inspires students to pursue careers in tech.
			</p>
		),
	},
	{
		id: 3,
		content: (
			<p>
				<Highlight>Inspiration for Future Projects</Highlight>
				Attendees can find inspiration for tech-related projects and startups.
			</p>
		),
	},
	{
		id: 4,
		content: (
			<p>
				<Highlight>Career Opportunities</Highlight>
				Students can explore potential career paths and internships with attending tech companies.
			</p>
		),
	},
];
