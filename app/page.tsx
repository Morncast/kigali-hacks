'use client';
import { Awards } from '@/components/awards';
import { CardStacker } from '@/components/cardstack';
import { Sparkles } from '@/components/Sparkles';
import { WobbleCard } from '@/components/ui/wobble';
import { Wobble } from '@/components/wobble';
import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useState, useRef } from 'react';

function Home() {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	useEffect(() => {
		const target = new Date('8/17/2024 23:59:59');
		const interval = setInterval(() => {
			const now = new Date();
			const difference = target.getTime() - now.getTime();
			const d = Math.floor(difference / (1000 * 60 * 60 * 24));
			setDays(d);
			const h = Math.floor(difference / (1000 * 60 * 60));
			setHours(h);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="page">
			<header>
				<nav>
					<svg
						width="97"
						height="98"
						viewBox="0 0 97 98"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M90.582 30.2962C97.1765 37.3722 98.6816 47.8383 94.3511 56.5055L86.9954 71.2277L79.0983 85.663C74.4492 94.1614 65.0236 98.8361 55.4947 97.3696L39.3089 94.8786L23.2269 91.7809C13.7591 89.9571 6.4287 82.3803 4.86997 72.8066L2.22234 56.545L0.18019 40.1951C-1.02207 30.5696 3.87303 21.2121 12.4386 16.7618L26.988 9.2025L41.8079 2.19551C50.5327 -1.92966 60.8885 -0.136051 67.741 6.68711L79.3807 18.2769L90.582 30.2962ZM49.9781 84.0758L48.6274 35.2576L72.9411 81.3636L49.9781 84.0758Z"
							fill="#0A0F0D"
						/>
					</svg>
					<div className="nav">
						<li>
							<Link
								href="https://bank.hackclub.com/donations/start/morncast"
								target="_blank"
								className="button"
							>
								Donate
							</Link>
						</li>
						<li>
							<Link
								href="https://lu.ma/nlmfhe7f"
								target="_blank"
							>
								RSVP
							</Link>
						</li>
						<li>
							<Link
								href="#"
								target="_blank"
								className="button t1"
							>
								{days} days
							</Link>
						</li>
					</div>
				</nav>
			</header>
			<main>
				{' '}
				<WobbleCard containerClassName="bg-yellow-800 m-4 mt-[2rem]">
					<div>
						<h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
							The best way to learn is by building.
						</h2>
						<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
							<span>
								A hackathon is a space that helps give makers everything they need to start building–mentors,
								collaborators, inspiration, and a goal to work towards. Hackers will leave a hackathon with a
								project of their own, ready and excited to keep hacking once they get home.
								<br />
								<br />A hackathon is a social coding marathon where teenagers come together to build projects
								for a weekend and share them with the world.
							</span>
						</p>
					</div>
					<Image
						src="/hack.jpg"
						width={500}
						height={500}
						alt="image"
						className="absolute right-[100%] md:-right-[40%] lg:-right-[20%] -bottom-[100px] object-contain rounded-2xl"
					/>
				</WobbleCard>
				<div className="main">
					<Sparkles />

					<div className="joinUs">
						Join us at Kigali Hacks, in-person high school hackathon be a part of a 12 hour journey of coding,
						building, learning, and sharing. Open to all high schoolers across Rwanda, technical or
						non-technical backgrounds. We warmly welcome you
					</div>

					<div id="spots-container">
						<div
							className="blob green"
							aria-hidden="true"
						></div>
						<h2 id="header-subtitle-spots"> Venue TBC</h2>
					</div>
				</div>
			</main>
			<section>
				<div className="w-1/2 mx-auto text-center">
					<h2 className="kigaliHacksHack">
					Why you should join.
						</h2>
						<div className="joinUs">
						{"Why Get Involved? The reason why you shouldn't miss this."}
					</div>
					<div className="flex items-center flex-col justify-between gap-2 md:flex-row lg:flex-row ">
						<div>
							<CardStacker />
						</div>
						<div>
							<CardStacker />
						</div>
					</div>
				</div>

				<div id="event-time">
					<article id="event-description">
						<h2 id="description-heading">Our Mission Statement</h2>

						<div id="event-main-box">
							<div id="description-content">
								Morncast Community is a student-led organization focused on promoting community engagement and
								improving TECH exposure for local high school students.
							</div>

							<ul className="list">
								<li>
									{
										"Even if you're not an expert at coding, this hackathon offers an opportunity for you to strengthen your skills and collaborate with others to create something useful. Below are important dates to keep in mind:"
									}
									<ul style={{ marginLeft: '25px' }}>
										<li>
											<span className="emphasis-text">Aug 10</span> Signup Period Ends
										</li>
										<li>
											<span className="emphasis-text">Aug 17</span> 2024 Hackathon
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</article>

					<div id="timeline">
						<h2 id="timeline-heading">Timeline To be updated</h2>
						<span className="caption">
							Click on each dot for more info, disclaimer this is not the official schedule. Once released we
							will let you know if you have RSVP
						</span>
						<div className="flex-parent">
							<div className="input-flex-container">
								<input
									id="t1"
									className="timeline-input"
									type="radio"
									name="timeline-dot"
									data-description="1"
									defaultChecked
								/>
								<div
									onClick={() => "check('t1')"}
									className="dot-info"
									data-description="1"
								>
									<span className="year">7/28 8:20am</span>
									<span className="label">Opening Ceremony</span>
								</div>
								<input
									id="t2"
									className="timeline-input"
									type="radio"
									name="timeline-dot"
									data-description="2"
								/>
								<div
									onClick={() => "check('t2')"}
									className="dot-info"
									data-description="2"
								>
									<span className="year">7/28 10:00am</span>
									<span className="label">Hacking Begins</span>
								</div>
								<input
									id="t3"
									className="timeline-input"
									type="radio"
									name="timeline-dot"
									data-description="3"
								/>
								<div
									onClick={() => "check('t3')"}
									className="dot-info"
									data-description="3"
								>
									<span className="year">7/28 8:00pm</span>
									<span className="label">Projects Due</span>
								</div>
								<input
									id="t4"
									className="timeline-input"
									type="radio"
									name="timeline-dot"
									data-description="4"
								/>
								<div
									onClick={() => "check('t4')"}
									className="dot-info"
									data-description="4"
								>
									<span className="year">7/28 9:00pm</span>
									<span className="label">Project Presentations</span>
								</div>
								<input
									id="t5"
									className="timeline-input"
									type="radio"
									name="timeline-dot"
									data-description="5"
								/>
								<div
									onClick={() => "check('t5')"}
									className="dot-info"
									data-description="5"
								>
									<span className="year">12/28 10:00pm</span>
									<span className="label">Awards Ceremony</span>
								</div>

								<div id="timeline-descriptions-wrapper">
									<div
										className="timeline-desc"
										data-description="1"
									>
										<div
											className="bracket"
											id="bracket-1"
										>
											<div className="left"></div>
											<div className="right"></div>
										</div>
										<h3>Opening Ceremony</h3>
										<h4 className="timeline-description-subtitle">7/28 | 9:00am - 10:00am</h4>
										<br />
										<p className="timeline-description">
											The official start of the hackathon where we deliver the opening presentation along with
											the finalized prompts, rules, and timeline.
											<ul className="timeline-description-list">
												<li>It is highly recommended you attend this portion of the hackathon</li>

												<li>
													<span className="important-text">=IMPORTANT=</span> Link for prompts, rules and
													rubric
													<br />
													<Link
														href="https://docs.google.com/document/d/1i0gYoNs3rFDjX8H-_yPBiX31IiHTJphAoBMDW0Fu2Xo/edit?usp=sharing"
														className="link"
														target="_blank"
													>
														Prompts
													</Link>
													<br />
													<Link
														href="https://docs.google.com/document/d/1CAQVuwHnKbs9ZMHQsU4hLUvyMlREhrdKluN86H-ock4/edit?usp=sharing"
														className="link"
														target="_blank"
													>
														Rubric
													</Link>
													<br />
													<Link
														href="https://kigalihacks.live/code"
														className="link"
														target="_blank"
													>
														Rules
													</Link>
												</li>
												<li>
													<span className="important-text">=IMPORTANT=</span> DO NOT START CODING during this
													period
												</li>
											</ul>
										</p>
									</div>
									<div
										className="timeline-desc"
										data-description="2"
									>
										<div
											className="bracket"
											id="bracket-2"
										>
											<div className="left"></div>
											<div className="right"></div>
										</div>
										<h3>Hacking Begins</h3>
										<h4 className="timeline-description-subtitle">7/28 | 10:00am</h4>
										<br />
										<p className="timeline-description">
											{
												"Now's your time to shine! Start working with your team to build your project. No strings attached!"
											}
											<ul className="timeline-description-list">
												<li>
													<span className="important-text">=IMPORTANT=</span> Your project must follow one of
													the given prompts and guidelines; otherwise, your team may lose a lot of points for
													unrelated topic deductions
												</li>
												<li>Remember use your time wisely</li>
											</ul>
										</p>
									</div>
									<div
										className="timeline-desc"
										data-description="3"
									>
										<div
											className="bracket"
											id="bracket-3"
										>
											<div className="left"></div>
											<div className="right"></div>
										</div>
										<h3>Projects Due</h3>
										<h4 className="timeline-description-subtitle">7/28 | 8:00pm</h4>
										<br />
										<p className="timeline-description">
											STOP coding! intense stress and turmoil are finally up! We hope you learned some
											valuable skills and made some new friends along the way.
											<ul className="timeline-description-list">
												<li>
													<span className="important-text">=IMPORTANT=</span> Make sure you turn in your
													project BEFORE the deadline at 8:00pm. You can submit using our github
													<Link
														href="https://github.com/Morncast"
														className="link"
														target="_blank"
													>
														{' '}
														Morncast Community
													</Link>
												</li>
												<li>
													{
														"Don't leave yet though, because you still need to present your project to the judges"
													}
												</li>
												<li>
													From now until Project Presentations (8:30pm), your team will have around 30 mins to
													prepare for your presentation. Get back to work!
												</li>
											</ul>
										</p>
									</div>
									<div
										className="timeline-desc"
										data-description="4"
									>
										<div
											className="bracket"
											id="bracket-4"
										>
											<div className="left"></div>
											<div className="right"></div>
										</div>
										<h3>Project Presentations</h3>
										<h4 className="timeline-description-subtitle">7/28 | 8:30pm - 9:30pm</h4>
										<br />
										<p className="timeline-description">
											This is where your team will present your product to our honored judges.
											<br />
											<ul className="timeline-description-list">
												<li>
													Be Creative! Make your product stand out by including a demo or showing its function
													across multiple sources
												</li>
												<li>Presentations will occur in order of team number (i.e. Team 1 will go first)</li>
												<li>
													It is advised you have your camera on and that you ensure your microphone and tech
													work before presenting
												</li>
												<li>
													<span className="important-text">=IMPORTANT=</span>
													{
														"Your team's presentation is NOT ALLOWED to go above 5 minutes... Use your time wisely."
													}
												</li>
												<li>
													Your team will be graded on both the product and presentation as per the rubric
												</li>
											</ul>
										</p>
									</div>
									<div
										className="timeline-desc"
										data-description="5"
									>
										<div
											className="bracket"
											id="bracket-5"
										>
											<div className="left"></div>
											<div className="right"></div>
										</div>
										<h3>Awards Ceremony</h3>
										<h4 className="timeline-description-subtitle">7/28 | 9:30pm - 10:00pm</h4>
										<br />
										<p className="timeline-description">
											{
												"Congratulations! Judge scores are tallied and here's where we announce the 1st, 2nd, and 3rd place teams along with constructive feedback for each in the "
											}
											<ul className="timeline-description-list">
												<li>
													<u>Winners</u>: we will contact you via Email about your prizes; allow up to 2 days
													for a response
												</li>
											</ul>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Awards />
				<hr id="line-header" />
				<div className="sponsors">
					<div className="sponsors2">Sponsors</div>

					<div className="sponsors_section">
						<div>
							<Link
								href="https://hackclub.com/"
								target="_blank"
							>
								<Image
									className="image4  object-contain"
									width="100"
									height="207"
									alt=""
									src="/hcb-logo-original-dark.svg"
								/>
							</Link>
						</div>
						{/* <div>
							<Link
								href="https://www.bktechouse.rw/"
								target="_blank"
							>
								<Image
									className="image4"
									width="100"
									height="207"
									alt=""
									src="/bk.svg"
								/>
							</Link>
						</div>
						<div>
							<Link
								href="https://irembo.com/"
								target="_blank"
							>
								<Image
									className="image4"
									width="100"
									height="207"
									alt=""
									src="/irembo.svg"
								/>
							</Link>
						</div>
						<div>
							<Link
								href="https://www.echo3d.com/"
								target="_blank"
							>
								<Image
									className="image4"
									width="100"
									height="207"
									alt=""
									src="/echo.png"
								/>
							</Link>
						</div> */}
						<div>
							<Link
								href="https://www.interviewcake.com/"
								target="_blank"
							>
								<Image
									className="image4 object-contain"
									width="200"
									height="207"
									alt=""
									src="/cake.png"
								/>
							</Link>
						</div>

						<div>
							<Link
								href="https://ironji.com/"
								target="_blank"
							>
								<Image
									className="image4 object-contain"
									width="100"
									height="207"
									alt=""
									src="/ironji_logo.jpg"
								/>
							</Link>
						</div>
						<div>
							<Link
								href="https://codecrafters.io/event/kigalihacks"
								target="_blank"
							>
								<Image
									className="image4 object-contain"
									width="200"
									height="207"
									alt=""
									src="/crafters.svg"
								/>
							</Link>
						</div>
					</div>
				</div>
				<Image
					className="sticky"
					width="200"
					height="207"
					alt=""
					src="/sticky.svg"
				/>
			</section>

			<div className="faqSection">
				<i className="faqs">FAQs</i>

				<section className="fqa">
					<Wobble />
				</section>
			</div>
			<footer>
				<div className="copyright">
					<p>
						Morncast is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit
						(EIN: 81-2908499).
					</p>
					<p> Copyright &copy; 2024.</p>
				</div>
			</footer>
		</div>
	);
}
export default Home;
