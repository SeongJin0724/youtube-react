import React from "react";
import Main from "../components/section/Main";
import { Today } from "../components/content/Today";
import Developer from "../components/content/Developer";
import VideoSlider from "../components/videos/VideoSlider";

import { portfolioText } from "../data/portfolio";
import { youtubeText } from "../data/youtube";
import { developerText } from "../data/developer";

const Home = () => {
  return (
    <Main title="LSJ 유튜브" description="LSJ 유튜브에 오신것을 환영합니다">
      <Today />
      <Developer
        videos={developerText}
        title="😪 추천 개발 유튜버를 소개합니다."
        id="developer"
      />

      <VideoSlider
        videos={portfolioText}
        title="🤗 포트폴리오 만드는 방법을 공유합니다."
        id="portfolio"
      />
      <VideoSlider
        videos={youtubeText}
        title="😱 지금 이 코딩을 영상으로"
        id="youtube"
      />
    </Main>
  );
};

export default Home;
