const content = "Hello World!";
await Deno.writeTextFile("hello.txt", content);
console.log("File written.");
