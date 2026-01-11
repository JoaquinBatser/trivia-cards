export type CardType = 'trivia' | 'dibujando' | 'mimica' | 'tabu' | 'indicios';
export type CardLevel = 'facil' | 'medio' | 'dificil';

export interface TriviaCard {
  type: 'trivia';
  level: CardLevel;
  question: string;
  answer: string;
}

export interface DibujandoCard {
  type: 'dibujando';
  level: CardLevel;
  word: string;
}

export interface MimicaCard {
  type: 'mimica';
  level: CardLevel;
  word: string;
}

export interface TabuCard {
  type: 'tabu';
  level: CardLevel;
  word: string;
  forbidden: string[];
}

export interface IndiciosCard {
  type: 'indicios';
  level: CardLevel;
  hints: [string, string, string];
  answer: string;
}

export type Card = TriviaCard | DibujandoCard | MimicaCard | TabuCard | IndiciosCard;

export const cards: Card[] = [
  // Trivia - 50 tarjetas (2-3 Uruguay, resto conocimiento común)
  // Uruguay (2)
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es el plato nacional de Uruguay?',
    answer: 'Chivito',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿En qué año Uruguay ganó su primer Mundial de fútbol?',
    answer: '1930',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cómo se llama el estadio principal de fútbol en Uruguay?',
    answer: 'Estadio Centenario',
  },
  // Conocimiento común (47)
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es el planeta más cercano al Sol?',
    answer: 'Mercurio',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuántos continentes hay en el mundo?',
    answer: '7',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Quién escribió "Don Quijote de la Mancha"?',
    answer: 'Miguel de Cervantes',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es la capital de Francia?',
    answer: 'París',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿En qué año llegó el hombre a la Luna?',
    answer: '1969',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuántos huesos tiene el cuerpo humano adulto?',
    answer: '206',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es el océano más grande del mundo?',
    answer: 'Océano Pacífico',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Quién pintó "La noche estrellada"?',
    answer: 'Vincent van Gogh',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es el río más largo del mundo?',
    answer: 'Río Nilo',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿En qué año cayó el Muro de Berlín?',
    answer: '1989',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuántos lados tiene un triángulo?',
    answer: '3',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es la capital de Italia?',
    answer: 'Roma',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Quién escribió "Romeo y Julieta"?',
    answer: 'William Shakespeare',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es el elemento químico representado por la letra O?',
    answer: 'Oxígeno',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuántos días tiene un año bisiesto?',
    answer: '366',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es la montaña más alta del mundo?',
    answer: 'Monte Everest',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿En qué país está la Torre Eiffel?',
    answer: 'Francia',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Quién inventó la bombilla?',
    answer: 'Thomas Edison',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es la capital de España?',
    answer: 'Madrid',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuántos minutos tiene una hora?',
    answer: '60',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es el desierto más grande del mundo?',
    answer: 'Desierto del Sahara',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Quién escribió "Cien años de soledad"?',
    answer: 'Gabriel García Márquez',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es el planeta más grande del sistema solar?',
    answer: 'Júpiter',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿En qué año comenzó la Segunda Guerra Mundial?',
    answer: '1939',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuántos corazones tiene un pulpo?',
    answer: '3',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es la capital de Alemania?',
    answer: 'Berlín',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Quién pintó "La última cena"?',
    answer: 'Leonardo da Vinci',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es el metal más pesado?',
    answer: 'Osmio',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuántas patas tiene una araña?',
    answer: '8',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es la capital de Japón?',
    answer: 'Tokio',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Quién escribió "El Principito"?',
    answer: 'Antoine de Saint-Exupéry',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es el animal más grande del mundo?',
    answer: 'Ballena azul',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿En qué año se fundó Google?',
    answer: '1998',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuántos lados tiene un hexágono?',
    answer: '6',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es la capital de Brasil?',
    answer: 'Brasilia',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Quién compuso "Las cuatro estaciones"?',
    answer: 'Antonio Vivaldi',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es el elemento químico más abundante en la Tierra?',
    answer: 'Oxígeno',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuántos años tiene un siglo?',
    answer: '100',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es la capital de Argentina?',
    answer: 'Buenos Aires',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Quién escribió "1984"?',
    answer: 'George Orwell',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es el lago más grande del mundo?',
    answer: 'Mar Caspio',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿En qué año se inventó el teléfono?',
    answer: '1876',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuántos días tiene febrero en un año bisiesto?',
    answer: '29',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es la capital de México?',
    answer: 'Ciudad de México',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Quién pintó "El grito"?',
    answer: 'Edvard Munch',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es el hueso más largo del cuerpo humano?',
    answer: 'Fémur',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuántos planetas hay en el sistema solar?',
    answer: '8',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es la capital de China?',
    answer: 'Pekín',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Quién escribió "Harry Potter"?',
    answer: 'J.K. Rowling',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuál es el mamífero más rápido del mundo?',
    answer: 'Guepardo',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿En qué año terminó la Primera Guerra Mundial?',
    answer: '1918',
  },
  {
    type: 'trivia',
    level: 'facil',
    question: '¿Cuántos lados tiene un cuadrado?',
    answer: '4',
  },

  // Dibujando - 50 tarjetas (2-3 Uruguay, resto conocimiento común)
  // Uruguay (3)
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Mate',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Chivito',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Gaucho',
  },
  // Conocimiento común (47)
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Árbol',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Casa',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Perro',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Gato',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Sol',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Luna',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Coche',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Avión',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Barco',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Libro',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Manzana',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Flor',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Pájaro',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Bicicleta',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Teléfono',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Cámara',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Guitarra',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Piano',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Reloj',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Silla',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Mesa',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Ventana',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Puerta',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Sombrero',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Zapatos',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Lápiz',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Bolígrafo',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Escalera',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Puente',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Montaña',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Río',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Mar',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Nube',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Estrella',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Corazón',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Copa',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Plato',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Cuchara',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Tenedor',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Cuchillo',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Globo',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Pelota',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Coche de juguete',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Osito de peluche',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Paraguas',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Botella',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Vaso',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Oreja',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Nariz',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Boca',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Ojo',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Cara',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Brazo',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Pierna',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Mano',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Pie',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Cabeza',
  },
  {
    type: 'dibujando',
    level: 'facil',
    word: 'Pelo',
  },

  // Mímica - 50 tarjetas (2-3 Uruguay, resto conocimiento común)
  // Uruguay (2)
  {
    type: 'mimica',
    level: 'facil',
    word: 'Tomar mate',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Hacer asado',
  },
  // Conocimiento común (48)
  {
    type: 'mimica',
    level: 'facil',
    word: 'Comer',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Dormir',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Caminar',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Correr',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Saltar',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Nadar',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Bailar',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Cantar',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Reír',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Llorar',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Aplaudir',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Silbar',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Toser',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Estornudar',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Beber',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Leer',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Escribir',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Dibujar',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Pintar',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Fotografiar',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Tocar música',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Jugar fútbol',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Jugar básquet',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Jugar tenis',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Nadar',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Montar bicicleta',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Conducir',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Lavar platos',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Cocinar',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Limpiar',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Planchar',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Telefonear',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Escribir mensaje',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Abrir puerta',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Cerrar ventana',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Subir escaleras',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Bajar escaleras',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Sentarse',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Levantarse',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Ducharse',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Cepillarse los dientes',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Peinarse',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Vestirse',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Desvestirse',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Abrir regalo',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Encender luz',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Apagar luz',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Regar plantas',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Pescar',
  },
  {
    type: 'mimica',
    level: 'facil',
    word: 'Cazar',
  },

  // Tabú - 50 tarjetas (2-3 Uruguay, resto conocimiento común)
  // Uruguay (3)
  {
    type: 'tabu',
    level: 'facil',
    word: 'Mate',
    forbidden: ['yerba', 'bombilla', 'termo', 'cimarrón'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Chivito',
    forbidden: ['sandwich', 'carne', 'comida', 'restaurant'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Asado',
    forbidden: ['parrilla', 'carne', 'fuego', 'carbon'],
  },
  // Conocimiento común (47)
  {
    type: 'tabu',
    level: 'facil',
    word: 'Gato',
    forbidden: ['miau', 'animal', 'felino', 'mascota'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Perro',
    forbidden: ['ladrar', 'animal', 'canino', 'mascota'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Casa',
    forbidden: ['hogar', 'edificio', 'vivir', 'habitación'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Coche',
    forbidden: ['auto', 'vehículo', 'conducir', 'ruedas'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Árbol',
    forbidden: ['hojas', 'tronco', 'madera', 'bosque'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Sol',
    forbidden: ['estrella', 'luz', 'calor', 'día'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Luna',
    forbidden: ['satélite', 'noche', 'redonda', 'fase'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Libro',
    forbidden: ['leer', 'páginas', 'escritor', 'biblioteca'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Avión',
    forbidden: ['volar', 'aeropuerto', 'vuelo', 'alas'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Mar',
    forbidden: ['agua', 'océano', 'playa', 'olas'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Montaña',
    forbidden: ['alto', 'cumbre', 'escalar', 'pico'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Río',
    forbidden: ['agua', 'corriente', 'pesca', 'naturaleza'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Flor',
    forbidden: ['pétalos', 'jardín', 'belleza', 'polen'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Comida',
    forbidden: ['alimento', 'comer', 'cocinar', 'plato'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Agua',
    forbidden: ['líquido', 'beber', 'hidratar', 'transparente'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Fuego',
    forbidden: ['llama', 'quemar', 'calor', 'leña'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Nieve',
    forbidden: ['frío', 'invierno', 'blanco', 'esquiar'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Lluvia',
    forbidden: ['agua', 'nube', 'paraguas', 'mojar'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Viento',
    forbidden: ['aire', 'soplar', 'fuerte', 'movimiento'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Nube',
    forbidden: ['cielo', 'lluvia', 'blanca', 'vapor'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Estrella',
    forbidden: ['cielo', 'noche', 'brillar', 'constelación'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Cama',
    forbidden: ['dormir', 'descansar', 'colchón', 'almohada'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Mesa',
    forbidden: ['mueble', 'comer', 'silla', 'madera'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Silla',
    forbidden: ['sentarse', 'mueble', 'patas', 'respaldo'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Puerta',
    forbidden: ['abrir', 'cerrar', 'entrada', 'llave'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Ventana',
    forbidden: ['cristal', 'abrir', 'vista', 'luz'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Teléfono',
    forbidden: ['llamar', 'comunicar', 'móvil', 'número'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Reloj',
    forbidden: ['hora', 'tiempo', 'manecillas', 'digital'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Guitarra',
    forbidden: ['música', 'tocar', 'cuerdas', 'instrumento'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Piano',
    forbidden: ['música', 'teclas', 'tocar', 'instrumento'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Pelota',
    forbidden: ['jugar', 'redonda', 'deporte', 'rebotar'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Bicicleta',
    forbidden: ['montar', 'ruedas', 'pedales', 'transporte'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Barco',
    forbidden: ['navegar', 'mar', 'agua', 'vela'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Tren',
    forbidden: ['viajar', 'raíles', 'vagones', 'estación'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Escuela',
    forbidden: ['estudiar', 'alumnos', 'maestro', 'educación'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Hospital',
    forbidden: ['enfermos', 'médicos', 'curar', 'salud'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Tienda',
    forbidden: ['comprar', 'productos', 'vender', 'cliente'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Parque',
    forbidden: ['verde', 'árboles', 'jugar', 'aire libre'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Playa',
    forbidden: ['mar', 'arena', 'verano', 'nadar'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Bosque',
    forbidden: ['árboles', 'naturaleza', 'animales', 'verde'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Isla',
    forbidden: ['agua', 'tierra', 'mar', 'rodeada'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Desierto',
    forbidden: ['arena', 'calor', 'seco', 'camello'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Jungla',
    forbidden: ['vegetación', 'animales', 'tropical', 'selva'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Ciudad',
    forbidden: ['edificios', 'gente', 'urbano', 'calles'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Pueblo',
    forbidden: ['pequeño', 'gente', 'rural', 'casas'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'País',
    forbidden: ['nación', 'gobierno', 'fronteras', 'bandera'],
  },
  {
    type: 'tabu',
    level: 'facil',
    word: 'Continente',
    forbidden: ['tierra', 'grande', 'países', 'mapa'],
  },

  // Indicios - 50 tarjetas (2-3 Uruguay, resto conocimiento común)
  // Uruguay (3)
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un plato',
      'Lleva carne de lomo',
      'Es el plato nacional uruguayo',
    ],
    answer: 'Chivito',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es una bebida',
      'Se toma caliente',
      'Es muy popular en Uruguay y Argentina',
    ],
    answer: 'Mate',
  },
  {
    type: 'indicios',
    level: 'facil',
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
    level: 'facil',
    hints: [
      'Es un planeta',
      'Está cerca del Sol',
      'Es el más pequeño del sistema solar',
    ],
    answer: 'Mercurio',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Se usa para escribir',
      'Tiene mina de grafito',
    ],
    answer: 'Lápiz',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un animal',
      'Vive en el agua',
      'Es el más grande del mundo',
    ],
    answer: 'Ballena azul',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un lugar',
      'Está en Francia',
      'Es una torre muy famosa',
    ],
    answer: 'Torre Eiffel',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un libro',
      'Lo escribió Cervantes',
      'Trata de un caballero andante',
    ],
    answer: 'Don Quijote',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Se usa para medir el tiempo',
      'Tiene manecillas o pantalla digital',
    ],
    answer: 'Reloj',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un elemento',
      'Es gaseoso',
      'Lo necesitamos para respirar',
    ],
    answer: 'Oxígeno',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un lugar',
      'Está en Roma',
      'Es un anfiteatro antiguo muy famoso',
    ],
    answer: 'Coliseo',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un animal',
      'Vuela',
      'Hace miau',
    ],
    answer: 'Gato',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Tiene cuatro ruedas',
      'Se usa para transportarse',
    ],
    answer: 'Coche',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un lugar',
      'Está en el cielo',
      'Ilumina la noche',
    ],
    answer: 'Luna',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un alimento',
      'Es redonda',
      'Crece en árboles',
    ],
    answer: 'Manzana',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un lugar',
      'Es muy grande',
      'Tiene agua salada',
    ],
    answer: 'Océano',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Tiene páginas',
      'Se lee',
    ],
    answer: 'Libro',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un animal',
      'Es doméstico',
      'Ladra',
    ],
    answer: 'Perro',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un lugar',
      'Está en el cielo',
      'Da luz y calor',
    ],
    answer: 'Sol',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Tiene teclas',
      'Se usa para escribir',
    ],
    answer: 'Computadora',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un lugar',
      'Tiene muchos árboles',
      'Es parte de la naturaleza',
    ],
    answer: 'Bosque',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Tiene cuerdas',
      'Se toca con las manos',
    ],
    answer: 'Guitarra',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un lugar',
      'Está en París',
      'Es un museo muy famoso',
    ],
    answer: 'Louvre',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Se usa para comer',
      'Tiene dientes',
    ],
    answer: 'Tenedor',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un animal',
      'Vuela',
      'Canta',
    ],
    answer: 'Pájaro',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un lugar',
      'Tiene arena',
      'Está junto al mar',
    ],
    answer: 'Playa',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Tiene pantalla',
      'Se usa para ver programas',
    ],
    answer: 'Televisión',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un alimento',
      'Es blanco',
      'Viene de las vacas',
    ],
    answer: 'Leche',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Tiene dos ruedas',
      'Se pedalea',
    ],
    answer: 'Bicicleta',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un lugar',
      'Está en Londres',
      'Es un reloj muy famoso',
    ],
    answer: 'Big Ben',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Tiene llaves',
      'Se toca con los dedos',
    ],
    answer: 'Piano',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un lugar',
      'Es muy alto',
      'Está en la naturaleza',
    ],
    answer: 'Montaña',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Se usa para cortar',
      'Tiene filo',
    ],
    answer: 'Cuchillo',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un animal',
      'Nada',
      'Tiene aletas',
    ],
    answer: 'Pez',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un lugar',
      'Tiene muchos edificios',
      'Vive mucha gente',
    ],
    answer: 'Ciudad',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Se usa para abrir puertas',
      'Es de metal',
    ],
    answer: 'Llave',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un alimento',
      'Es amarilla',
      'Crece en mazorcas',
    ],
    answer: 'Maíz',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Tiene alas',
      'Vuela por el cielo',
    ],
    answer: 'Avión',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un lugar',
      'Tiene agua dulce',
      'Fluye',
    ],
    answer: 'Río',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Tiene hojas',
      'Se usa para aprender',
    ],
    answer: 'Libro de texto',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un animal',
      'Es grande',
      'Tiene trompa',
    ],
    answer: 'Elefante',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un lugar',
      'Está en Nueva York',
      'Es una estatua muy famosa',
    ],
    answer: 'Estatua de la Libertad',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Tiene pantalla táctil',
      'Se usa para comunicarse',
    ],
    answer: 'Teléfono móvil',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un alimento',
      'Es redonda',
      'Se come con queso',
    ],
    answer: 'Pizza',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Tiene velas',
      'Navega por el mar',
    ],
    answer: 'Barco de vela',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un animal',
      'Es rápido',
      'Tiene rayas',
    ],
    answer: 'Cebra',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un lugar',
      'Tiene muchas plantas',
      'Se cuida con amor',
    ],
    answer: 'Jardín',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Tiene teclas',
      'Se usa para escribir',
    ],
    answer: 'Máquina de escribir',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un alimento',
      'Es dulce',
      'Se hace con cacao',
    ],
    answer: 'Chocolate',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Tiene agujas',
      'Marca el tiempo',
    ],
    answer: 'Reloj de pulsera',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un animal',
      'Vive en el agua',
      'Tiene ocho tentáculos',
    ],
    answer: 'Pulpo',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un lugar',
      'Tiene mucha arena',
      'Es muy caliente',
    ],
    answer: 'Desierto',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Tiene bombilla',
      'Da luz',
    ],
    answer: 'Lámpara',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un alimento',
      'Es blanca',
      'Se hace con trigo',
    ],
    answer: 'Pan',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Tiene tela',
      'Protege de la lluvia',
    ],
    answer: 'Paraguas',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un animal',
      'Vuela',
      'Es muy pequeña',
    ],
    answer: 'Mariposa',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un lugar',
      'Tiene agua',
      'Está rodeado de tierra',
    ],
    answer: 'Lago',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Tiene cámara',
      'Captura momentos',
    ],
    answer: 'Cámara fotográfica',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un alimento',
      'Es amarilla',
      'Crece bajo tierra',
    ],
    answer: 'Papa',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un objeto',
      'Tiene cuatro patas',
      'Se usa para sentarse',
    ],
    answer: 'Silla',
  },
  {
    type: 'indicios',
    level: 'facil',
    hints: [
      'Es un animal',
      'Es grande',
      'Ruge',
    ],
    answer: 'León',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿En qué país se originaron los Juegos Olímpicos?',
    answer: 'Grecia',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Cuál es el país más grande del mundo?',
    answer: 'Rusia',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Cuál es el idioma más hablado del mundo?',
    answer: 'Inglés',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Qué científico propuso la teoría de la relatividad?',
    answer: 'Albert Einstein',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿En qué continente se encuentra Egipto?',
    answer: 'África',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Qué gas exhalan los humanos al respirar?',
    answer: 'Dióxido de carbono',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Cuál es el metal cuyo símbolo químico es Au?',
    answer: 'Oro',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Qué país tiene forma de bota?',
    answer: 'Italia',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Quién pintó “La Gioconda”?',
    answer: 'Leonardo da Vinci',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Cuál es la capital de Canadá?',
    answer: 'Ottawa',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿En qué año comenzó la Revolución Francesa?',
    answer: '1789',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Cuál es el planeta más caliente del sistema solar?',
    answer: 'Venus',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Cuál es el río que atraviesa Egipto?',
    answer: 'Nilo',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Qué animal es el símbolo de la sabiduría en la mitología griega?',
    answer: 'Búho',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Cuál es el país más poblado del mundo?',
    answer: 'India',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Qué instrumento mide la presión atmosférica?',
    answer: 'Barómetro',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Qué tipo de animal es la ballena?',
    answer: 'Mamífero',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Cuál es el principal gas del aire que respiramos?',
    answer: 'Nitrógeno',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Quién escribió "La Odisea"?',
    answer: 'Homero',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Qué país inventó la pólvora?',
    answer: 'China',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Qué continente no tiene serpientes?',
    answer: 'Antártida',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Qué océano está entre África y Australia?',
    answer: 'Océano Índico',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Cuál es el hueso más pequeño del cuerpo humano?',
    answer: 'Estribo',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Quién fue el primer hombre en orbitar la Tierra?',
    answer: 'Yuri Gagarin',
  },
  {
    type: 'trivia',
    level: 'medio',
    question: '¿Qué país tiene el mayor número de islas del mundo?',
    answer: 'Suecia',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿En qué año cayó el Imperio Romano de Occidente?',
    answer: '476 d.C.',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿Qué científico formuló las leyes del movimiento?',
    answer: 'Isaac Newton',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿Cuál es el elemento más abundante en el universo?',
    answer: 'Hidrógeno',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿Qué país fue el primero en legalizar el matrimonio igualitario?',
    answer: 'Países Bajos',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿Cuál es el segundo planeta más grande del sistema solar?',
    answer: 'Saturno',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿Quién fue el autor de “El origen de las especies”?',
    answer: 'Charles Darwin',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿Qué país tiene como capital a Reikiavik?',
    answer: 'Islandia',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿En qué año se firmó la Declaración de Independencia de Estados Unidos?',
    answer: '1776',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿Cuál es el país más pequeño del mundo?',
    answer: 'Ciudad del Vaticano',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿Qué compositor perdió el oído y siguió componiendo música?',
    answer: 'Ludwig van Beethoven',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿Qué país inventó el papel?',
    answer: 'China',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿Qué océano es el más profundo?',
    answer: 'Pacífico',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿Qué científico descubrió la penicilina?',
    answer: 'Alexander Fleming',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿Cuál es el idioma oficial de Irán?',
    answer: 'Persa',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿Cuál es la capital de Nueva Zelanda?',
    answer: 'Wellington',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿Qué guerra se luchó entre 1914 y 1918?',
    answer: 'Primera Guerra Mundial',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿Cuál es el país con más volcanes activos del mundo?',
    answer: 'Indonesia',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿En qué año comenzó la Revolución Industrial?',
    answer: '1760',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿Qué sustancia da color verde a las plantas?',
    answer: 'Clorofila',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿Qué emperador romano convirtió al cristianismo en religión oficial?',
    answer: 'Constantino',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿Cuál es la moneda oficial de Japón?',
    answer: 'Yen',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿En qué país nació Nikola Tesla?',
    answer: 'Croacia',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿Qué océano rodea Groenlandia?',
    answer: 'Atlántico y Ártico',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿Cuál es el metal líquido a temperatura ambiente?',
    answer: 'Mercurio',
  },
  {
    type: 'trivia',
    level: 'dificil',
    question: '¿En qué ciudad se firmó el Tratado de Versalles?',
    answer: 'Versalles',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Faro de Punta Carretas',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Yerba mate',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Helicóptero',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Castillo',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Televisor',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Micrófono',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Torre Eiffel',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Computadora portátil',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Robot',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Avión de combate',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Estadio de fútbol',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Pirámide',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Volcán',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Camión',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Tractor',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Moto',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Planeta Tierra',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Satélite',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Cohete espacial',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Reloj de arena',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Pintor',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Biblioteca',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Isla',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Fábrica',
  },
  {
    type: 'dibujando',
    level: 'medio',
    word: 'Estatua de la Libertad',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Teatro Solís',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Candombe',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Torre de Pisa',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Transbordador espacial',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Castillo medieval',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Palacio',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Satélite artificial',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Pirata',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Escafandra',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Dinosaurio',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Templo griego',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Microscopio',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Mina de oro',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Submarino',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Estación espacial',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Mural',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Mapa del tesoro',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Marioneta',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Científico en laboratorio',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Puente colgante',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Castillo de arena',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Cataratas del Iguazú',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Planeta Saturno',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Ópera de Sídney',
  },
  {
    type: 'dibujando',
    level: 'dificil',
    word: 'Cueva prehistórica',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Jugar al tenis',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Tomar café',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Cocinar pasta',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Hacer una selfie',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Enviar un mensaje de texto',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Conducir moto',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Jugar videojuegos',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Navegar en internet',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Leer el diario',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Hacer ejercicio',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Sacar fotos',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Hacer yoga',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Pescar en el río',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Esquiar',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Surfear',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Escalar una montaña',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Hacer malabares',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Tocar batería',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Patear un penal',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Llamar por teléfono',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Barrer el piso',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Pintar una pared',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Tocar violín',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Manejar bicicleta sin manos',
  },
  {
    type: 'mimica',
    level: 'medio',
    word: 'Hacer un asado',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Tocar el bandoneón',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Cantar en un concierto',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Hacer paracaidismo',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Hacer buceo',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Interpretar a un mago',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Tocar violonchelo',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Hacer candombe',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Pintar un mural',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Hacer snowboard',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Dirigir una orquesta',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Montar a caballo',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Dar una clase',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Conducir un bus',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Reparar un motor',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Tocar batería en vivo',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Hacer un truco de magia',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Pelear boxeo',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Bailar tango',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Subir al ómnibus',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Tomar un mate caliente',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Cantar el himno',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Tocar guitarra eléctrica',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Aplaudir en un teatro',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Tocar el tamboril',
  },
  {
    type: 'mimica',
    level: 'dificil',
    word: 'Hacer surf con olas grandes',
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Cine',
    forbidden: ['película', 'pantalla', 'butacas', 'palomitas'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Café',
    forbidden: ['taza', 'caliente', 'mañana', 'despertar'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Helado',
    forbidden: ['frío', 'verano', 'cono', 'dulce'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Supermercado',
    forbidden: ['comprar', 'carrito', 'productos', 'comida'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Computadora',
    forbidden: ['teclado', 'pantalla', 'ratón', 'internet'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Correo electrónico',
    forbidden: ['mensaje', 'internet', 'enviar', 'bandeja'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Fútbol',
    forbidden: ['pelota', 'gol', 'deporte', 'cancha'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Hospital',
    forbidden: ['médico', 'enfermo', 'curar', 'camilla'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Río',
    forbidden: ['agua', 'corriente', 'pesca', 'barco'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Parque Rodó',
    forbidden: ['Montevideo', 'atracciones', 'lago', 'pasear'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Refrigerador',
    forbidden: ['frío', 'comida', 'cocina', 'guardar'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Cineasta',
    forbidden: ['película', 'director', 'rodar', 'guion'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Biblioteca',
    forbidden: ['libros', 'leer', 'silencio', 'préstamo'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Museo',
    forbidden: ['arte', 'pintura', 'escultura', 'exposición'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Despertador',
    forbidden: ['sonido', 'hora', 'mañana', 'dormir'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Camión',
    forbidden: ['transporte', 'ruedas', 'grande', 'carga'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Granja',
    forbidden: ['campo', 'animales', 'vacas', 'agricultura'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Puente',
    forbidden: ['cruzar', 'agua', 'camino', 'carretera'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Avión',
    forbidden: ['volar', 'alas', 'piloto', 'aeropuerto'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Barco',
    forbidden: ['mar', 'agua', 'navegar', 'capitán'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Carne',
    forbidden: ['vaca', 'asado', 'comer', 'parrilla'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Telescopio',
    forbidden: ['ver', 'cielo', 'planetas', 'astronomía'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Pelicula uruguaya',
    forbidden: ['cine', 'Montevideo', 'actor', 'rodaje'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'Internet',
    forbidden: ['red', 'páginas', 'computadora', 'navegar'],
  },
  {
    type: 'tabu',
    level: 'medio',
    word: 'PlayStation',
    forbidden: ['videojuegos', 'mando', 'Sony', 'consola'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Teatro Solís',
    forbidden: ['Montevideo', 'obra', 'escenario', 'antiguo'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Carnaval',
    forbidden: ['desfile', 'murgas', 'fiesta', 'disfraz'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Astronauta',
    forbidden: ['espacio', 'nave', 'planeta', 'gravedad'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Eclipse',
    forbidden: ['luna', 'sol', 'sombra', 'ocultar'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Revolución Francesa',
    forbidden: ['1789', 'París', 'monarquía', 'libertad'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Satélite',
    forbidden: ['espacio', 'órbita', 'comunicación', 'planeta'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Fósil',
    forbidden: ['dinosaurio', 'antiguo', 'piedra', 'prehistoria'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Arquitecto',
    forbidden: ['diseñar', 'edificio', 'planos', 'construcción'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Microscopio',
    forbidden: ['ver', 'pequeño', 'laboratorio', 'lente'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Democracia',
    forbidden: ['votar', 'gobierno', 'pueblo', 'elecciones'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Ópera',
    forbidden: ['música', 'teatro', 'cantar', 'voz'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Marte',
    forbidden: ['planeta', 'rojo', 'espacio', 'nave'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Genética',
    forbidden: ['ADN', 'herencia', 'genes', 'cromosomas'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Física cuántica',
    forbidden: ['átomos', 'energía', 'partículas', 'Einstein'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Cataratas del Iguazú',
    forbidden: ['agua', 'frontera', 'Argentina', 'Brasil'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Antártida',
    forbidden: ['hielo', 'frío', 'pingüinos', 'sur'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Esqueleto',
    forbidden: ['huesos', 'cuerpo', 'calavera', 'humano'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Célula',
    forbidden: ['vida', 'microscopio', 'organismo', 'unidad'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Pirámide',
    forbidden: ['Egipto', 'faraón', 'arena', 'tumba'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Biblioteca Nacional',
    forbidden: ['libros', 'leer', 'Montevideo', 'edificio'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Parlamento',
    forbidden: ['leyes', 'política', 'gobierno', 'diputados'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Dinosaurio',
    forbidden: ['prehistoria', 'animal', 'extinto', 'grande'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Órbita',
    forbidden: ['planeta', 'girar', 'sol', 'trayectoria'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Científico',
    forbidden: ['investigar', 'experimento', 'laboratorio', 'teoría'],
  },
  {
    type: 'tabu',
    level: 'dificil',
    word: 'Cueva',
    forbidden: ['roca', 'oscuro', 'subterráneo', 'murciélago'],
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es un edificio emblemático de Montevideo',
      'Tiene una cúpula con bandera uruguaya',
      'Allí se aprueban las leyes del país',
    ],
    answer: 'Palacio Legislativo',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es una fiesta popular uruguaya',
      'Se celebra con tambores y desfiles',
      'Tiene raíces africanas',
    ],
    answer: 'Candombe',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es un satélite natural',
      'Tiene fases',
      'A veces tapa el Sol parcialmente',
    ],
    answer: 'Luna',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es una maravilla del mundo',
      'Está en Egipto',
      'Servía como tumba de faraones',
    ],
    answer: 'Pirámides de Guiza',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es un gas',
      'Lo usan los globos aerostáticos',
      'Es más liviano que el aire',
    ],
    answer: 'Helio',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es un instrumento musical',
      'Tiene cuerdas',
      'Se toca con un arco',
    ],
    answer: 'Violín',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es una figura histórica',
      'Descubrió América en 1492',
      'Era navegante genovés',
    ],
    answer: 'Cristóbal Colón',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es un evento natural',
      'Ocurre por movimientos de placas tectónicas',
      'Puede causar tsunamis',
    ],
    answer: 'Terremoto',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es una teoría científica',
      'Explica la evolución de las especies',
      'Fue propuesta por Charles Darwin',
    ],
    answer: 'Teoría de la evolución',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es una fuerza invisible',
      'Nos mantiene en el suelo',
      'Fue descrita por Newton',
    ],
    answer: 'Gravedad',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es un planeta del sistema solar',
      'Tiene un color rojizo',
      'Podría albergar vida',
    ],
    answer: 'Marte',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es un país europeo',
      'Su capital es Atenas',
      'Fue cuna de la democracia',
    ],
    answer: 'Grecia',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es un líquido metálico',
      'A temperatura ambiente sigue siendo líquido',
      'Se usaba en termómetros antiguos',
    ],
    answer: 'Mercurio',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es un cuerpo celeste',
      'Gira alrededor del Sol',
      'Es más grande que la Tierra',
    ],
    answer: 'Júpiter',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es una enfermedad viral',
      'Provocó una pandemia en 2020',
      'Afecta el sistema respiratorio',
    ],
    answer: 'COVID-19',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es una corriente artística',
      'Se desarrolló en el siglo XIX',
      'Buscaba representar la luz y el color',
    ],
    answer: 'Impresionismo',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es un invento',
      'Fue creado por Alexander Graham Bell',
      'Permite comunicarse a distancia',
    ],
    answer: 'Teléfono',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es una obra literaria',
      'Fue escrita por George Orwell',
      'Presenta un mundo vigilado por el “Gran Hermano”',
    ],
    answer: '1984',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es una partícula subatómica',
      'Tiene carga negativa',
      'Gira alrededor del núcleo atómico',
    ],
    answer: 'Electrón',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es un país sudamericano',
      'Tiene forma alargada',
      'Su capital es Santiago',
    ],
    answer: 'Chile',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es una disciplina científica',
      'Estudia los seres vivos',
      'Incluye ramas como zoología y botánica',
    ],
    answer: 'Biología',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es una guerra histórica',
      'Terminó en 1945',
      'Participaron potencias aliadas y del Eje',
    ],
    answer: 'Segunda Guerra Mundial',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es una ciudad italiana',
      'Está construida sobre canales',
      'Se viaja en góndola',
    ],
    answer: 'Venecia',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es un científico inglés',
      'Formuló las leyes del movimiento',
      'Descubrió la gravitación universal',
    ],
    answer: 'Isaac Newton',
  },
  {
    type: 'indicios',
    level: 'dificil',
    hints: [
      'Es un invento moderno',
      'Se usa para ver imágenes a distancia en directo',
      'Permite videollamadas',
    ],
    answer: 'Cámara web',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es una bebida típica del Río de la Plata',
      'Se comparte entre amigos',
      'Se prepara con agua caliente',
    ],
    answer: 'Mate',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es una ciudad uruguaya',
      'Está al este del país',
      'Es famosa por sus playas y turismo',
    ],
    answer: 'Punta del Este',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es un objeto',
      'Sirve para medir la temperatura',
      'Contiene mercurio o sensores digitales',
    ],
    answer: 'Termómetro',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es un lugar con mucha vegetación',
      'Hay animales salvajes',
      'Es húmedo y tropical',
    ],
    answer: 'Selva',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es un material',
      'Se obtiene de los árboles',
      'Se usa para fabricar muebles o papel',
    ],
    answer: 'Madera',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es un invento moderno',
      'Se usa para hablar o escribir mensajes',
      'Casi todos lo tienen',
    ],
    answer: 'Celular',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es un animal doméstico',
      'Le gusta dormir mucho',
      'Caza ratones',
    ],
    answer: 'Gato',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es un fenómeno natural',
      'Produce un sonido fuerte',
      'Viene acompañado de rayos',
    ],
    answer: 'Trueno',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es un deporte',
      'Se juega en una cancha rectangular',
      'Se usa una raqueta',
    ],
    answer: 'Tenis',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es un edificio alto',
      'Tiene muchos pisos y ventanas',
      'Se encuentra en las grandes ciudades',
    ],
    answer: 'Rascacielos',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es un objeto',
      'Tiene números y agujas',
      'Mide el paso del tiempo',
    ],
    answer: 'Reloj',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es un lugar',
      'Está lleno de libros',
      'Se debe mantener silencio',
    ],
    answer: 'Biblioteca',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es un medio de transporte',
      'Funciona sobre raíles',
      'Tiene varios vagones',
    ],
    answer: 'Tren',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es un cuerpo celeste',
      'Brilla de noche',
      'No tiene luz propia',
    ],
    answer: 'Luna',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es una parte del cuerpo',
      'Nos permite oír',
      'Tiene forma curva',
    ],
    answer: 'Oreja',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es un continente',
      'Tiene desiertos, selvas y sabanas',
      'Se considera la cuna de la humanidad',
    ],
    answer: 'África',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es un animal marino',
      'Tiene ocho brazos',
      'Puede soltar tinta',
    ],
    answer: 'Pulpo',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es una fruta tropical',
      'Por fuera es marrón y por dentro amarilla',
      'Crece en las palmeras',
    ],
    answer: 'Coco',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es un aparato electrónico',
      'Permite escuchar música',
      'Usa auriculares o parlantes',
    ],
    answer: 'Reproductor de música',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es un país europeo',
      'Su capital es Berlín',
      'Fue dividido en dos durante la Guerra Fría',
    ],
    answer: 'Alemania',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es una sustancia blanca',
      'Endulza las comidas y bebidas',
      'Se obtiene de la caña o la remolacha',
    ],
    answer: 'Azúcar',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es un animal del desierto',
      'Tiene jorobas',
      'Puede pasar días sin agua',
    ],
    answer: 'Camello',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es una construcción',
      'Permite cruzar de un lado al otro',
      'Puede estar sobre un río o carretera',
    ],
    answer: 'Puente',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es un objeto tecnológico',
      'Tiene cámara y pantalla',
      'Se usa para sacar fotos y grabar videos',
    ],
    answer: 'Teléfono móvil',
  },
  {
    type: 'indicios',
    level: 'medio',
    hints: [
      'Es una parte del cuerpo',
      'Late constantemente',
      'Bombea sangre',
    ],
    answer: 'Corazón',
  },

];
