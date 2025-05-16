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
    "d":"orgullo",
    "e":"ira"
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
  { a: 'Barítono', b: "Artesano" },
  { a: 'Ilusionista', b: "Hombre Invisible" },
  { a: 'Manipulador', b: "Transmisor Emocional" },
  { a: 'Telépata', b: "Hipnotizador" },
  { a: 'Telequinésico', b: "Lector de Objetos" },
  { a: 'Urbanita', b: 'Salvaje' },
  { a: 'Entomólogo', b: 'Hombre de Sangre Fría' },
  { a: 'Tritón', b: 'Hombre Halcón' },
  { a: 'Metamorfo', b: 'Mímico' },
  { a: 'Clonador', b: 'Poseedor' },
  { a: 'Regenerador', b: 'Remendado' },
  { a: 'Termoquinético', b: 'Brujo Climático' },
  { a: 'Velocista', b: 'Reloj Humano' },
  { a: 'Cronauta', b: 'Teletransportador' },
  { a: 'Hombre Menguante', b: 'Gravitacional' },
  { a: 'Agujero Negro', b: 'Sanguijuela' },
  { a: 'Ser Negativo', b: 'Elemental' },
  { a: 'Espectro', b: 'Proyector Astral' },
  { a: 'Vampiro', b: 'Hombre Lobo' },
  { a: 'Satanista', b: 'Chamán' },
  { a: 'Matemático', b: 'Lingüista' },
  { a: 'Ciborg', b: 'Golem' },
  { a: 'Portador', b: 'Superpoder Viviente' }
];

const form = document.querySelector('.form');
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

  attributes.forEach((attribute) => {
    const [question, option] = attribute.split('-');
    const trait = result[question][option];
    Traits[trait] += 2;
  });
  powers.forEach((power) => {
    const [question, option] = power.split('-');
    const powerValue = result[question][option];
    powerIndex += powerValue;
  });
  const phraseCount = phraseText.trim().split(/\s+/).length;
  powerIndex += phraseCount > 5 ? 12 : 0;
  console.log({Traits, powerIndex, phraseCount});
});
