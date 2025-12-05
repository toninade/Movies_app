import CoverImg from "../components/CoverImg";
import HomeCardMovies from "../components/HomeCardMovies";
import { trending, now_playing, top_movies } from "../modules/ApiKey";

const NowPlaying = () => {
  const Sections = {
    showMovies: true,
    showtv: false,
    numberOfMovies: 6,
    showBtns: false,
  };
  return (
    <div className="now-playing">
      <CoverImg
        title={"The Movies & Tv Shows Are Streaming "}
        prag={"the Streaming Tv and Movies"}
        smallPrag={"Now Playing & Airing Today"}
        showImg={true}
        showInpt={false}
      />
      <HomeCardMovies
        {...Sections}
        header_line="Top Rateing"
        api_endpoint={top_movies}
        numberOfMovies={6}
      />
      <HomeCardMovies
        {...Sections}
        header_line="Now Playing"
        api_endpoint={now_playing}
        numberOfMovies={18}
      />
      <HomeCardMovies
        {...Sections}
        header_line="Trending"
        api_endpoint={trending}
        numberOfMovies={12}
      />
    </div>
  );
};

export default NowPlaying;
