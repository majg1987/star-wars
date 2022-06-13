const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      personajes: [],
      detallesPersonajes: [],
      planetas: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      personajes: () => {
        /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
        const store = getStore();
        for (let i = 1; i < 11; i++) {
          fetch("https://www.swapi.tech/api/people/" + i)
            .then((res) => res.json())
            .then((data) =>
              setStore({
                ...store.personajes,
                personajes: store.personajes.concat(data.result.properties),
              })
            )
            .catch((err) => console.error(err));
        }
      },
      // personajes: () => {
      //   /**
      //           	fetch().then().then(data => setStore({ "foo": data.bar }))
      //           */
      //     fetch("https://www.swapi.tech/api/people/")
      //       .then((res) => res.json())
      //       .then((data) => setStore({personajes: data.results}))
      //       .catch((err) => console.error(err));
      // },
      // datosPersonajes: () => {
      // const datos = getStore();
      // const detalles = datos.personajes.map((item, index)=>{
      //   return console.log(item);
      // })
      // },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({
          demo: demo,
        });
      },
    },
  };
};

export default getState;
