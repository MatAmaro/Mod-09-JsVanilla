const main = document.querySelector("main");
let table = document.createElement('table');
let headers = ['Nome', 'Espécie', 'País', 'Quantidade'];

let animals = [
    { nome: 'Onça-pintada',       especie: 'Panthera onca',              pais: 'Brasil',              quantidade: 10000 },
    { nome: 'Lobo-guará',         especie: 'Chrysocyon brachyurus',      pais: 'Brasil',              quantidade: 50    },
    { nome: 'Panda-gigante',      especie: 'Ailuropoda melanoleuca',     pais: 'China',               quantidade: 2500  },
    { nome: 'Baleia-fin',         especie: 'Balaenoptera physalus',      pais: 'Antártida',           quantidade: 2000  },
    { nome: 'Arara-azul-de-lear', especie: 'Anodorhynchus leari',        pais: 'Brasil',              quantidade: 1200  },
    { nome: 'Pinguim-africano',   especie: 'Spheniscus demersus',        pais: 'Costa Sul da África', quantidade: 50000 },
    { nome: 'Peixe-boi-marinho',  especie: 'Trichecus manatus Linnaeus', pais: 'Brasil',              quantidade: 500   },
    { nome: 'Gorila-da-montanha', especie: 'Gorilla beringei beringei',  pais: 'África Central',      quantidade: 1000  },
    { nome: 'Condor-californiano',especie: 'Gymnogyps californianus',    pais: 'América do Norte',    quantidade: 5000  },
    { nome: 'Baleia-azul',        especie: 'Balaenoptera musculus',      pais: 'Antártida',           quantidade: 8500  }
];

let headerRow = document.createElement('tr');

headers.forEach(heText => {
    let header = document.createElement('th');
    let content = document.createTextNode(heText);
    header.appendChild(content);
    headerRow.appendChild(header);
});

table.appendChild(headerRow);

let qtdTtotal = 0;

animals.forEach(animal => {
    let row = document.createElement('tr');
    qtdTtotal += animal.quantidade;
    
    Object.values(animal).forEach(text => {
        let cell = document.createElement('td');
        let cellContent = document.createTextNode(text);
        cell.style.border = "2px solid black";
        cell.style.padding = "0.5rem";
        cell.appendChild(cellContent);
        row.appendChild(cell);
    })

    table.appendChild(row);
});


let textfoot = 'Total de animais: ' + qtdTtotal;
let footer = document.createElement('td');
let footCotent = document.createTextNode(textfoot);

footer.appendChild(footCotent);
table.appendChild(footer);
main.appendChild(table)

table.style.border = "2px solid black";
table.style.padding = "0.5rem";
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.alignItems = "center";
main.style.padding = "10px";



