const parse = new DOMParser();

    const docXML = parse.parseFromString(
       `<produtos>
       <produto>
         <titulo>Camiseta Esportiva</titulo>
         <descricao>Com tecnologia inovadora que, além de controlar o calor, ajuda a reduzir a transpiração.</descricao>
         <preco>35,50</preco>
       </produto>
       <produto>
         <titulo>Bermuda Jeans</titulo>
         <descricao>Bordada no estilo ROCK! 100% Algodão.</descricao>
         <preco>54,62</preco>
       </produto>
       <produto>
         <titulo>Calça Moletom</titulo>
         <descricao>Básica com modelagem reta, perfeita para o look confortável, com forro peludinho.</descricao>
         <preco>79,90</preco>
       </produto>
     </produtos>
     `,
     `text/xml`
    );

    let produto01 = document.querySelector('[data-item="camiseta-esportiva"]');
    let produto02 = document.querySelector('[data-item="bermuda-jeans"]');
    let produto03 = document.querySelector('[data-item="calca-moletom"]');

    let titulo01 = produto01.querySelector('h1');
    let titulo02 = produto02.querySelector('h1');
    let titulo03 = document.createElement('h1');

    let descricao01 = produto01.querySelector('p');
    let descricao02 = document.createElement('p');
    let descricao03 = document.createElement('p');

    let preco01 = produto01.querySelector('span');
    let preco02 = document.createElement('span');
    let preco03 = document.createElement('span');

    titulo01.textContent = docXML.getElementsByTagName('titulo')[0].textContent;
    titulo02.textContent = docXML.getElementsByTagName('titulo')[1].textContent;
    titulo03.textContent = docXML.getElementsByTagName('titulo')[2].textContent;
   

    descricao01.textContent = docXML.getElementsByTagName('descricao')[0].textContent;
    descricao02.textContent = docXML.getElementsByTagName('descricao')[1].textContent;
    descricao03.textContent = docXML.getElementsByTagName('descricao')[2].textContent;

    preco01.textContent = docXML.getElementsByTagName('preco')[0].textContent;
    preco02.textContent = docXML.getElementsByTagName('preco')[1].textContent;
    preco03.textContent = docXML.getElementsByTagName('preco')[2].textContent;

    produto03.appendChild(titulo03);
    produto03.appendChild(descricao03);
    produto03.appendChild(preco03);
    produto02.appendChild(descricao02);
    produto02.appendChild(preco02);