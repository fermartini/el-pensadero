import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        description: z.string(),
        date: z.string(),
        dateFormatted: z.string(),
        readtime: z.string(),
        slug: z.string(),
        tags: z.array(z.string()),
        category: z.string(),
        lang: z.string(),
        videoId: z.string(),
        important: z.boolean(),
        durationVideo: z.string(),
        slugLang: z.string()
    })
})

export const collections = {
    posts
}