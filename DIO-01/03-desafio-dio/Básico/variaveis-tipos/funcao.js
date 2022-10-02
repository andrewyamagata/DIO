/*const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Miguel',
		nota: 3,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function alunosAprovados(alunos, media) {
	 let aprovados = [];

	 for(let i = 0; i < alunos.length; i++) {
		 let { nota, nome } = alunos[i];

		 if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 5));*/

function calcularIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
	nome: "Maria",
	idade: 30
}
;
const pessoa2 = {
	nome: "Carla",
	idade: 26,
};

const animal = {
	nome:"Fiona",
	idade: 5,
	raca: "Pug",
};

console.log(calcularIdade.call(pessoa2, 30));
console.log(calcularIdade.apply(pessoa1, [4]));