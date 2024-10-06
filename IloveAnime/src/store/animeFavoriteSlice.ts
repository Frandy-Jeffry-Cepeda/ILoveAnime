import { StateCreator } from "zustand"
import { animeRecentEpisodes } from "../types";
import { AnimeSliceType } from "./animeSlice";
import { createNotificationlice, NotificationSliceType } from "./notificacion";

export type AnimeFavoriteSliceType = {
    favorites: animeRecentEpisodes['data'][number][]
    setFavoriteAnime: (animeRecentEpisodes: animeRecentEpisodes['data'][number]) => void;
    loadFromStorage: () => void
}

export const createAnimeFavoriteSlice: StateCreator<AnimeFavoriteSliceType & AnimeSliceType & NotificationSliceType, [], [], AnimeFavoriteSliceType> = (set, get, api) => ({
    favorites: [],
    
    setFavoriteAnime: (animeRecentEpisodes) => {
        const { favorites } = get(); 
    
        const isFavorite = favorites.find(favorite => favorite.entry.mal_id === animeRecentEpisodes.entry.mal_id);
    
        let updatedFavorites;
        if (isFavorite) {
            updatedFavorites = favorites.filter(favorite => favorite.entry.mal_id !== animeRecentEpisodes.entry.mal_id);
            createNotificationlice(set, get, api).showNotification({
                text: 'Eliminado de favoritos',
                error: false
            });
            get().closeModal()
        } else {
            updatedFavorites = [...favorites, animeRecentEpisodes];
            createNotificationlice(set, get, api).showNotification({
                text: 'Agregado a favoritos',
                error: false
            });
            get().closeModal()
        }
        
        set({ favorites: updatedFavorites });
        localStorage.setItem('Favorites Animes', JSON.stringify(updatedFavorites));
    },
    
    loadFromStorage: () => {
        const storedFavoritesAnimes = localStorage.getItem('Favorites Animes');
        
        if (storedFavoritesAnimes) {
            set({ favorites: JSON.parse(storedFavoritesAnimes) });
        }
    }
});