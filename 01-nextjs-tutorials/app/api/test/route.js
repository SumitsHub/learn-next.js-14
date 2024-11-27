export const GET = req => {
  console.log(req.url);

  return Response.json({ message: "All Good" });
};
