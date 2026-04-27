import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://darpanpatel.dev";

  const blogSlugs = ["optimizing-react-rerenders-patterns-learned-in-production"];
  const projectSlugs = [
    "workflow-management-system",
    "core-health-physiotherapy",
    "gas-flow-solution",
  ];

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectRoutes = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogRoutes,
    ...projectRoutes,
  ];
}
