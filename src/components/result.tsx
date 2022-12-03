import { $, component$, useClientEffect$, useContext, useMount$, useSignal, useStore } from "@builder.io/qwik";
import { QuizContext } from "~/routes";
import confetti from "canvas-confetti";

export default component$(() => {
  const ctx = useContext(QuizContext);
  const store = useStore({ win: false });
  const teamsBtn = useSignal<HTMLButtonElement>();

  const addTeams = $(() => {
    const teams = document.createElement("script");
    teams.setAttribute("src", "https://teams.microsoft.com/share/launcher.js");
    teams.async = true;
    document.head.appendChild(teams);
  });

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
        y: (teamsBtn.value?.getBoundingClientRect().y || 0) / window.innerHeight,
        x: (teamsBtn.value?.getBoundingClientRect().x || 0) / window.innerWidth,
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
    if (store.win) {
      addTeams();
      addFireworks();
    }
  });

  return (
    <>
      {store.win ? (
        <div class="btn btn-primary w-full sm:w-auto gap-4" onclick$={() => teamsBtn.value?.click()}>
          <div ref={teamsBtn} class="teams-share-button" data-msg-text="Ich bin ein Weihnachtsprofi!"></div>
          Auf Teams teilen
        </div>
      ) : (
        <div class="text-center">Schade, leider sind ein paar Antworten falsch...</div>
      )}
    </>
  );
});
