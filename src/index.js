import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import useFetch from "react-fetch-hook";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false
    };
  }



  render() {
    const { error, isLoaded} = this.state;


    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      return (
        <ul>
         
        </ul>
      );
    }
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <p>L'api randomCat permet de renvoyer une image de chat aléatoire.</p>

          <p>Elle dispose de 2 types de données : fileSizeBytes , url.</p>
          <br></br>
          <br></br>
            <p>L'api randomDog permet de renvoyer une image de chien aléatoire.</p>
          <br></br>
         <p>Elle dispose de 5 types de données : id , url, webpurl, x, y.</p>
        </div>
        <div className="game-info">
          
        </div>
        <button className="btn" onClick={newImg}>2 API

        </button>
      </div>
    );
    function  newImg(){


      console.log("br");
      ReactDOM.render(
          <FetchRandomUser />,
          document.getElementById('root')
      );


    }
  }

}

export default class FetchRandomUser extends React.Component{

  state = {
    loading:true,
    person: null,
    fox:null,
  };

  async componentDidMount(){
    const url = "https://thatcopy.pw/catapi/rest/";
    const response = await fetch(url);
    const data = await response.json();


    this.setState({person : data,loading: false,fox:null});
    const urlFox = "https://random.dog/woof.json";
    const responseFox = await fetch(urlFox);
    const dataFox = await responseFox.json();
    this.setState({person : data,loading: false,fox:dataFox});
    var elem = document.createElement("img");
    elem.setAttribute("src", dataFox.url);
    elem.setAttribute("height", "500");
    elem.setAttribute("width", "700");
    document.getElementById("imgDog").appendChild(elem);
    console.log(dataFox.url);

  }


  render(){
    return (

        <div>

        {this.state.loading || !this.state.person ?(
              <div>loading...</div>
          )  :(
              <div className="imgCat">
                <img src={this.state.person.url} width="700"
                     height="500"></img>
              </div>

          ) }

          <div id="imgDog">

          </div>
          <button className="btn" onClick={newDoc}>Main page

          </button>
          </div>


    );

    function  newDoc(){


      console.log("br");
      ReactDOM.render(
          <Game />,
          document.getElementById('root')
      );


    }
  }



}




ReactDOM.render(<Game />, document.getElementById('root'));
/*export default function CallApi(){
  //const{isLoading}=useFetch("https://randomuser.me/api")
  fetch('https://api.github.com/users/hacktivist123/repos')
      .then(response => response.json())
      .then(data => console.log(data));
}*/



