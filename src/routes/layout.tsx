import { component$, Slot } from "@builder.io/qwik";
import Snow from "~/components/snow";
import Qwik from "~/components/logo/qwik";

export default component$(() => {
  return (
    <>
      <main class="mx-auto w-full max-w-2xl font-bold">
        <div class="flex items-center justify-center mt-5 mb-10 gap-5">
          <Snow />
          <img src="/logo.png" class="w-56" alt="Pep Digital Logo" />
        </div>
        <section>
          <Slot />
        </section>
        <div class="h-12"></div>
      </main>
      <div class="fixed bottom-0 w-full p-2 flex items-start justify-center gap-2 text-sm bg-base-100">
        <div>gebaut mit</div>
        <a class="link" href="https://qwik.builder.io/">
          <Qwik width={80} />
        </a>
      </div>
    </>
  );
});
