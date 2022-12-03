export interface QuestionAndAnswer {
  id: number | undefined;
  question: string;
  answers: string[];
  selected: number;
}

export const emptyQuestion: QuestionAndAnswer = { id: undefined, answers: [], question: "", selected: -1 };
export const AmountOfQuestions = 10;

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
  { id: 22, value: 2 },
  { id: 23, value: 0 },
  { id: 24, value: 2 },
  { id: 25, value: 0 },
  { id: 26, value: 2 },
  { id: 27, value: 0 },
  { id: 28, value: 0 },
  { id: 29, value: 1 },
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
    question: "Was heißt „Frohe Weihnachten“ auf Spanisch?",
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
    answers: ["Ein vergessenes Osterei", "So manche Leckerei", "Ein riesen Fest"],
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
  {
    id: 22,
    question: "Woher stammt die Pflanze Weihnachtsstern?",
    answers: ["Von den Mohawk aus Nordamerika", "Von den Aborigines aus Australien", "Von den Azteken aus Mexiko"],
    selected: -1,
  },
  {
    id: 23,
    question: "In Finnland laufen die Kinder vor Weihnachten von Haus zu Haus. Dabei verkleiden sie sich als...",
    answers: ["Elf/e", "Rentier", "Weihnachtsmann"],
    selected: -1,
  },
  {
    id: 24,
    question: "Woher kam die Idee zum Lied „Rudolph The Red Nose Reindeer“?",
    answers: ["Vom achten amerikanischen Präsidenten Martin van Buren", "Vom Komponisten Johnny Marks", "Aus einem Kindermalbuch"],
    selected: -1,
  },
  {
    id: 25,
    question: "Woher kommt das weihnachtliche Christkind?",
    answers: [
      "Martin Luther führte es im 16. Jahrhundert ein",
      "Es stammt aus den Weihnachtsbräuchen in Skandinavien",
      "Es ist einen Erfindung von Walt Disney",
    ],
    selected: -1,
  },
  {
    id: 26,
    question: "Woraus wird Marzipan gemacht?",
    answers: ["Walnüsse", "Datteln", "Mandeln"],
    selected: -1,
  },
  {
    id: 27,
    question: "Wie viele Weihnachtslieder gibt es ungefähr laut dem Büro für Weihnachtslieder in Graz?",
    answers: ["30.000", "3.000", "300"],
    selected: -1,
  },
  {
    id: 28,
    question: "Wie viele Kerzen hatte der Adventskranz bei seiner Erfindung?",
    answers: ["23", "Von Anfang an waren es 4", "1, in seltenen Fällen 2"],
    selected: -1,
  },
  {
    id: 29,
    question: "Wieviel Prozent Alkohol muss Glühwein in Deutschland mind. enthalten, um ihn Glühwein nennen zu dürfen?",
    answers: ["12%", "7%", "Es gibt hierfür keine Vorschrift"],
    selected: -1,
  },
];
