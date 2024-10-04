import { NavLink } from "react-router-dom"
import MenuHeader from "./MenuHeader"

export default function Header() {
  return (

    <header className="bg-black">

        <div className="container mx-auto p-5">

            <div className="flex justify-between items-center">

                <div className="cursor-pointer">
                    <NavLink to="/">
                        <img  className="w-24" src="./Logo.PNG" alt="logotipo" />
                    </NavLink>
                </div>

                {/*Barra de navegación de tablet / desktop*/}

                <nav className="hidden md:flex gap-10 text-lg">
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

                <div className="md:hidden">
                    <MenuHeader/>
                </div>
                

            </div>
        </div>
    </header>
  )
}
