import { $, component$, useClientEffect$, useContext } from "@builder.io/qwik";
import { QuizContext } from "~/routes";

export default component$(() => {
  const ctx = useContext(QuizContext);

  const stepClass = (key: number) => {
    if (ctx.correct.length === ctx.quiz.length) return ctx.correct[key] ? "step-success cursor-pointer" : "step-error cursor-pointer";
    if (key <= ctx.currentStep) return "step-primary";
  };

  const navigate = $((key: number) => ctx.correct.length === ctx.quiz.length && (ctx.currentStep = key));

  useClientEffect$(({ track }) => {
    track(() => ctx.currentStep);
    const step = ctx.currentStep === 0 ? ctx.currentStep : ctx.currentStep + 1;
    document.getElementById(step + "")?.scrollIntoView({ block: "end", behavior: "smooth" });
  });

  return (
    <ul class="steps w-full">
      {ctx.quiz.map((value, index) => (
        <li id={index + ""} key={index} class={`step ${stepClass(index)}`} onclick$={async () => await navigate(index)}></li>
      ))}
    </ul>
  );
});
