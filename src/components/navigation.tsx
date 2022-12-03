import { $, component$, PropFunction, useContext, useStore, useWatch$ } from "@builder.io/qwik";
import { QuizContext } from "~/routes";
import { AmountOfQuestions, Catalog, shuffleArray } from "~/quiz/quiz";
import Result from "~/components/result";

export default component$((props: { final: PropFunction<() => void> }) => {
  const ctx = useContext(QuizContext);

  const store = useStore({
    showPrevious: false,
    showNext: false,
    error: true,
  });
  useWatch$(({ track }) => {
    track(() => ctx.currentStep);
    store.showPrevious = ctx.currentStep > 0;
    store.showNext = ctx.currentStep < ctx.quiz.length && ctx.currentStep !== ctx.quiz.length - 1;
  });
  useWatch$(({ track }) => {
    track(() => ctx.currentQuestion?.selected);
    store.error = ctx.currentQuestion?.selected < 0 || ctx.currentQuestion?.selected > 2;
  });
  const reset = $(async () => {
    ctx.correct = [];
    ctx.currentStep = 0;
    ctx.submitted = false;
    ctx.quiz = shuffleArray(Catalog, AmountOfQuestions);
    ctx.currentQuestion = ctx.quiz[0];
  });

  return (
    <div class="flex flex-col-reverse sm:flex-row-reverse items-center gap-5 mx-4">
      {!ctx.submitted ? (
        <>
          {store.showNext ? (
            <button disabled={store.error} class="btn btn-primary w-full sm:w-auto gap-2" onclick$={() => !store.error && ctx.currentStep++}>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512">
                <path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96V256c0 53 43 96 96 96v32h64V352H384v32h64V352c53 0 96-43 96-96V160c17.7 0 32-14.3 32-32s-14.3-32-32-32H512 480c-17.7 0-32 14.3-32 32v41.3c0 30.2-24.5 54.7-54.7 54.7c-75.5 0-145.6-38.9-185.6-102.9l-4.3-6.9C174.2 67.6 125 37.6 70.7 32.7c-2.2-.5-4.4-.7-6.7-.7H55 32zM640 384c0-17.7-14.3-32-32-32s-32 14.3-32 32v8c0 13.3-10.7 24-24 24H64c-17.7 0-32 14.3-32 32s14.3 32 32 32H552c48.6 0 88-39.4 88-88v-8z" />
              </svg>
              Weiter
            </button>
          ) : (
            <button disabled={store.error} class="btn btn-primary w-full sm:w-auto gap-2" onclick$={props.final}>
              Fertig
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                <path d="M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208H104L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320H80L5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5H192v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448H424.5c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320h33.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z" />
              </svg>
            </button>
          )}
          {store.showPrevious && (
            <button class="btn btn-secondary w-full sm:w-auto gap-2" onclick$={() => ctx.currentStep--}>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                <path d="M32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l208 0V96L32 96zM192 288c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm-64-64c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32 14.3-32 32zm96 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H224zm88-96l-.6 0c5.4 9.4 8.6 20.3 8.6 32c0 13.2-4 25.4-10.8 35.6c24.9 8.7 42.8 32.5 42.8 60.4c0 11.7-3.1 22.6-8.6 32H352c88.4 0 160-71.6 160-160V226.3c0-42.4-16.9-83.1-46.9-113.1l-11.6-11.6C429.5 77.5 396.9 64 363 64l-27 0c-35.3 0-64 28.7-64 64v88c0 22.1 17.9 40 40 40s40-17.9 40-40V160c0-8.8 7.2-16 16-16s16 7.2 16 16v56c0 39.8-32.2 72-72 72z" />
              </svg>
              Zurück
            </button>
          )}
        </>
      ) : (
        <>
          <button class="btn btn-secondary w-full sm:w-auto gap-2" onclick$={reset}>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
              <path d="M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z" />
            </svg>
            Nochmal
          </button>
          <Result />
        </>
      )}
    </div>
  );
});
