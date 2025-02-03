import TicketDormImage from "../assests/ticketdorm.svg";
import BolaCashImage from "../assests/bolacash.svg";
import BacodeTenziesImage from "../assests/bacodetenzies.png";

const INFO = {
	main: {
		title: "Kibang Virtue—Frontend Engineer and Tech Enthusiast",
		name: "Kibang Virtue Anfumbom",
		email: "virtuekibang@gmail.com",
		logo: "../logo.jpg",
	},

	socials: {
		twitter: "https://x.com/KhingVirtue",
		github: "https://github.com/Reaper500",
		linkedin: "https://www.linkedin.com/in/virtue-kibang-170859288/",
	},

	homepage: {
		title: "Frontend Engineer and Tech Lover.",
		description:
			"Hi there! I am Kibang Virtue, a dedicated front-end engineer with a deep passion for crafting beautiful and functional web experiences. My journey into software engineering began with a fascination for technology and design, which led me to explore the endless possibilities in web development.",
	},

	about: {
		title: "I'm Kibang Virtue, a seasoned Software Engineer with a proven track record in crafting high-perfomance, user-centric and inclusive web applications utilizing cutting-edge frontend technologies.",
		description: (
			<section>
				<p>
					I love turning complex problems into easy-to-use solutions.
					I believe that understanding what users need is key to
					creating great websites and apps. As a front-end developer,
					I design interfaces that are not only visually appealing but
					also easy to use and accessible to everyone
				</p>{" "}
				<p>
					In pursuit of a well-rounded life, I embrace various
					activities that rejuvenate both my professional and personal
					aspirations. I find joy in playing basketball, singing, and
					dancing. These pursuits keep me energized and inspired,
					enhancing my work with fresh and innovative perspectives.
				</p>{" "}
				<p>
					In addition to these activities I am also passionate about
					exploring new technologies and staying informed about
					industry trends. Engaging with cutting-edge advancements
					fuels my creativity and keeps me at the forefront of
					innovation.
				</p>{" "}
				<p>
					ideally, I see myself as a lifelong learner, always eager to
					expand my knowledge and skills in the ever-evolving world of
					web development. With a solid foundation in both front-end
					and back-end technologies.
				</p>
			</section>
		),
	},

	// articles: {
	// 	title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
	// 	description:
	// 		"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	// },

	projects: [
		{
			title: "TicketDorm",
			description:
				"An e-ticketing platform that streamlines the process of purchasing and managing event tickets.",
			logo: TicketDormImage,
			linkText: "View Project",
			link: "https://ticketdorm.netlify.app",
		},

		{
			title: "Bola Cash",
			description:
				"A recycling Web application that allows users to exchange trash for cash and request pickups.",
			logo: BolaCashImage,
			linkText: "View Project",
			link: "https://bolacash.netlify.app",
		},

		{
			title: "Bacode Tenzies",
			description:
				"A web-based implementation of the Tenzies game, created using React.",
			logo: BacodeTenziesImage,
			linkText: "View Project",
			link: "https://bacodetenzies.netlify.app",
		},
	],
};

export default INFO;
