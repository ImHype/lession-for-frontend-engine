// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json({
    code: 200,
    data: [
      {
        name: "hello",
        content: "hello world",
      },
      {
        name: "hello",
        content: "hello world",
      },
      {
        name: "hello",
        content: "hello world",
      },
      {
        name: "hello",
        content: "hello world",
      },
      {
        name: "hello",
        content: "hello world",
      },
    ],
  });
};
