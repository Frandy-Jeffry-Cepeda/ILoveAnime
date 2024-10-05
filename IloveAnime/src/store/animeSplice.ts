import { StateCreator } from "zustand"
import { getAnimeRecentEpisodes, getAnimeSeasonNow } from "../services/AnimeService"
import { animeRecentEpisodes, animeSeasonNow } from "../types"

export type AnimeSliceType = {
    animeSeasonNow: animeSeasonNow
    animeRecentEpisodes: animeRecentEpisodes
    getAnimeSeason: () => Promise<void>
    getAnimeRecentEpisodes: () => Promise<void>
}

export const createAnimeSlice: StateCreator<AnimeSliceType> = (set) => ({
    animeSeasonNow: {
        data: []
    },
    animeRecentEpisodes: {
        data: []
    },
    getAnimeSeason: async () => {
        const animeSeasonNow = await getAnimeSeasonNow()
        set({
          animeSeasonNow
        })
    },
    getAnimeRecentEpisodes: async () => {
        const animeRecentEpisodes = await getAnimeRecentEpisodes()
        set({
            animeRecentEpisodes
        })
    }
})