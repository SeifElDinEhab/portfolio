export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  mainImage: string;
  videos: {
    url: string;
    thumbnail: string;
    title: string;
  }[];
  technologies: string[];
  longDescription: string;
  liveLink: string;
  githubLink: string;
}
