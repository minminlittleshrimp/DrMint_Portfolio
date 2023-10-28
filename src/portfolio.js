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
  gitlab: "",
  facebook: "",
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
    },
    {
      Stack: "Javascript",
      progressPercentage: "20%"
    },
    {
      Stack: "Bash shell",
      progressPercentage: "50%"
    },
    {
      Stack: "Makefile",
      progressPercentage: "60%"
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
        "Problem Analysis · Leadership · Goal Setting · Delegation · Decision-Making · Time Management · Relationship Building · Communication · Problem Solving"
      ]
    },
    {
      role: "Embedded Software Engineer",
      company: "ADIT - Advanced Driver Information Technology",
      companylogo: require("./assets/images/ADIT.jpg"),
      date: "Nov 2021 - Present",
      desc: "Full-time",
      descBullets: ["Embedded Linux · Embeded Android · QNX"]
    },
    {
      role: "Software Engineer Intern",
      company: "BGSW Vietnam",
      companylogo: require("./assets/images/BGSW.jpg"),
      date: "Jun 2021 - Nov 2021",
      desc: "Internship",
      descBullets: [
        "C++ · Teamwork · JavaScript · HTML · Communication · Qt · Networking"
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
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "IELTS certificate of 7.0",
      subtitle: "IDP Education Ltd · Issued May 2023 · Expires May 2025",
      image: require("./assets/images/Band7Ielts.jpg")
    },
    {
      title: "STEM 2019 certification of recognition",
      subtitle: "Vietnamese-German University",
      image: require("./assets/images/vguLogo.png")
    },
    {
      title: "BIG-O GREEN: ELEMENTARY ALGORITHMS",
      subtitle: "Completed Green Certifcation from BIG-O",
      image: require("./assets/images/Green.png")
    },
    {
      title: "BIG-O BLUE: INTERMEDIATE ALGORITHMS",
      subtitle: "Completed Blue Certifcation from BIG-O",
      image: require("./assets/images/Blue.png")
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
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
  userName: "twitter", //Replace "twitter" with your twitter username without @
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
