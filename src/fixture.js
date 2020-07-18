const data = {
  meta: {
    title: "masbossun — any developer",
  },
  headline: "i am Ryan,\nsoftware developer.\ni crafts codes\nwith passion.",
  about: [
    "My name is Ryan Setiagi, currently working as a full-time mobile developer at [rukita](https://rukita.co), I’ve been falling in love with programming since i was at college, and coding is how i express my feelings.",
    "In the mean time, i wrote some stuff on my [blog](/blog/). Just to keep all my toughts saved, in case i need it in the future.",
    "I have a great interests to learning and building awesome stuff. If you are intersted, don't afraid to [contact me](#contacts).",
  ],
  //   [
  //   "Hello, My name is Ryan Setiagi, self-motivated Frontend Developers who love to learn new things. My background is telecommunication. I used to code on vim and i am bad at typing. Most recently, i was a student at telkom university (2016-2019). I want to love reading and writing as well. You can find @masbossun on every daily social media.",
  //   "I’ve been falling in love with coding since i was at college, and coding is how i express my fellings. I have a great interests to learning and building something new. If you intersted, you can collaborate more with me.",
  // ],
  projects: [
    {
      name: "winsen",
      url: "https://winsen.xyz",
      category: "website portfolio",
      started_at: 2020,
      short_description: "Winsen Tandra personal portofolio",
      description:
        "Build fully working responsive website portofolio. UI Design originally by client, i just build the web from scratch.",
      thumbnail: "images/works-winsen",
      color: "#EA6161",
    },
    {
      name: "rekber",
      url: "#",
      category: "mobile app",
      started_at: 2020,
      short_description: "payment gateway application",
      description:
        "Design user interface of a finance app called Rekber. This app accomodate better and safer transaction between users.",
      thumbnail: "images/works-rekber",
      color: "#E5E5E5",
    },
    {
      name: "hijrah",
      url: "#",
      category: "mobile app",
      started_at: 2020,
      short_description: "simple app for muslim's qur'an",
      description:
        "Build user intrface design of Muslim Qur'an apps, focusing on simple and minimalist interfaces.",
      thumbnail: "images/works-hijrah",
      color: "#79D3A8",
    },
    {
      name: "bukom digital",
      url: "#",
      category: "mobile app",
      started_at: 2019,
      short_description:
        "communication app for kindergarten teachers and parents",
      description:
        "Build hybrid app using React Native called Bukom or Buku Komunikasi (Communication Book in english)",
      thumbnail: "images/works-bukom-digital",
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

export default data;
