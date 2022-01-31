async function instantiate() {
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
