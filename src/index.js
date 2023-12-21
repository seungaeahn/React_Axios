import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MovieList from './MovieList';
import PostAPI from './PostAPI';
import DogInfo from './DogInfo';
import JokeAPI from './JokeAPI';
import UserAPI from './UserAPI';
import PostComment from './PostComment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MovieCard /> */}
    {/* <MovieList/> */}
    {/* <PostAPI/> */}
    {/* <DogInfo/> */}
    {/* <JokeAPI /> */}
    {/* <UserAPI /> */}
    <PostComment />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
