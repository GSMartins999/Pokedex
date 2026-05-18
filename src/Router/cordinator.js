export const goToPokedex = (navigate) =>{
    navigate("/pokedex");
}

export const goToDetalhes = (navigate, id, state) =>{
    navigate(`/detalhes/${id}`, { state });
}

export const goToHome = (navigate) => {
    navigate("/")
}