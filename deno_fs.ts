const content = await Deno.readTextFile("README.md");
const headings = content.split("\n")
  .filter((line) => line.startsWith("# "))
  .map((line) => line.slice(2))
  .join(
    "\n",
  );
console.log(headings);
