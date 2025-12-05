import CoverImg from "../components/CoverImg";
import HomeCardMovies from "../components/HomeCardMovies";
import {
  trending,
  popular,
  upComing,
  top_movies,
  top_rated_shows,
  airing_today,
} from "../modules/ApiKey";

const Home = () => {
  const Sections = {
    showMovies: true,
    showtv: false,
    numberOfMovies: 6,
    showBtns: true,
  };

  return (
    <div className="Home-page">
      <CoverImg
        title={"Welcome to Cinma At Home"}
        prag={"watch more than 10000 Movies On Cinma At Home"}
        smallPrag={"Popular & Top Rating & Tv Shows"}
        showImg={true}
        showInpt={true}
      />
      <HomeCardMovies
        {...Sections}
        header_line="Trending"
        api_endpoint={trending}
        numberOfMovies={12}
      />
      <HomeCardMovies
        {...Sections}
        header_line="Popular"
        api_endpoint={popular}
      />
      <HomeCardMovies
        {...Sections}
        header_line="Coming Soon"
        api_endpoint={upComing}
      />
      <HomeCardMovies
        {...Sections}
        header_line="Top Movies"
        api_endpoint={top_movies}
        numberOfMovies={12}
      />
      <HomeCardMovies
        {...Sections}
        header_line="Top Rating Tv"
        api_endpoint={top_rated_shows}
        showMovies={false}
        showtv={true}
      />
      <HomeCardMovies
        {...Sections}
        header_line="Streaming "
        api_endpoint={airing_today}
        numberOfMovies={12}
        showMovies={false}
        showtv={true}
      />
    </div>
  );
};

export default Home;
