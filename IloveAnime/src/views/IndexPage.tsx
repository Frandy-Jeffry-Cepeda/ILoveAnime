import { useEffect } from "react";
import { useAppStore } from "../store/useAppStores";
import MainMenu from "../components/MainMenu";
import Aside from "../components/Aside";
import Main from "../components/Main";

export default function IndexPage() {

  const getAnimeSeasonNow = useAppStore((state) => state.getAnimeSeason);
  const getAnimeRecentEpisodes = useAppStore((state) => state.getAnimeRecentEpisodes);

  useEffect(() => {
    getAnimeSeasonNow();
    getAnimeRecentEpisodes();
  }, []);

  return (
    <>
      <div className="w-5/6 mx-auto">
        <div className="bg-black text-white py-5 my-5 text-center  rounded-lg border-b-[5px] border-b-indigo-400">
          <h2 className="text-xl"><span className="font-bold text-2xl">ILoveAnime</span> tu biblioteca de Animes Favorita.</h2>
        </div>

        <div className="md:hidden">
            <MainMenu/>
        </div>

        <div className="flex flex-col md:flex-row">
          
          <div className="bg-white shadow w-full md:w-1/4 h-1/4 overflow-y-auto mr-5 mb-5 md:mb-0">
            <Aside/>
          </div>

          <div className="md:w-3/4 overflow-y-auto">
            <Main/>
          </div>

        </div>
      </div>
    </>
  );
}
