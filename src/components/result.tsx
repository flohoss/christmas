import { $, component$, render, useClientEffect$, useContext, useMount$, useSignal, useStore } from "@builder.io/qwik";
import { QuizContext } from "~/routes";
import confetti from "canvas-confetti";
import { CodeSnippets, randomInRange } from "~/code/code";

export default component$(() => {
  const ctx = useContext(QuizContext);
  const store = useStore({ win: false, codeSnippet: [""] });
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
    store.codeSnippet = CodeSnippets[Math.floor(randomInRange(0, CodeSnippets.length - 1))];
    modal.value?.click();
  });

  return (
    <>
      {store.win ? (
        <>
          <input ref={modal} type="checkbox" id="my-modal" class="modal-toggle" />
          <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
              <h3 class="font-bold text-lg">Herzlichen Glückwunsch, zufälliger Internetnutzer!</h3>
              <p class="py-4">Dafür gibts diesen speziellen Code-Snippet:</p>
              <div class="mockup-code bg-secondary">
                {store.codeSnippet.map((text, index) => (
                  <pre data-prefix={index + 1}>
                    <code>{text}</code>
                  </pre>
                ))}
              </div>
              <div className="flex items-center py-4 gap-4">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512">
                  <path d="M200.6 32C205 19.5 198.5 5.8 186 1.4S159.8 3.5 155.4 16L144.7 46.2l-9.9-29.8C130.6 3.8 117-3 104.4 1.2S85 19 89.2 31.6l8.3 25-27.4-20c-10.7-7.8-25.7-5.4-33.5 5.3s-5.4 25.7 5.3 33.5L70.2 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H200.6c-5.4-9.4-8.6-20.3-8.6-32V256c0-29.9 20.5-55 48.2-62c1.8-31 17.1-58.2 40.1-76.1C271.7 104.7 256.9 96 240 96H217.8l28.3-20.6c10.7-7.8 13.1-22.8 5.3-33.5s-22.8-13.1-33.5-5.3L192.5 55.1 200.6 32zM363.5 185.5L393.1 224H344c-13.3 0-24-10.7-24-24c0-13.1 10.8-24 24.2-24c7.6 0 14.7 3.5 19.3 9.5zM272 200c0 8.4 1.4 16.5 4.1 24H272c-26.5 0-48 21.5-48 48v80H416V256h32v96H640V272c0-26.5-21.5-48-48-48h-4.1c2.7-7.5 4.1-15.6 4.1-24c0-39.9-32.5-72-72.2-72c-22.4 0-43.6 10.4-57.3 28.2L432 195.8l-30.5-39.6c-13.7-17.8-35-28.2-57.3-28.2c-39.7 0-72.2 32.1-72.2 72zM224 464c0 26.5 21.5 48 48 48H416V384H224v80zm224 48H592c26.5 0 48-21.5 48-48V384H448V512zm96-312c0 13.3-10.7 24-24 24H470.9l29.6-38.5c4.6-5.9 11.7-9.5 19.3-9.5c13.4 0 24.2 10.9 24.2 24z" />
                </svg>
                <div class="text-lg">Frohe Weihnachten!</div>
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
