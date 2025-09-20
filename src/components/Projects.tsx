import { FaGithub } from "react-icons/fa"
import { IoMdOpen } from "react-icons/io"
import ProjectBanner from "./ProjectBanner"
import techno from "../files/techno.jpg"
import dogderma from "../files/dogderma.jpg"
import brittany from "../files/brittany.png"
import maven from "../files/maven.png"
import spoteasy from "../files/spoteasy.png"
import divinerays from "../files/divinerays.png"
import { useEffect, useState, useRef } from "react"

const Projects = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [touchStart, setTouchStart] = useState(0)
	const [touchEnd, setTouchEnd] = useState(0)
	const [isDragging, setIsDragging] = useState(false)
	const [isTransitioning, setIsTransitioning] = useState(false)
	const [slidesPerView, setSlidesPerView] = useState(3)
	const [totalSlides, setTotalSlides] = useState(2)
	const carouselRef = useRef<HTMLDivElement>(null)
	const slideIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

	useEffect(() => {
		const updateSlidesPerView = () => {
			if (window.innerWidth >= 1024) {
				setSlidesPerView(3)
				setTotalSlides(2)
			} else if (window.innerWidth >= 768) {
				setSlidesPerView(2)
				setTotalSlides(3)
			} else {
				setSlidesPerView(1)
				setTotalSlides(6)
			}

			if (currentSlide >= totalSlides) {
				setCurrentSlide(0)
			}
		}

		updateSlidesPerView()
		window.addEventListener("resize", updateSlidesPerView)

		return () => {
			window.removeEventListener("resize", updateSlidesPerView)
		}
	}, [currentSlide, totalSlides])

	useEffect(() => {
		startSlideInterval()
		return () => {
			if (slideIntervalRef.current) {
				clearInterval(slideIntervalRef.current)
			}
		}
	}, [totalSlides])

	useEffect(() => {
		const handleGlobalMouseUp = () => {
			if (isDragging) {
				handleDragEnd()
			}
		}

		window.addEventListener("mouseup", handleGlobalMouseUp)

		return () => {
			window.removeEventListener("mouseup", handleGlobalMouseUp)
		}
	}, [isDragging, touchStart, touchEnd])

	const startSlideInterval = () => {
		if (slideIntervalRef.current) {
			clearInterval(slideIntervalRef.current)
		}

		slideIntervalRef.current = setInterval(() => {
			if (!isTransitioning) {
				goToSlide((currentSlide + 1) % totalSlides)
			}
		}, 5000)
	}

	const handleTouchStart = (e: React.TouchEvent) => {
		setTouchStart(e.targetTouches[0].clientX)
		setTouchEnd(e.targetTouches[0].clientX)
		setIsDragging(true)

		if (slideIntervalRef.current) {
			clearInterval(slideIntervalRef.current)
		}
	}

	const handleTouchMove = (e: React.TouchEvent) => {
		if (isDragging) {
			setTouchEnd(e.targetTouches[0].clientX)
		}
	}

	const handleTouchEnd = () => {
		handleDragEnd()
	}

	const handleMouseDown = (e: React.MouseEvent) => {
		if (isDragging) return
		setTouchStart(e.clientX)
		setTouchEnd(e.clientX)
		setIsDragging(true)

		if (carouselRef.current) {
			carouselRef.current.style.cursor = "grabbing"
		}

		if (slideIntervalRef.current) {
			clearInterval(slideIntervalRef.current)
		}
	}

	const handleMouseMove = (e: React.MouseEvent) => {
		if (isDragging) {
			setTouchEnd(e.clientX)
		}
	}

	const handleMouseUp = () => {
		handleDragEnd()
	}

	const handleDragEnd = () => {
		setIsDragging(false)

		if (carouselRef.current) {
			carouselRef.current.style.cursor = "grab"
		}

		const minSwipeDistance = 50
		const distance = touchStart - touchEnd

		if (distance > minSwipeDistance) {
			goToSlide((currentSlide + 1) % totalSlides)
		} else if (distance < -minSwipeDistance) {
			goToSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1)
		}

		startSlideInterval()
	}

	const goToSlide = (index: number) => {
		if (!isDragging) return
		if (isTransitioning || index === currentSlide) return

		setIsTransitioning(true)
		setCurrentSlide(index)

		setTimeout(() => {
			setIsTransitioning(false)
		}, 500)
	}

	const projectData = [
		{
			name: (
				<div className="w-72 justify-center font-raleway font-extrabold text-3xl text-cyan-400 h-full flex items-center">
					TECHNO<span className="text-yellow-300">T</span>YPER
				</div>
			),
			description:
				"A typing game tailored for kids, featuring a range of challenges and difficulties to enhance their skills in a fun, engaging way.",
			bgImage: techno,
			bgColor: "",
			textColor: "text-black",
			links: [
				{
					icon: <FaGithub />,
					url: "https://github.com/rmanitoxv/keyboarding-react",
				},
				{ icon: <IoMdOpen />, url: "https://keyboarding-react.vercel.app" },
			],
		},
		{
			name: (
				<div className="w-72 justify-center font-barlow text-[#fe8d2a] font-bold text-4xl h-full flex items-center">
					DOG<span className="text-[#112b3c]">DERMA</span>
				</div>
			),
			description:
				"DogDerma is a web-mobile application used to detect a number of dog skin diseases using image classification.",
			bgImage: dogderma,
			bgColor: "",
			textColor: "text-white",
			links: [
				{ icon: <FaGithub />, url: "https://github.com/rmanitoxv/DogDermVue" },
				{ icon: <IoMdOpen />, url: "https://dogderm.vercel.app" },
			],
		},
		{
			name: (
				<div className="w-72 justify-center font-barlow text-[#fe8d2a] h-full flex items-center">
					<img src={brittany} className="w-48" />
				</div>
			),
			description:
				"A payment portal for Brittany Pallazo employees that utilizes maya api to handle payments. It also comes with staff and clients management.",
			bgImage: "",
			bgColor: "#bc8540",
			textColor: "text-white",
			links: [
				{
					icon: <IoMdOpen />,
					url: "https://paymentportal.brittanypalazzo.com",
				},
			],
		},
		{
			name: (
				<div className="w-72 justify-center font-barlow h-full flex items-center">
					<img src={maven} className="w-48" />
				</div>
			),
			description:
				"A reservation system for Maven Resort that allows users to reserve rooms, view available dates, and contact the resort for any questions or concerns.",
			bgImage: "",
			bgColor: "#F8E9D6",
			textColor: "text-black",
			links: [{ icon: <IoMdOpen />, url: "https://www.mavenbeachresort.com/" }],
		},
		{
			name: (
				<div className="w-72 justify-center font-barlow h-full flex items-center">
					<img src={spoteasy} className="w-48" />
				</div>
			),
			description:
				"A spot reservation system that caters both company and customer registered spots. It features spot registration, reservation, and cancellation.",
			bgImage: "",
			bgColor: "white",
			textColor: "text-[#242424]",
			bannerColor: "#0192D1",
			links: [{ icon: <IoMdOpen />, url: "https://spoteasy.vercel.app/" }],
		},
		{
			name: (
				<div className="w-72 justify-center font-barlow h-full flex items-center">
					<img src={divinerays} className="w-48" />
				</div>
			),
			description:
				"An employee management system for Divine Rays staff. It features staff and client management, attendance tracking, as well as payroll automation.",
			bgImage: "",
			bgColor: "#004F15",
			textColor: "text-white",
			links: [],
		},
	]

	const renderProjectSlides = () => {
		const slides = []
		const projectsPerSlide = slidesPerView

		for (let i = 0; i < totalSlides; i++) {
			const startIndex = i * projectsPerSlide
			const projectsForThisSlide = projectData.slice(
				startIndex,
				startIndex + projectsPerSlide
			)

			slides.push(
				<div
					key={`slide-${i}`}
					className="min-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{projectsForThisSlide.map((project, index) => (
						<div
							key={`project-${startIndex + index}`}
							className={`w-full flex justify-center ${
								index === 0
									? "lg:justify-end"
									: index === projectsPerSlide - 1
									? "lg:justify-start"
									: "justify-center"
							}`}
						>
							<ProjectBanner
								bgImage={project.bgImage}
								bgColor={project.bannerColor || ""}
							>
								{project.name}
								<div
									className={`h-full flex flex-col justify-between py-4 ${project.textColor}`}
									style={{
										backgroundColor: project.bgColor,
									}}
								>
									<div className="text-justify px-8 h-full">
										{project.description}
									</div>
									{project.links.length > 0 && (
										<div
											className={`flex gap-2 ${project.textColor} justify-center w-full bottom-4 text-xl`}
										>
											{project.links.map((link, linkIndex) => (
												<a key={linkIndex} target="_blank" href={link.url}>
													{link.icon}
												</a>
											))}
										</div>
									)}
								</div>
							</ProjectBanner>
						</div>
					))}
				</div>
			)
		}

		return slides
	}

	return (
		<div className="min-h-screen text-white flex flex-col justify-center items-center py-16">
			<h1 className="font-bold text-2xl mb-8">PROJECTS</h1>
			<div className="w-11/12 xl:w-4/6 py-4 relative">
				<div className="overflow-hidden">
					<div
						ref={carouselRef}
						className="flex items-center min-h-104 cursor-grab"
						style={{
							transform: `translateX(-${currentSlide * 100}%)`,
							transition: isDragging ? "none" : "transform 0.5s ease-in-out",
						}}
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}
						onMouseDown={handleMouseDown}
						onMouseMove={handleMouseMove}
						onMouseUp={handleMouseUp}
						onMouseLeave={handleMouseUp}
					>
						{renderProjectSlides()}
					</div>
				</div>

				<div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
					{Array.from({ length: totalSlides }).map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`w-3 h-3 rounded-full transition-colors ${
								currentSlide === index ? "bg-white" : "bg-gray-500"
							}`}
							aria-label={`Show slide ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Projects
