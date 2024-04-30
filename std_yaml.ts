import { parse } from "https://deno.land/std@0.224.0/yaml/mod.ts";

const result = parse(`
name: taro
age: 30
colors:
  - red
  - green
  - blue
`);

console.log(result);
