import { $, component$, createContext, useClientEffect$, useContextProvider, useStore } from "@builder.io/qwik";
import { AmountOfQuestions, Answers, Catalog, emptyQuestion, QuestionAndAnswer, shuffleArray } from "~/quiz/quiz";
import Indicator from "~/components/indicator";
import Entry from "~/components/entry";
import Navigation from "~/components/navigation";
import Loading from "~/components/loading/loading";
export interface QuizContextI {
  currentStep: number;
  quiz: QuestionAndAnswer[];
  currentQuestion: QuestionAndAnswer;
  submitted: boolean;
  correct: boolean[];
}
export const QuizContext = createContext<QuizContextI>("quiz-context");

export default component$(() => {
  const store = useStore<QuizContextI>({ currentStep: 7, quiz: [], currentQuestion: { ...emptyQuestion }, submitted: false, correct: [] }, { recursive: true });
  useContextProvider(QuizContext, store);
  useClientEffect$(() => (store.quiz = shuffleArray(Catalog, AmountOfQuestions)));
  useClientEffect$(({ track }) => {
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
    <div>
      {store.quiz.length > 0 ? (
        <>
          <Indicator />
          <Entry key={store.currentQuestion.question} />
          <Navigation final={final} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
});
