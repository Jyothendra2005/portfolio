import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import project6 from "../assets/projects/project-6.jpg";
import profileImg from "../assets/Jyothendra-image.png";

export const NAME = "Jyothendra Murikithi";
export const EMAIL = "mjyothendrayadav@gmail.com";
export const PHONE = "+91 9705883635";
export const LOCATION = "Andhra Pradesh, India";

export const SOCIALS = {
  github: "https://github.com/Jyothendra2005",
  linkedin: "https://www.linkedin.com/in/jyothendra-murikithi-42483b301/",
  leetcode: "https://leetcode.com/u/Jyothendra/",
  instagram: "https://www.instagram.com/jyoth.endra_25/",
};

export const PROFILE_IMAGE = profileImg;

export const HERO_CONTENT = `I'm a passionate Full Stack MERN Developer with a knack for crafting robust and scalable web applications. I’ve honed my skills in cutting-edge technologies like MongoDB, Express.js, React, and Node.js, along with modern tools such as Tailwind CSS. I enjoy leveraging my technical skills and creativity to build innovative end-to-end solutions. Whether it's developing responsive, high-performance frontends, designing efficient backends, or creating seamless user experiences, I'm always eager to learn new tools and stay updated with industry trends to ensure the solutions I deliver are modern, efficient, and future-proof.`
export const ABOUT_TEXT = `I am currently pursuing a BTech in Computer Science and Engineering. As a dedicated and versatile Full-Stack MERN Developer, I have a passion for creating efficient, scalable, and user-friendly web applications. Over time, I have gained hands-on experience with a wide range of technologies, including MongoDB, Express.js, React, Node.js, JavaScript, HTML, CSS, and Tailwind CSS.
My journey into web development started with a deep curiosity about how things work, which has now evolved into a career focused on continuous learning and adapting to new challenges. I am passionate about exploring innovative projects and always excited to work on new and creative full-stack solutions. Outside of coding, I enjoy staying active, exploring emerging technologies, and contributing to open-source and full-stack development projects.`

export const EXPERIENCES = [
  {
    year: "Jan 2026 – Apr 2026",
    role: "Winter Intern",
    company: "IIT Ropar (NPTEL)",
    description: `Developed full-stack applications using Node.js, Express.js, React, and TypeScript. Worked on backend case studies involving REST APIs and API design. Gained hands-on experience with authentication, databases, and full-stack development.`,
    technologies: ["Node.js", "Express.js", "React", "JavaScript", "REST APIs"],
  },
  {
    year: "Apr 2025 – Jun 2025",
    role: "AI-ML Virtual Intern",
    company: "Google × AICTE",
    description: `Gained hands-on experience with basic Machine Learning algorithms and concepts. Worked with Python and TensorFlow to develop and evaluate machine learning models, with practical exposure to model training, data preprocessing, and performance evaluation.`,
    technologies: ["Python", "TensorFlow", "Machine Learning", "Data Preprocessing", "Model Training"],
  }
];


export const PROJECTS = [
  {
    title: "AgriVerify",
    image: project1,
    description:
      "An AI-powered agricultural advisory platform that enables farmers to ask crop and pest-related questions in regional languages while allowing agronomy experts to review, edit, and approve AI-generated recommendations through a dedicated moderation dashboard.",
    technologies: [
      "React",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
       
    ],
  },
  {
    title: "RTRWH Assessment & Recommendation Engine",
    image: project2,
    description:
      "A full-stack web application that evaluates rooftop rainwater harvesting feasibility, estimates water harvesting potential, provides personalized recommendations, and displays government subsidy information based on user location.",
    technologies: [
      "Python",
      "Flask",
      "React",
      "PostgreSQL",
      "SQLAlchemy",
      "TailwindCSS",
    ],
  },
  {
    title: "AURA NEWS",
    image: project3,
    description:
      "A next-generation business news and intelligence platform featuring AI-personalized newsrooms, interactive briefings, vernacular translation, automated story-arc tracking, and AI-powered voice synthesis for an engaging and personalized news experience.",
    technologies: [
      "React",
      "TailwindCSS",
      "TypeScript",
      "Express.js",
      "Gemini AI",
      "Firebase",
    ],
  },
];