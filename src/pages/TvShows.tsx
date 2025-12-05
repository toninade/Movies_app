import CoverImg from "../components/CoverImg";
import HomeCardMovies from "../components/HomeCardMovies";
import { popularShows, top_rated_shows, airing_today } from "../modules/ApiKey";

const TvShows = () => {
  const Sections = {
    showMovies: false,
    showtv: true,
    numberOfMovies: 6,
    showBtns: true,
  };
  return (
    <div className="tvShows">
      <CoverImg
        title={"Tv Shows Now on Local "}
        prag={"watch the top  Tv Shows on Cinema At Home For Free"}
        smallPrag={"Watch More Than 10000 of Tv Shows"}
        showImg={true}
        showInpt={false}
      />
      <HomeCardMovies
        {...Sections}
        header_line="Popular Shows"
        api_endpoint={popularShows}
        numberOfMovies={12}
      />
      <HomeCardMovies
        {...Sections}
        header_line="Top Rating On Tv"
        api_endpoint={top_rated_shows}
        numberOfMovies={12}
      />
      <HomeCardMovies
        {...Sections}
        header_line="Now Streaming"
        api_endpoint={airing_today}
        numberOfMovies={18}
      />
    </div>
  );
};

export default TvShows;
