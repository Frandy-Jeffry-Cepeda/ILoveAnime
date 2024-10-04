import { StateCreator } from "zustand"
import { getAnimeSeasonNow } from "../services/AnimeService"
import { animeSeasonNow } from "../types"

export type AnimeSliceType = {
    animeSeasonNow: animeSeasonNow
    getAnimeSeason: () => Promise<void>
}

export const createAnimeSlice: StateCreator<AnimeSliceType> = (set) => ({
    animeSeasonNow: {
        data: []
    },
    getAnimeSeason: async () => {
        const animeSeasonNow = await getAnimeSeasonNow()
        set({
          animeSeasonNow
        })
    }
})