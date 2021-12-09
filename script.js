const filmes = [require('./filmes.json')];

buildTable(filmes)

function buildTable(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = "<tr>
                        <td>${data[i].nome}</td>
                        <td>${data[i].data}</td>
                        <td>${data[i].descCurta}</td>
                        <td>${data[i].descLonga}</td>
                        <td>${data[i].diretor}</td>
                        <td>${data[i].roteirista}</td>
                        <td>${data[i].trailer}</td>
                  </tr>"
        table.innerHTML += row


    }
}
{/* {
    "nome": "Eternos",
    "data": "04.11",
    "descCurta": "Um grupo de heróis imortais é forçado a sair da sombras para salvar a humanidade.",
    "descLonga": "Dirigida por Chloé Zhao e protagonizada por Angelina Jolie, Salma Hayek e diversos outros grandes nomes de Hollywood, a história épica da Marvel, que abrange milhares de anos, apresenta um grupo de heróis imortais forçados a sair das sombras para se reunir contra os inimigos mais antigos da humanidade, os Deviantes.",
    "diretor": "Chloé Zhao",
    "roteirista": "Chloé Zhao, Kaz Firpo, Ryan Firpo, Patrick Burleigh",
    "trailer": "https://www.youtube.com/watch?v=tjO-qmj_vs0",
    "foto": "./img/eternos"
}, */}