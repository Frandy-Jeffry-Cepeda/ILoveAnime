import { StateCreator } from "zustand"
import { getAnimeRecentEpisodes, getAnimeSeasonNow } from "../services/AnimeService"
import { animeRecentEpisodes, animeSeasonNow } from "../types"

export type AnimeSliceType = {
    animeSeasonNow: animeSeasonNow
    animeRecentEpisodes: animeRecentEpisodes
    selectedAnimeEpisode: animeRecentEpisodes['data'][number] | null;
    modal: boolean,
    getAnimeSeason: () => Promise<void>
    getAnimeRecentEpisodes: () => Promise<void>
    setSelectedAnimeEpisode: (id: number) => void
    closeModal: () => void
}

export const createAnimeSlice: StateCreator<AnimeSliceType> = (set, get ) => ({
    animeSeasonNow: {
        data: []
    },
    animeRecentEpisodes: {
        data: []
    },
    selectedAnimeEpisode: null,
    modal: false,
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
    },
    setSelectedAnimeEpisode: (id) => {
        const { animeRecentEpisodes } = get(); 
        const selectedEpisode = animeRecentEpisodes.data.find(anime => anime.entry.mal_id === id); 

        set({
            selectedAnimeEpisode: selectedEpisode,
            modal: true
        });
    },
    closeModal: () => {
        set({
            modal: false
        })
    }
})