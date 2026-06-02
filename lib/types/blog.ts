export enum BlogType {
  BLOG = "Blog Post",
  VIDEO = "Video Blog",
}

export interface Blog {
  id: number;
  title: string;
  type: BlogType;
  author: string;
  breifDescription: string;
  content: string;
  imageURL: string;
  tags?: string[];
  themeID: number;
  createdAT: string;
  updatedAt: string;
}