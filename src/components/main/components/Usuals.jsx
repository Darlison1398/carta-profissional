import React from "react";

function Usuals () {
    const mt = { marginTop: '5em'};

    return (
        <div class="container-usual" style={mt}>
            <ul class="cards">
              <li class="card cards__item">
                <div class="card__frame">
                  <h2 class="card__title">Python</h2>
                </div>
                <div class="card__overlay"></div>
                <div class="card__content">
                  <h2>Python</h2>
                  <p>  
                      Meus estudos em programação se iniciaram na linguagem python, onde tive uma boa base 
                      de lógica de programação nessa tecnologia fantástica.
                   </p>
                </div>
              </li>
              <li class="card cards__item">
                <div class="card__frame">
                  <h2 class="card__title">Php</h2>
                </div>
                <div class="card__overlay"></div>
                <div class="card__content">
                  <h2>Php</h2>
                  <p>
                    Comecei a estudar essa tecnologia em 2023 quando tive a minha primeira oportunidade em uma 
                    empresa, e o php era a principal tecnologia usada nela. No ambiente de trabalho, usei alguns
                    frameworks dela, como o codeigniter e o laravel.
                  </p>
                </div>
              </li>
              <li class="card cards__item">
                <div class="card__frame">
                  <h2 class="card__title">MongoDB</h2>
                </div>
                <div class="card__overlay"></div>
                <div class="card__content">
                  <h2>MongoDB</h2>
                  <p>
                    Usei essa tecnologia em projetos da faculdade. Na época, foi apenas para questão de estudos,
                    mas obtive uma boa base nela. Futuramente, pretendo me aprofundar um pouco mais nela.
                  </p>
                </div>
              </li>
            </ul>
        </div>
    );
};

export default Usuals;