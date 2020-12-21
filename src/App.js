// import React from 'react';
// import PropTypes from 'prop-types';

// function Food({ name, picture, rating }) {     //component have to start with Capital letter
//   console.log(rating);
//   return <div>
//     <h2>I love {name}</h2>
//     <h4>rating: {rating}/5.0</h4>
//     <img src={picture} alt={name} />
//   </div>;
// }

// Food.propTypes = {                         //propTypes's name should be "propTypes"!
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// }

// const foodILike = [
//   {
//     id: 1,     //react의 모든 element들은 다르게 보일 필요가 있다. 
//     name: "떡볶이",
//     image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/10/07/f43063e718c49d85ddce4880e4a41fcd1.jpg",
//     rating: 5
//   },
//   {
//     id: 2,
//     name: "순대",
//     image: "https://t1.daumcdn.net/liveboard/dailylife/8fd37dea7c2e410ebe5638503051b175.jpg",
//     rating: 5
//   },
//   {
//     id: 3,
//     name: "허니콤보",
//     image: "https://t1.daumcdn.net/cfile/tistory/9994533B5DF3952F34",
//     rating: 5
//   },
//   {
//     id: 4,
//     name: "피자",
//     image: "https://static.hubzum.zumst.com/hubzum/2020/03/26/15/98dcb59478a842aaafb8cc2a6a707ba4_780x584.jpg",
//     rating: 4
//   },
//   {
//     id: 5,
//     name: "김밥",
//     image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
//     rating: 4
//   }
// ]

// function renderFood(dish) {
//   return <Food key={dish.id} name={dish.name} picture={dish.image}></Food>  //key prop for React Internal Use!
// }

// function App() {
//   return (
//     <div classNameName="App">
//       {<Food
//         fav="tteokbokki"
//         something={true}
//         blah={["array", 1, 2, 3, 4,]}
//       />
//       {foodILike.map(renderFood)} }
//       {foodILike.map(dish =>
//         <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
//       )}

//     </div>
//   );
// }

// export default App;       //function component, #2 JSX & Props


// import React from "react";
// import PropTypes from "prop-types";

// className App extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("hello - constructor ");
//   }

//   state = {
//     count: 0
//   };

//   add = () => {
//     this.setState(current => ({ count: current.count + 1 })); {/*매순간 setState를 호출할 때 마다 react는 새로운 state와 함께 render function을 호출*/ }
//   };
//   minus = () => {
//     this.setState(current => ({ count: current.count - 1 })); {/*{count: this.state.count + 1}*/ }
//   };
//   componentDidMount() {
//     console.log("component rendered");
//   }
//   componentDidUpdate(){
//     console.log("I just updated");
//   }
//   componentWillUnmount(){
//     console.log("Goodbye, cruel world");
//   }

//   render() {
//     console.log("I'm rendering");
//     return <div>
//       <h1>The number is : {this.state.count}</h1>
//       <button onClick={this.add}>Add</button>  {/*this.add() is for Immediate call */}
//       <button onClick={this.minus}>Minus</button>
//     </div>;
//   }
// }

// export default App;       //#3 State

import React from "react";
import axios from "axios";
import Movie from "./Movie.js";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");     //비동기 ,get으로 가져온 것의.data.data.movies 표기, ES6 최신 문법
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({isLoading = false})
    // },6000);

    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;      //this.movies.state.movies or {movies}
    return (
      <section className="container">
        {isLoading
          ? (<div className="loader">
            <span className="loader_text">Loading....</span>
          </div>)
          : (
            <div className="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image} 
                  genres={movie.genres}/> //axios.get 한 것을 Movie.js로 export 
              ))}
            </div>
           )}   
      </section>);     //map should have return something
  }
}

export default App;
