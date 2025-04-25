// src/content/config.ts
import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().optional(),
    }),
  }),
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      repo: z.string().url(),
      cover: z.string(),           // path in /public/images
      stack: z.array(z.string()),
      featured: z.boolean().optional(),
    }),
  }),
};