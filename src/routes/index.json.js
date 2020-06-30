const data = {
  meta: {
    title: "masbossun",
  },
  headline:
    "i am Ryan, a frontend web and mobile developer who crafts codes\nwith passion.",
  about: [
    "Hello, My name is Ryan Setiagi, self-motivated Frontend Developers who love to learn new things. My background is telecommunication. I used to code on vim and i am bad at typing. Most recently, i was a student at telkom university (2016-2019). I want to love reading and writing as well. You can find @masbossun on every daily social media.",
    "I’ve been falling in love with coding since i was at college, and coding is how i express my fellings. I have a great interests to learning and building something new. If you intersted, you can collaborate more with me.",
  ],
  projects: [
    {
      name: "winsen's site",
      url: "#",
      short_description:
        "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Eu adipiscing libero tellus pulvinar id felis. Porttitor id feugiat ut justo nibh ante duis. Sed commodo at sit porttitor arcu commodo ipsum. Lacus, nibh in aliquet ipsum tellus sit",
      thumbnail: "images/project-winsen-thumbnail.png",
      color: "#EA6161",
    },
    {
      name: "waruung",
      url: "#",
      short_description:
        "Waruung is food ordering platform. With waruung user can order kind of food, drink, baverages, etc from warung—indonesian minimart. Waruung has two different apps, for user and the merchant. Waruung mechant will sent. orders with their own express and fee.\n\nWith waruung, people can just order food easly.",
      thumbnail: "images/hijrah-thumbnail.png",
      color: "#FFC847",
    },
    {
      name: "hijrah",
      url: "#",
      short_description:
        "Quran is the Muslim holy book, but because of the sanctity of the Quran, people sometimes choose to keep it in a cupboard rather than carryin it. What if everything can be accessed easily via a smartphone. Quran apps with a simple interface and easy to use, can be the choice of the people, to focus on worship.",
      thumbnail: "images/project-hijrah-thumbnail.png",
      color: "#79D3A8",
    },
    {
      name: "bukom",
      url: "#",
      short_description:
        "With my colleague we made system that connect playgroup teacher with parents. Communcation is necessary, parents will happy if they know what their children achive everyday. Even teacher with ease can deliver information to parents before they skip.\n\nFor playrgroup firm, they also can give parents events or news in realtime.",
      thumbnail: "images/hijrah-thumbnail.png",
      color: "#55AEF6",
    },
  ],
  contacts: [
    {
      label: "email",
      url: "setiagi.ryan@gmail.com",
    },
    {
      label: "linkedin",
      url: "https://www.linkedin.com/in/ryan-setiagi/",
    },
    {
      label: "github",
      url: "https://github.com/masbossun/",
    },
    {
      label: "stackoverflow",
      url: "https://stackoverflow.com/users/9424214/masbossun/",
    },
    {
      label: "twitter",
      url: "https://twitter.com/masbossun/",
    },
    {
      label: "instagram",
      url: "https://instagram.com/masbossun/",
    },
  ],
  studies: [
    {
      start: new Date(2016, 7, 1).toString(),
      end: new Date(2019, 7, 1).toString(),
      institute: "Telkom University",
      location: "Bandung",
      degree: "Diploma of Telecommunication Enginering",
    },
  ],
  experiences: [
    {
      start: new Date(2018, 4, 1).toString(),
      end: new Date(2018, 6, 1).toString(),
      company: "Technopartner",
      location: "Yogyakarta",
      role: "Mobile Developer Internship",
    },
    {
      start: new Date(2018, 0, 1).toString(),
      end: new Date(2018, 5, 1).toString(),
      company: "Antares - Telkom",
      location: "Bandung",
      role: "Web Developer Internship",
    },
    {
      start: new Date(2019, 10, 1).toString(),
      end: null,
      company: "Rukita",
      location: "Jakarta",
      role: "Mobile Developer",
    },
  ],
};

const contents = JSON.stringify(data);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
