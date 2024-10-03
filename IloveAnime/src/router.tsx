import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import FavoritesPage from "./views/FavoritesPage";
import WatchLaterPage from "./views/WatchLaterPage";
import Layout from "./layout/Layout";

export default function AppRouter() {

    return (

    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<IndexPage/>}></Route>
                <Route path="/favorites" element={<FavoritesPage/>}></Route>
                <Route path="/watchlater" element={<WatchLaterPage/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>

    )
}