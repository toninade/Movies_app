import CoverImg from "../components/CoverImg";
import HomeCardMovies from "../components/HomeCardMovies";
import { trending, top_movies, popular } from "../modules/ApiKey";

const Popular = () => {
  const Sections = {
    showMovies: true,
    showtv: false,
    numberOfMovies: 6,
    showBtns: false,
  };
  return (
    <div className="popular">
      <CoverImg
        title={"Watch the Most Popular Movies"}
        prag={"watch more than 10000 "}
        smallPrag={"Top Rating & Popular Movies"}
        showImg={true}
        showInpt={false}
      />
      <HomeCardMovies
        {...Sections}
        header_line="Popular"
        api_endpoint={popular}
        numberOfMovies={18}
      />
      <HomeCardMovies
        {...Sections}
        header_line="Top Movies"
        api_endpoint={top_movies}
        numberOfMovies={12}
      />
      <HomeCardMovies
        {...Sections}
        header_line="Trending"
        api_endpoint={trending}
        numberOfMovies={6}
        showBtns={true}
      />
    </div>
  );
};

export default Popular;
