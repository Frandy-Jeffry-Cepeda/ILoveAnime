import Aside from "../components/Aside";
import MainMenu from "../components/MainMenu";
import { useAppStore } from "../store/useAppStores";


export default function FavoritesPage() {

  const favorites = useAppStore((state) => state.favorites)
  const setSelectedAnimeEpisode = useAppStore((state) => state.setSelectedAnimeEpisode)

  return (

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
      <div className="p-4">
                <div className="mb-4 text-center md:text-start">
                    <h2 className="text-2xl font-bold mb-5">Animes Favoritos</h2>
                </div>

                <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {favorites.map(anime => (
                        <div 
                            key={anime.entry.mal_id} 
                            className="relative rounded-lg transform transition hover:scale-105 cursor-pointer"
                            style={{ height: "300px" }}
                            onClick={() => setSelectedAnimeEpisode(anime.entry.mal_id)}
                        >
                            <img 
                                src={anime.entry.images.jpg.image_url} 
                                alt={anime.entry.title} 
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 rounded-b-lg text-white text-lg font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
                                {anime.entry.title}
                            </div>
                        </div>
                    ))}
                </main>
            </div>
      </div>

    </div>
  </div>
  )
}
