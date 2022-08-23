import Navbar from "./Navbar";

const Hero = () => {
	return (
		<section id="hero">
			<div className="container max-w-6xl mx-auto px-12 py-12 md:px-6">
				<Navbar />
				<div className="max-w-lg mt-32 mb-32 text-white p-4 text-4xl uppercase border-2 md:p-10 md:text-6xl">
					IMPRESSIVE EXPERIENCES THAT DELIVER
				</div>
			</div>
		</section>
	);
};

export default Hero;
