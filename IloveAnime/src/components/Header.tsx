import { NavLink } from "react-router-dom"
import FadeMenu from "./FadeMenu"


export default function Header() {
  return (

    <header className="bg-black">

        <div className="container mx-auto px-5 py-10">

            <div className="flex justify-between items-center">

                <div className="">
                    <img  className="w-32" src="./Logo.PNG" alt="logotipo" />
                </div>

                {/*Barra de navegación de tablet / desktop*/}

                <nav className="hidden md:flex gap-4 ">
                    <NavLink
                        to="/"
                        className={({isActive}) => isActive ? 'text-white border-b-2 font-bold uppercase' : 'text-white font-bold uppercase'}
                    >Inicio</NavLink>
                        <NavLink
                        to="/favorites"
                        className={({isActive}) => isActive ? 'text-white border-b-2 font-bold uppercase' : 'text-white font-bold uppercase'}
                    >Favoritos</NavLink>
                        <NavLink
                        to="/watchlater"
                        className={({isActive}) => isActive ? 'text-white border-b-2 font-bold uppercase' : 'text-white font-bold uppercase'}
                    >Ver Luego</NavLink>
                </nav>

                {/*Botón para cuando estamos a menos de 768px - Móvil*/} 

                <div className="md:hidden flex items-center">
                    <FadeMenu/>
                </div>
                

            </div>
        </div>
    </header>
  )
}
