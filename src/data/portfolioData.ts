export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'soft';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'design' | 'other';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export const skills: Skill[] = [
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 95, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'Tailwind CSS', level: 97, category: 'frontend' },
  { name: 'Redux', level: 85, category: 'frontend' },
  { name: 'Next.js', level: 80, category: 'frontend' },
  { name: 'Git', level: 99, category: 'tools' },
  { name: 'Figma', level: 95, category: 'tools' },
  { name: 'Problem Solving', level: 90, category: 'soft' },
  { name: 'Communication', level: 99, category: 'soft' },
  { name: 'Teamwork', level: 99, category: 'soft' },
];

export const projects: Project[] = [
  {
    id: 'project1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with shopping cart, user authentication, and payment processing.',
    image: 'https://res.cloudinary.com/ch2p/image/upload/v1743736279/ImagesSearch/iws4eywhk5bxrxkvcx6h.jpg',
    technologies: ['Html ', 'Css', 'Javascript', 'Sass'],
    demoUrl: 'https://ch2b.net/',
    repoUrl: 'https://github.com/foaademad',
    featured: true,
    category: 'web'
  },
  {
    id: 'project2',
    title: 'Be Startup Platform',
    description: 'The website appears to be an AI-powered content generation platform, offering tools for writing social media ads, blog posts, essays, and more, along with AI voiceovers and code generation. It emphasizes quick, unique, and human-like content creation using AI.',
    image: 'src/assets/image/BeStartup.png',
    technologies: ['React', 'TypeScript', 'Twilind', 'JavaScript'],
    demoUrl: 'https://bestartup.ai/',
    repoUrl: 'https://github.com/foaademad',
    featured: true,
    category: 'web'
  },
  {
    id: 'project3',
    title: 'Gym Website',
    description: 'A weather application that displays current and forecasted weather data with interactive visualizations.',
    image: 'src/assets/image/Gym.png',
    technologies: ['Html', 'Css', 'JavaScript'],
    demoUrl: 'https://mad-gym.netlify.app/main.html',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'
  },
  {
    id: 'project5',
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing skills, projects, and services.',
    image: 'src/assets/image/profile_photo.png',
    technologies: ['Html', 'Css', 'JavaScript', 'Sass' ,'emailjs'],
    demoUrl: 'https://protfolio-red-eight.vercel.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'
  },
  {
    id: 'project6',
    title: 'Burger Website',
    description: 'A burger website with a modern and responsive design, showcasing delicious burgers and a user-friendly interface.',
    image: 'src/assets/image/Burger.png',
    technologies: ['Figma','Behance' ],
    demoUrl: '#',
    repoUrl: '#',
    featured: false,
    category: 'design'
  },
  {
    id: 'project7',
    title: 'Capsule Website',
    description: 'Capsule is a website for a pharmacy, designed to offer pharmacy-related services such as selling medications, providing medical consultations, or facilitating online medicine orders.',
    image: 'src/assets/image/CApsula.png',
    technologies: ['Html', 'Css', 'JavaScript', 'Sass' ],
    demoUrl: 'https://capsule1.netlify.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'

  },
  {
    id: 'project8',
    title: 'Eartheasy Website',
    description: 'The website at  is a version of Eartheasy, a family-owned, carbon-neutral business focused on sustainable living. It provides eco-friendly products, guides, and articles to promote greener lifestyles. Founded in 2000, Eartheasy operates in the US and Canada, with a mission to encourage simpler, less materialistic living and environmental protection',
    image: 'src/assets/image/eartheasy.png',
    technologies: ['Html', 'Css', 'JavaScript', 'Sass' ],
    demoUrl: 'https://eartheasy.netlify.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'

  },
  {
    id: 'project9',
    title: 'tr3vel3 Website',
    description: 'The name "tr3vel3" suggests a stylized branding for a travel agency, booking platform, or travel blog focused on providing travel services, inspiration, or guides.',
    image: 'src/assets/image/tr3vel3.png',
    technologies: ['Html', 'Css', 'JavaScript', 'Sass','Swapper' ],
    demoUrl: 'https://tr3vel3.netlify.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'

  },
  {
    id: 'project10',
    title: 'crudstudent Website',
    description: 'The site is designed to allow users to perform CRUD operations, such as adding new student records, viewing existing ones, updating details, or deleting entries.',
    image: 'src/assets/image/crudstudent.png',
    technologies: ['Html', 'Css', 'JavaScript', 'Sass' ],
    demoUrl: 'https://crudstudent1.netlify.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'

  },
  {
    id: 'projec11',
    title: 'Full-body Website',
    description: 'The website at Full-body is likely a web application or demo focused on SVG (Scalable Vector Graphics), possibly showcasing a full-body illustration, avatar creator, or interactive graphic related to a human body.',
    image: 'src/assets/image/Full-body.png',
    technologies: ['Html', 'Css', 'JavaScript', 'Sass' ],
    demoUrl: 'https://svg-full-body.netlify.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'

  },
  {
    id: 'project12',
    title: 'Print Application',
    description: 'The website  is focused on canvas printing services, allowing users to create or preview custom canvas prints, such as photo-based wall art or personalized designs.',
    image: 'src/assets/image/Print.png',
    technologies: ['Html', 'Css', 'JavaScript', 'Sass','Canvas' ],
    demoUrl: 'https://canvas-print.netlify.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'

  }
  ,
  {
    id: 'project13',
    title: 'Food-3pi',
    description: 'The website focused on food-related services, such as a restaurant menu, food ordering platform, or recipe showcase.',
    image: 'src/assets/image/food-3pi.png',
    technologies: ['Html', 'Css', 'JavaScript','api' ],
    demoUrl: 'https://food-3pi.netlify.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'

  },
  {
    id: 'project14',
    title: 'university-system',
    description: 'This is university management system or educational platform, possibly for managing student records, courses, grades, or admissions. Hosted on Netlify',
    image: 'src/assets/image/university-system.png',
    technologies: ['Html', 'Css', 'JavaScript', 'Sass','Local Storage'],
    demoUrl: 'https://university-system.netlify.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: true,
    category: 'web'

  },
  {
    id: 'project15',
    title: 'Travel Application',
    description: 'A travel website focused on travel, possibly a booking platform, travel guide, or tour management system.',
    image: 'src/assets/image/Travel.png',
    technologies: ['Html', 'Css', 'JavaScript', 'Sass','indexedDB', 'Local Storage'],
    demoUrl: 'https://depi-project-travel.netlify.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'

  }
  ,
  {
    id: 'project16',
    title: 'Burger Website',
    description: 'A burger website with a modern and responsive design, showcasing delicious burgers and a user-friendly interface.',
    image: 'src/assets/image/Burger.png',
    technologies: ['Html', 'Css', 'JavaScript', 'Sass' ],
    demoUrl: 'https://burggger.netlify.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'
  },
  {
    id: 'project17',
    title: 'Product-builder',
    description: 'Product-builder is a web application, probably a product builder or configurator, allowing users to customize or design products interactively',
    image: 'src/assets/image/Product-builder.png',
    technologies: ['react', 'Router', 'JavaScript', 'Redux','Twilind' ],
    demoUrl: 'https://product-bulider-p2-react.vercel.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: true,
    category: 'web'
  },
  {
    id: 'project18',
    title: 'Genius-online Education',
    description: 'A Website for a developer or student effort, possibly for a portfolio or educational exercise, similar to Soft Lecture’s web app for downloading lectures.',
    image: 'src/assets/image/Genius-online-education.png',
    technologies: ['Html', 'Css', 'JavaScript', 'Sass'],
    demoUrl: 'https://lecture-8-genius-online-education.vercel.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'

  },
  {
    id: 'project19',
    title: 'Health-life Website',
    description: 'This site  provide health and lifestyle resources or services, such as: Information on wellness topics (e.g., fitness tips, healthy recipes, or mental health advice), similar to Healthy’s focus on wellness content. Tools like calorie trackers, workout planners, or health assessments, akin to features in HealthCare’s healthcare app.',
    image: 'src/assets/image/Health.png',
    technologies: ['React', 'Redux', 'Twilind', 'Sass','TypeScript', ' Router'],
    demoUrl: 'https://health-life-website-react.vercel.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'

  }
  ,
  {
    id: 'project20',
    title: 'Education Website',
    description: 'This site provide educational resources or services, such as: Access to online courses, lectures, or study materials, similar to Genius Tute’s offerings for students. Tools for students or educators, such as quizzes, progress trackers, or course enrollment, akin to On-Study’s flexible learning options.',
    image: 'src/assets/image/EduPro.png',
    technologies: ['React', 'Redux', 'Twilind', 'Sass','TypeScript', ' Router'],
    demoUrl: 'https://education-website-react-sable.vercel.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'

  }
  ,
  {
    id: 'project21',
    title: 'Resturant Website',
    description: 'This site provide restaurant-related services or information, such as: Displaying a digital menu with food items, prices, and descriptions, similar to Food-Web-Store’s “Food Menu” section. Enabling online ordering or table reservations, akin to FoodOrderCartApp’s cart system.',
    image: 'src/assets/image/resturant.png',
    technologies: ['React', 'Redux', 'Twilind', 'Sass','TypeScript', ' Router'],
    demoUrl: 'https://resturant-react-project.vercel.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: true,
    category: 'web'

  }
  ,
  {
    id: 'project22',
    title: 'Dogs Website',
    description: 'This site provide dog-related content or services, such as: Information about dog breeds, care tips, or training advice, akin to Healthy’s wellness resources but focused on pets.',
    image: 'src/assets/image/dogs.png',
    technologies: ['React', 'Redux', 'Twilind', 'Sass','TypeScript', ' Router'],
    demoUrl: 'hhttps://dogs-website-react.vercel.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'

  }
  ,
  {
    id: 'project23',
    title: 'Ecommerce Website',
    description: 'this site provide e-commerce functionality, such as: Displaying a catalog of products (e.g., clothing, electronics, or jewelry), similar to React-Ecommerce’s product listings. Enabling users to browse, add items to a cart, and simulate checkout, akin to Ecommerce-React’s shopping features.',
    image: 'src/assets/image/e-commerce.png',
    technologies: ['React', 'Redux', 'Twilind', 'Sass','TypeScript', ' Router'],
    demoUrl: 'https://react-e-commerce-pearl.vercel.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'

  }
];

