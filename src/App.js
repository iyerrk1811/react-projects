import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';
// import serviceWorker from './serviceWorker';

class App extends Component {
    render(){
        return <Game />;
    }    
}

class Square extends Component {
    render() {
      return (
        <button className="square">{}</button>
      );
    }
  }
  
  class Board extends Component{
    renderSquare(i){
      return <Square />;
    }
  
    render() {
      const status = 'Next Player: X';
      
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );  
    }
  }
  
  class Game extends Component{
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board></Board>
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }


export default App;

