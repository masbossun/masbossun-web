const data = {
  meta: {
    title: "masbossun",
  },
  headline:
    "i am Ryan,\na frontend web and\n mobile develo-per who crafts codes\nwith passion.",
  about: [
    "Hello, My name is Ryan Setiagi, self-motivated Frontend Developers who love to learn new things. My background is telecommunication. I used to code on vim and i am bad at typing. Most recently, i was a student at telkom university (2016-2019). I want to love reading and writing as well. You can find @masbossun on every daily social media.",
    "I’ve been falling in love with coding since i was at college, and coding is how i express my fellings. I have a great interests to learning and building something new. If you intersted, you can collaborate more with me.",
  ],
  projects: [
    {
      name: "winsen's site",
      url: "#",
      short_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu adipiscing lib. Eu adipiscing lib.",
      thumbnail: "images/project-winsen-thumbnail.png",
      color: "#EA6161",
    },
    {
      name: "waruung",
      url: "#",
      short_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu adipiscing lib. Eu adipiscing lib.",
      thumbnail: "images/project-waruung-thumbnail.png",
      color: "#FFC847",
    },
    {
      name: "hijrah",
      url: "#",
      short_description:
        "Quran apps with a simple interface and easy to use, can be the choice of the people, to focus on worship.",
      thumbnail: "images/project-hijrah-thumbnail.png",
      color: "#79D3A8",
    },
    {
      name: "bukom",
      url: "#",
      short_description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu adipiscing lib. Eu adipiscing lib.",
      thumbnail: "images/project-bukom-digital-thumbnail.png",
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
