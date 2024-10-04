import { create } from "zustand";
import { devtools } from "zustand/middleware"; 
import { AnimeSliceType, createAnimeSlice } from "./animeSplice";

export const useAppStore = create<AnimeSliceType>()(devtools((set, get, ...a) => ({
    ...createAnimeSlice(set, get, ...a), 
})))
