import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import request from "../utils/requests";
import requests from "../utils/requests";
const Home = ({ results }) => {
  return (
    <div>
      <Head>
        <title>Bulu</title>
      </Head>

      <Header />

      <Nav />
      <Results results={results} />
    </div>
  );
};
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const req = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: req.results,
    },
  };
}

export default Home;
