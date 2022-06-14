const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            personajes: [],
            planetas: [],
            vehiculos: [],
            favoritos: [],
        },
        actions: {

            // Obtengo los datos de los personajes de la api
            datosPersonajes: () => {
                fetch("https://swapi.dev/api/people")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        personajes: data.results
                    }))
                    .catch((err) => console.error(err));
            },

            // Obtengo los datos de los planetas de la api
            datosPlanetas: () => {
                fetch("https://swapi.dev/api/planets")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        planetas: data.results
                    }))
                    .catch((err) => console.error(err));
            },

            // Obtengo datos de vehiculos de la api
            datosVehiculos: () => {
                fetch("https://swapi.dev/api/vehicles")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        vehiculos: data.results
                    }))
                    .catch((err) => console.error(err));
            },

            // Agrego a la lista de favoritos
            addFavourites: (favourite) => {
                const store = getStore();
                setStore({
                    ...store,
                    favoritos: store.favoritos.concat(favourite)
                })
                // console.log(favourite);
            },

            // Eliminar de la lista de favoritos
            deleteFavourites: (element) => {
                const store = getStore();
                const eliminado = store.favoritos.filter((item, index) => {
                    return element != item;
                })
                setStore({
                    favoritos: eliminado
                })
            }

        },
    };
};

export default getState;