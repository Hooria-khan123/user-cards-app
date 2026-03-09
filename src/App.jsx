import "./App.css";
import UserCard from "../src/components/UserCard";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";

import man1 from "./assets/man1.avif";
import man2 from "./assets/man2.avif";
import man3 from "./assets/man3.jpg";
import man4 from "./assets/man4.webp";
import woman1 from "./assets/woman.avif";
import woman2 from "./assets/female2.jpg";
import woman3 from "./assets/female3.jpg";
import woman4 from "./assets/woman4.jpg";

import { MdFavoriteBorder } from "react-icons/md";

const App = () => {
  const users = [
    {
      name: "Amelia",
      detail: "MERN Stack Developer",
      image: woman1,

      ratings: [
        { icon: <MdFavoriteBorder />, value: "50k" },
        { icon: <MdFavoriteBorder />, value: "90k" },
        { icon: <MdFavoriteBorder />, value: "15k" },
      ],
      logos: [<GoMail />, <FaGithub />, <FaFacebook />, <FaLinkedin />],
    },

    // 2

    {
      name: "Harry",
      detail: "UI/UX Designer",
      image: man1,

      ratings: [
        { icon: <MdFavoriteBorder />, value: "80k" },
        { icon: <MdFavoriteBorder />, value: "35k" },
        { icon: <MdFavoriteBorder />, value: "87k" },
      ],
      logos: [<GoMail />, <FaGithub />, <FaFacebook />, <FaLinkedin />],
    },

    // 3

    {
      name: "Sophia",
      detail: "Mobile App Developer",
      image: woman2,

      ratings: [
        { icon: <MdFavoriteBorder />, value: "65k" },
        { icon: <MdFavoriteBorder />, value: "95k" },
        { icon: <MdFavoriteBorder />, value: "18k" },
      ],
      logos: [<GoMail />, <FaGithub />, <FaFacebook />, <FaLinkedin />],
    },

    // /4/

    {
      name: "Jack",
      detail: "Data Analyst",
      image: man2,

      ratings: [
        { icon: <MdFavoriteBorder />, value: "45k" },
        { icon: <MdFavoriteBorder />, value: "25k" },
        { icon: <MdFavoriteBorder />, value: "54k" },
      ],
      logos: [<GoMail />, <FaGithub />, <FaFacebook />, <FaLinkedin />],
    },

    // 5

    {
      name: "Olivia",
      detail: "Frontend Developer",
      image: woman3,

      ratings: [
        { icon: <MdFavoriteBorder />, value: "60k" },
        { icon: <MdFavoriteBorder />, value: "80k" },
        { icon: <MdFavoriteBorder />, value: "10k" },
      ],
      logos: [<GoMail />, <FaGithub />, <FaFacebook />, <FaLinkedin />],
    },

    // 6

    {
      name: "Oliver",
      detail: "Backend Developer",
      image: man3,

      ratings: [
        { icon: <MdFavoriteBorder />, value: "34k" },
        { icon: <MdFavoriteBorder />, value: "68k" },
        { icon: <MdFavoriteBorder />, value: "87k" },
      ],
      logos: [<GoMail />, <FaGithub />, <FaFacebook />, <FaLinkedin />],
    },

    // 7

    {
      name: "Isla",
      detail: "Software Engineer",
      image: woman4,

      ratings: [
        { icon: <MdFavoriteBorder />, value: "60k" },
        { icon: <MdFavoriteBorder />, value: "50k" },
        { icon: <MdFavoriteBorder />, value: "15k" },
      ],
      logos: [<GoMail />, <FaGithub />, <FaFacebook />, <FaLinkedin />],
    },

    // 8

    {
      name: "George",
      detail: "DevOps Engineer",
      image: man4,

      ratings: [
        { icon: <MdFavoriteBorder />, value: "430k" },
        { icon: <MdFavoriteBorder />, value: "32k" },
        { icon: <MdFavoriteBorder />, value: "74k" },
      ],
      logos: [<GoMail />, <FaGithub />, <FaFacebook />, <FaLinkedin />],
    },


  ];
  return (
    <div className="container">
      {users.map((user, idx) => (
        <UserCard
          key={idx}
          name={user.name}
          image={user.image}
          detail={user.detail}
          ratings={user.ratings}
          logos={user.logos}
        />
      ))}
    </div>
  );
};

export default App;
