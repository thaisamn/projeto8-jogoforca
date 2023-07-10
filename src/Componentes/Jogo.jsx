import React, { useState } from 'react';
import palavras from '../palavras';

const imagensForca = [
  'assets/img/forca0.png',
  'assets/img/forca1.png',
  'assets/img/forca2.png',
  'assets/img/forca3.png',
  'assets/img/forca4.png',
  'assets/img/forca5.png',
  'assets/img/forca6.png',
];


export default function Jogo({erros, palavraSorteada, IniciarJogo, corDaPalavra}) {
  
 
  
  return (
    <div className="Jogo">
      {imagensForca.map((imagenForca, index) =>  <img data-test="game-image" src={imagenForca} alt="" style={{
        display: erros == index ? "block" : "none"
      }} />  )}
    <div className='ColunaPalavras'>
    <button data-test="choose-word" onClick={IniciarJogo}>Escolher Palavra</button>  

    <h1 data-test="word" style={{color: corDaPalavra}}>{palavraSorteada.map(letra => letra)}</h1> 
    </div>
    </div>
  )
}









 
  
  
  
  