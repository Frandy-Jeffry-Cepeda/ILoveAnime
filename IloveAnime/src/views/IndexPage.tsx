import { useEffect } from "react";
import { useAppStore } from "../store/useAppStores";
import MainMenu from "../components/MainMenu";
import Aside from "../components/Aside";

export default function IndexPage() {

  const getAnimeSeasonNow = useAppStore((state) => state.getAnimeSeason);

  useEffect(() => {
    getAnimeSeasonNow();
  }, []);

  return (
    <>
      <div className="container">
        <div className="w-5/6 bg-black text-white py-5 my-5 text-center mx-auto rounded-lg border-b-[5px] border-b-indigo-400">
          <h2 className="text-xl"><span className="font-bold text-2xl">ILoveAnime</span> tu biblioteca de Animes Favorita.</h2>
        </div>

        <div className="md:hidden">
            <MainMenu/>
        </div>

        <div className="flex flex-col md:flex-row w-5/6 mx-auto">
          
        <div className="bg-white shadow w-full md:w-1/4 h-auto overflow-y-auto mr-5 mb-5 md:mb-0">
          <Aside/>
        </div>

          <div className="bg-black w-full md:w-3/4 max-h-screen overflow-y-auto">
            <main className="flex flex-col text-white h-full">
              <p>asd</p>
              <p>asd</p>
              <p>asd</p>
              <p>asd</p>
              <p>asd</p>
              <p>asd</p>
              <p>asd</p>
              <p>asd</p>
              <p>asd</p>
              <p>asd</p>
              <p>asd</p>
              <p>asd</p>
            </main>
            
          </div>
        </div>
      </div>
    </>
  );
}
