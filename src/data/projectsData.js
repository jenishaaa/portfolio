import roomfinder from '../assets/Roomfinder.png';
import portfolioImg from '../assets/portfolio.jpg';
import recipeBook from '../assets/recipe-book.jpg';

const projects = [
  {
    title: "Roomfinder App",
    description: "A full stack user friendly project focused on simplifying the search and listings of rental spaces with authentication and clean interface",
    image: roomfinder,
    techStack: ["React.js", "Vite", "Tailwind CSS", "Node.js", "MongoDB", "Rest API"],
    codeLink: "https://github.com/jenishaaa/roomfinder"
  },
    {
    title: "Portfolio Website",
    description: "Developed a component based responsive website with minimal design showcasing my projects, skills, etc.",
    image: portfolioImg,
    techStack: ["React.js", "Vite", "Tailwind CSS", "Git"],
    demoLink: "https://jenishaaa.github.io/portfolio/",
    codeLink: "https://github.com/jenishaaa/portfolio"
  },
  {
    title: "Recipe Book App",
    description: "A simple app for managing recipes, built using HTML/CSS and CRUD functionality.",
    image: recipeBook,
    techStack: ["HTML", "CSS", "CRUD", "Github"],
    demoLink: "https://jenishaaa.github.io/Recipe-book/",
    codeLink: "https://github.com/jenishaaa/Recipe-book"
  }
];

export default projects;
