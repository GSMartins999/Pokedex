// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import { Router } from "./Router/Router";
import { GlobalContext } from "./contexts/GlobalContexts";
import { BASE_URL } from "./contants";
import { Modal } from "./components/Modal/Modal";

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
  const [modalState, setModalState] = useState({ isOpen: false, type: '' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPokelist();
  }, []);

  const getPokelist = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}?limit=150&offset=0`);
      setTimeout(() => {
        setPokeList(response.data.results);
        setIsLoading(false);
      }, 1200);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error.response);
      setIsLoading(false);
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
      setModalState({ isOpen: true, type: 'add' });
    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );
    setPokedex(newPokedex);
    localStorage.setItem('pokedex', JSON.stringify(newPokedex));
    setModalState({ isOpen: true, type: 'remove' });
  };

  // Criando um contexto Global:
  const context = {
    pokeList,
    pokedex,
    addToPokedex,
    removeFromPokedex,
    selectedPokemon,
    setSelectedPokemon,
    isLoading,
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
      <Modal isOpen={modalState.isOpen} type={modalState.type} onClose={() => setModalState({ isOpen: false, type: '' })} />
    </GlobalContext.Provider>
  );
}

export default App;
