
gatos = ['./gatos/gato-um.JPG', './gatos/gato-dois.JPG', './gatos/gato-tres.JPG', './gatos/gato-quatro.JPG', './gatos/gato-cinco.JPG', './gatos/gato-seis.JPG',  './gatos/gato-sete.JPG',  './gatos/gato-oito.JPG',  './gatos/gato-nove.JPG',  './gatos/gato-dez.JPG',  './gatos/gato-onze.JPG',  './gatos/gato-doze.JPG',  './gatos/gato-treze.JPG',  './gatos/gato-quatorze.JPG',  './gatos/gato-quinze.JPG'];

function trocar() {
    const gatosAtual = gatos[Math.floor(Math.random() * gatos.length)];
    console.log(gatosAtual);
    document.getElementById("figura").src = gatosAtual

}