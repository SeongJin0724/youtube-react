import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

export const headerMenus = [
  {
    title: "LSJ Youtube List",
    icon: <CiBaseball />,
    src: "/",
  },
  {
    title: "추천 영상",
    icon: <CiMoneyBill />,
    src: "/today",
  },
  {
    title: "추천 유튜버",
    icon: <CiCoins1 />,
    src: "/developer",
  },

  {
    title: "포트폴리오 사이트",
    icon: <CiDumbbell />,
    src: "/port",
  },
];

export const searchKeyword = [
  {
    title: "LSJ Git",
    src: "/search",
  },
  {
    title: "HTML",
    src: "/search/html",
  },
  {
    title: "CSS",
    src: "/search/css",
  },
  {
    title: "JavaScript",
    src: "/search/javascript",
  },
  {
    title: "React.js",
    src: "/search/react.js",
  },
  {
    title: "Vue.js",
    src: "/search/vue.js",
  },
  {
    title: "Next.js",
    src: "/search/next.js",
  },
  {
    title: "Node.js",
    src: "/search/node.js",
  },
  {
    title: "SQL",
    src: "/search/sql",
  },
  {
    title: "portfolio",
    src: "/search/React Portfolio",
  },
  {
    title: "music",
    src: "/search/NewJeans",
  },
];

export const snsLink = [
  {
    title: "github",
    url: "https://github.com/SeongJin0724/youtube-react",
    icon: <AiFillGithub />,
  },
  {
    title: "youtube",
    url: "https://www.youtube.com",
    icon: <AiFillYoutube />,
  },
  {
    title: "codepen",
    url: "https://codepen.io",
    icon: <AiOutlineCodepen />,
  },
];
