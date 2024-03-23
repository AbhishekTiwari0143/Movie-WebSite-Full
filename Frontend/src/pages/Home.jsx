import Header from "./Movies/Header";
import MoviesContainerPage from "./Movies/MoviesContainerPage";

const Home = () => {
  return (
    <>
      <Header />
      <section className="relative mt-[10rem]">
        <MoviesContainerPage />
      </section>
    </>
  );
};

export default Home;
