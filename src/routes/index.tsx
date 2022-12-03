import { $, component$, createContext, useContextProvider, useStore, useWatch$ } from "@builder.io/qwik";
import { AmountOfQuestions, Answers, Catalog, emptyQuestion, QuestionAndAnswer, shuffleArray } from "~/quiz/quiz";
import Indicator from "~/components/indicator";
import Entry from "~/components/entry";
import Navigation from "~/components/navigation";
export interface QuizContextI {
  currentStep: number;
  quiz: QuestionAndAnswer[];
  currentQuestion: QuestionAndAnswer;
  submitted: boolean;
  correct: boolean[];
}
export const QuizContext = createContext<QuizContextI>("quiz-context");

export default component$(() => {
  const store = useStore<QuizContextI>(
    { currentStep: 0, quiz: shuffleArray(Catalog, AmountOfQuestions), currentQuestion: { ...emptyQuestion }, submitted: false, correct: [] },
    { recursive: true }
  );
  useContextProvider(QuizContext, store);
  useWatch$(({ track }) => {
    track(() => store.currentStep);
    store.currentQuestion = store.quiz[store.currentStep];
  });
  const final = $(() => {
    store.quiz.forEach((question, index) => {
      const answer = Answers.find((answer) => answer.id === question.id);
      store.correct[index] = question.selected === answer?.value;
    });
    store.submitted = true;
  });

  return (
    <>
      <Indicator />
      <Entry key={store.currentQuestion.id} />
      <Navigation final={final} />
    </>
  );
});
