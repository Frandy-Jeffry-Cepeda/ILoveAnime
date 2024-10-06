import { Menu } from '@headlessui/react';
import { useAppStore } from '../store/useAppStores';
import { Link } from 'react-router-dom';

export default function MainMenu() {
  const animeSeasonNow = useAppStore((state) => state.animeSeasonNow);

  return (
    <div className="w-full bg-gray-500 text-white py-5 my-5 text-center mx-auto rounded-lg">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className="inline-flex items-center">
              Animes en emisión
              <svg
                className={`w-5 h-5 ml-2 -mr-1 transition-transform duration-200 ${
                  open ? 'rotate-180' : 'rotate-0'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.292 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Menu.Button>
            <Menu.Items className="w-full text-white mt-2 rounded-lg max-h-64 overflow-y-auto">
              <div className="px-1 py-1">
                {animeSeasonNow.data.map((anime) => (
                  <Menu.Item as="div" key={anime.mal_id}>
                    <div className="flex justify-between items-center p-2 border-b border-gray-300">
                      <Link
                        className="w-1/2 flex-1 bg-transparent no-underline flex justify-between items-center"
                        to={anime.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="font-semibold text-lg overflow-hidden whitespace-nowrap text-ellipsis">
                          {anime.title}
                        </p>
                        <p className="text-gray-500">{anime.type}</p>
                      </Link>
                    </div>
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}
