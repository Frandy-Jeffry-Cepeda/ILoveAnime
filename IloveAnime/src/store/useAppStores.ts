import { create } from "zustand";
import { devtools } from "zustand/middleware"; 
import { AnimeSliceType, createAnimeSlice } from "./animeSlice";
import { AnimeFavoriteSliceType, createAnimeFavoriteSlice } from "./animeFavoriteSlice";
import { createNotificationlice, NotificationSliceType } from "./notificacion";

export const useAppStore = create<AnimeSliceType & AnimeFavoriteSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createAnimeSlice(...a), 
    ...createAnimeFavoriteSlice(...a),
    ...createNotificationlice(...a)
})))
