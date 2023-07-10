import "./App.css";
import Jogo from "./Componentes/Jogo";
import Letras from "./Componentes/Letras";
import React, { useState } from 'react';
import palavras from './palavras';



function App() {
  const [erros, setErros] = useState(0)
  const [letraClicada, setLetraClicada] = useState([])
  const [palavraSorteada, setPalavraSorteada] = useState('')
  const [palavraSorteadaArray, setPalavraSorteadaArray] = useState([])
  const [corDaPalavra, setCorDaPalavra] = useState("black")
  const [letrasDesabitiladas, setLetrasDesabitiladas] = useState(true)


  function IniciarJogo(){
    reiniciarJogo();
    const numeroAleatorio = Math.floor(Math.random() * palavras.length);
    const palavra= palavras[numeroAleatorio];
    const tracinhos = palavra.split('').map(_ => " _ ")
    setPalavraSorteadaArray(tracinhos)
    setPalavraSorteada(palavra)
  }

  function CliclarNaLetra(letra){
    console.log(letra)
    setLetraClicada([...letraClicada, letra])
    const letraMinuscula = letra.toLowerCase()
    if(palavraSorteada.includes(letraMinuscula)){
      acertou(letraMinuscula)
    }else{
      const contaerros  = erros + 1
      setErros(contaerros)
      if(contaerros === 6){
        setCorDaPalavra("red");
        finalizarJogo();
         setPalavraSorteadaArray(palavraSorteada.split(""))

      }
    }
  }

  function acertou(letra){
    const palavraArray = palavraSorteada.split("");
    const novaPalavraJogo = [...palavraSorteadaArray]
    palavraArray.forEach((l, i) => {
      if(palavraArray[i] == letra){
        novaPalavraJogo[i] = ` ${letra} `
      }
    })
    setPalavraSorteadaArray(novaPalavraJogo)

    if(!novaPalavraJogo.includes(" _ ")){
      setCorDaPalavra("green")
      finalizarJogo()
    }
  }

  function finalizarJogo(){
    setLetraClicada([]);
    setLetrasDesabitiladas(true)
  }

  function reiniciarJogo(){
    setPalavraSorteada("");
    setErros(0);
    setPalavraSorteadaArray([]);
    setCorDaPalavra("black")
    setLetrasDesabitiladas(false)
  }

  return (
    <div className="App">
     
      <Jogo erros={erros} palavraSorteada={palavraSorteadaArray} corDaPalavra={corDaPalavra}  IniciarJogo={IniciarJogo} letraClicada={letraClicada}  />
      <Letras letraClicada={letraClicada} letrasDesabitiladas={letrasDesabitiladas} setLetraClicada={CliclarNaLetra} />
    </div>
  )
}

export default App;
