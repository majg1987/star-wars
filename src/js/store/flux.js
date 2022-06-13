const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            personajes: [],
            planetas: [],
            vehiculos: []
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            // Obtengo los datos de los personajes de la api
            datosPersonajes: () => {
                /**
                        	fetch().then().then(data => setStore({ "foo": data.bar }))
                        */
                fetch("https://swapi.dev/api/people")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        personajes: data.results
                    }))
                    .catch((err) => console.error(err));
            },

            datosPlanetas: () => {
                fetch("https://swapi.dev/api/planets")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        planetas: data.results
                    }))
                    .catch((err) => console.error(err));
            },

            datosVehiculos: () => {
                fetch("https://swapi.dev/api/vehicles")
                    .then((res) => res.json())
                    .then((data) =>setStore({vehiculos: data.results}))
                    .catch((err) => console.error(err));
            },

        },
    };
};

export default getState;