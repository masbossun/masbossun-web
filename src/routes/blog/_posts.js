import fs from "fs";
import path from "path";
import showdown from "showdown";

const explorer = md => {
  const rawData = md
    .match(/---([^]+?)---/gi)[0]
    .split(/\r?\n/)
    .filter(S => S !== "---")
    .map(S => {
      const split = S.split(": ");
      return { [split[0].trim()]: split[1].trim().replace(/['"]+/g, "") };
    });

  const content = md.replace(/---([^]+?)---/gi, "");
  const data = Object.assign({}, ...rawData);

  return { data, content };
};

const getAllPosts = () => {
  const pathToContents = "src/routes/blog/_content";
  const posts = fs.readdirSync(pathToContents).map((dirName, i) => {
    const post = fs.readFileSync(
      path.resolve(pathToContents, dirName + "/index.md"),
      "utf-8"
    );

    return explorer(post);
  });

  return posts;
};

showdown.extension("image-location", function() {
  var matches = [];
  return [
    {
      type: "lang",
      regex: /(?<=src=")(.*)(?=")/gi,
      replace: function(s, match) {
        matches.push(match);
        var n = matches.length - 1;
        return "%PLACEHOLDER" + n + "%";
      }
    },
    {
      type: "output",
      filter: function(text) {
        for (var i = 0; i < matches.length; ++i) {
          var pat = "%PLACEHOLDER" + i + "%";
          text = text.replace(new RegExp(pat, "gi"), "blog/" + matches[i]);
        }
        matches = [];
        return text;
      }
    }
  ];
});

const converter = new showdown.Converter({ extensions: ["image-location"] });
const posts = getAllPosts()
  .map(({ data, content }) => {
    const html = converter.makeHtml(content.replace(/^\t{3}/gm, ""));
    return {
      ...data,
      html
    };
  })
  .reverse();

export default posts;
