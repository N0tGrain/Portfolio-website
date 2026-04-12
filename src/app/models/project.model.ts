export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[]; //tech stack, tools, etc.
  github?: string; //optional (some are private)
  live?: string; //optional
}
