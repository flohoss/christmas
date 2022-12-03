import { component$, useContext } from "@builder.io/qwik";
import { QuizContext } from "~/routes";
import { Answers } from "~/quiz/quiz";

export default component$(() => {
  const ctx = useContext(QuizContext);

  const wrongAnswer = (index: number) => ctx.submitted && !ctx.correct[ctx.currentStep] && ctx.currentQuestion.selected === index;
  const correctAnswer = (index: number) => {
    const answer = Answers.find((answer) => answer.id === ctx.currentQuestion.id);
    return ctx.submitted && index === answer?.value;
  };

  return (
    <div class="my-10 flex flex-col gap-4 mx-4">
      <div class="text-xl select-none">{ctx.currentQuestion.question}</div>
      {ctx.currentQuestion?.answers.map((answer, index) => (
        <div class="flex items-center">
          <input
            type="radio"
            disabled={ctx.submitted}
            name={ctx.currentQuestion.question}
            id={answer}
            value={index}
            checked={ctx.currentQuestion.selected === index}
            onchange$={(ev) => (ctx.currentQuestion.selected = Number((ev.target as HTMLInputElement).value))}
            class={`radio disabled:opacity-100 ${wrongAnswer(index) ? "radio-error" : ""} ${correctAnswer(index) ? "radio-success bg-success" : ""}`}
          />
          <label for={answer} class={`pl-4 w-full select-none ${!ctx.submitted && "cursor-pointer"}`}>
            {answer}
          </label>
        </div>
      ))}
    </div>
  );
});
