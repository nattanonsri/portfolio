export type Locale = "th" | "en";

export interface Translations {
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    education: string;
    contact: string;
    cta: string;
  };
  hero: {
    available: string;
    title: string;
    subtitle: string;
    tagline: string;
    roles: string[];
    viewWork: string;
    getInTouch: string;
    stats: { label: string; value: string }[];
  };
  about: {
    label: string;
    title: string;
    titleItalic: string;
    bio: string;
    locationLabel: string;
    location: string;
    interestLabel: string;
    interest: string;
  };
  skills: {
    label: string;
    title: string;
    titleItalic: string;
    categories: Record<string, string>;
  };
  projects: {
    label: string;
    title: string;
    titleItalic: string;
    description: string;
    roleLabels: Record<string, string>;
    items: Record<string, { title: string; description: string }>;
  };
  experience: {
    label: string;
    title: string;
    titleItalic: string;
    items: {
      period: string;
      role: string;
      company: string;
      description: string;
      highlights: string[];
    }[];
  };
  education: {
    label: string;
    title: string;
    titleItalic: string;
    gpa: string;
    items: {
      degree: string;
      major: string;
      faculty: string;
      institution: string;
      period: string;
    }[];
  };
  contact: {
    label: string;
    title: string;
    titleItalic: string;
    description: string;
    phone: string;
    line: string;
    location: string;
  };
  footer: {
    builtWith: string;
  };
}

