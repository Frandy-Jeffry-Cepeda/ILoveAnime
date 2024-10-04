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