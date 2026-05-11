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
  companyUrl?: string;
  position: string;
  duration: string;
  description: string[];
}

export const skills: Skill[] = [
  { name: 'Next.js', level: 98, category: 'frontend' },
  { name: 'React', level: 98, category: 'frontend' },
  { name: 'TypeScript', level: 98, category: 'frontend' },
  { name: 'JavaScript', level: 98, category: 'frontend' },
  { name: 'Tailwind CSS', level: 97, category: 'frontend' },
  { name: 'Redux Toolkit', level: 98, category: 'frontend' },
  { name: 'Redux', level: 95, category: 'frontend' },
  { name: 'React Native', level: 90, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'Node.js', level: 90, category: 'backend' },
  { name: 'Express.js', level: 95, category: 'backend' },
  { name: 'MongoDB', level: 95, category: 'backend' },
  { name: 'REST APIs', level: 97, category: 'backend' },
  { name: 'Git', level: 99, category: 'tools' },
  { name: 'Figma', level: 95, category: 'tools' },
  { name: 'Problem Solving', level: 90, category: 'soft' },
  { name: 'Communication', level: 99, category: 'soft' },
  { name: 'Teamwork', level: 99, category: 'soft' },
];

export const projects: Project[] = [
  {
    id: 'project22',
    title: 'Dogs Website',
    description: 'This site provide dog-related content or services, such as: Information about dog breeds, care tips, or training advice, akin to Healthy’s wellness resources but focused on pets.',
    image: './image/dogs.png',
    technologies: ['React', 'Redux', 'Twilind', 'Sass','TypeScript', ' Router'],
    demoUrl: 'hhttps://dogs-website-react.vercel.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'

  }
  ,
  {
    id: 'project25',
    title: 'petalya Company',
    description: 'At petalya , we believe that flowers are more than just gifts — they’re emotions, beautifully arranged. We specialize in delivering fresh, high-quality flowers and custom floral arrangements for every occasion: birthdays, anniversaries, weddings, and more.',
    image: './image/petalya.png',
    technologies: ['React', 'Redux', 'TypeScript', 'Redux Toolkit ','Twilind', 'Sass', ' Router'],
    demoUrl: 'https://petalya.org/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'

  },
  {
    id: 'project24',
    title: 'Company Profile',
    description: 'Official company for web services, business solutions, website design, website hosting, e-marketing services, website programming and design',
    image: './image/profileCompany.png',
    technologies: ['React', 'Redux',  'Redux Toolkit ','Twilind', 'Sass','TypeScript', ' Router'],
    demoUrl: 'https://clever-code-co.vercel.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'

  },
  {
    id: 'project26',
    title: 'Fresh & Healthy Food Website',
    description: 'At Fresh & Healthy Food , we’re passionate about helping you eat better, feel better, and live better. We offer freshly prepared, healthy meals made from natural ingredients — no preservatives, no junk, just pure nutrition.',
    image: './image/Fresh&Healthy.png',
    technologies: ['React', 'Redux', 'TypeScript', 'Redux Toolkit ','Twilind', 'Sass', ' Router'],
    demoUrl: 'https://gradiation-project-e-commerce.vercel.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'
  },
  {
    id: 'project3',
    title: 'Gym Website',
    description: 'A weather application that displays current and forecasted weather data with interactive visualizations.',
    image: './image/Gym.png',
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
    image: './image/profile_photo.png',
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
    image: './image/Burger.png',
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
    image: './image/CApsula.png',
    technologies: ['Html', 'Css', 'JavaScript', 'Sass' ],
    demoUrl: 'https://capsule1.netlify.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'

  },
  {
    id: 'project23',
    title: 'Ecommerce Website',
    description: 'this site provide e-commerce functionality, such as: Displaying a catalog of products (e.g., clothing, electronics, or jewelry), similar to React-Ecommerce’s product listings. Enabling users to browse, add items to a cart, and simulate checkout, akin to Ecommerce-React’s shopping features.',
    image: './image/e-commerce.png',
    technologies: ['React', 'Redux', 'Twilind', 'Sass','TypeScript', ' Router'],
    demoUrl: 'https://react-e-commerce-pearl.vercel.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'

  },
  {
    id: 'project8',
    title: 'Eartheasy Website',
    description: 'The website at  is a version of Eartheasy, a family-owned, carbon-neutral business focused on sustainable living. It provides eco-friendly products, guides, and articles to promote greener lifestyles. Founded in 2000, Eartheasy operates in the US and Canada, with a mission to encourage simpler, less materialistic living and environmental protection',
    image: './image/eartheasy.png',
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
    image: './image/tr3vel3.png',
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
    image: './image/crudstudent.png',
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
    image: './image/Full-body.png',
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
    image: './image/Print.png',
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
    image: './image/food-3pi.png',
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
    image: './image/university-system.png',
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
    image: './image/Travel.png',
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
    image: './image/Burger.png',
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
    image: './image/Product-builder.png',
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
    image: './image/Genius-online-education.png',
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
    image: './image/Health.png',
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
    image: './image/EduPro.png',
    technologies: ['React', 'Redux', 'Twilind', 'Sass','TypeScript', ' Router'],
    demoUrl: 'https://education-website-react-sable.vercel.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'

  }
  ,
  {
    id: 'project1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with shopping cart, user authentication, and payment processing.',
    image: './image/chap.png',
    technologies: ['React', 'Redux', 'TypeScript', 'Redux Toolkit ','Twilind',"Next.js"],
    demoUrl: 'https://ch2b.net/',
    repoUrl: 'https://github.com/foaademad',
    featured: true,
    category: 'web'
  }
  ,
  {
    id: 'project21',
    title: 'Resturant Website',
    description: 'This site provide restaurant-related services or information, such as: Displaying a digital menu with food items, prices, and descriptions, similar to Food-Web-Store’s “Food Menu” section. Enabling online ordering or table reservations, akin to FoodOrderCartApp’s cart system.',
    image: './image/resturant.png',
    technologies: ['React', 'Redux', 'Twilind', 'Sass','TypeScript', ' Router'],
    demoUrl: 'https://resturant-react-project.vercel.app/',
    repoUrl: 'https://github.com/foaademad',
    featured: true,
    category: 'web'

  },
  {
    id: 'project2',
    title: 'Be Startup Platform',
    description: 'The website appears to be an AI-powered content generation platform, offering tools for writing social media ads, blog posts, essays, and more, along with AI voiceovers and code generation. It emphasizes quick, unique, and human-like content creation using AI.',
    image: './image/BeStartup.png',
    technologies: ['React', 'TypeScript', 'Twilind', 'JavaScript'],
    demoUrl: 'https://bestartup.ai/',
    repoUrl: 'https://github.com/foaademad',
    featured: true,
    category: 'web'
  }
  ,
  {
    id: 'project0',
    title: 'Prime Academy',
    description: 'Prime Academy is a platform for learning programming languages and technologies, it provides a variety of courses for different levels of learners.',
    image: './image/prime.png',
    technologies: ['React', 'Redux', 'TypeScript', 'Redux Toolkit ','Twilind',"Next.js"],
    demoUrl: 'https://prime-edu.academy/',
    repoUrl: 'https://github.com/foaademad',
    featured: true,
    category: 'web'
  },
 
  {
    id: 'project27',
    title: 'Backend API for APP Chat',
    description: 'Backend API is a app for social media app, it chat with other users and send messages. using Node.js, Express.js, MongoDB, REST APIs, JWT, bcrypt, jsonwebtoken',
    image: './image/App-Chat.png',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'bcrypt', 'jsonwebtoken'],
    demoUrl: 'https://github.com/foaademad',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web'
  }
  ,{
    id: 'project28',
    title: 'Backend API for App Lan Tok',
    description: 'Backend API is a app for video funny app, it provide videos and make you laugh. using Node.js, Express.js, MongoDB, REST APIs, JWT, bcrypt, jsonwebtoken',
    image: './image/App-Lan-Tok.png',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'bcrypt', 'jsonwebtoken'],
    demoUrl: 'https://github.com/foaademad',
    repoUrl: 'https://github.com/foaademad',  
    featured: false,
    category: 'web'
  },
  {
    id: 'project29',
    title: 'CarLink Cars',
    description:
      'Marketplace app for buying and selling cars and spare parts in Saudi Arabia and Egypt, with verified dealers, in‑app chat, garage profiles that match compatible parts, saved searches with alerts, maps for nearby listings, and Arabic/English support.',
    image: './image/carlink-cars.jpg',
    technologies: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB'],
    demoUrl:
      'https://apps.apple.com/eg/app/carlink-cars-%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA/id6761638474',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'mobile',
  },
  {
    id: 'project30',
    title: 'Al Taif',
    description:
      'Utility app showcasing Al Taif’s product range for solving everyday and industrial needs—at home, in factories, hospitals, bridges, and other buildings—so users can explore solutions from one mobile experience.',
    image: './image/al-taif.jpg',
    technologies: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB'],
    demoUrl: 'https://apps.apple.com/us/app/al-taif/id1587295907',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'mobile',
  },
  {
    id: 'project31',
    title: 'LanChat App',
    description:
      'Social messaging app for sending and receiving chats with a clean interface, focused on simple day‑to‑day conversations and staying connected with friends.',
    image: './image/lanchat-app.jpg',
    technologies: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB'],
    demoUrl: 'https://apps.apple.com/us/app/lanchat-app/id6759000572',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'mobile',
  },
  {
    id: 'project32',
    title: 'Taseel Aqari (تسهيل عقاري)',
    description:
      'Business‑oriented real estate app that connects property seekers with consultants and developers, making listings and professional services easier to discover and follow up on.',
    image: './image/taseel-aqari.jpg',
    technologies: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB'],
    demoUrl:
      'https://apps.apple.com/us/app/%D8%AA%D8%B3%D9%87%D9%8A%D9%84-%D8%B9%D9%82%D8%A7%D8%B1%D9%89/id6502578500',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'mobile',
  },
  {
    id: 'project33',
    title: 'Lan Tok',
    description:
      'Short‑form video and entertainment app for browsing fun clips, engaging with lightweight social features, and discovering trending content—paired with APIs for feeds, profiles, and engagement.',
    image: './image/App-Lan-Tok.png',
    technologies: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB'],
    demoUrl: 'https://apps.apple.com/us/app/lin-tok/id6757404912',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'mobile',
  },
  {
    id: 'project34',
    title: 'BAKCRM',
    description:
      'Internal employee app for BAK teams: attendance and working hours, leave requests, team chat, HR/support tickets, and real‑time notifications—replacing scattered paperwork with one organized workflow.',
    image: './image/bakcrm.webp',
    technologies: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB'],
    demoUrl: 'https://apps.apple.com/us/app/bakcrm/id6758316565',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'mobile',
  },
  {
    id: 'project35',
    title: 'Nayomi Beauty Salon',
    description:
      'Salon lifestyle app for Nayomi Beauty Salon (Kamal Osman Jamjoom Group), highlighting personalized beauty services, elegant salon experiences, and accessible pricing since 2009.',
    image: './image/Nayomi.webp',
    technologies: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB'],
    demoUrl: 'https://apps.apple.com/us/app/nayomi-beauty-salon/id1644606394',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'mobile',
  },
  {
    id: 'project36',
    title: 'Eshraqa (إشراقة)',
    description:
      'Offline‑friendly lifestyle app for daily worship: structured prayer goals, dhikr schedules that grow over time, Quran memorization and review plans, a digital tasbeeh with optional sound, and weekly encouragement—without ads.',
    image: './image/Eshraqa.webp',
    technologies: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB'],
    demoUrl:
      'https://apps.apple.com/us/app/%D8%A5%D8%B4%D8%B1%D8%A7%D9%82%D8%A9/id6449609203',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'mobile',
  },
  {
    id: 'project37',
    title: 'Dilnia Insurance',
    description:
      'All‑in‑one insurance app covering motor, medical, travel, home, property, engineering, and aviation: instant quotes, policy management and renewals, support contact, and centralized documents—backed by Dilnia Insurance since 2007.',
    image: './image/Dilnia.png',
    technologies: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB'],
    demoUrl: 'https://apps.apple.com/us/app/dilnia/id6746866042',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'mobile',
  },
  {
    id: 'project38',
    title: 'Tabahy',
    description:
      'Leading bilingual job platform connecting talent with fast‑growing companies worldwide: AI‑powered job matching, integrated ATS for CVs and screening, automatic outreach to suitable employers, trusted company profiles, and strong privacy and security.',
    image: './image/tabahy.ico',
    technologies: ['React', 'Redux', 'TypeScript', 'Redux Toolkit ', 'Twilind', 'Next.js'],
    demoUrl: 'https://tabahy.com/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web',
  },
  {
    id: 'project39',
    title: 'Jory Pack',
    description:
      'Sustainable B2B packaging company site for the MENA region: wholesale food‑grade bags, cups, containers, and custom printing; direct factory sourcing, eco lines (kraft, sugarcane, PLA), VAT‑compliant invoicing, and fast quote turnaround for restaurants and brands.',
    image: './image/jorypack.png',
    technologies: ['React', 'Redux', 'TypeScript', 'Redux Toolkit ', 'Twilind', 'Next.js'],
    demoUrl: 'https://jorypack.com/',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'web',
  },
  {
    id: 'project40',
    title: 'FactoryX Machines',
    description:
      'B2B marketplace app linking Middle East buyers with industrial machinery suppliers in China: 80+ categories of used equipment, filters by country and condition, quote requests and photo‑based RFQs, spare parts, supplier messaging, favorites, and bilingual English/Arabic with full RTL.',
    image: './image/factoryx-machines.jpg',
    technologies: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB'],
    demoUrl: 'https://apps.apple.com/eg/app/factoryx-machines/id6765801996',
    repoUrl: 'https://github.com/foaademad',
    featured: false,
    category: 'mobile',
  }









];

