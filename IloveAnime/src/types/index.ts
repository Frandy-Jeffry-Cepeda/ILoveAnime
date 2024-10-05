import { z } from 'zod'
import { AnimeRecentEpisodesSchema, AnimeSeasonNowSchema } from "../schema/animeSchema";


export type animeSeasonNow = z.infer<typeof AnimeSeasonNowSchema>
export type animeRecentEpisodes = z.infer<typeof AnimeRecentEpisodesSchema>