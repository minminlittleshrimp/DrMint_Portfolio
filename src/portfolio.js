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
  username: "Minh Luu",
  title: "Hi all, I'm Minh, you can call me Dr.Mint",
  subTitle: emoji(
    "A passionate Embedded Software Engineer 🚀 having experience in Embedded Programming."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/minminlittleshrimp",
  linkedin: "https://www.linkedin.com/in/minh-l-q/",
  gmail: "minhmark47@gmail.com",
  gitlab: "https://gitlab.adit-cloud.com/mluu",
  facebook: "https://www.facebook.com/profile.php?id=100004186217509",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "HUNGER FOR EMBEDDED PROGRAMMING AND DEVELOPING NEW FEATURES",
  skills: [
    emoji("⚡ Developing DLT Daemon running on multi-OS"),
    emoji("⚡ Diagnostic logging and tracing with DLT"),
    emoji("⚡ Working with Linux, Android, QNX")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Vietnamese-German University",
      logo: require("./assets/images/vguLogo.png"),
      subHeader:
        "Bachelor of Engineering - BE, Electrical Engineering and Information Technology",
      duration: "October 2017 - January 2022",
      desc: "Ranked top 1 in the program. Took courses about Embedded Programming, Network routing and communicating, Digital Signal Processing",
      descBullets: [
        "VGU Bachelor 100% merit scholarship",
        "VGU Master 100% merit scholarship",
        "DAAD student exchange scholarship"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "C", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "C++",
      progressPercentage: "60%"
    },
    {
      Stack: "Python",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Coordinator",
      company: "BGSW Vietnam",
      companylogo: require("./assets/images/BGSW.jpg"),
      date: "Jan 2023 - Present",
      desc: "Full-time",
      descBullets: [
        "Problem Analysis",
        "Leadership",
        "Goal-Setting",
        "Delegation",
        "Communication",
        "Critical-thinking"
      ]
    },
    {
      role: "Embedded Software Engineer",
      company: "ADIT - Advanced Driver Information Technology",
      companylogo: require("./assets/images/ADIT.jpg"),
      date: "Nov 2021 - Present",
      desc: "Full-time",
      descBullets: ["Embedded Linux", "Embeded Android", "QNX"]
    },
    {
      role: "Software Engineer Intern",
      company: "BGSW Vietnam",
      companylogo: require("./assets/images/BGSW.jpg"),
      date: "Jun 2021 - Nov 2021",
      desc: "Internship",
      descBullets: [
        "Basic C++",
        "JavaScript",
        "HTML",
        "Teamwork",
        "Qt",
        "Networking"
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
  subtitle: "SOME COMPANIES THAT I WORK WITH IN MY PROJECTS",
  projects: [
    {
      image: require("./assets/images/GM.png"),
      projectName: "GMVCU",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.gm.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/VW.png"),
      projectName: "IDBuzz",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.vw.com/"
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
  subtitle: "Achievements, Certifications and Spot Awards",

  achievementsCards: [
    {
      title: "BIG-O GREEN: ELEMENTARY ALGORITHMS",
      subtitle: "Completed Green Certifcation from BIG-O",
      image: require("./assets/images/Green.png"),
      imageAlt: "BigO Green Logo",
      footerLink: [{name: "Certification", url: ""}]
    },
    {
      title: "BIG-O BLUE: INTERMEDIATE ALGORITHMS",
      subtitle: "Completed Blue Certifcation from BIG-O",
      image: require("./assets/images/Blue.png"),
      imageAlt: "BigO Blue Logo",
      footerLink: [{name: "Certification", url: ""}]
    },
    {
      title: "Spot Award BGSW",
      subtitle: "Appreciation for DLT Coordinator role",
      image: require("./assets/images/BGSW.jpg"),
      imageAlt: "BGSW Logo",
      footerLink: [{name: "Certification", url: ""}]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "",
  subtitle: "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "",
  subtitle: "",

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: "",
  subtitle: "",
  // Please Provide with Your Podcast embeded Link
  podcast: "",
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+84-0382424842",
  email_address: "minhmark47@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
