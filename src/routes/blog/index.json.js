import fs from "fs";
import fm from "front-matter";
import { formatDate } from "../../helper";
import { compile } from "mdsvex";

const getPosts = async () => {
  const LIMIT = 60;
  let result = [];
  const dir = fs.readdirSync("./src/routes/blog");
  const svxs = dir.filter((S) => S.endsWith(".svx"));

  for (let index = 0; index < svxs.length; index++) {
    const element = svxs[index];
    const content = fs.readFileSync(`./src/routes/blog/${element}`, {
      encoding: "utf-8",
    });
    const { attributes, body } = fm(content);
    const compiled = await compile(body.split(" ").slice(0, LIMIT).join(" "));
    result = [
      ...result,
      {
        ...attributes,
        formattedDate: formatDate(attributes.date),
        short: compiled.code.replace(/(<([^>]+)>)/gi, "") + "...",
      },
    ];
  }

  return new Promise((resolve) => {
    if (result && result.length) {
      resolve(result.sort((a, b) => new Date(b.date) - new Date(a.date)));
    } else {
      resolve([]);
    }
  });
};

export async function get(req, res, next) {
  const posts = await getPosts();
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ posts }));
}
