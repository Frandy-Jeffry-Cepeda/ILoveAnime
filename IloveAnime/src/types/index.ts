import { z } from 'zod'
import { AnimeSeasonNowSchema } from "../schema/animeSchema";


export type animeSeasonNow = z.infer<typeof AnimeSeasonNowSchema>