/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mintesnot ",
  title: "Hi all, I'm Mintesnot",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mintesnotbekele",
  linkedin: "https://www.linkedin.com/in/mintesnot-bekele-1739aa233",
  gmail: "mintesnotbekele23@gmail.com",

  facebook: "https://www.facebook.com/mintesnotbekele",
  medium: "https://medium.com/@mintesnotbekele",
 
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A passionate full-stack developer exploring every tech stack, crafting seamless and innovative digital experiences.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ), 
     emoji(
      "⚡ Build quality mobile apps using flutter/ React Native"
    )
  ],



  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NestJS",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "Jest",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "Cypress",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "Storybook",
      fontAwesomeClassname: "fas fa-book"
    }],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Addis Ababa University",
      logo: require("./assets/images/aaulogo.png"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "September 2017 - June 2018",
      desc: "",
      descBullets: [
        "",
        ""
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set to true to show the Work Experience section
  experience: [
    {
      role: "Frontend Developer",
      company: "Steamlined Solutions",
      companylogo: require("./assets/images/steamlinedSolutionsLogo.png"),
      date: "April 2024 – Present",
      desc: "Developing AI-powered sales automation tools to enhance team efficiency and user experience.",
      descBullets: [
        "Designed and implemented AI-powered dashboards, improving sales productivity by 30%",
        "Optimized UI performance using React.memo and code-splitting",
        "Led testing and deployment, ensuring quality with Jest and Cypress"
      ]
    },
    {
      role: "Senior Frontend Developer",
      company: "Elnet Technologies",
      companylogo: require("./assets/images/elnetTechnologiesLogo.png"),
      date: "March 2022 – December 2024",
      desc: "Led frontend development on multiple high-impact projects across different industries.",
      descBullets: [
        "Built Taxiye, a ride-booking app with Strapi CMS, reducing booking time by 40%",
        "Developed ELTNT Tours & Travel, increasing tour package sales by 25%",
        "Created Houfa Africa, a real-time security alert system for Nigerian users"
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Prophecius Technologies",
      companylogo: require("./assets/images/propheciusLogo.png"),
      date: "July 2023 – May 2024",
      desc: "Worked on multiple SaaS and consumer applications, leading frontend and backend development.",
      descBullets: [
        "Developed ReserveXp, a multi-tenant travel SaaS platform",
        "Led Passio, a multi-service e-commerce, taxi, and delivery app",
        "Built Curewantri, a telemedicine and pharmacy platform",
        "Integrated real-time betting odds and Stripe payments for LiveGamer"
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Yerras IT Technology Group",
      companylogo: require("./assets/images/yerrasLogo.png"),
      date: "October 2020 – January 2022",
      desc: "Developed e-commerce and business management platforms.",
      descBullets: [
        "Built Yerras E-commerce, enhancing agriculture trade efficiency",
        "Developed Yerras Web, a financial management system for businesses"
      ]
    },
    {
      role: "Information Technology Officer",
      company: "Berhan Bank",
      companylogo: require("./assets/images/berhanBankLogo.png"),
      date: "January 2019 – September 2020",
      desc: "Managed IT infrastructure and developed automation tools.",
      descBullets: [
        "Ensured 99.9% uptime for core banking systems",
        "Developed automation tools, improving efficiency by 20%"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Technical Insights",
  subtitle:
    "Exploring the ever-evolving world of full-stack development, I write about cutting-edge technologies, best practices, and lessons learned from real-world projects.",
  displayMediumBlogs: true, // Fetching latest blogs dynamically
  blogs: [
    {
      url: "https://medium.com/@your-profile/optimizing-next-js-performance-best-practices",
      title: "Optimizing Next.js Performance: Best Practices",
      description:
        "A deep dive into Next.js optimizations, covering ISR, caching strategies, and advanced techniques for blazing-fast web apps."
    },
    {
      url: "https://medium.com/@your-profile/mastering-state-management-in-react",
      title: "Mastering State Management in React: Context API vs Redux Toolkit",
      description:
        "Understanding when to use Context API, Redux, or Zustand for scalable state management in modern React applications."
    },
    {
      url: "https://medium.com/@your-profile/graphql-vs-rest-api-choosing-the-right-architecture",
      title: "GraphQL vs REST API: Choosing the Right Architecture",
      description:
        "Breaking down the pros and cons of GraphQL and REST, with real-world use cases and performance considerations."
    },
    {
      url: "https://medium.com/@your-profile/full-stack-deployment-docker-kubernetes-ci-cd",
      title: "Full-Stack Deployment: Docker, Kubernetes, and CI/CD Best Practices",
      description:
        "A practical guide to deploying scalable applications using Docker, Kubernetes, and automated CI/CD pipelines."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section



// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+251915809706",
  email_address: "mintesnotbekele23@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
 
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