export const services: Service[] = [
  {
    id: 'service1',
    title: 'Frontend Development',
    description: 'Building beautiful, responsive user interfaces with React, TypeScript, and modern CSS frameworks.',
    icon: 'code'
  },
  {
    id: 'service2',
    title: 'UI/UX Design',
    description: 'Creating intuitive user experiences with a focus on usability, accessibility, and visual appeal.',
    icon: 'paintbrush'
  },
  {
    id: 'service3',
    title: 'Web Application Development',
    description: 'Developing full-stack web applications with secure authentication, data management, and API integration.',
    icon: 'monitor'
  },
  {
    id: 'service4',
    title: 'Performance Optimization',
    description: 'Improving website speed and performance through code optimization, lazy loading, and modern build techniques.',
    icon: 'gauge'
  },
  {
    id: 'service5',
    title: 'Code Review & Refactoring',
    description: 'Analyzing and improving existing codebases for better maintainability, performance, and scalability.',
    icon: 'git-branch'
  },
  {
    id: 'service6',
    title: 'Technical Consultation',
    description: 'Providing expert advice on frontend architecture, technology choices, and implementation strategies.',
    icon: 'message-square'
  }
];

export const experiences: Experience[] = [
  {
    id: 'exp1',
    company: 'Freelancer Web Development',
    position: 'Frontend Developer',
    duration: '2024 - Present',
    description: [
      'Designed and built responsive web applications for various clients using React and TypeScript',
      'Developed a reusable component library, cutting project delivery time by 40%',
      'Managed full project lifecycles, from client consultations to final deployment',
      'Partnered with designers to create pixel-perfect, user-centric interfaces'
    ]
  },
  {
    id: 'exp2',
    company: 'Yes Course Company',
    position: 'Instructor Frontend Developer',
    duration: '2023 - 2024',
    description: [
      'Created and taught engaging frontend development courses focused on React and modern JavaScript',
      'Guided students in building practical projects to enhance their coding skills',
      'Developed detailed learning resources, including tutorials and coding challenges',
      'Provided expert advice on state management (Redux, Context API) and API integration'
    ]
  }
];

export const aboutMe = {
  name: 'Fouad Emad',
  title: 'Frontend React Developer',
  location: 'Egypt, Beheira Governorate',
  email: 'Foaademad66@gmail.com',
  phone: '+20 01099460174',
  github: 'github.com/foaademad',
  linkedin: 'www.linkedin.com/in/fouad-el-bakly-2ba15a251/',
  profileImage: './image/img.jpg',
  bio: `I'm a passionate Frontend Developer with 1-2 years of experience specializing in creating beautiful, functional, and user-centered digital experiences. With a strong foundation in React and TypeScript, I build applications that are not only visually appealing but also performant and maintainable.
  My approach combines technical expertise with creative problem-solving to deliver solutions that exceed client expectations. I believe that great software is not just about code—it's about creating value through thoughtful design and robust implementation.
  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge through tech meetups and blog posts.`
};