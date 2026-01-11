export type CardType = 'trivia' | 'dibujando' | 'mimica' | 'tabu' | 'indicios';

export interface TriviaCard {
    type: 'trivia';
    question: string;
    answer: string;
}

export interface DibujandoCard {
    type: 'dibujando';
    word: string;
}

export interface MimicaCard {
    type: 'mimica';
    word: string;
}

export interface TabuCard {
    type: 'tabu';
    word: string;
    forbidden: string[];
}

export interface IndiciosCard {
    type: 'indicios';
    hints: [string, string, string];
    answer: string;
}

export type Card = TriviaCard | DibujandoCard | MimicaCard | TabuCard | IndiciosCard;

export const cards: Card[] = [
    // Trivia - 50 tarjetas (2-3 Uruguay, resto conocimiento común)
    // Uruguay (2)
    {
        type: 'trivia',
        question: '¿Cuál es el plato nacional de Uruguay?',
        answer: 'Chivito',
    },
    {
        type: 'trivia',
        question: '¿En qué año Uruguay ganó su primer Mundial de fútbol?',
        answer: '1930',
    },
    {
        type: 'trivia',
        question: '¿Cómo se llama el estadio principal de fútbol en Uruguay?',
        answer: 'Estadio Centenario',
    },
    // Conocimiento común (47)
    {
        type: 'trivia',
        question: '¿Cuál es el planeta más cercano al Sol?',
        answer: 'Mercurio',
    },
    {
        type: 'trivia',
        question: '¿Cuántos continentes hay en el mundo?',
        answer: '7',
    },
    {
        type: 'trivia',
        question: '¿Quién escribió "Don Quijote de la Mancha"?',
        answer: 'Miguel de Cervantes',
    },
    {
        type: 'trivia',
        question: '¿Cuál es la capital de Francia?',
        answer: 'París',
    },
    {
        type: 'trivia',
        question: '¿En qué año llegó el hombre a la Luna?',
        answer: '1969',
    },
    {
        type: 'trivia',
        question: '¿Cuántos huesos tiene el cuerpo humano adulto?',
        answer: '206',
    },
    {
        type: 'trivia',
        question: '¿Cuál es el océano más grande del mundo?',
        answer: 'Océano Pacífico',
    },
    {
        type: 'trivia',
        question: '¿Quién pintó "La noche estrellada"?',
        answer: 'Vincent van Gogh',
    },
    {
        type: 'trivia',
        question: '¿Cuál es el río más largo del mundo?',
        answer: 'Río Nilo',
    },
    {
        type: 'trivia',
        question: '¿En qué año cayó el Muro de Berlín?',
        answer: '1989',
    },
    {
        type: 'trivia',
        question: '¿Cuántos lados tiene un triángulo?',
        answer: '3',
    },
    {
        type: 'trivia',
        question: '¿Cuál es la capital de Italia?',
        answer: 'Roma',
    },
    {
        type: 'trivia',
        question: '¿Quién escribió "Romeo y Julieta"?',
        answer: 'William Shakespeare',
    },
    {
        type: 'trivia',
        question: '¿Cuál es el elemento químico representado por la letra O?',
        answer: 'Oxígeno',
    },
    {
        type: 'trivia',
        question: '¿Cuántos días tiene un año bisiesto?',
        answer: '366',
    },
    {
        type: 'trivia',
        question: '¿Cuál es la montaña más alta del mundo?',
        answer: 'Monte Everest',
    },
    {
        type: 'trivia',
        question: '¿En qué país está la Torre Eiffel?',
        answer: 'Francia',
    },
    {
        type: 'trivia',
        question: '¿Quién inventó la bombilla?',
        answer: 'Thomas Edison',
    },
    {
        type: 'trivia',
        question: '¿Cuál es la capital de España?',
        answer: 'Madrid',
    },
    {
        type: 'trivia',
        question: '¿Cuántos minutos tiene una hora?',
        answer: '60',
    },
    {
        type: 'trivia',
        question: '¿Cuál es el desierto más grande del mundo?',
        answer: 'Desierto del Sahara',
    },
    {
        type: 'trivia',
        question: '¿Quién escribió "Cien años de soledad"?',
        answer: 'Gabriel García Márquez',
    },
    {
        type: 'trivia',
        question: '¿Cuál es el planeta más grande del sistema solar?',
        answer: 'Júpiter',
    },
    {
        type: 'trivia',
        question: '¿En qué año comenzó la Segunda Guerra Mundial?',
        answer: '1939',
    },
    {
        type: 'trivia',
        question: '¿Cuántos corazones tiene un pulpo?',
        answer: '3',
    },
    {
        type: 'trivia',
        question: '¿Cuál es la capital de Alemania?',
        answer: 'Berlín',
    },
    {
        type: 'trivia',
        question: '¿Quién pintó "La última cena"?',
        answer: 'Leonardo da Vinci',
    },
    {
        type: 'trivia',
        question: '¿Cuál es el metal más pesado?',
        answer: 'Osmio',
    },
    {
        type: 'trivia',
        question: '¿Cuántas patas tiene una araña?',
        answer: '8',
    },
    {
        type: 'trivia',
        question: '¿Cuál es la capital de Japón?',
        answer: 'Tokio',
    },
    {
        type: 'trivia',
        question: '¿Quién escribió "El Principito"?',
        answer: 'Antoine de Saint-Exupéry',
    },
    {
        type: 'trivia',
        question: '¿Cuál es el animal más grande del mundo?',
        answer: 'Ballena azul',
    },
    {
        type: 'trivia',
        question: '¿En qué año se fundó Google?',
        answer: '1998',
    },
    {
        type: 'trivia',
        question: '¿Cuántos lados tiene un hexágono?',
        answer: '6',
    },
    {
        type: 'trivia',
        question: '¿Cuál es la capital de Brasil?',
        answer: 'Brasilia',
    },
    {
        type: 'trivia',
        question: '¿Quién compuso "Las cuatro estaciones"?',
        answer: 'Antonio Vivaldi',
    },
    {
        type: 'trivia',
        question: '¿Cuál es el elemento químico más abundante en la Tierra?',
        answer: 'Oxígeno',
    },
    {
        type: 'trivia',
        question: '¿Cuántos años tiene un siglo?',
        answer: '100',
    },
    {
        type: 'trivia',
        question: '¿Cuál es la capital de Argentina?',
        answer: 'Buenos Aires',
    },
    {
        type: 'trivia',
        question: '¿Quién escribió "1984"?',
        answer: 'George Orwell',
    },
    {
        type: 'trivia',
        question: '¿Cuál es el lago más grande del mundo?',
        answer: 'Mar Caspio',
    },
    {
        type: 'trivia',
        question: '¿En qué año se inventó el teléfono?',
        answer: '1876',
    },
    {
        type: 'trivia',
        question: '¿Cuántos días tiene febrero en un año bisiesto?',
        answer: '29',
    },
    {
        type: 'trivia',
        question: '¿Cuál es la capital de México?',
        answer: 'Ciudad de México',
    },
    {
        type: 'trivia',
        question: '¿Quién pintó "El grito"?',
        answer: 'Edvard Munch',
    },
    {
        type: 'trivia',
        question: '¿Cuál es el hueso más largo del cuerpo humano?',
        answer: 'Fémur',
    },
    {
        type: 'trivia',
        question: '¿Cuántos planetas hay en el sistema solar?',
        answer: '8',
    },
    {
        type: 'trivia',
        question: '¿Cuál es la capital de China?',
        answer: 'Pekín',
    },
    {
        type: 'trivia',
        question: '¿Quién escribió "Harry Potter"?',
        answer: 'J.K. Rowling',
    },
    {
        type: 'trivia',
        question: '¿Cuál es el mamífero más rápido del mundo?',
        answer: 'Guepardo',
    },
    {
        type: 'trivia',
        question: '¿En qué año terminó la Primera Guerra Mundial?',
        answer: '1918',
    },
    {
        type: 'trivia',
        question: '¿Cuántos lados tiene un cuadrado?',
        answer: '4',
    },

    // Dibujando - 50 tarjetas (2-3 Uruguay, resto conocimiento común)
    // Uruguay (3)
    {
        type: 'dibujando',
        word: 'Mate',
    },
    {
        type: 'dibujando',
        word: 'Chivito',
    },
    {
        type: 'dibujando',
        word: 'Gaucho',
    },
    // Conocimiento común (47)
    {
        type: 'dibujando',
        word: 'Árbol',
    },
    {
        type: 'dibujando',
        word: 'Casa',
    },
    {
        type: 'dibujando',
        word: 'Perro',
    },
    {
        type: 'dibujando',
        word: 'Gato',
    },
    {
        type: 'dibujando',
        word: 'Sol',
    },
    {
        type: 'dibujando',
        word: 'Luna',
    },
    {
        type: 'dibujando',
        word: 'Coche',
    },
    {
        type: 'dibujando',
        word: 'Avión',
    },
    {
        type: 'dibujando',
        word: 'Barco',
    },
    {
        type: 'dibujando',
        word: 'Libro',
    },
    {
        type: 'dibujando',
        word: 'Manzana',
    },
    {
        type: 'dibujando',
        word: 'Flor',
    },
    {
        type: 'dibujando',
        word: 'Pájaro',
    },
    {
        type: 'dibujando',
        word: 'Bicicleta',
    },
    {
        type: 'dibujando',
        word: 'Teléfono',
    },
    {
        type: 'dibujando',
        word: 'Cámara',
    },
    {
        type: 'dibujando',
        word: 'Guitarra',
    },
    {
        type: 'dibujando',
        word: 'Piano',
    },
    {
        type: 'dibujando',
        word: 'Reloj',
    },
    {
        type: 'dibujando',
        word: 'Silla',
    },
    {
        type: 'dibujando',
        word: 'Mesa',
    },
    {
        type: 'dibujando',
        word: 'Ventana',
    },
    {
        type: 'dibujando',
        word: 'Puerta',
    },
    {
        type: 'dibujando',
        word: 'Sombrero',
    },
    {
        type: 'dibujando',
        word: 'Zapatos',
    },
    {
        type: 'dibujando',
        word: 'Lápiz',
    },
    {
        type: 'dibujando',
        word: 'Bolígrafo',
    },
    {
        type: 'dibujando',
        word: 'Escalera',
    },
    {
        type: 'dibujando',
        word: 'Puente',
    },
    {
        type: 'dibujando',
        word: 'Montaña',
    },
    {
        type: 'dibujando',
        word: 'Río',
    },
    {
        type: 'dibujando',
        word: 'Mar',
    },
    {
        type: 'dibujando',
        word: 'Nube',
    },
    {
        type: 'dibujando',
        word: 'Estrella',
    },
    {
        type: 'dibujando',
        word: 'Corazón',
    },
    {
        type: 'dibujando',
        word: 'Copa',
    },
    {
        type: 'dibujando',
        word: 'Plato',
    },
    {
        type: 'dibujando',
        word: 'Cuchara',
    },
    {
        type: 'dibujando',
        word: 'Tenedor',
    },
    {
        type: 'dibujando',
        word: 'Cuchillo',
    },
    {
        type: 'dibujando',
        word: 'Globo',
    },
    {
        type: 'dibujando',
        word: 'Pelota',
    },
    {
        type: 'dibujando',
        word: 'Coche de juguete',
    },
    {
        type: 'dibujando',
        word: 'Osito de peluche',
    },
    {
        type: 'dibujando',
        word: 'Paraguas',
    },
    {
        type: 'dibujando',
        word: 'Botella',
    },
    {
        type: 'dibujando',
        word: 'Vaso',
    },
    {
        type: 'dibujando',
        word: 'Oreja',
    },
    {
        type: 'dibujando',
        word: 'Nariz',
    },
    {
        type: 'dibujando',
        word: 'Boca',
    },
    {
        type: 'dibujando',
        word: 'Ojo',
    },
    {
        type: 'dibujando',
        word: 'Cara',
    },
    {
        type: 'dibujando',
        word: 'Brazo',
    },
    {
        type: 'dibujando',
        word: 'Pierna',
    },
    {
        type: 'dibujando',
        word: 'Mano',
    },
    {
        type: 'dibujando',
        word: 'Pie',
    },
    {
        type: 'dibujando',
        word: 'Cabeza',
    },
    {
        type: 'dibujando',
        word: 'Pelo',
    },

    // Mímica - 50 tarjetas (2-3 Uruguay, resto conocimiento común)
    // Uruguay (2)
    {
        type: 'mimica',
        word: 'Tomar mate',
    },
    {
        type: 'mimica',
        word: 'Hacer asado',
    },
    // Conocimiento común (48)
    {
        type: 'mimica',
        word: 'Comer',
    },
    {
        type: 'mimica',
        word: 'Dormir',
    },
    {
        type: 'mimica',
        word: 'Caminar',
    },
    {
        type: 'mimica',
        word: 'Correr',
    },
    {
        type: 'mimica',
        word: 'Saltar',
    },
    {
        type: 'mimica',
        word: 'Nadar',
    },
    {
        type: 'mimica',
        word: 'Bailar',
    },
    {
        type: 'mimica',
        word: 'Cantar',
    },
    {
        type: 'mimica',
        word: 'Reír',
    },
    {
        type: 'mimica',
        word: 'Llorar',
    },
    {
        type: 'mimica',
        word: 'Aplaudir',
    },
    {
        type: 'mimica',
        word: 'Silbar',
    },
    {
        type: 'mimica',
        word: 'Toser',
    },
    {
        type: 'mimica',
        word: 'Estornudar',
    },
    {
        type: 'mimica',
        word: 'Beber',
    },
    {
        type: 'mimica',
        word: 'Leer',
    },
    {
        type: 'mimica',
        word: 'Escribir',
    },
    {
        type: 'mimica',
        word: 'Dibujar',
    },
    {
        type: 'mimica',
        word: 'Pintar',
    },
    {
        type: 'mimica',
        word: 'Fotografiar',
    },
    {
        type: 'mimica',
        word: 'Tocar música',
    },
    {
        type: 'mimica',
        word: 'Jugar fútbol',
    },
    {
        type: 'mimica',
        word: 'Jugar básquet',
    },
    {
        type: 'mimica',
        word: 'Jugar tenis',
    },
    {
        type: 'mimica',
        word: 'Nadar',
    },
    {
        type: 'mimica',
        word: 'Montar bicicleta',
    },
    {
        type: 'mimica',
        word: 'Conducir',
    },
    {
        type: 'mimica',
        word: 'Lavar platos',
    },
    {
        type: 'mimica',
        word: 'Cocinar',
    },
    {
        type: 'mimica',
        word: 'Limpiar',
    },
    {
        type: 'mimica',
        word: 'Planchar',
    },
    {
        type: 'mimica',
        word: 'Telefonear',
    },
    {
        type: 'mimica',
        word: 'Escribir mensaje',
    },
    {
        type: 'mimica',
        word: 'Abrir puerta',
    },
    {
        type: 'mimica',
        word: 'Cerrar ventana',
    },
    {
        type: 'mimica',
        word: 'Subir escaleras',
    },
    {
        type: 'mimica',
        word: 'Bajar escaleras',
    },
    {
        type: 'mimica',
        word: 'Sentarse',
    },
    {
        type: 'mimica',
        word: 'Levantarse',
    },
    {
        type: 'mimica',
        word: 'Ducharse',
    },
    {
        type: 'mimica',
        word: 'Cepillarse los dientes',
    },
    {
        type: 'mimica',
        word: 'Peinarse',
    },
    {
        type: 'mimica',
        word: 'Vestirse',
    },
    {
        type: 'mimica',
        word: 'Desvestirse',
    },
    {
        type: 'mimica',
        word: 'Abrir regalo',
    },
    {
        type: 'mimica',
        word: 'Encender luz',
    },
    {
        type: 'mimica',
        word: 'Apagar luz',
    },
    {
        type: 'mimica',
        word: 'Regar plantas',
    },
    {
        type: 'mimica',
        word: 'Pescar',
    },
    {
        type: 'mimica',
        word: 'Cazar',
    },

    // Tabú - 50 tarjetas (2-3 Uruguay, resto conocimiento común)
    // Uruguay (3)
    {
        type: 'tabu',
        word: 'Mate',
        forbidden: ['yerba', 'bombilla', 'termo', 'cimarrón'],
    },
    {
        type: 'tabu',
        word: 'Chivito',
        forbidden: ['sandwich', 'carne', 'comida', 'restaurant'],
    },
    {
        type: 'tabu',
        word: 'Asado',
        forbidden: ['parrilla', 'carne', 'fuego', 'carbon'],
    },
    // Conocimiento común (47)
    {
        type: 'tabu',
        word: 'Gato',
        forbidden: ['miau', 'animal', 'felino', 'mascota'],
    },
    {
        type: 'tabu',
        word: 'Perro',
        forbidden: ['ladrar', 'animal', 'canino', 'mascota'],
    },
    {
        type: 'tabu',
        word: 'Casa',
        forbidden: ['hogar', 'edificio', 'vivir', 'habitación'],
    },
    {
        type: 'tabu',
        word: 'Coche',
        forbidden: ['auto', 'vehículo', 'conducir', 'ruedas'],
    },
    {
        type: 'tabu',
        word: 'Árbol',
        forbidden: ['hojas', 'tronco', 'madera', 'bosque'],
    },
    {
        type: 'tabu',
        word: 'Sol',
        forbidden: ['estrella', 'luz', 'calor', 'día'],
    },
    {
        type: 'tabu',
        word: 'Luna',
        forbidden: ['satélite', 'noche', 'redonda', 'fase'],
    },
    {
        type: 'tabu',
        word: 'Libro',
        forbidden: ['leer', 'páginas', 'escritor', 'biblioteca'],
    },
    {
        type: 'tabu',
        word: 'Avión',
        forbidden: ['volar', 'aeropuerto', 'vuelo', 'alas'],
    },
    {
        type: 'tabu',
        word: 'Mar',
        forbidden: ['agua', 'océano', 'playa', 'olas'],
    },
    {
        type: 'tabu',
        word: 'Montaña',
        forbidden: ['alto', 'cumbre', 'escalar', 'pico'],
    },
    {
        type: 'tabu',
        word: 'Río',
        forbidden: ['agua', 'corriente', 'pesca', 'naturaleza'],
    },
    {
        type: 'tabu',
        word: 'Flor',
        forbidden: ['pétalos', 'jardín', 'belleza', 'polen'],
    },
    {
        type: 'tabu',
        word: 'Comida',
        forbidden: ['alimento', 'comer', 'cocinar', 'plato'],
    },
    {
        type: 'tabu',
        word: 'Agua',
        forbidden: ['líquido', 'beber', 'hidratar', 'transparente'],
    },
    {
        type: 'tabu',
        word: 'Fuego',
        forbidden: ['llama', 'quemar', 'calor', 'leña'],
    },
    {
        type: 'tabu',
        word: 'Nieve',
        forbidden: ['frío', 'invierno', 'blanco', 'esquiar'],
    },
    {
        type: 'tabu',
        word: 'Lluvia',
        forbidden: ['agua', 'nube', 'paraguas', 'mojar'],
    },
    {
        type: 'tabu',
        word: 'Viento',
        forbidden: ['aire', 'soplar', 'fuerte', 'movimiento'],
    },
    {
        type: 'tabu',
        word: 'Nube',
        forbidden: ['cielo', 'lluvia', 'blanca', 'vapor'],
    },
    {
        type: 'tabu',
        word: 'Estrella',
        forbidden: ['cielo', 'noche', 'brillar', 'constelación'],
    },
    {
        type: 'tabu',
        word: 'Cama',
        forbidden: ['dormir', 'descansar', 'colchón', 'almohada'],
    },
    {
        type: 'tabu',
        word: 'Mesa',
        forbidden: ['mueble', 'comer', 'silla', 'madera'],
    },
    {
        type: 'tabu',
        word: 'Silla',
        forbidden: ['sentarse', 'mueble', 'patas', 'respaldo'],
    },
    {
        type: 'tabu',
        word: 'Puerta',
        forbidden: ['abrir', 'cerrar', 'entrada', 'llave'],
    },
    {
        type: 'tabu',
        word: 'Ventana',
        forbidden: ['cristal', 'abrir', 'vista', 'luz'],
    },
    {
        type: 'tabu',
        word: 'Teléfono',
        forbidden: ['llamar', 'comunicar', 'móvil', 'número'],
    },
    {
        type: 'tabu',
        word: 'Reloj',
        forbidden: ['hora', 'tiempo', 'manecillas', 'digital'],
    },
    {
        type: 'tabu',
        word: 'Guitarra',
        forbidden: ['música', 'tocar', 'cuerdas', 'instrumento'],
    },
    {
        type: 'tabu',
        word: 'Piano',
        forbidden: ['música', 'teclas', 'tocar', 'instrumento'],
    },
    {
        type: 'tabu',
        word: 'Pelota',
        forbidden: ['jugar', 'redonda', 'deporte', 'rebotar'],
    },
    {
        type: 'tabu',
        word: 'Bicicleta',
        forbidden: ['montar', 'ruedas', 'pedales', 'transporte'],
    },
    {
        type: 'tabu',
        word: 'Barco',
        forbidden: ['navegar', 'mar', 'agua', 'vela'],
    },
    {
        type: 'tabu',
        word: 'Tren',
        forbidden: ['viajar', 'raíles', 'vagones', 'estación'],
    },
    {
        type: 'tabu',
        word: 'Escuela',
        forbidden: ['estudiar', 'alumnos', 'maestro', 'educación'],
    },
    {
        type: 'tabu',
        word: 'Hospital',
        forbidden: ['enfermos', 'médicos', 'curar', 'salud'],
    },
    {
        type: 'tabu',
        word: 'Tienda',
        forbidden: ['comprar', 'productos', 'vender', 'cliente'],
    },
    {
        type: 'tabu',
        word: 'Parque',
        forbidden: ['verde', 'árboles', 'jugar', 'aire libre'],
    },
    {
        type: 'tabu',
        word: 'Playa',
        forbidden: ['mar', 'arena', 'verano', 'nadar'],
    },
    {
        type: 'tabu',
        word: 'Bosque',
        forbidden: ['árboles', 'naturaleza', 'animales', 'verde'],
    },
    {
        type: 'tabu',
        word: 'Isla',
        forbidden: ['agua', 'tierra', 'mar', 'rodeada'],
    },
    {
        type: 'tabu',
        word: 'Desierto',
        forbidden: ['arena', 'calor', 'seco', 'camello'],
    },
    {
        type: 'tabu',
        word: 'Jungla',
        forbidden: ['vegetación', 'animales', 'tropical', 'selva'],
    },
    {
        type: 'tabu',
        word: 'Ciudad',
        forbidden: ['edificios', 'gente', 'urbano', 'calles'],
    },
    {
        type: 'tabu',
        word: 'Pueblo',
        forbidden: ['pequeño', 'gente', 'rural', 'casas'],
    },
    {
        type: 'tabu',
        word: 'País',
        forbidden: ['nación', 'gobierno', 'fronteras', 'bandera'],
    },
    {
        type: 'tabu',
        word: 'Continente',
        forbidden: ['tierra', 'grande', 'países', 'mapa'],
    },

    // Indicios - 50 tarjetas (2-3 Uruguay, resto conocimiento común)
    // Uruguay (3)
    {
        type: 'indicios',
        hints: [
            'Es un plato',
            'Lleva carne de lomo',
            'Es el plato nacional uruguayo',
        ],
        answer: 'Chivito',
    },
    {
        type: 'indicios',
        hints: [
            'Es una bebida',
            'Se toma caliente',
            'Es muy popular en Uruguay y Argentina',
        ],
        answer: 'Mate',
    },
    {
        type: 'indicios',
        hints: [
            'Es un edificio alto',
            'Está en Montevideo',
            'Se inauguró en 1930 para el primer mundial de fútbol',
        ],
        answer: 'Estadio Centenario',
    },
    // Conocimiento común (47)
    {
        type: 'indicios',
        hints: [
            'Es un planeta',
            'Está cerca del Sol',
            'Es el más pequeño del sistema solar',
        ],
        answer: 'Mercurio',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Se usa para escribir',
            'Tiene mina de grafito',
        ],
        answer: 'Lápiz',
    },
    {
        type: 'indicios',
        hints: [
            'Es un animal',
            'Vive en el agua',
            'Es el más grande del mundo',
        ],
        answer: 'Ballena azul',
    },
    {
        type: 'indicios',
        hints: [
            'Es un lugar',
            'Está en Francia',
            'Es una torre muy famosa',
        ],
        answer: 'Torre Eiffel',
    },
    {
        type: 'indicios',
        hints: [
            'Es un libro',
            'Lo escribió Cervantes',
            'Trata de un caballero andante',
        ],
        answer: 'Don Quijote',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Se usa para medir el tiempo',
            'Tiene manecillas o pantalla digital',
        ],
        answer: 'Reloj',
    },
    {
        type: 'indicios',
        hints: [
            'Es un elemento',
            'Es gaseoso',
            'Lo necesitamos para respirar',
        ],
        answer: 'Oxígeno',
    },
    {
        type: 'indicios',
        hints: [
            'Es un lugar',
            'Está en Roma',
            'Es un anfiteatro antiguo muy famoso',
        ],
        answer: 'Coliseo',
    },
    {
        type: 'indicios',
        hints: [
            'Es un animal',
            'Vuela',
            'Hace miau',
        ],
        answer: 'Gato',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Tiene cuatro ruedas',
            'Se usa para transportarse',
        ],
        answer: 'Coche',
    },
    {
        type: 'indicios',
        hints: [
            'Es un lugar',
            'Está en el cielo',
            'Ilumina la noche',
        ],
        answer: 'Luna',
    },
    {
        type: 'indicios',
        hints: [
            'Es un alimento',
            'Es redonda',
            'Crece en árboles',
        ],
        answer: 'Manzana',
    },
    {
        type: 'indicios',
        hints: [
            'Es un lugar',
            'Es muy grande',
            'Tiene agua salada',
        ],
        answer: 'Océano',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Tiene páginas',
            'Se lee',
        ],
        answer: 'Libro',
    },
    {
        type: 'indicios',
        hints: [
            'Es un animal',
            'Es doméstico',
            'Ladra',
        ],
        answer: 'Perro',
    },
    {
        type: 'indicios',
        hints: [
            'Es un lugar',
            'Está en el cielo',
            'Da luz y calor',
        ],
        answer: 'Sol',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Tiene teclas',
            'Se usa para escribir',
        ],
        answer: 'Computadora',
    },
    {
        type: 'indicios',
        hints: [
            'Es un lugar',
            'Tiene muchos árboles',
            'Es parte de la naturaleza',
        ],
        answer: 'Bosque',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Tiene cuerdas',
            'Se toca con las manos',
        ],
        answer: 'Guitarra',
    },
    {
        type: 'indicios',
        hints: [
            'Es un lugar',
            'Está en París',
            'Es un museo muy famoso',
        ],
        answer: 'Louvre',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Se usa para comer',
            'Tiene dientes',
        ],
        answer: 'Tenedor',
    },
    {
        type: 'indicios',
        hints: [
            'Es un animal',
            'Vuela',
            'Canta',
        ],
        answer: 'Pájaro',
    },
    {
        type: 'indicios',
        hints: [
            'Es un lugar',
            'Tiene arena',
            'Está junto al mar',
        ],
        answer: 'Playa',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Tiene pantalla',
            'Se usa para ver programas',
        ],
        answer: 'Televisión',
    },
    {
        type: 'indicios',
        hints: [
            'Es un alimento',
            'Es blanco',
            'Viene de las vacas',
        ],
        answer: 'Leche',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Tiene dos ruedas',
            'Se pedalea',
        ],
        answer: 'Bicicleta',
    },
    {
        type: 'indicios',
        hints: [
            'Es un lugar',
            'Está en Londres',
            'Es un reloj muy famoso',
        ],
        answer: 'Big Ben',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Tiene llaves',
            'Se toca con los dedos',
        ],
        answer: 'Piano',
    },
    {
        type: 'indicios',
        hints: [
            'Es un lugar',
            'Es muy alto',
            'Está en la naturaleza',
        ],
        answer: 'Montaña',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Se usa para cortar',
            'Tiene filo',
        ],
        answer: 'Cuchillo',
    },
    {
        type: 'indicios',
        hints: [
            'Es un animal',
            'Nada',
            'Tiene aletas',
        ],
        answer: 'Pez',
    },
    {
        type: 'indicios',
        hints: [
            'Es un lugar',
            'Tiene muchos edificios',
            'Vive mucha gente',
        ],
        answer: 'Ciudad',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Se usa para abrir puertas',
            'Es de metal',
        ],
        answer: 'Llave',
    },
    {
        type: 'indicios',
        hints: [
            'Es un alimento',
            'Es amarilla',
            'Crece en mazorcas',
        ],
        answer: 'Maíz',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Tiene alas',
            'Vuela por el cielo',
        ],
        answer: 'Avión',
    },
    {
        type: 'indicios',
        hints: [
            'Es un lugar',
            'Tiene agua dulce',
            'Fluye',
        ],
        answer: 'Río',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Tiene hojas',
            'Se usa para aprender',
        ],
        answer: 'Libro de texto',
    },
    {
        type: 'indicios',
        hints: [
            'Es un animal',
            'Es grande',
            'Tiene trompa',
        ],
        answer: 'Elefante',
    },
    {
        type: 'indicios',
        hints: [
            'Es un lugar',
            'Está en Nueva York',
            'Es una estatua muy famosa',
        ],
        answer: 'Estatua de la Libertad',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Tiene pantalla táctil',
            'Se usa para comunicarse',
        ],
        answer: 'Teléfono móvil',
    },
    {
        type: 'indicios',
        hints: [
            'Es un alimento',
            'Es redonda',
            'Se come con queso',
        ],
        answer: 'Pizza',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Tiene velas',
            'Navega por el mar',
        ],
        answer: 'Barco de vela',
    },
    {
        type: 'indicios',
        hints: [
            'Es un animal',
            'Es rápido',
            'Tiene rayas',
        ],
        answer: 'Cebra',
    },
    {
        type: 'indicios',
        hints: [
            'Es un lugar',
            'Tiene muchas plantas',
            'Se cuida con amor',
        ],
        answer: 'Jardín',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Tiene teclas',
            'Se usa para escribir',
        ],
        answer: 'Máquina de escribir',
    },
    {
        type: 'indicios',
        hints: [
            'Es un alimento',
            'Es dulce',
            'Se hace con cacao',
        ],
        answer: 'Chocolate',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Tiene agujas',
            'Marca el tiempo',
        ],
        answer: 'Reloj de pulsera',
    },
    {
        type: 'indicios',
        hints: [
            'Es un animal',
            'Vive en el agua',
            'Tiene ocho tentáculos',
        ],
        answer: 'Pulpo',
    },
    {
        type: 'indicios',
        hints: [
            'Es un lugar',
            'Tiene mucha arena',
            'Es muy caliente',
        ],
        answer: 'Desierto',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Tiene bombilla',
            'Da luz',
        ],
        answer: 'Lámpara',
    },
    {
        type: 'indicios',
        hints: [
            'Es un alimento',
            'Es blanca',
            'Se hace con trigo',
        ],
        answer: 'Pan',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Tiene tela',
            'Protege de la lluvia',
        ],
        answer: 'Paraguas',
    },
    {
        type: 'indicios',
        hints: [
            'Es un animal',
            'Vuela',
            'Es muy pequeña',
        ],
        answer: 'Mariposa',
    },
    {
        type: 'indicios',
        hints: [
            'Es un lugar',
            'Tiene agua',
            'Está rodeado de tierra',
        ],
        answer: 'Lago',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Tiene cámara',
            'Captura momentos',
        ],
        answer: 'Cámara fotográfica',
    },
    {
        type: 'indicios',
        hints: [
            'Es un alimento',
            'Es amarilla',
            'Crece bajo tierra',
        ],
        answer: 'Papa',
    },
    {
        type: 'indicios',
        hints: [
            'Es un objeto',
            'Tiene cuatro patas',
            'Se usa para sentarse',
        ],
        answer: 'Silla',
    },
    {
        type: 'indicios',
        hints: [
            'Es un animal',
            'Es grande',
            'Ruge',
        ],
        answer: 'León',
    },
];
