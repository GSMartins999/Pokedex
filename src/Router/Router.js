import { PokedexPage } from "../pages/PokedexPage/PokedexPage"
import { DetailsPage } from "../pages/PokemonDetailPage/DetailsPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListPage } from "../pages/PokemonsListPage/ListPage";



export const Router = () => {

    return(
        // Criando nossas rotas:
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <ListPage/>}/>
            <Route path="pokedex" element={ <PokedexPage /> }/>
            <Route path="detalhes/:pokemonId" element={<DetailsPage />} />
        </Routes>
        </BrowserRouter>
    )
}