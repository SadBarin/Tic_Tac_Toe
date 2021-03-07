import React from 'react'
import GameBoard from './game-board'

export default class Game extends React.Component {
  render() {
    return (
      <div className="game h-full w-full flex justify-center items-center">
        <div className="game-board">
          <GameBoard/>
        </div>
      </div>
    );
  }
}
