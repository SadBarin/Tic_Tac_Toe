import React from 'react'

function Square(props) {
  return (
    <button className="square m-1 border border-gray-400 rounded-xl p-0 h-20 w-20 text-3xl text-gray-500 font-bold text-center float-left focus:outline-none" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square
