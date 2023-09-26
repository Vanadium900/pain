import { IS_BROWSER } from "$fresh/runtime.ts";

export default function Testcomp() {
  if (IS_BROWSER) {
    const hidiv = document.getElementById("hi") as HTMLElement;
    hidiv.classList.remove("bg-[#86efac]")
    hidiv.classList.add("bg-red-500")
  }

  return (
    <div>
      <div id="hi" class="px-4 py-8 mx-auto bg-[#86efac]"></div>
    </div>
  );
}
