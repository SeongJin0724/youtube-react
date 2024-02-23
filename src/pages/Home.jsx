import React from "react";
import Main from "../components/section/Main";
import { Today } from "../components/content/Today";
import { Website } from "../components/content/Website";
import { Portfolio } from "../components/content/Portfolio";
import { Youtube } from "../components/content/Youtube";
import Developer from "../components/content/Developer";

const Home = () => {
  return (
    <Main title="LSJ 유튜브" description="LSJ 유튜브에 오신것을 환영합니다">
      <Today />
      <Developer />
      <Website />
      <Portfolio />
      <Youtube />
    </Main>
  );
};

export default Home;
