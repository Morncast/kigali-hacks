'use client';
import { Awards } from '@/components/awards';
import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useState } from 'react';

function Home() {
	// const [days, setDays] = useState(0);
	// const [hours, setHours] = useState(0);
	// useEffect(() => {
	// 	const target = new Date('7/28/2024 23:59:59');
	// 	const interval = setInterval(() => {
	// 		const now = new Date();
	// 		const difference = target.getTime() - now.getTime();
	// 		const d = Math.floor(difference / (1000 * 60 * 60 * 24));
	// 		setDays(d);
	// 		const h = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
	// 		setHours(h);
	// 		console.log(h);
	// 	}, 1000);
	// 	return () => clearInterval(interval);
	// }, []);

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
								href="https://forms.fillout.com/t/oBJzDyJHTyus"
								target="_blank"
							>
								Join us
							</Link>
						</li>
						<li>
							<Link
								href="#"
								target="_blank"
								className="button t1"
							>
								Being updated
							</Link>
						</li>
					</div>
				</nav>
			</header>
			<main>
				<div>
					<Image
						alt=""
						src="/humans.svg"
						width="200"
						height="207"
						className="image2"
					/>
				</div>
				<div className="main">
					<div className="kigaliHacksHack">{`Kigali Hacks, Hack The Future. `}</div>
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
											<span className="emphasis-text">Jun 26</span> Signup Period Ends
										</li>
										<li>
											<span className="emphasis-text">Jun 28</span> 2024 Hackathon
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</article>

					<div id="timeline">
						<h2 id="timeline-heading">Timeline</h2>
						<span className="caption">Click on each dot for more info</span>
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
									className="image4"
									width="100"
									height="207"
									alt=""
									src="/hcb-logo-original-dark.svg"
								/>
							</Link>
						</div>

						<div>
							<Link
								href="https://ironji.com/"
								target="_blank"
							>
								<Image
									className="image4"
									width="100"
									height="207"
									alt=""
									src="/ironji_logo.jpg"
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
					<div className="div">
						<i className="iNeedHelp">What is a hackathon?</i>
						<div className="wereSorryYouContainer">
							<span>
								A hackathon is an invention marathon where students come together to build, learn and share.
								The project can be anything as long it solves a problem. Everyone will create their own
								project in teams of up to 8 and at the end each team presents its project. The best projects
								will get prizes, and there will be swag and food and drinks for everyone.
							</span>
						</div>
					</div>

					<div className="div">
						<i className="iNeedHelp">Do I need to know how to code?</i>
						<div className="wereSorryYouContainer">
							<span>No, everyone is welcomed since there will be workshops that introduces some to </span>
							<span className="here">programming</span>
							<span>.</span>
						</div>
					</div>

					<div className="div">
						<i className="iNeedHelp">Who can attend?</i>
						<div className="wereSorryYouContainer">
							<span>
								Everyone is eligible to particpate in Kigali Hacks 2024 if only you are in high school, and if
								you already graduated and still want to attend you can consider volunteering or mentoring for
								the event
							</span>
							<span className="here"> email us at info@morncast.live</span>
							<span>.</span>
						</div>
					</div>

					<div className="div">
						<i className="iNeedHelp">How much does Kigali Hacks cost?</i>
						<div className="wereSorryYouContainer">
							<span>It cost nothing basically it is free.</span>
						</div>
					</div>

					<div className="div">
						<i className="iNeedHelp">Can I use past projects?</i>

						<div className="wereSorryYouContainer">
							<span>{"No, you can't use them"}</span>
						</div>
					</div>
				</section>
			</div>
			<footer>
				<div className="copyright">
					<p>
					Morncast is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).
					</p>
					<p> Copyright &copy; 2024.</p>
				</div>
			</footer>
		</div>
	);
}
export default Home;
