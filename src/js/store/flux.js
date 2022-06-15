const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      // Espacio de memoria para datos generales de personajes
      personajes: [],

      // Espacio de memoria para datos generales de planetas
      planetas: [],

      // Espacio de memoria para datos generales de vehiculos
      vehiculos: [],

      // Espacio de memoria para datos de favoritos
      favoritos: [],

      // Arrays para colorear corazon de favoritos de personajes, planetas y vehiculos
      favoritoPersonaje: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      favoritoPlaneta: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      favoritoVehiculo: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],

      // Variable para quitar relleno de favoritos
      indice : null,

      // Espacion de memoria para descripcion y url de imagenes de los personajes
      imagenesPersonajes: [
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg?region=131%2C0%2C951%2C536",
          descripcion:
            "Luke Skywalker era un granjero de Tatooine que se levantó desde un comienzo humilde para convertirse en uno de los Jedi más grandes que la galaxia haya conocido. Junto con sus amigos, la princesa Leia y Han Solo, Luke luchó contra el malvado Imperio, descubrió la verdad sobre su ascendencia y puso fin a la tiranía de los Sith. Una generación más tarde, la ubicación del famoso maestro Jedi era uno de los mayores misterios de la galaxia. Atormentado por la caída de Ben Solo en el mal y convencido de que los Jedi tenían que terminar, Luke buscó el exilio en un mundo distante, ignorando las súplicas de ayuda de la galaxia. Pero su soledad sería interrumpida, y Luke Skywalker tenía un último y trascendental papel que desempeñar en la lucha entre el bien y el mal.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_417a2902.jpeg?region=176%2C0%2C951%2C536",
          descripcion:
            "C-3PO anhela tiempos más pacíficos, pero su continuo servicio a la Resistencia, y su conocimiento de más de siete millones de formas de comunicación, mantienen al droide propenso a las preocupaciones en el frente del conflicto galáctico. Programado para la etiqueta y el protocolo, Threepio fue construido por un joven Anakin Skywalker y ha sido un compañero constante del astromecánico R2-D2. A lo largo de los años, estuvo involucrado en algunos de los momentos más decisivos y emocionantes batallas de la galaxia. Desde la derrota del Imperio, C-3PO ha servido a Leia Organa, jefa de una red de espionaje de la Resistencia cuyo objetivo es socavar a la Primera Orden.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536",
          descripcion:
            "Un droide astromecánico confiable y versátil, R2-D2 ha servido a Padmé Amidala, Anakin Skywalker y Luke Skywalker, mostrando una gran valentía al rescatar a sus maestros y sus amigos de muchos peligros. Habilidoso mecánico de naves estelares y asistente de piloto de combate, tiene una amistad improbable pero duradera con el quisquilloso droide de protocolo C-3PO.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=960",
          descripcion:
            "Una vez que fue un heroico Caballero Jedi, Darth Vader fue seducido por el lado oscuro de la Fuerza, se convirtió en un Lord Sith y lideró la erradicación de la Orden Jedi por parte del Imperio. Permaneció al servicio del Emperador, el malvado Darth Sidious, durante décadas, haciendo cumplir la voluntad de su Maestro y tratando de aplastar a la incipiente Alianza Rebelde. Pero todavía había algo bueno en él...",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/leia-organa-feature-image_d0f5e953.jpeg?region=0%2C0%2C1280%2C720&width=960",
          descripcion:
            "La princesa Leia Organa fue una de las más grandes líderes de la Alianza Rebelde, intrépida en el campo de batalla y dedicada a acabar con la tiranía del Imperio. Hija de Padmé Amidala y Anakin Skywalker, hermana de Luke Skywalker y con una debilidad por los sinvergüenzas, Leia figuraba entre los grandes héroes de la galaxia. Pero la vida bajo la Nueva República resultó difícil para ella. Dejada de lado por una nueva generación de líderes políticos, se lanzó por su cuenta para oponerse a la Primera Orden como fundadora de la Resistencia. Estos reveses en su carrera política fueron acompañados de pérdidas más personales, que soportó con su voluntad aparentemente inagotable.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/databank_owenlars_01_169_effce0f8.jpeg?region=0%2C0%2C1560%2C878&width=960",
          descripcion:
            "Owen Lars continuó los esfuerzos de su padre Cliegg para convertir su hogar en una granja productiva, trabajando junto a su esposa, Beru. Para ayudar con las tediosas tareas necesarias para que la granja siguiera siendo rentable, Owen confió en su sobrino Luke Skywalker. Sin embargo, no pudo frenar el impulso de aventuras de Luke. El joven Skywalker anhelaba dejar Tatooine y unirse a la Academia Imperial para vivir la vida entre las estrellas. Owen lo prohibió, recordándole a Luke que lo necesitaban en la granja de humedad. Skywalker finalmente abandonaría la granja, pero en circunstancias trágicas. Los imperiales que buscaban droides desaparecidos arrasaron la granja de Lars y mataron a Owen y Beru.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/databank_berulars_01_169_68101518.jpeg?region=0%2C0%2C1560%2C878&width=960",
          descripcion:
            "Cuando era una niña tímida, las aspiraciones de Beru Whitesun no iban más allá de Tatooine. Estaba contenta de casarse con Owen Lars y llevar la dura vida de un granjero de humedad. Beru también desempeñó el papel de tutora y madre sustituta del joven Luke Skywalker, y expresó repetidamente su apoyo a su sueño de unirse a sus amigos en la Academia. Beru fue víctima del Imperio cuando los soldados de asalto imperiales asaltaron la granja familiar en busca de droides que se creía que tenían planes ultrasecretos para el arma definitiva del Imperio, la Estrella de la Muerte.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666&width=960",
          descripcion:
            "Un droide astromecánico rojo, R5-D4 pensó que había encontrado un hogar cuando los Jawas lo vendieron a Owen Lars, junto con el droide de protocolo C-3PO. Pero el motivador de R5 explotó cuando se alejó rodando del reptador de arena, lo que obligó a los Jawas a aceptarlo a cambio de R2-D2.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=960",
          descripcion:
            "Biggs Darklighter creció en Tatooine con Luke Skywalker y compartió los sueños de su amigo de escapar del aburrido mundo del desierto. Después de graduarse de la Academia Imperial, desertó del servicio del Imperio para unirse a la Rebelión. Él y Luke se reunieron en la base rebelde de Yavin 4 y volaron juntos contra la Estrella de la Muerte. Luke regresó de esa misión como un héroe, pero Biggs no sobrevivió.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_95819950.jpeg?region=0%2C0%2C1280%2C720&width=960",
          descripcion:
            "Un legendario Maestro Jedi, Obi-Wan Kenobi era un hombre noble y dotado en los caminos de la Fuerza. Entrenó a Anakin Skywalker, sirvió como general en el Ejército de la República durante las Guerras Clon y guió a Luke Skywalker como mentor. ",
        },
      ],

      // Espacion de memoria para descripcion y url de imagenes de los planetas
      imagenesPlanetas: [
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/tatooine-main_1633e73f.jpeg?region=164%2C0%2C953%2C536",
          descripcion:
            "Tatooine es un duro mundo desértico que orbita soles gemelos en el Borde Exterior de la galaxia. En los días del Imperio y la República, muchos colonos se ganaban la vida en las granjas de humedad, mientras que las ciudades del puerto espacial como Mos Eisley y Mos Espa servían como base de operaciones para contrabandistas, delincuentes y otros bribones. Anakin Skywalker y Luke Skywalker alguna vez llamaron hogar a Tatooine, aunque a través de las estrellas era más conocida como una colmena de escoria y villanía gobernada por el jefe del crimen Jabba the Hutt.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C878&width=960",
          descripcion:
            "Si alguna vez alguien necesitó un ejemplo del mal irreparable que era el Imperio, diríjase a los restos destrozados de Alderaan. Un mundo influyente, Alderaan estuvo representado en los últimos días de la República por políticos tan venerados como Bail Antilles y Bail Organa. Un mundo pacífico, Alderaan estaba desprovisto de armamento en una era de lucha galáctica. No fue sin espíritu, sin embargo. Alderaan fue uno de los primeros partidarios de la Alianza para Restaurar la República, aunque sus funcionarios prudentemente mantuvieron en secreto todos los vínculos con la Rebelión. A pesar de tal discreción, el Imperio sabía que era un refugio de actividad Rebelde, y el Gran Moff Tarkin apuntó al hermoso mundo para tomar represalias tan pronto como la Estrella de la Muerte estuvo operativa. El arma principal masiva de la estación de batalla destruyó Alderaan, dejando solo un campo de asteroides sin vida.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/databank_yavin4_01_169_b6945e20.jpeg?region=0%2C0%2C1560%2C878&width=960",
          descripcion:
            "Yavin 4, una de varias lunas que orbitan alrededor del gigante gaseoso Yavin en el Borde Exterior de la galaxia, es un mundo lleno de vapor cubierto de jungla y bosque. Fue la ubicación de la principal base rebelde a principios de la Guerra Civil Galáctica, y el sitio desde el cual la Rebelión lanzó el ataque que destruyó la primera Estrella de la Muerte, un enfrentamiento conocido a partir de entonces como la Batalla de Yavin.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675&width=960",
          descripcion:
            "Hoth es el sexto planeta en el sistema remoto del mismo nombre, y fue el sitio de la Base Echo de la Alianza Rebelde. Es un mundo de nieve y hielo, rodeado de numerosas lunas y hogar de criaturas mortales como el wampa.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C711&width=960",
          descripcion:
            "Hogar de Yoda durante sus últimos años, Dagobah era un planeta cubierto de pantanos fuerte con la Fuerza, un mundo olvidado donde el marchito Maestro Jedi podía escapar de la atención de las fuerzas imperiales. Caracterizado por sus condiciones de pantano y humedales fétidos, el lodazal turbio y húmedo no estaba desarrollado, sin signos de tecnología. Aunque carecía de civilización, el planeta estaba repleto de vida, desde su densa maleza selvática hasta su diversa población animal. Hogar de varias criaturas anfibias y reptiles bastante comunes, Dagobah también contaba con una población indígena de formas de vida mucho más masivas y misteriosas. Rodeado de criaturas que generan la Fuerza viviente, Yoda aprendió a conectarse con la Fuerza cósmica más profunda y esperó a alguien que pudiera provocar el regreso de la Orden Jedi.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/Bespin_2d0759aa.jpeg?region=0%2C0%2C1560%2C878&width=960",
          descripcion:
            "Aislado de la agitación galáctica por su ubicación en un sector del espacio poco visitado, Bespin es una rareza astrofísica. Un inmenso gigante gaseoso rodeado por una serie de lunas, el planeta contiene una banda de atmósfera habitable entre sus interminables nubes. En este estrato de vida, buscadores emprendedores han establecido complejos mineros flotantes dedicados a extraer gases valiosos de las profundidades del planeta. La más conocida de estas empresas es la opulenta Ciudad de las Nubes, anteriormente bajo la administración de Lando Calrissian. Durante el final de la Guerra Civil Galáctica, el Imperio acuarteló a Bespin y se apoderó de la Ciudad de las Nubes, aunque el puesto de avanzada y el planeta disfrutaron de la libertad después de la derrota del Emperador en la Batalla de Endor.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C0%2C1560%2C878&width=960",
          descripcion:
            "Aislada en un rincón remoto de la galaxia, la luna boscosa de Endor fácilmente habría sido pasada por alto por la historia si no fuera por la batalla decisiva que tuvo lugar allí. El exuberante hogar forestal de la especie Ewok es la tumba de Darth Vader y el propio Imperio. Fue aquí donde la Alianza Rebelde obtuvo su victoria más crucial sobre el Imperio Galáctico.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C0%2C1560%2C878&width=960",
          descripcion:
            "Un mundo idílico cerca de la frontera de los Territorios del Borde Exterior, Naboo está habitado por humanos pacíficos conocidos como Naboo, y una especie autóctona de anfibios inteligentes llamados Gungans. La superficie de Naboo se compone de lagos pantanosos, llanuras onduladas y verdes colinas. Sus centros de población son hermosos: las ciudades fluviales de Naboo están llenas de arquitectura clásica y vegetación, mientras que los asentamientos submarinos de Gungan son una hermosa muestra de tecnología exótica de burbujas hidrostáticas.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/Coruscant_03db43b4.jpeg?region=0%2C0%2C1536%2C864&width=960",
          descripcion:
            "Un planeta cubierto de ciudades, Coruscant es el corazón vibrante y la capital de la galaxia, presentando una mezcla diversa de ciudadanos y cultura. Cuenta con imponentes rascacielos, flujos de tráfico aéreo lleno de deslizadores y niveles internos que se extienden muy por debajo de la superficie del mundo. Coruscant fue la sede del gobierno de la República Galáctica y el Imperio que le siguió, y fue el lugar de numerosos eventos históricos durante las Guerras Clon. También albergó el Templo Jedi y los Archivos, que albergaron entrenamiento y aprendizaje Jedi durante más de mil generaciones, tradiciones que terminaron cuando el planeta fue testigo de la Orden 66.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/kamino-main_3001369e.jpeg?region=158%2C0%2C964%2C542&width=960",
          descripcion:
            "Una vez purgado de los Archivos Jedi, por lo demás completos, quedó toda la evidencia del misterioso mundo de Kamino. Un mundo solitario más allá del Borde Exterior y justo al sur del Laberinto de Rishi, pocos podrían haber predicho que Kamino se convertiría en un contribuyente clave para un cambio masivo en el poder político en los últimos días de la República. Kamino es un planeta de océanos y tormentas interminables. Pocas características marcan su superficie, a excepción de las enormes ciudades sobre pilotes en las que residen los habitantes naturales del planeta, los kaminoanos. Desde Ciudad Tipoca, gobierna el primer ministro del planeta. Lama Su y la científica médica en jefe de Kamino, Nala Se, supervisan de cerca las operaciones de la exportación más preciada de Kamino, los clones, incluso después de que las Guerras Clon llegan a su fin.",
        },
      ],

      // Espacion de memoria para descripcion y url de imagenes de los vehiculos
      imagenesVehiculos: [
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/sandcrawler-main_eb1b036b.jpeg?region=251%2C20%2C865%2C487",
          descripcion:
            "Los Sandcrawlers son enormes fortalezas estriadas utilizadas por los Jawas como transporte y refugio. Los vehículos con pozos de arena, de muchos metros de altura, están equipados con un tubo de succión magnético para aspirar droides y chatarra en sus cámaras de carga.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/databank_t16skyhopper_01_169_ad69e901.jpeg?region=141%2C304%2C750%2C422",
          descripcion:
            "Un aerodeslizador de alto rendimiento capaz de alcanzar la troposfera de un planeta, los skyhoppers T-16 eran rápidos y maniobrables, una combinación que podría ser peligrosa para los pilotos jóvenes. Luke Skywalker era dueño de un saltacielos para dos personas, pero quemó la instrumentación durante un viaje imprudente por Beggar's Canyon. Se quedó jugando sin hacer nada con un modelo de su amada nave hasta que pudiera hacer que el T-16 volviera a estar en condiciones de volar. Los controles de un T-16 eran similares a los de un T-65 X-wing, lo que permitió a Luke unirse al ataque rebelde a la Estrella de la Muerte en Yavin.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/E4D_IA_1136_6b8704fa.jpeg?region=237%2C0%2C1456%2C819&width=960",
          descripcion:
            "Luke Skywalker era dueño de uno de estos deslizadores terrestres anodinos pero veloces, y corría con la nave llena de arena y descolorida por el sol a través del desierto entre la granja de Lars y puestos de avanzada como la estación Tosche y Anchorhead. El potente motor repulsor del X-34 que le permite flotar aproximadamente un metro sobre el suelo, aumentado por un trío de turbinas de empuje refrigeradas por aire. El deslizador de Luke era viejo y maltratado, y le faltaba la cubierta de la turbina de babor, pero los retoques y el mantenimiento cuidadoso (esenciales en el duro entorno de Tatooine) lo mantuvieron en buen estado de funcionamiento. Después de la muerte de su tía y su tío, Luke vendió su deslizador en Mos Eisley para ayudar a pagar el pasaje a Alderaan.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/TIE-Fighter_25397c64.jpeg?region=0%2C1%2C2048%2C1152&width=960",
          descripcion:
            "La TIE/LN Starfighter (más comúnmente llamada TIE Fighter), es el principal caza de la Marina Imperial creado por Sienar Fleet Systems y recibe su nombre gracias a su sistema de propulsión, ya que se basa en Motores de Iones Gemelos",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/snowspeeder_ef2f9334.jpeg?region=0%2C211%2C2048%2C1154&width=960",
          descripcion:
            "Cuando estaban estacionados en Hoth, la Alianza Rebelde modificó los aerodeslizadores T-47 para convertirlos en aerodeslizadores de nieve, vehículos voladores rápidos para patrullar y defender su base oculta. Se necesitó algo de trabajo para evitar que el frío paralizante dejara en tierra permanentemente a su fuerza aérea, pero el ingenio rebelde superó a los implacables elementos de Hoth. El aerodeslizador T-47 es una pequeña nave en forma de cuña con dos cañones láser orientados hacia adelante. En su arco trasero hay un cañón de arpón equipado con un cable de remolque de alta resistencia. El snowspeeder es una embarcación de dos hombres, con un piloto y un artillero de cola mirando hacia atrás.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/tie-bomber-main_d4d9b979.jpeg?region=424%2C0%2C632%2C356",
          descripcion:
            "El Imperio utiliza vuelos de sus bombarderos TIE de doble casco especializados para arrojar grandes cantidades de municiones sobre planetas rebeldes y objetivos en el espacio, lanzando ataques devastadores con una precisión aterradora.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/AT-AT_89d0105f.jpeg?region=214%2C19%2C1270%2C716&width=960",
          descripcion:
            "A pesar de diseñar vehículos gigantes como el temible AT-M6, la Primera Orden no se ha olvidado de los caminantes imperiales que aterrorizaron a los rebeldes en innumerables campos de batalla. El transporte blindado todo terreno del régimen se parece mucho a su antepasado imperial, pero sus armas se recargan más rápido y su armadura es más ligera y más fuerte.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/e6d_ia_5724_a150e6d4.jpeg?region=124%2C0%2C1424%2C802&width=960",
          descripcion:
            "Si bien no es tan imponente como su primo caminante AT-AT más grande, el AT-ST sirvió como una adición significativa al lado imperial de los campos de batalla en la Guerra Civil Galáctica. La nave de dos hombres está ligeramente armada con cañones láser montados en la barbilla y cápsulas de armas montadas lateralmente. El transporte de dos piernas, apodado por muchos como el caminante explorador, sirve como vehículo de reconocimiento y patrulla, a menudo flanqueando a los AT-AT que se aproximan y limpiando a la infantería que se escabulle entre los caminantes más grandes. Los imperiales usaron AT-ST tanto en la Batalla de Hoth como en la Batalla de Endor.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/cloud-car-main-image_8d2e4e89.jpeg?region=271%2C0%2C1009%2C568&height=108",
          descripcion:
            "El Storm IV Twin-Pod Cloud Car fue el primer avión de alta atmósfera en ser categorizado como un cloud car. Fue diseñado y producido por Bespin Motors para patrullar los cielos que rodean la colonia minera flotante y el complejo de juegos de azar Cloud City. El Storm IV fue empleado originalmente por Bespin Wing Guard, que era responsable de la seguridad de Cloud City. Las naves se diseñaron originalmente para transportar civiles y eran muy maniobrables.",
        },
        {
          url: "https://lumiere-a.akamaihd.net/v1/images/the-khetanna-main_80954d51.jpeg?region=166%2C0%2C948%2C533",
          descripcion:
            "Jabba the Hutt valoraba el dinero y el poder, y disfrutaba mostrando cuánto tenía de ambos. El Khetanna, su barcaza de lujo, fue una de las compras más extravagantes del señor del crimen: un transporte masivo que transportaba hasta 500 pasajeros, mantenía una tripulación de 26 y estaba equipado con espacio para música en vivo y entretenimiento. Fue fabricado por Ubrikkian, medía 30 metros de largo y estaba equipado con un cañón bláster pesado, una característica esencial para el estilo de vida de Jabba. De hecho, la nave era un símbolo de la arrogancia y el ego de Jabba, y jugó un papel importante en su caída.",
        },
      ],
    },
    actions: {
      // Obtengo los datos de los personajes de la api
      datosPersonajes: () => {
        fetch("https://swapi.dev/api/people")
          .then((res) => res.json())
          .then((data) =>
            setStore({
              personajes: data.results,
            })
          )
          .catch((err) => console.error(err));
      },

      // Obtengo los datos de los planetas de la api
      datosPlanetas: () => {
        fetch("https://swapi.dev/api/planets")
          .then((res) => res.json())
          .then((data) =>
            setStore({
              planetas: data.results,
            })
          )
          .catch((err) => console.error(err));
      },

      // Obtengo datos de vehiculos de la api
      datosVehiculos: () => {
        fetch("https://swapi.dev/api/vehicles")
          .then((res) => res.json())
          .then((data) =>
            setStore({
              vehiculos: data.results,
            })
          )
          .catch((err) => console.error(err));
      },

      // Agrego a la lista de favoritos
      addFavourites: (favourite, indice, tipo) => {
        const store = getStore();  
        setStore({
          ...store,
          favoritos: store.favoritos.concat(favourite),
        });

        // Cambio boton de favorito al pulsarlo rellenando corazon
        if (tipo === "personaje") {
          setStore(
            (store.favoritoPersonaje[indice] = true)
          );
        } else if( tipo === "planeta"){
            setStore(
                (store.favoritoPlaneta[indice] = true)
              );
        } else {
            setStore(
                (store.favoritoVehiculo[indice] = true)
              );
        }

        // console.log(store.favoritoPersonaje[indice]);
        // console.log(favourite);
      },

      // Eliminar de la lista de favoritos
      deleteFavourites: (element) => {
        const store = getStore();
        // Elimino relleno de icono de favoritos
        store.personajes.forEach((item, index)=>{
            if(item.name === element){
                setStore(
                    (store.favoritoPersonaje[index] = false)
                  );
            }
        })
        store.planetas.forEach((item, index)=>{
            if(item.name === element){
                setStore(
                    (store.favoritoPlaneta[index] = false)
                  );
            }
        })
        store.vehiculos.forEach((item, index)=>{
            if(item.name === element){
                setStore(
                    (store.favoritoVehiculo[index] = false)
                  );
            }
        })

        // Elimino informacion de la lista de favoritos
        const eliminado = store.favoritos.filter((item) => {
          return element != item;
        });
        setStore({
          favoritos: eliminado,
        });
      },
    },
  };
};

export default getState;
