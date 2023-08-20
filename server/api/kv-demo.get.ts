export default eventHandler(async (event) => {
  const storage = useStorage("data");
  const pageVisits = ((await storage.getItem("pageVisits")) || 0) as number;
  const updatePageVisits = pageVisits + 1;
  await storage.setItem("pageVisits", updatePageVisits);
  return {
    pageVisits: updatePageVisits,
  };
});
