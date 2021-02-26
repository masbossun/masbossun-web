import fs from "fs";
import fm from "front-matter";

function formatDate(dates) {
  const MONTH = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date(dates);
  const date = d.getDate();
  const month = MONTH[d.getMonth()];
  const year = d.getFullYear();

  return `${date} ${month} ${year}`;
}

const posts = fs
  .readdirSync("./src/routes/blog")
  .filter((S) => S.endsWith(".svx"))
  .map((S) => {
    const content = fs.readFileSync(`./src/routes/blog/${S}`, {
      encoding: "utf-8",
    });
    const { attributes, body } = fm(content);
    return {
      ...attributes,
      formattedDate: formatDate(attributes.date),
      short: body.substr(0, 200),
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));
export async function get(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ posts }));
}
