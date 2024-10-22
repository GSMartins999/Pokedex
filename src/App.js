// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import { Router } from "./Router/Router";
import { GlobalContext } from "./contexts/GlobalContexts";
import { BASE_URL } from "./contants";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

function App() {
  // Requisição e armazenamento em um estado:
  const [pokeList, setPokeList] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    getPokelist();
  }, []);

  const getPokelist = async () => {
    try {
      const response = await axios.get(`${BASE_URL}?limit=150&offset=0`);
      setPokeList(response.data.results);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error.response);
    }
  };

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex?.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);

      localStorage.setItem('pokedex', JSON.stringify(newPokedex));

    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );
    setPokedex(newPokedex);
    localStorage.setItem('pokedex', JSON.stringify(newPokedex));
  };

  // Criando um contexto Global:
  const context = {
    pokeList,
    pokedex,
    addToPokedex,
    removeFromPokedex,
    setSelectedPokemon,
  };


  useEffect(() => {
    // Coloca a pokedex do localStorage
    const storedPokedex = localStorage.getItem('pokedex');
    if (storedPokedex) {
      setPokedex(JSON.parse(storedPokedex));
    }
  }, []);

  return (
    // Chamando um contexto Global:
    <GlobalContext.Provider value={context}>
      <GlobalStyle />
      <Router />
    </GlobalContext.Provider>
  );
}

export default App;
