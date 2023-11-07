/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Syad Khwajazada's Website",
  description: "Description here",
  og: {
    title: "Syad Khwajazada Portfolio",
    type: "website",
    url: "http://syadkhwajazada.com/",
  },
};

//Home Page
const greeting = {
  title: "Syad Khwajazada",
  logo_name: "Syad Khwajazada",
  subTitle: "I am a recent graduate for Computer Engineering at the University of Guelph with a focus on Software.  I am really passionate about Mobile/Web Development, Machine Learning, Basketball, Music and Video Games.",
  resumeLink: "https://drive.google.com/file/d/10EHH8Jfuy7CQomU-x4b6L-GCOKPh2VnO/view?usp=sharing",
  portfolio_repository: "https://github.com/syadk23/syad.khwajazada.github.io",
  githubProfile: "https://github.com/syadk23",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/syadk23",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/syad-khwajazada/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:syadkhwajazada@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Programming Lanugages",
      skills: [
        ""
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "C",
          fontAwesomeClassname: "fa6-solid:c",
          style: {
            color: "#188acc",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "logos:c-sharp",
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "file-icons:c",
          style: {
            color: "#188acc",
          },
        },
        {
          skillName: "Javascript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "teenyicons:typescript-outline",
          style: {
            color: "#188acc",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "tabler:sql",
          style: {
            color: "#188acc",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
        },
      ]
    },
    {
      title: "Web Development",
      skills: [
        ""
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "akar-icons:node-fill",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#c9043f",
          },
        },
      ],
    },
    {
      title: "Cloud",
      skills: [
        ""
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        ""
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
        },
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "twemoji:snowflake",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "University of Guelph",
      subtitle: "Bachelors of Engineering in Computer Engineering (Co-op)",
      logo_path: "uog_logo.png",
      alt_name: "UoG",
      duration: "2018 - 2023",
      descriptions: [
        "Notable Courses:",
        "Operating Systems, Databases, Algorithms, Discrete Math, Software Systems and Development, Software Engineering, Large Scale Software Architecture",
      ],
      website_link: "https://www.uoguelph.ca/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Work Experience",
  description:
    "List of my work experiences in chronological order (earliest at bottom).",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "System1",
          company_url: "https://www.linkedin.com/company/system1co/?originalSubdomain=ca",
          logo_path: "system1-logo.png",
          duration: "May 2022 - Dec 2022",
          location: "Guelph, Ontario",
          description:
            "Designed and improved many features on the company's main web application that allowed customers to purchase/view/edit and delete ads using C#, Typescript, Angular, HTML and CSS.  Also utilized MS SQL and Snowflake to query and edit database tables in the cloud.",
        },
        {
          title: "Embedded Software Developer",
          company: "Molex LTD.",
          company_url: "https://www.linkedin.com/company/molex/",
          logo_path: "Molex-Logo.svg.png",
          duration: "Jan 2021 - Sep 2021",
          location: "Waterloo, Ontario",
          description:
            "Performed both embedded and software solutions for a microcontroller board that catered to the customer requests using C and Python.  These requests included performance increases, new featuers and bug fixes.  Also created many unit test to obtain 100% code coverage using C and Cantata",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "desc here",
};

const publications = {};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description: "My resume, email and other contact information can be found below.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kitchener, Ontario, Canada",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "226-505-0852",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publications,
  contactPageData,
};
