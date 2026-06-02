"use client";

import { useEffect, useState } from "react";
import { fetchThemes } from "../../../lib/api/api";
import { ThemeItem } from "@/lib/types/theme";

export function PopularTheme() {
  const [theme, setTheme] = useState<ThemeItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadThemes = async () => {
      try {
        const data = await fetchThemes();
        setTheme(data);
      } catch (error) {
        console.error("Error fetching themes:", error);
      } finally {
        setLoading(false);
      }
    };

    loadThemes();
  }, []);

  if (loading) return <p>Loading themes...</p>;

  return (
    <section className="m-10 mx-25">
      <div className="flex justify-between my-10">
        <h2>Popular Themes</h2>
      </div>

      <div className="grid grid-cols-5 gap-3 text-center text-sm font-semibold">
        {theme.map((item) => (
          <p key={item.id} className="border border-gray-300 p-7 rounded-xl cursor-pointer hover:bg-gray-300">{item.title}</p>))}
      </div>
    </section>
  );
}