export const services: Service[] = [
  {
    id: 'service1',
    title: 'Full-Stack Development (MERN)',
    description: 'Designing and building end-to-end web apps with MongoDB, Express.js, React, and Node.js.',
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
    description: 'Developing robust full-stack applications with secure auth, data persistence, and API integration.',
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
    description: 'Providing expert advice on full-stack (MERN) architecture, technology choices, and deployment strategies.',
    icon: 'message-square'
  }
];

export const experiences: Experience[] = [
  {
    id: 'exp3',
    company: 'Leen Company',
    companyUrl: 'https://leen.work/',
    position: 'Full-Stack Developer (MERN)',
    duration: 'March 2025 - November 2025',
    description: [
      'Designed and built full-stack web apps using MongoDB, Express.js, React, and Node.js',
      'Implemented REST APIs, JWT authentication, and role-based access control',
      'Managed deployments and CI/CD pipelines on platforms like Vercel and Render',
      'Collaborated across design and engineering to deliver performant, user-centric solutions'
    ]
  },
  {
    id: 'exp1',
    company: 'Freelancer Web Development',
    position: 'Full-Stack Developer (MERN)',
    duration: '2024 - Present',
    description: [
      'Designed and built full-stack web apps using MongoDB, Express.js, React, and Node.js',
      'Implemented REST APIs, JWT authentication, and role-based access control',
      'Managed deployments and CI/CD pipelines on platforms like Vercel and Render',
      'Collaborated across design and engineering to deliver performant, user-centric solutions'
    ]
  },
  {
    id: 'exp2',
    company: 'Yes Course Company',
    position: 'Instructor Frontend Developer',
    duration: '2023 - 2024',
    description: [
      'Taught frontend development with real-world projects and best practices',
      'Guided students through building projects using html & css & javascript and tailwind css ',
      'Developed learning materials covering React Js & Tailwind Css & JavaScript & TypeScript and Teamwork',
      'Mentored on state management, performance optimization, and deployment workflows'
    ]
  }
];

export const aboutMe = {
  name: 'Fouad Emad',
  title: 'Full-Stack Developer (MERN Stack)',
  location: 'Egypt, Cairo Governorate',
  email: 'Foaademad66@gmail.com',
  phone: '+20 01099460174',
  github: 'github.com/foaademad',
  linkedin: 'www.linkedin.com/in/fouad-el-bakly-2ba15a251/',
  profileImage: './image/img.jpg',
  bio: `I'm a Full-Stack Developer (MERN) with experience in building scalable, user-centered applications. I work across the stack with MongoDB, Express.js, React, and Node.js to deliver performant, maintainable solutions. I combine clean architecture with pragmatic problem-solving to create real business value — from intuitive UIs to secure APIs and efficient data models.`
};