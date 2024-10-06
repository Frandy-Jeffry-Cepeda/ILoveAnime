import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Modal from "../components/Modal"
import { useAppStore } from "../store/useAppStores"
import { useEffect } from "react"
import Notification from "../components/Notificacion"
import Aside from "../components/Aside"

export default function Layout() {

  const loadFromStorage = useAppStore((state) => state.loadFromStorage)

  useEffect(() => {
    loadFromStorage()
  } ,[])

  return (
    <>

    
    <Header/>
    
    <main>
        <Outlet/>
    </main>

    <Modal/>
    <Notification/>

    
    </>
  )
}
