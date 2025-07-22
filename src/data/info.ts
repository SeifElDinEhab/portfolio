import { Project } from "@/types/project";

export const role = "Front-end Developer";

export const availabilityDate = {
  month: "August",
  year: 2025,
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Studioshot",
    category: "UI Development & Code Components",
    description:
      "Marketing platform for an AI-powered professional headshot service",
    mainImage: "/work/thumbnails/studioshot-hero.png",
    videos: [
      {
        url: "/work/videos/ss-hero.mp4",
        thumbnail: "/work/thumbnails/studioshot-thumb1.png",
        title: "Custom AI Photography Showcase",
      },
      {
        url: "/work/videos/studioshot-feature2.mp4",
        thumbnail: "/work/thumbnails/studioshot-thumb2.png",
        title: "Responsive Component Behavior",
      },
    ],
    technologies: ["Framer", "React"],
    longDescription:
      "Developed Studioshot.ai's marketing website, building custom components in Framer and React with property controls for easy management. Working from desktop designs only, I created responsive tablet and mobile experiences. The result is an elegant, high-converting website that effectively showcases this premium AI headshot service.",
    liveLink: "https://studioshot.ai",
  },
  {
    id: 2,
    title: "Hire.inc",
    category: "UI Development & Responsive Design",
    description: "Marketing website for an AI-powered recruitment platform",
    mainImage: "/work/thumbnails/hire-inc-hero.png",
    videos: [
      {
        url: "/work/videos/hire-inc-feature1.mp4",
        thumbnail: "/work/thumbnails/hire-inc-thumb1.png",
        title: "AI Sourcing Agents Interface",
      },
      {
        url: "/work/videos/hire-inc-feature2.mp4",
        thumbnail: "/work/thumbnails/hire-inc-thumb2.png",
        title: "Custom Animation Component",
      },
    ],
    technologies: ["Framer"],
    longDescription:
      "Developed the marketing website for Hire.inc, an innovative AI recruitment platform. The site showcases their four main features: AI Sourcing Agents, AI Resume Screening, Interview Notes, and Collaborative ATS. Leveraging my expertise in Framer, I created custom components that the client was struggling with, delivering high-quality solutions with rapid turnaround times. The result was a polished, performant website that effectively communicates the platform's value proposition to potential customers.",
    liveLink: "https://hire.inc",
  },
];
