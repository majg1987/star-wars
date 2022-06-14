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
            imagenesPersonajes: [{
                url: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg?region=131%2C0%2C951%2C536",
                descripcion: "Luke Skywalker era un granjero de Tatooine que se levantó desde un comienzo humilde para convertirse en uno de los Jedi más grandes que la galaxia haya conocido. Junto con sus amigos, la princesa Leia y Han Solo, Luke luchó contra el malvado Imperio, descubrió la verdad sobre su ascendencia y puso fin a la tiranía de los Sith. Una generación más tarde, la ubicación del famoso maestro Jedi era uno de los mayores misterios de la galaxia. Atormentado por la caída de Ben Solo en el mal y convencido de que los Jedi tenían que terminar, Luke buscó el exilio en un mundo distante, ignorando las súplicas de ayuda de la galaxia. Pero su soledad sería interrumpida, y Luke Skywalker tenía un último y trascendental papel que desempeñar en la lucha entre el bien y el mal."
            }, {
                url: "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_417a2902.jpeg?region=176%2C0%2C951%2C536",
                descripcion: "C-3PO anhela tiempos más pacíficos, pero su continuo servicio a la Resistencia, y su conocimiento de más de siete millones de formas de comunicación, mantienen al droide propenso a las preocupaciones en el frente del conflicto galáctico. Programado para la etiqueta y el protocolo, Threepio fue construido por un joven Anakin Skywalker y ha sido un compañero constante del astromecánico R2-D2. A lo largo de los años, estuvo involucrado en algunos de los momentos más decisivos y emocionantes batallas de la galaxia. Desde la derrota del Imperio, C-3PO ha servido a Leia Organa, jefa de una red de espionaje de la Resistencia cuyo objetivo es socavar a la Primera Orden."
            }, {
                url: "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536",
                descripcion: "Un droide astromecánico confiable y versátil, R2-D2 ha servido a Padmé Amidala, Anakin Skywalker y Luke Skywalker, mostrando una gran valentía al rescatar a sus maestros y sus amigos de muchos peligros. Habilidoso mecánico de naves estelares y asistente de piloto de combate, tiene una amistad improbable pero duradera con el quisquilloso droide de protocolo C-3PO."
            }, {
                url: "https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=960",
                descripcion: "Una vez que fue un heroico Caballero Jedi, Darth Vader fue seducido por el lado oscuro de la Fuerza, se convirtió en un Lord Sith y lideró la erradicación de la Orden Jedi por parte del Imperio. Permaneció al servicio del Emperador, el malvado Darth Sidious, durante décadas, haciendo cumplir la voluntad de su Maestro y tratando de aplastar a la incipiente Alianza Rebelde. Pero todavía había algo bueno en él..."
            }, {
                url: "https://lumiere-a.akamaihd.net/v1/images/leia-organa-feature-image_d0f5e953.jpeg?region=0%2C0%2C1280%2C720&width=960",
                descripcion: "La princesa Leia Organa fue una de las más grandes líderes de la Alianza Rebelde, intrépida en el campo de batalla y dedicada a acabar con la tiranía del Imperio. Hija de Padmé Amidala y Anakin Skywalker, hermana de Luke Skywalker y con una debilidad por los sinvergüenzas, Leia figuraba entre los grandes héroes de la galaxia. Pero la vida bajo la Nueva República resultó difícil para ella. Dejada de lado por una nueva generación de líderes políticos, se lanzó por su cuenta para oponerse a la Primera Orden como fundadora de la Resistencia. Estos reveses en su carrera política fueron acompañados de pérdidas más personales, que soportó con su voluntad aparentemente inagotable."
            }, {
                url: "https://lumiere-a.akamaihd.net/v1/images/databank_owenlars_01_169_effce0f8.jpeg?region=0%2C0%2C1560%2C878&width=960",
                descripcion: "Owen Lars continuó los esfuerzos de su padre Cliegg para convertir su hogar en una granja productiva, trabajando junto a su esposa, Beru. Para ayudar con las tediosas tareas necesarias para que la granja siguiera siendo rentable, Owen confió en su sobrino Luke Skywalker. Sin embargo, no pudo frenar el impulso de aventuras de Luke. El joven Skywalker anhelaba dejar Tatooine y unirse a la Academia Imperial para vivir la vida entre las estrellas. Owen lo prohibió, recordándole a Luke que lo necesitaban en la granja de humedad. Skywalker finalmente abandonaría la granja, pero en circunstancias trágicas. Los imperiales que buscaban droides desaparecidos arrasaron la granja de Lars y mataron a Owen y Beru."
            }, {
                url: "https://lumiere-a.akamaihd.net/v1/images/databank_berulars_01_169_68101518.jpeg?region=0%2C0%2C1560%2C878&width=960",
                descripcion: "Cuando era una niña tímida, las aspiraciones de Beru Whitesun no iban más allá de Tatooine. Estaba contenta de casarse con Owen Lars y llevar la dura vida de un granjero de humedad. Beru también desempeñó el papel de tutora y madre sustituta del joven Luke Skywalker, y expresó repetidamente su apoyo a su sueño de unirse a sus amigos en la Academia. Beru fue víctima del Imperio cuando los soldados de asalto imperiales asaltaron la granja familiar en busca de droides que se creía que tenían planes ultrasecretos para el arma definitiva del Imperio, la Estrella de la Muerte."
            }, {
                url: "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666&width=960",
                descripcion: "Un droide astromecánico rojo, R5-D4 pensó que había encontrado un hogar cuando los Jawas lo vendieron a Owen Lars, junto con el droide de protocolo C-3PO. Pero el motivador de R5 explotó cuando se alejó rodando del reptador de arena, lo que obligó a los Jawas a aceptarlo a cambio de R2-D2."
            }, {
                url: "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=960",
                descripcion: "Biggs Darklighter creció en Tatooine con Luke Skywalker y compartió los sueños de su amigo de escapar del aburrido mundo del desierto. Después de graduarse de la Academia Imperial, desertó del servicio del Imperio para unirse a la Rebelión. Él y Luke se reunieron en la base rebelde de Yavin 4 y volaron juntos contra la Estrella de la Muerte. Luke regresó de esa misión como un héroe, pero Biggs no sobrevivió."
            }, {
                url: "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_95819950.jpeg?region=0%2C0%2C1280%2C720&width=960",
                descripcion: "A legendary Jedi Master, Obi-Wan Kenobi was a noble man and gifted in the ways of the Force. He trained Anakin Skywalker, served as a general in the Republic Army during the Clone Wars, and guided Luke Skywalker as a mentor."
            }]
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
                const eliminado = store.favoritos.filter((item) => {
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