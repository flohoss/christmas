export interface QuestionAndAnswer {
  id: number | undefined;
  question: string;
  answers: string[];
  selected: number;
}

export const emptyQuestion: QuestionAndAnswer = { id: undefined, answers: [], question: "", selected: -1 };
export const AmountOfQuestions = 8;

export function shuffleArray(array: QuestionAndAnswer[], amount: number) {
  const deepCopy = JSON.parse(JSON.stringify(array));
  for (let i = deepCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = deepCopy[i];
    deepCopy[i] = deepCopy[j];
    deepCopy[j] = temp;
  }
  return deepCopy.slice(0, amount);
}

export const Answers = [
  { id: 0, value: 1 },
  { id: 1, value: 2 },
  { id: 2, value: 0 },
  { id: 3, value: 2 },
  { id: 4, value: 0 },
  { id: 5, value: 1 },
  { id: 6, value: 0 },
  { id: 7, value: 2 },
  { id: 8, value: 0 },
  { id: 9, value: 1 },
  { id: 10, value: 0 },
  { id: 11, value: 1 },
  { id: 12, value: 2 },
  { id: 13, value: 1 },
  { id: 14, value: 0 },
  { id: 15, value: 1 },
  { id: 16, value: 1 },
  { id: 17, value: 2 },
  { id: 18, value: 0 },
  { id: 19, value: 1 },
  { id: 20, value: 1 },
  { id: 21, value: 1 },
];

export const Catalog: QuestionAndAnswer[] = [
  {
    id: 0,
    question: "Wie viele Türchen hat ein Adventskalender?",
    answers: ["17", "24", "30"],
    selected: -1,
  },
  {
    id: 1,
    question: "Was wird an Weihnachten gefeiert?",
    answers: ["Die Engel heiraten", "Die Rentiere haben Geburtstag", "Die Geburt von Jesus Christus"],
    selected: -1,
  },
  {
    id: 2,
    question: "Was bringt der Weihnachtsmann den unartigen Kindern?",
    answers: ["Eine Rute", "Harte Nüsse", "Kekse"],
    selected: -1,
  },
  {
    id: 3,
    question: "Welche Tiere ziehen den Schlitten vom Weihnachtsmann?",
    answers: ["Huskies", "Pferde", "Rentiere"],
    selected: -1,
  },
  {
    id: 4,
    question: "Welche Tiere standen im Stall der Krippe des Jesuskindes?",
    answers: ["Ochs und Esel", "Kuh und Kamel", "Hund und Katze"],
    selected: -1,
  },
  {
    id: 5,
    question: "Wie heißen die Heiligen drei Könige?",
    answers: ["Nikolaus, Matthäus und Joseph", "Caspar, Melchior und Balthasar", "Andreas, Augustus und Abraham"],
    selected: -1,
  },
  {
    id: 6,
    question: "Knecht Ruprecht ist...",
    answers: ["Der Gehilfe des Nikolaus", "Ein fieser Widersacher des Weihnachtsmannes", "Eine Erfindung von Christian Andersen in einem Märchen"],
    selected: -1,
  },
  {
    id: 7,
    question: "Wie viele Nadeln hat ein durchschnittlicher (1,70 m großer) Weihnachtsbaum?",
    answers: ["470.000", "690.000", "180.000"],
    selected: -1,
  },
  {
    id: 8,
    question: "Wie nennen die Briten den 2. Weihnachtstag (26.12.)?",
    answers: ["Boxing Day", "Rendeer Day", "Santa Day"],
    selected: -1,
  },
  {
    id: 9,
    question: "Wer hat den Adventskalander erfunden?",
    answers: ["Die Römer etwa 400 n. Chr.", "Ein englischer Pfarrer im 19. Jahrhundert", "Die Schokoladenindustrie im 20. Jahrhundert"],
    selected: -1,
  },
  {
    id: 10,
    question: "Wer verteilt in Island die Geschenke?",
    answers: ["Die 13 Weihnachtstrolle, genannt Jólasveinar", "Der Weihnachtsmann, genannt Jólasveinn", "Die 21 Vulkanelfen, genannt Eldfjallálfar"],
    selected: -1,
  },
  {
    id: 11,
    question: "Wer hat das Lied „White Christmas“ komponiert?",
    answers: ["Johnny Cash", "Irvig Berlin", "Nat King Cole"],
    selected: -1,
  },
  {
    id: 12,
    question: "Welche Farbe hatte der Mantel des Weihnachtsmannes, bevor ihn Coca Cola rot einkleidete?",
    answers: ["Weiß", "Gold", "Blau"],
    selected: -1,
  },
  {
    id: 13,
    question: "Welche Inseln gibt es nicht?",
    answers: ["Weihnachtsinseln", "Adventsinseln", "Osterinseln"],
    selected: -1,
  },
  {
    id: 14,
    question: "Wann wurde zum ersten Mal Weihnachten gefeiert?",
    answers: ["im 4. Jahrhundert", "im 15. Jahrhundert", "im Jahre 3 nach Christi Geburt"],
    selected: -1,
  },
  {
    id: 15,
    question: "Welches asiatische Land ist das einzige, in dem Weihnachten ein Feiertag ist?",
    answers: ["China", "Südkorea", "Malaysia"],
    selected: -1,
  },
  {
    id: 16,
    question: 'Was heißt "Frohe Weihnachten" auf Spanisch?',
    answers: ["Muchas Gracias", "Feliz Navidad", "Bienvenidos"],
    selected: -1,
  },
  {
    id: 17,
    question: "Wie heißt ein legendäres Weihnachtsgericht aus Großbritannien?",
    answers: ["Santa Cheese Boots (Weihnachtsmann-Käse-Stiefel)", "Jelly Bag Cap Cake (Zipfelmützenkekse)", "Plumpudding (Weihnachtspudding)"],
    selected: -1,
  },
  {
    id: 18,
    question: "Worauf freuen sich die Kinder im Lied „Lasst uns froh und munter sein“?",
    answers: ["Nikolausabend", "Erster Advent", "Heiligabend"],
    selected: -1,
  },
  {
    id: 19,
    question: "In der Weihnachtsbäckerei gibts…",
    answers: ["ein vergessenes Osterei", "so manche Leckerei", "ein riesen Fest"],
    selected: -1,
  },
  {
    id: 20,
    question: "Was ist ein Krippenspiel?",
    answers: ["Ein altes Musikinstrument", "Ein Theaterstück, dass zu Weihnachten aufgeführt wird", "Ein weihnachtliches Brettspiel für die ganze Familie"],
    selected: -1,
  },
  {
    id: 21,
    question: "Was ist das Besondere am finnischen Weihnachtsmann Joulupukki?",
    answers: ["Er hat keinen Bart", "Er ist verheiratet", "Er hat keinen roten Mantel"],
    selected: -1,
  },
];
