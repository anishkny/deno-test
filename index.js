addEventListener("fetch", (event) => {
  const response = new Response("Hello World!" + JSON.stringify(process.env, null, 2), {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
