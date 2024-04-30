import $ from "https://deno.land/x/dax@0.39.2/mod.ts";

const result = await $`ls`.text();
const files = result.split("\n");

const selectedId = await $.select({
  message: "Select a file to cat:",
  options: files,
});
const selectedFile = files[selectedId];

await $`cat ${selectedFile}`;
