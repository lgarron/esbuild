async function instantiate() {
  const foo = 4;
  const workerEntryFileURL1 = new URL("./worker.js", foo);
  const workerEntryFileURL2 = new URL("./worker.js", foo.zoo);
  const workerEntryFileURL = new URL("./worker.js", import.meta.url);
  return new Worker(workerEntryFileURL, { type: "module" });
}

(async () => {
  const worker = await instantiate();
  worker.addEventListener("message", (message) =>
    console.log("Received message:", 4)
  );
  // This should receive 4, which will be printed by the previous line.
  worker.postMessage(3);
})();
