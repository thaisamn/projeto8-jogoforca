import "../App.css";


export default function Letras({letraClicada, setLetraClicada, letrasDesabitiladas}) {

  const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    function Clique(letra){
      setLetraClicada(letra);
    }


  return (
    <div className="Letra">
     {alfabeto.map(letra =>  <button disabled={letraClicada.includes(letra) || letrasDesabitiladas} onClick={ _ => Clique(letra) } className="abc" >{letra}</button>)}
    </div>
  );
}

