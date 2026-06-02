import axios from "axios";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "https://bloghub-backend-production.up.railway.app";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchThemes = async () => {
    const { data } = await api.get("/theme/getall");
    return data;
};

export const addTheme = async (themeData: {
    name: string;
    description: string;
    status: boolean;
}) => {
    const { data } = await api.post("/theme/create", themeData);
    return data;
};

export const updateTheme = async (
    id: number,
    themeData: {
        name: string;
        description: string;
        status: boolean;
    }
) => {
    const { data } = await api.patch(`/theme/update/${id}`, themeData);
    return data;
};

export const deleteTheme = async (id: number) => {
    const { data } = await api.delete(`/theme/delete/${id}`);
    return data;
};

export const fetchBlogs = async () => {
    const { data } = await api.get("/blog");
    return data;
};

export const fetchBlogByID = async (id: number) => {
    const { data } = await api.get(`/blog/${id}`);
    return data;
};

export const fetchBlogsByTheme = async (themeID: number) => {
    const { data } = await api.get(`/blog/category/${themeID}`);
    return data;
};

export const addBlog = async (blogData: {
    title: string;
    type: string;
    content: string;
    categoryID: number;
    imageURL: string;
    tags?: string[];
}) => {
    const { data } = await api.post("/blog", blogData);
    return data;
};

export const updateBlog = async (
    id: number,
    blogData: {
        title: string;
        type: string;
        content: string;
        categoryID: number;
        imageURL: string;
        tags?: string[];
    }
) => {
    const { data } = await api.patch(`/blog/${id}`, blogData);
    return data;
};

export const deleteBlog = async (id: number) => {
    const { data } = await api.delete(`/blog/${id}`);
    return data;
};

export const searchBlogs = async (filters: {
    keyword?: string;
    type?: string;
    categoryID?: number;
    order?: "az" | "oldest" | "newest";
}) => {
    const { data } = await api.post("/blog/search", filters);
    return data;
};

export const fetchBlogsWithThemeName = async () => {
    const blogs = await fetchBlogs();
    const themes = await fetchThemes();

    const themeMap = themes.reduce(
        (acc: Record<number, string>, theme: { id: number; title: string }) => {
            acc[theme.id] = theme.title;
            return acc;
        },
        {}
    );

    return blogs.map((blog: any) => ({
        ...blog,
        themeTitle: themeMap[blog.themeID] || "Unknown Theme",
    }));
};