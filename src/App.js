import './App.css';
import axios from 'axios';
import React from "react";
import { useEffect, useState } from "react";

function App() {
  const baseURL = "https://gamenodeback.herokuapp.com/ranking";
  const [answer, setAnswer] = useState([])
  
  useEffect(() => {
    console.log(baseURL)
    axios.get(baseURL)
      .then(response => setAnswer(response.data))

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Classificação
        </h3>
        <table className="tabela">
          <thead>
            <tr id="Ranking">
              <th id="l_posicao">Posição</th>
              <th id="l_jogador">Jogadores</th>
              <th id="l_pontuacao">Pontuação</th>
            </tr>
          </thead>
          <tbody>
            {answer.map((item, i) => {
              item.posicao = (i + 1 ) + "º";
              return (
                <> 
                  <tr id={item}>
                    <td id={item.posicao}>{item.posicao}</td>
                    <td id={item.jogador}>{item.jogador}</td>
                    <td id={item.pontuacao}>{item.pontuacao}</td>                        
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
