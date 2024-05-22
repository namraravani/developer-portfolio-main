import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'QuestCraft - Automatic Question Paper Generator',
        description: "This project is a comprehensive web application designed to streamline the creation and management of question papers. With a beautifully designed frontend QuestCraft integrates various powerful features including a secure authentication system an AI-driven question generator and much more to provide a tailored and efficient user experience.",
        tools: ["ReactJS", "NodeJS", "MongoDB", "Spring Boot"],
        // role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Evolution Ecommerce',
        description: 'I implemented an E-commerce platform featuring robust role management, dynamic dependency dropdowns, and seamless integration of DataTables and Google API functionality. The project included comprehensive authorization and authentication mechanisms to ensure secure user sessions throughout the platform. Additionally, I delivered a responsive E-commerce dashboard with seamless navigation and an intuitive user experience, enhancing accessibility and usability for both customers and administrators.',
        tools: ["HTML", "CSS", "PHP", "Laravel", "SQL", "jQuery"],
        // role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Ledger Manager',
        description: 'I developed a Ledger Manager application using Flutter, integrated with AWS and PostgreSQL. This project involved creating a seamless interface for managing financial records, leveraging the power of AWS for scalable cloud services and PostgreSQL for reliable database management. The application provides users with an intuitive and efficient way to handle their financial data, ensuring robust performance and security through the combined use of these technologies.',
        tools: ["Flutter", "AWS", "postgreSQL"],
        code: '',
        // role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },