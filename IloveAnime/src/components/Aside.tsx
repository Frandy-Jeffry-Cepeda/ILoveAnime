import { Link } from "react-router-dom";
import { useAppStore } from "../store/useAppStores";

export default function Aside() {

    const animeSeasonNow = useAppStore((state) => state.animeSeasonNow);

  return (
    <>
      <aside className="hidden md:flex flex-col space-y-2">
        <h3 className="py-2 font-bold text-center border-b-[1px] border-b-black">Animes en emisión</h3>

          <div className="flex flex-col space-y-2 w-full">
            {animeSeasonNow.data.map(anime => (
              <div key={anime.mal_id} className="flex justify-between items-center p-2 border-b border-gray-300">
                <Link
                  className=" w-1/2 flex-1 bg-transparent no-underline flex justify-between items-center"
                    to={anime.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="font-semibold text-lg overflow-hidden whitespace-nowrap text-ellipsis">
                      {anime.title}
                    </p>
                    <p className="text-gray-500">
                      {anime.type}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
        </aside>
    </>

  )
}
