import { z } from 'zod'

export const AnimeSeasonNowSchema = z.object({
    data: z.array(
        z.object({
            mal_id: z.number(),
            title: z.string(),
            url: z.string(),
            type: z.string()
        })
    )
})

export const AnimeRecentEpisodesSchema = z.object({
    data: z.array(
        z.object({
            entry: z.object({
                mal_id: z.number(),
                images: z.object({
                    jpg: z.object({
                        image_url: z.string()
                    })
                }),
                title: z.string()
            })
        })
    )
})
