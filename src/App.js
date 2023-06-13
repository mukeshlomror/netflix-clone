import './App.css';
import requests from './requests';
import Row from './Row.js';
import Banner from './Banner.js'
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl = {requests.fetchNetflixOriginals}/>
      <Row title="TRENDING" fetchUrl = {requests.fetchTrending}/>
      <Row title="TOP RATED" fetchUrl = {requests.fetchTopRated}/>
      <Row title="ACTION MOVIES" fetchUrl = {requests.fetchActionMovies}/>
      <Row title="COMEDY MOVIES" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title="HORROR MOVIES" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title="ROMANCE MOVIES" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title="DOCUMENTRIES" fetchUrl = {requests.fetchDocumentaries}/>


    </div>
  );
}

export default App;
