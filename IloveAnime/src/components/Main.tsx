import { useAppStore } from "../store/useAppStores";

export default function Main() {
    const animeRecentEpisodes = useAppStore((state) => state.animeRecentEpisodes);
    const setSelectedAnimeEpisode = useAppStore((state) => state.setSelectedAnimeEpisode);

    return (
        <>
            <div className="p-4">
                <div className="mb-4 text-center md:text-start">
                    <h2 className="text-2xl font-bold mb-5">Últimos capítulos</h2>
                </div>

                <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {animeRecentEpisodes.data.map(anime => (
                        <div 
                            key={anime.entry.mal_id} 
                            className="relative rounded-lg transform transition hover:scale-105 cursor-pointer"
                            style={{ height: "300px" }}
                            onClick={() => setSelectedAnimeEpisode(anime.entry.mal_id)} // Establecer el episodio seleccionado
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
        </>
    );
}
