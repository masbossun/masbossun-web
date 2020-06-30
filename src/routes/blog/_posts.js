import fs from "fs";
import path from "path";
import showdown from "showdown";

const explorer = (md) => {
  const metaRegex = /.+?(?<=(\+\+\+END\+\+\+))/s;
  const matchMeta = md.match(metaRegex);
  const content = md.replace(metaRegex, "");

  if (!matchMeta) {
    return { ...{}, content };
  }

  const rawData = matchMeta[0]
    .split(/\r?\n/)
    .filter((S) => S && !S.startsWith("#"))
    .map((S) => {
      const split = S.split(": ");
      const key = split[0].trim().toLowerCase().replace(/\s/g, "_");
      let value = split[1].trim().replace(/['"]+/g, "");

      if (key === "category") {
        value = value.split(/,\s|,/).filter((S) => S);
      }

      return { [key]: value };
    });

  const data = Object.assign({}, ...rawData);

  return { data, content };
};

const getAllPosts = () => {
  const pathToContents = "src/routes/blog/_content";
  const posts = fs.readdirSync(pathToContents).map((dirName, i) => {
    const post = fs.readFileSync(
      path.resolve(pathToContents, dirName + "/index.md"),
      "utf-8",
    );

    return explorer(post);
  });

  return posts;
};

showdown.extension("image-paragraph", function () {
  return [
    {
      type: "output",
      regex: /<p><img(.*?)>(.*?)<\/p>/gi,
      replace: function (s, match) {
        return `<img${match}>`;
      },
    },
  ];
});

const converter = new showdown.Converter(
  { extensions: ["image-paragraph"] },
);
const posts = getAllPosts()
  .map(({ data, content }) => {
    const html = converter.makeHtml(content.replace(/^\t{3}/gm, ""));
    return {
      ...data,
      html,
    };
  })
  .reverse();

export default posts;
