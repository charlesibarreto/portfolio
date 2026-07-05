/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              PORTFOLIO CONFIGURATION FILE                    ║
 * ║                                                              ║
 * ║  Edit this file to personalize your entire portfolio.        ║
 * ║  No need to touch HTML, CSS, or JS — everything is           ║
 * ║  driven from this single config.                             ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const CONFIG = {

  // ─── Personal Info ───────────────────────────────────────────
  name: "Charles Barreto",
  title: "Mechatronics Architect",
  tagline: "Building high‑performance robotics, automation systems, and precision motion platforms.",
  roles: ["Mechatronics Architect", "Robotics Engineer", "Automation Developer", "System Integrator"],

  about: {
    description: [
      "Mechatronics Architect specializing in precision motion control, autonomous robotics, and multi‑domain system integration.",
      "Experienced in developing automation pipelines, ROS/SLAM workflows, and high‑G calibration systems for mission‑critical platforms.",
      "Delivered multi‑million‑dollar reliability improvements across ASML EUV and DUV platforms through automation, diagnostics, and system‑level optimization."
    ],
    resumeUrl: "",
    avatarUrl: "assets/Images/profile2.jpg"
  },

  // ─── Social Links ───────────────────────────────────────────
  social: {
    linkedin: "www.linkedin.com/in/charlesbarreto",
    twitter: "",
    email: "charlesibarreto@gmail.com"
  },

  // ─── Skills ─────────────────────────────────────────────────
  skills: [
    // Core Expertise
    { name: "Automation", level: "", icon: "⚙️" },
    { name: "Software & System Architecture", level: "", icon: "🧩" },
    { name: "Precision Motion Control", level: "", icon: "🎯" },
    { name: "Servo Systems", level: "", icon: "🔧" },
    { name: "SLAM", level: "", icon: "📡" },

    // Domain Expertise
    { name: "High‑Precision Robotics", level: "", icon: "🤖" },
    { name: "Lithography Systems", level: "", icon: "🔬" },
    { name: "Reticle Systems", level: "", icon: "📐" },
    { name: "High‑Vacuum Systems", level: "", icon: "🌫️" },

    // Software & Tools
    { name: "Python", level: "", icon: "🐍" },
    { name: "Linux", level: "", icon: "🐧" },
    { name: "Windows", level: "", icon: "🪟" },
    { name: "Git", level: "", icon: "🔗" },
    { name: "MATLAB / Simulink", level: "", icon: "📊" },
    { name: "ROS", level: "", icon: "🤖" },
    { name: "Siemens NX", level: "", icon: "📐" },
    { name: "SolidWorks", level: "", icon: "🛠️" },

    // Testing & Validation
    { name: "Sensor Integration", level: "", icon: "📡" },
    { name: "DAQ", level: "", icon: "📈" },
    { name: "High‑G Testing", level: "", icon: "🚀" },
    { name: "Data Analysis", level: "", icon: "📊" },
    { name: "Engineering Dashboards", level: "", icon: "📉" },

    // Fabrication
    { name: "Cleanroom Testing", level: "", icon: "🧼" },
    { name: "CNC Machining", level: "", icon: "⚙️" },
    { name: "3D Printing", level: "", icon: "🖨️" },
    { name: "Electronics (Wiring, Soldering, Oscilloscopes)", level: "", icon: "🔌" }
  ],




  // ─── Projects ───────────────────────────────────────────────
  projects: [
    {
      title: "EUV Autonomous Subsystem Architecture",
      description: "Architected autonomous subsystems and robotics control algorithms for next‑gen EUV platforms, improving 6‑DOF system performance under 13G–21G conditions.",
      tech: ["Python", "MATLAB", "Control Systems", "Robotics"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      category: "robotics"
    },
    {
      title: "DUV Automation Pipeline",
      description: "Developed Python/MATLAB automation tools reducing analysis time by ~96% and enabling $3M+ annual reliability improvements.",
      tech: ["Python", "MATLAB", "Automation"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      category: "automation"
    },
    {
      title: "High‑G Calibration & Diagnostics",
      description: "Built high‑precision calibration workflows for 6‑DOF systems operating under extreme acceleration environments.",
      tech: ["MATLAB", "Python", "Data Analysis"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: false,
      category: "robotics"
    },
    {
      title: "Cornell Cup Robotics Manipulator",
      description: "Led development of a 6‑DOF precision manipulator and 4‑DOF robotic arm with ROS‑based localization and control.",
      tech: ["ROS", "Python", "Kinematics"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: false,
      category: "robotics"
    },
    {
      title: "Reticle Handling Prototype",
      description: "Designed and validated reticle handling systems using Siemens NX and MATLAB, improving reliability and throughput.",
      tech: ["NX", "MATLAB", "Mechanical Design"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: false,
      category: "mechanical"
    },
    {
      title: "Predictive Failure Detection System",
      description: "Filed patent for a software‑based monitoring system enabling early detection of hardware wear and software failures.",
      tech: ["Python", "Diagnostics", "System Monitoring"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: false,
      category: "automation"
    }
  ],

  // ─── Experience / Timeline ──────────────────────────────────
  experience: [
  {
    role: "Mechatronics Architect",
    company: "ASML EUV & DUV",
    period: "Jan 2021 — Present",
    description: "",
    tech: ["Python", "MATLAB", "Shell", "Control Systems", "Robotics", "Diagnostics"]
  },

  {
    role: "Mechanical Engineer (Contractor)",
    company: "ASML EUV",
    period: "May 2020 — Aug 2020",
    description: "",
    tech: ["NX", "FEA", "Thermal Design"]
  },

  {
    role: "Mechanical Engineer Intern",
    company: "ASML EUV",
    period: "May 2019 — Aug 2019",
    description: "",
    tech: ["NX", "MATLAB", "FEA"]
  },

  {
    role: "Sub‑Team Lead",
    company: "Cornell Cup Robotics",
    period: "Sep 2017 — Dec 2020",
    description: "",
    tech: ["ROS", "Python", "Kinematics", "Robotics"]
  },

  {
    role: "Team Lead",
    company: "VEX Robotics",
    period: "Sep 2016 — May 2017",
    description: "",
    tech: ["Mechanical Design", "Fabrication", "Robotics"]
  }
],

publications: [
  {
    title: "Geneva Mechanism–Driven EUV Pod Rotation System",
    type: "Defensive Publication",
    date: "Aug 2018",
    summary: "Designed a self‑locking Geneva mechanism enabling precise 90° pod rotation using a single actuation system.",
    tags: ["Mechanisms", "EUV", "Precision Motion"]
  },
  {
    title: "System for Detecting Hardware Wear and Software Failures in Lithography Systems",
    type: "Patent (Filed)",
    date: "May 2025",
    summary: "Software‑based monitoring system enabling early detection of component wear and failures to reduce downtime and prevent wafer defects.",
    tags: ["Diagnostics", "Reliability", "Automation"]
  }
],


  // ─── Theme Configuration ────────────────────────────────────
  theme: {
    primaryColor: "#6366F1",
    secondaryColor: "#8B5CF6",
    accentColor: "#EC4899",
    bgPrimary: "#0B0D17",
    bgSecondary: "#111427",
    bgCard: "rgba(17, 20, 39, 0.7)",
    textPrimary: "#E2E8F0",
    textSecondary: "#94A3B8",
    textMuted: "#475569",
    glassBg: "rgba(255, 255, 255, 0.03)",
    glassBorder: "rgba(255, 255, 255, 0.08)",
    borderRadius: "16px",
    fontFamily: "'Inter', sans-serif"
  },

  // ─── EmailJS (for contact form) ─────────────────────────────
  emailjs: {
  publicKey: "",
  serviceId: "",
  templateId: ""
  },


  // ─── Advanced Settings ──────────────────────────────────────
  settings: {
    enableParticles: true,
    enableCursorGlow: true,
    enableSmoothScroll: true,
    enablePreloader: true,
    enableSoundEffects: false,
    particleCount: 50,
    animationSpeed: 1
  }
};
