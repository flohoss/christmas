import { $, component$, render, useClientEffect$, useContext, useMount$, useSignal, useStore } from "@builder.io/qwik";
import { QuizContext } from "~/routes";
import confetti from "canvas-confetti";
import { CodeSnippets, randomInRange } from "~/code/code";

export default component$(() => {
  const ctx = useContext(QuizContext);
  const store = useStore({ win: false });
  const modal = useSignal<HTMLInputElement>();
  const giftBtn = useSignal<HTMLButtonElement>();

  useMount$(() => {
    let tmp = true;
    ctx.correct.forEach((value) => {
      if (!value) tmp = false;
      return;
    });
    store.win = tmp;
  });

  const addFireworks = $(() => {
    const count = 200;
    const defaults = {
      origin: {
        y: (giftBtn.value?.getBoundingClientRect().y || 0) / window.innerHeight,
        x: (giftBtn.value?.getBoundingClientRect().x || 0) / window.innerWidth,
      },
    };

    function fire(particleRatio: number, opts: any) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  });

  useClientEffect$(() => {
    if (store.win) addFireworks();
  });

  const present = $(() => {
    modal.value?.click();
  });

  const codeSnippet = $(() => CodeSnippets[randomInRange(0, CodeSnippets.length - 1)]);

  return (
    <>
      {store.win ? (
        <>
          <input ref={modal} type="checkbox" id="my-modal" class="modal-toggle" />
          <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
              <h3 class="font-bold text-lg">Herzlichen Glückwunsch, zufälliger Internetnutzer!</h3>
              <p class="py-4">Sie wurden ausgewählt, um diesen speziellen Code-Snippet zu erhalten:</p>
              <div class="mockup-code bg-secondary">
                {CodeSnippets[randomInRange(0, CodeSnippets.length - 1)].map((text, index) => (
                  <pre data-prefix={index + 1}>
                    <code>{text}</code>
                  </pre>
                ))}
              </div>
              <div class="modal-action">
                <label for="my-modal" class="btn btn-primary">
                  Yay!
                </label>
              </div>
            </div>
          </div>
          <div ref={giftBtn} class="btn btn-primary w-full sm:w-auto gap-4" onclick$={present}>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
              <path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" />
            </svg>
            Geschenk
          </div>
        </>
      ) : (
        <div class="text-center">Schade, leider sind ein paar Antworten falsch...</div>
      )}
    </>
  );
});
