const result = {
  "1": {
    "a":"ira",
    "b":"orgullo",
    "c":"miedo"
  },
  "2": {
    "a":"miedo",
    "b":"ira",
    "c":"orgullo",
    "d":"amor",
    "e":"pena"
  },
  "3": {
    "a":"orgullo",
    "b":"amor",
    "c":"miedo",
    "d":"amor",
    "e":"ira"
  },
  "4": {
    "a":"ira",
    "b":"amor"
  },
  "5": {
    "a":"pena",
    "b":"orgullo"
  },
  "6": {
    "a":"amor",
    "b":"ira",
    "c":"orgullo",
    "d":"miedo",
    "e":"pena"
  },
  "7": {
    "a":"ira",
    "b":"miedo",
    "c":"amor",
    "d":"orgullo",
    "e":"pena"
  },
  "8": {
    "a":"orgullo",
    "b":"amor",
    "c":"pena",
    "d":"miedo"
  },
  "9": {
    "a":"orgullo",
    "b":"miedo",
    "c":"amor",
    "d":"pena",
    "e":"ira"
  },
  "10": {
    "a":"amor",
    "b":"pena",
    "c":"miedo",
    "d":"ira"
  },
  "11": {
    "a":1,
    "b":2,
    "c":3
  },
  "12": {
    "a":0,
    "b":3,
    "c":6,
    "d":9
  }
};

const PowerOptions = [
  { a: 'Barítono', b: "Artesano" }, // 1
  { a: 'Ilusionista', b: "Hombre Invisible" }, // 2
  { a: 'Manipulador', b: "Transmisor Emocional" }, // 3
  { a: 'Telépata', b: "Hipnotizador" }, // 4
  { a: 'Telequinésico', b: "Lector de Objetos" }, // 5
  { a: 'Urbanita', b: 'Salvaje' }, // 6
  { a: 'Entomólogo', b: 'Hombre de Sangre Fría' }, // 7
  { a: 'Tritón', b: 'Hombre Halcón' }, // 8
  { a: 'Metamorfo', b: 'Mímico' }, // 9
  { a: 'Clonador', b: 'Poseedor' }, // 10
  { a: 'Regenerador', b: 'Remendado' }, // 11
  { a: 'Termoquinético', b: 'Brujo Climático' }, // 12
  { a: 'Velocista', b: 'Reloj Humano' }, // 13
  { a: 'Cronauta', b: 'Teletransportador' }, // 14
  { a: 'Hombre Menguante', b: 'Gravitacional' }, // 15
  { a: 'Agujero Negro', b: 'Sanguijuela' }, // 16
  { a: 'Ser Negativo', b: 'Elemental' }, // 17
  { a: 'Espectro', b: 'Proyector Astral' }, // 18
  { a: 'Vampiro', b: 'Hombre Lobo' }, // 19
  { a: 'Satanista', b: 'Chamán' }, // 20
  { a: 'Matemático', b: 'Sinestésico' }, // 21
  { a: 'Mecamigo', b: 'Lingüista' }, // 22
  { a: 'Ciborg', b: 'Golem' }, // 23
  { a: 'Portador', b: 'Superpoder Viviente' } // 24
];

function showResults() {
  const header = document.querySelector('.header');
  const formContainer = document.querySelector('.form--container');
  const listPowerIndex = powerIndex - 1;
  const resultFragment = document.createRange().createContextualFragment(`
    <div class="result">
      <div class="result__header">
        <h2 class="result__title">Lista de atributos</h2>
        <ul class="result__traits-container">
          <li class="result__trait">Pena: ${Traits.pena}</li>
          <li class="result__trait">Amor: ${Traits.amor}</li>
          <li class="result__trait">Orgullo: ${Traits.orgullo}</li>
          <li class="result__trait">Ira: ${Traits.ira}</li>
          <li class="result__trait">Miedo: ${Traits.miedo}</li>
        </ul>
      </div>
      <div class="result__header">
        <h2 class="result__title">Poderes</h2>
        <ul class="result__powers-container">
          <li class="result__power-number">${powerIndex}</li>
          <li class="result__power">${PowerOptions[listPowerIndex].a}</li>
          <li class="result__power">${PowerOptions[listPowerIndex].b}</li>
        </ul>
      </div>
    </div>
  `);

  header.textContent = 'Resultados';
  formContainer.className = 'results-container';
  formContainer.replaceWith(resultFragment);
}

const form = document.querySelector('.form');
// set the minimum amount of attributes being 2 the minimum
const Traits = {
  pena: 2,
  amor: 2,
  orgullo: 2,
  ira: 2,
  miedo: 2
};
let powerIndex = 0;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const checkedInputs = form.querySelectorAll('input:checked');
  const phraseText = form.querySelector('textarea').value;
  const checkedInputsValues = Array.from(checkedInputs).map((input) => input.value);
  const attributes = checkedInputsValues.slice(0, -2);
  const powers = checkedInputsValues.splice(-2);

  // adds the proper attribute in the Traits object based in the result one
  attributes.forEach((attribute) => {
    const [question, option] = attribute.split('-');
    const trait = result[question][option];
    Traits[trait] += 2;
  });

  // add the power index based on the last 3 questions
  powers.forEach((power) => {
    const [question, option] = power.split('-');
    const powerValue = result[question][option];
    powerIndex += powerValue;
  });

  // add to the power index the amount of words used in the text area being 12+ if there are 6+ words
  powerIndex += phraseText.trim().split(/\s+/).length > 5 ? 12 : 0;
  showResults()
});