export const translations: Record<Locale, Translations> = {
  th: {
    nav: {
      about: "เกี่ยวกับ",
      skills: "ทักษะ",
      projects: "ผลงาน",
      experience: "ประสบการณ์",
      education: "การศึกษา",
      contact: "ติดต่อ",
      cta: "ติดต่อ",
    },
    hero: {
      available: "เปิดรับงาน",
      title: "Full Stack Developer",
      subtitle: "Web · Android · DevOps",
      tagline:
        "พัฒนาระบบเว็บและแอปมือถือ ตั้งแต่ backend จนถึง CI/CD — สร้างโซลูชันที่รองรับผู้ใช้งานจริง",
      roles: [
        "Full Stack Developer",
        "Android Developer",
        "Web Developer",
        "DevOps",
      ],
      viewWork: "ดูผลงาน",
      getInTouch: "ติดต่อ",
      stats: [
        { label: "ประสบการณ์", value: "1+ ปี" },
        { label: "GPA", value: "3.50" },
        { label: "ปริญญา", value: "วท.บ." },
      ],
    },
    about: {
      label: "เกี่ยวกับ",
      title: "สร้างระบบที่",
      titleItalic: "ใช้งานได้จริง",
      bio: "นักพัฒนาซอฟต์แวร์ที่มุ่งเน้นการสร้างระบบที่ใช้งานได้จริงและมีประสิทธิภาพ มีประสบการณ์พัฒนาเว็บแอปพลิเคชันด้วย PHP/CodeIgniter, แอป Android ด้วย Kotlin/Jetpack Compose และตั้งค่า CI/CD pipeline ด้วย Jenkins และ ArgoCD จบการศึกษาระดับปริญญาตรี สาขาเทคโนโลยีสารสนเทศ เกรดเฉลี่ย 3.50",
      locationLabel: "ที่อยู่ปัจจุบัน",
      location: "กรุงเทพฯ, ประเทศไทย",
      interestLabel: "ตำแหน่งที่สนใจ",
      interest: "Full Stack · Web · Android",
    },
    skills: {
      label: "ทักษะ",
      title: "เทคโนโลยีที่",
      titleItalic: "เชี่ยวชาญ",
      categories: {
        "Web & Backend": "เว็บ & Backend",
        Mobile: "มือถือ",
        "DevOps & Tools": "DevOps & เครื่องมือ",
      },
    },
    projects: {
      label: "ผลงาน",
      title: "ผลงาน",
      titleItalic: "ที่ผ่านมา",
      description:
        "ระบบและแอปพลิเคชันที่พัฒนาและดูแลระหว่างทำงานที่ บริษัท เอาร์ไอพี จำกัด (มหาชน)",
      roleLabels: {
        dev: "พัฒนา",
        design: "ออกแบบ",
        both: "พัฒนา & ออกแบบ",
      },
      items: {
        "1": {
          title: "Web Course Online",
          description:
            "พัฒนาและดูแลระบบหลักสำหรับแพลตฟอร์มเรียนออนไลน์ ปรับจูน MySQL เพื่อรองรับ high traffic และออกแบบ API สำหรับแอปมือถือ",
        },
        "2": {
          title: "Commart Platform",
          description:
            "พัฒนาและบำรุงรักษาระบบเว็บไซต์หลักของแพลตฟอร์ม Commart ด้วย CodeIgniter รองรับผู้ใช้งานจำนวนมาก",
        },
        "3": {
          title: "iRedCross System",
          description:
            "ดูแลและพัฒนาระบบเว็บไซต์ iRedCross ปรับปรุงประสิทธิภาพฐานข้อมูลและโครงสร้าง backend ให้เสถียรขึ้น",
        },
        "4": {
          title: "Online Learning App",
          description:
            "สร้างแอปเรียนออนไลน์บน Android ด้วย Kotlin และ Jetpack Compose สถาปัตยกรรม MVVM เชื่อมต่อ RESTful API ที่พัฒนาขึ้นเอง",
        },
      },
    },
    experience: {
      label: "ประสบการณ์",
      title: "ประสบการณ์",
      titleItalic: "การทำงาน",
      items: [
        {
          period: "มิ.ย. 2567 — ปัจจุบัน",
          role: "Web Developer",
          company: "บริษัท เอาร์ไอพี จำกัด (มหาชน)",
          description:
            "พัฒนาและดูแลระบบเว็บไซต์หลักของบริษัท รวมถึงพัฒนาแอป Android และตั้งค่า CI/CD pipeline",
          highlights: [
            "พัฒนาและดูแลระบบ Web Course Online, Commart และ iRedCross ด้วย CodeIgniter (PHP)",
            "ปรับจูน MySQL เพื่อรองรับ high traffic และเพิ่มประสิทธิภาพการ query",
            "สร้างแอปเรียนออนไลน์ Android ด้วย Kotlin + Jetpack Compose (MVVM)",
            "พัฒนา RESTful API เชื่อมต่อระหว่างเว็บและแอปมือถือ",
            "ตั้งค่า CI/CD pipeline ด้วย Jenkins และ ArgoCD",
          ],
        },
      ],
    },
    education: {
      label: "การศึกษา",
      title: "ประวัติ",
      titleItalic: "การศึกษา",
      gpa: "เกรดเฉลี่ย",
      items: [
        {
          degree: "วท.บ. (วิทยาศาสตรบัณฑิต)",
          major: "เทคโนโลยีสารสนเทศ",
          faculty: "วิทยาศาสตร์และเทคโนโลยี",
          institution:
            "มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย วิทยาเขตนครศรีธรรมราช",
          period: "2567",
        },
      ],
    },
    contact: {
      label: "ติดต่อ",
      title: "มา",
      titleItalic: "คุยกัน",
      description:
        "เปิดรับโอกาสในการทำงาน Full Stack, Web Developer และ Android Developer",
      phone: "โทรศัพท์",
      line: "LINE",
      location: "ที่อยู่ปัจจุบัน",
    },
    footer: {
      builtWith: "สร้างด้วย React + Vite + Tailwind",
    },
  },

  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      cta: "Contact",
    },
    hero: {
      available: "Open to work",
      title: "Full Stack Developer",
      subtitle: "Web · Android · DevOps",
      tagline:
        "Building web and mobile systems from backend to CI/CD — delivering solutions that scale for real users.",
      roles: [
        "Full Stack Developer",
        "Android Developer",
        "Web Developer",
        "DevOps",
      ],
      viewWork: "View work",
      getInTouch: "Get in touch",
      stats: [
        { label: "Experience", value: "1+ yr" },
        { label: "GPA", value: "3.50" },
        { label: "Degree", value: "B.Sc." },
      ],
    },
    about: {
      label: "About",
      title: "Building systems that",
      titleItalic: "actually work",
      bio: "Software developer focused on building reliable, high-performance systems. Experienced in web applications with PHP/CodeIgniter, Android apps with Kotlin/Jetpack Compose, and CI/CD pipelines with Jenkins and ArgoCD. Bachelor's degree in Information Technology with a GPA of 3.50.",
      locationLabel: "Current location",
      location: "Bangkok, Thailand",
      interestLabel: "Interested in",
      interest: "Full Stack · Web · Android",
    },
    skills: {
      label: "Skills",
      title: "Technologies I",
      titleItalic: "work with",
      categories: {
        "Web & Backend": "Web & Backend",
        Mobile: "Mobile",
        "DevOps & Tools": "DevOps & Tools",
      },
    },
    projects: {
      label: "Projects",
      title: "Selected",
      titleItalic: "work",
      description:
        "Systems and applications developed and maintained at RIP Public Company Limited",
      roleLabels: {
        dev: "Development",
        design: "Design",
        both: "Dev & Design",
      },
      items: {
        "1": {
          title: "Web Course Online",
          description:
            "Developed and maintained the core platform for an online learning system. Tuned MySQL for high traffic and designed APIs for the mobile app.",
        },
        "2": {
          title: "Commart Platform",
          description:
            "Built and maintained the main Commart platform website using CodeIgniter, serving a large user base.",
        },
        "3": {
          title: "iRedCross System",
          description:
            "Maintained and improved the iRedCross website, optimizing database performance and backend stability.",
        },
        "4": {
          title: "Online Learning App",
          description:
            "Built an Android learning app with Kotlin and Jetpack Compose (MVVM), connected to a custom RESTful API.",
        },
      },
    },
    experience: {
      label: "Experience",
      title: "Work",
      titleItalic: "experience",
      items: [
        {
          period: "Jun 2024 — Present",
          role: "Web Developer",
          company: "RIP Public Company Limited",
          description:
            "Developed and maintained the company's core web systems, built an Android app, and set up CI/CD pipelines.",
          highlights: [
            "Developed and maintained Web Course Online, Commart, and iRedCross using CodeIgniter (PHP)",
            "Tuned MySQL for high traffic and optimized query performance",
            "Built an Android learning app with Kotlin + Jetpack Compose (MVVM)",
            "Developed RESTful APIs connecting web and mobile platforms",
            "Set up CI/CD pipelines with Jenkins and ArgoCD",
          ],
        },
      ],
    },
    education: {
      label: "Education",
      title: "Academic",
      titleItalic: "background",
      gpa: "GPA",
      items: [
        {
          degree: "Bachelor of Science (B.Sc.)",
          major: "Information Technology",
          faculty: "Faculty of Science and Technology",
          institution:
            "Rajamangala University of Technology Srivijaya, Nakhon Si Thammarat Campus",
          period: "2024",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's",
      titleItalic: "connect",
      description:
        "Open to opportunities as a Full Stack, Web, or Android Developer",
      phone: "Phone",
      line: "LINE",
      location: "Current location",
    },
    footer: {
      builtWith: "Built with React + Vite + Tailwind",
    },
  },
};
