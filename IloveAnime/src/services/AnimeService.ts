import axios from "axios"
import { AnimeRecentEpisodesSchema, AnimeSeasonNowSchema } from "../schema/animeSchema"

export async function getAnimeSeasonNow() {

    const url = "https://api.jikan.moe/v4/seasons/now"

    const { data } = await axios(url)

    const result = AnimeSeasonNowSchema.safeParse(data)

    if(result.data) {
        return result.data
    }
}

export async function getAnimeRecentEpisodes() {

    const url = "https://api.jikan.moe/v4/watch/episodes"

    const { data } = await axios(url)

    const result = AnimeRecentEpisodesSchema.safeParse(data)

    if(result.data) {
        return result.data
    }


}