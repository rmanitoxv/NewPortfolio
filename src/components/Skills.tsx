import { useState } from "react"
import { motion } from "framer-motion"

interface Experience {
	title: string
	company: string
	period: string
	description: string[]
	category: string
}

const Skills = () => {
	const [activeCategory, setActiveCategory] = useState<string>("All")

	const experienceData: Experience[] = [
		// Work Experience
		{
			title: "Freelance",
			company: "Self-Employed",
			period: "2023 - Present",
			description: [
				"Developed robust payment solutions with VueJS and Laravel, increasing client conversion rates by 25%",
				"Designed and implemented a NextJS reservation system for a hospitality client, reducing booking errors by 40%",
				"Successfully delivered 6+ client projects on schedule using ReactJS and Django frameworks",
			],
			category: "Work",
		},
		{
			title: "Software Engineer Intern",
			company: "Fortworth Incorporation",
			period: "March 2023 - June 2023",
			description: [
				"Spearheaded mobile application development for a cross-functional agile team",
				"Created an interactive ReactJS keyboard game featuring real-time performance metrics and progression tracking",
				"Successfully deployed a cross-platform application using Electron framework",
			],
			category: "Work",
		},
		{
			title: "Content Editor Intern",
			company: "Reed Elsevier Philippines",
			period: "April 2023 - June 2023",
			description: [
				"Streamlined content workflow by optimizing XML resources for legal database integration",
				"Processed and validated legislative documents with over 95% accuracy rate",
			],
			category: "Work",
		},

		// Projects
		{
			title: "SpotEasy",
			company: "Personal Project",
			period: "2024",
			description: [
				"Engineered a comprehensive parking management system with real-time availability monitoring",
				"Implemented secure user authentication and seamless payment processing integration",
				"Designed an intuitive, responsive UI following modern design principles and accessibility standards",
			],
			category: "Project",
		},
		{
			title: "DivineRays EMS",
			company: "Client Project",
			period: "2024",
			description: [
				"Architected a scalable employee management system for a healthcare organization",
				"Implemented role-based access control with granular permission settings",
				"Integrated secure biometric authentication for precise attendance tracking and compliance",
			],
			category: "Project",
		},
		{
			title: "Maven Beach Resort Reservation System",
			company: "Client Project",
			period: "2024",
			description: [
				"Developed a full-featured reservation platform enhancing guest booking experience",
				"Implemented dynamic booking calendar, secure payment processing, and comprehensive admin dashboard",
				"Designed a fully responsive interface optimized for all device types and screen sizes",
			],
			category: "Project",
		},
		{
			title: "PLM File Storage Management",
			company: "Special Project",
			period: "2023",
			description: [
				"Engineered a secure file storage solution for university faculty and administration",
				"Implemented encrypted file upload, storage, and controlled sharing capabilities",
				"Designed a comprehensive permission system with granular access controls",
			],
			category: "Project",
		},
		{
			title: "DogDerma",
			company: "Capstone Project",
			period: "2022",
			description: [
				"Created an AI-powered application for detecting and classifying canine skin conditions",
				"Implemented advanced image processing algorithms for accurate disease identification",
				"Designed an intuitive interface for both pet owners and veterinary professionals",
			],
			category: "Project",
		},
		{
			title: "Palazzo Verde",
			company: "Client Project",
			period: "2022",
			description: [
				"Developed a modern website for a premier event venue business",
				"Implemented comprehensive booking system with event management capabilities",
				"Created an elegant, responsive design showcasing venue features and services",
			],
			category: "Project",
		},
		{
			title: "RJ Dizon Storage Management System",
			company: "University Project",
			period: "2022",
			description: [
				"Developed an end-to-end storage management solution with inventory tracking",
				"Implemented user management, access controls, and detailed reporting features",
				"Created an interactive dashboard for real-time monitoring of storage metrics",
			],
			category: "Project",
		},
		{
			title: "iPLM",
			company: "University Project",
			period: "2021",
			description: [
				"Developed a comprehensive student/professor portal for Pamantasan ng Lungsod ng Maynila",
				"Implemented course management, grade tracking, and secure communication channels",
				"Designed a responsive interface ensuring accessibility across all devices",
			],
			category: "Project",
		},
	]

	const categories = [
		"All",
		...Array.from(new Set(experienceData.map((exp) => exp.category))),
	]

	const filteredExperience =
		activeCategory === "All"
			? experienceData
			: experienceData.filter((exp) => exp.category === activeCategory)

	return (
		<div className="h-screen flex flex-col justify-center items-center py-8">
			<div className="container mx-auto px-4 h-full flex flex-col">
				<h2 className="text-4xl font-bold text-center mb-8 text-white pt-8">
					Experience & Projects
				</h2>

				{/* Category Filter */}
				<div className="flex justify-center mb-6 flex-wrap gap-2">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setActiveCategory(category)}
							className={`px-4 py-2 rounded-full transition-all ${
								activeCategory === category
									? "bg-indigo-600 text-white"
									: "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
							}`}
						>
							{category}
						</button>
					))}
				</div>

				{/* Experience Timeline - Scrollable with custom scrollbar */}
				<div
					className="max-w-4xl mx-auto flex-1 overflow-y-auto pb-8 pr-2
                    scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-transparent
                    hover:scrollbar-thumb-indigo-400 scrollbar-thumb-rounded-full"
				>
					{filteredExperience.map((exp, index) => (
						<motion.div
							key={`${exp.title}-${exp.company}`}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							className="mb-6"
						>
							<div className="bg-zinc-800 rounded-lg p-5 shadow-lg border-l-4 border-indigo-500 hover:shadow-indigo-900/20 hover:shadow-xl transition-all duration-300">
								<div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
									<div>
										<h3 className="text-lg font-bold text-white">
											{exp.title}
										</h3>
										<p className="text-indigo-400 text-sm">{exp.company}</p>
									</div>
									<div className="mt-2 md:mt-0">
										<span className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded-full text-xs">
											{exp.period}
										</span>
									</div>
								</div>

								<ul className="list-disc list-inside text-zinc-300 space-y-1 ml-2 text-sm">
									{exp.description.map((item, i) => (
										<li key={i}>{item}</li>
									))}
								</ul>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Skills
