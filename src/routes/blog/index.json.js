import posts from "./_posts.js";

const data = {
  posts,
  headline: "I wrote something that I might forget",
};

const contents = JSON.stringify(data);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
