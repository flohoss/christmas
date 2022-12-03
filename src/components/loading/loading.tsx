import { component$, useStyles$ } from "@builder.io/qwik";
import style from "./style.css?inline";

export default component$(() => {
  useStyles$(style);
  return (
    <div class="center">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
});
