import numeral from 'numeral';


const courseValue = numeral(1000).format('R$0.0,00');

console.log (`Você pagou ${courseValue}`); //eslint-disable-line no-console
