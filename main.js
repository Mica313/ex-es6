const alunos = [
    {
        nome:'Fernando',
        nota:8.5
    },
    {
        nome:'Julia',
        nota:7.6
    },
    {
        nome:'Pedro',
        nota:4.3
    }
];
function filtraalunos(aluno){
    return aluno.nota >= 6;
}
const aprovados = alunos.filter(filtraalunos);
console.log(aprovados);
