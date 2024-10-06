import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useAppStore } from '../store/useAppStores';

export default function Modal() {
    const modal = useAppStore((state) => state.modal);
    const closeModal = useAppStore((state) => state.closeModal);
    const selectedAnimeEpisode = useAppStore((state) => state.selectedAnimeEpisode);
    const favorites = useAppStore((state) => state.favorites);
    const setFavoriteAnime = useAppStore((state) => state.setFavoriteAnime);
    
    // Función para verificar si el anime está en favoritos
    const isFavorite = favorites.some(favorite => favorite.entry.mal_id === selectedAnimeEpisode?.entry.mal_id);

    const handleFavoriteClick = () => {
        if (selectedAnimeEpisode) {
            setFavoriteAnime(selectedAnimeEpisode); 
        }
    };

    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-70" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-4 pb-2 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xs md:max-w-lg">
                                    <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-2 text-center">
                                        {selectedAnimeEpisode?.entry.title}
                                    </Dialog.Title>
                                    <img
                                        src={selectedAnimeEpisode?.entry.images.jpg.image_url}
                                        alt=""
                                        className='mx-auto w-56' 
                                    />
                                    
                                    <div className="mt-2">
                                        <p className="text-lg"> {/** Información adicional */}</p>
                                    </div>

                                    <div className="mt-4 flex justify-between gap-1"> 
                                        <button
                                            type='button'
                                            className='w-full rounded bg-gray-600 p-2 font-bold uppercase text-white shadow hover:bg-gray-500' 
                                            onClick={() => {}}
                                        >Ver Luego</button>

                                        <button
                                            type='button'
                                            className={`w-full rounded p-2 font-bold uppercase text-white shadow bg-orange-500`} 
                                            onClick={handleFavoriteClick}
                                        >
                                            {isFavorite ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
