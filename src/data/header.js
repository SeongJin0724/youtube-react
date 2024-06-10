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
    title: "추천 개발 유튜버",
    icon: <CiCoins1 />,
    src: "/developer",
  },

  {
    title: "포트폴리오 가이드",
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
    src: "/search/자바스크립트",
  },
  {
    title: "React",
    src: "/search/React.js",
  },
  {
    title: "Vue.js",
    src: "/search/Vue.js",
  },
  {
    title: "Next.js",
    src: "/search/next.js",
  },
  {
    title: "Node.js",
    src: "/search/노드",
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
    title: "NewJeans",
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
    url: "https://www.youtube.com/@nomadcoders",
    icon: <AiFillYoutube />,
  },
  {
    title: "codepen",
    url: "https://codepen.io",
    icon: <AiOutlineCodepen />,
  },
];
