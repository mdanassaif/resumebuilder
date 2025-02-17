export type ResumeData = {
  basics: {
    name: string;
    title: string;
    email: string;
    linkedin: string;
  };
  summary: string;
  skills: {
    technical: string[];
    soft: string[];
  };
  experience: {
    id: number;
    role: string;
    company: string;
    date: string;
    achievements: string[];
  }[];
  projects: {
    openSource: string[];
    personal: string[];
  };
  certifications: string[];
  education: EducationType[];
};

export type EducationType = {
  id: number;
  degree: string;
  school: string;
  date: string;
};

export type SkillType = keyof ResumeData['skills'];
export type ProjectType = keyof ResumeData['projects'];

 
  
export const defaultExperiencedTemplate = {
  basics: {
    name: "Mohd Anas Saif",
    title: "Content Creator & Lifelong Learner",
    email: "mdanassaif@gmail.com",
    linkedin: "linkedin.com/in/mdanassaif",
    medium: "mdanassaif.medium.com",
  },
  summary: "Lifelong learner and passionate content creator who believes in the power of storytelling to inspire and connect people. Actively shares personal growth journeys, reflections, and practical insights to encourage others in their path of continuous learning.",
  skills: {
    technical: [
      "Content Creation Platforms: Medium, WordPress",
      "SEO and Analytics Tools: Google Analytics, Ahrefs",
      "Creative Tools: Canva, Figma, Adobe Express",
      "Writing and Editing: Research, Storytelling, Proofreading",
      "Creative Tools: Canva, Figma, Adobe Express",
     
    ],
    soft: [
      "Effective Communication & Public Speaking",
      "Time Management & Goal Setting",
      "Critical Thinking & Reflection",
      "Collaboration & Empathy",
      "Adaptability & Growth Mindset",
       "Collaboration & Empathy",
     
    ]
  },
  experience: [
    {
      id: 1,
      role: "Content Creator",
      company: "Self-Employed",
      date: "2020 - Present",
      achievements: [
        "Published over 50 blog posts on Medium, focusing on personal growth, daily reflections, and storytelling",
        "Built an engaged audience of 5K+ readers, with multiple posts featured by Medium's editorial team",
        "Developed a consistent writing process, increasing output by 30% without compromising quality",
        "Mentored aspiring writers on content strategies and storytelling techniques"
      ]
    },
    {
      id: 2,
      role: "Freelance Content Strategist",
      company: "Various Clients",
      date: "2018 - 2020",
      achievements: [
        "Crafted personalized content strategies for startups, improving their brand visibility by 40%",
        "Conducted keyword research and implemented SEO best practices, resulting in 25% traffic growth",
        "Collaborated with design teams to produce visually appealing and impactful blogs"
      ]
    }
  ],
  projects: {
    openSource: [
      "Community Story Archive: Initiated a collaborative platform for users to share personal growth stories",
      "Daily Reflection Tracker: Designed a tool for journaling and tracking personal achievements"
    ],
    personal: [
      "Medium Blog Series: 'Learning Through Life' with 10K+ views across articles",
      "Podcast Collaboration: Hosted and produced episodes discussing lifelong learning and storytelling"
    ]
  },
  education:[ {
    id: 1,
    degree: "Bachelor of Arts in Communication",
    school: "Delhi University",
    date: "2015 - 2018",
    achievements: [
      "Graduated with Honors",
      "Research project on the impact of storytelling in digital media",
      "Organized workshops on content creation and public speaking"
    ]
  },
],
  certifications: [
    "Certified Content Marketing Specialist (2023)",
    "SEO Fundamentals Certification by SEMrush (2022)",
    "Storytelling in Business by Harvard Online (2021)"
  ]
};