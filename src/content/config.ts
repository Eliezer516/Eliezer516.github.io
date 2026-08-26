import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    desc: z.string().default(''),
    date: z.date(),
    imgUrl: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
