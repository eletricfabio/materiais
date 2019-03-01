/*alert("Olá, digite algo!");*/
var dados;
 var url = 'https://www.dropbox.com/s/390pwgs449zqyd8/cidade_bairro.json?dl=0';

var bairros = {
    "cidades":[
    {"nome": "Patos de Minas",
    "bairros": [
        "Abner Afonso",
        "Alto Caiçaras",
        "Alto Colina",
        "Alvorada",
        "Alvorada 2",
        "Antonio Caixeta",
        "Aurélio Caixeta",
        "Barreiro",
        "Bela Vista",
        "Belvedere",
        "Boa Vista",
        "Brasília",
        "Caiçaras",
        "Campo Elísios",
        "Caramuru",
        "Centro",
        "Cerrado",
        "Cidade Jardim",
        "Cidade Nova (1 e 2)",
        "Condominios Marabá",
        "Cônego Getúlio",
        "Copacabana",
        "Coração Eucáristico",
        "Cristo Redentor",
        "Eldorado",
        "Gramado",
        "Guanabara",
        "Ipanema (1 e 2)",
        "Jardim América",
        "Jardim Aquários",
        "Jardim Califórnia",
        "Jardim Centro",
        "Jardim Céu Azul",
        "Jardim dos Andradas",
        "Jardim Esperança",
        "Jardim Floresta",
        "Jardim Itamarati",
        "Jardim Panorâmico 1",
        "Jardim Panorâmico 2",
        "Jardim Paraiso",
        "Jardim Paulistano",
        "Jardim Peluzzo",
        "Jardim Recanto",
        "Lagoa Grande",
        "Lagoinha",
        "Laranjeiras",
        "Limoeiro",
        "Morada do Sol",
        "Nossa Senhora das Graças",
        "Nossa Senhora de Fátima",
        "Nossa Senhora Aparecida",
        "Nova Floresta",
        "Novo Horizonte",
        "Padre Eustáquio",
        "Planalto",
        "Quebec",
        "Residencial Monjolo",
        "Rosário",
        "Santa Helena",
        "Santa Luzia",
        "Santa Terezinha",
        "Santo Antonio",
        "São Francisco",
        "São José Operário",
        "Sebastião Amorim",
        "Setor Industrial",
        "Sobradinho",
        "Sorriso",
        "Valparaíso",
        "Vila Garcia",
        "Vila Rosa",
        "Av Afonso Queiroz",
        "Av Dilermando Gomes de Deus",
        "Bretas",
        "Chacáras Caiçaras",
        "Hospital HNSF",
        "Hospital Vera Cruz",
        "Mart Minas",
        "Restaurante Popular",
        "Suinco",
        "Unipam"
    ]
},
{
    "nome": "São Lourenço",
    "bairros":[
            "AABB",
            "Aeroporto - Via Ramon",
            "Alto da Boa Vista",
            "Areia Branca",
            "Armazém Chagas",
            "Bela Vista",
            "Biquinha",
            "Canaã I e II",
            "Carioca",
            "Carvãozinho",
            "Casas Populares I e II",
            "Cascata",
            "Condomínio Villa Bella",
            "Conjunto Habitacional Antônio Mendes (Cohab)",
            "Conjunto Habitacional Helena (Cohab)",
            "Estação; Bairro Monte Verde",
            "Floresta",
            "Hospital Casa de Caridade de São Lourenço",
            "Hospital Casa de Caridade de São Lourenço",
            "Ilha Antônio Dutra",
            "Jardim América",
            "Jardim das Estâncias",
            "Jardim Europa",
            "Jardim Mirante",
            "Jardim Nirvana",
            "Jardim Santa Maria I e II",
            "Jardim São Lourenço",
            "Jardim Serrano",
            "João Carvalho Costa",
            "João de Deus",
            "João Paulino",
            "José Açúcar",
            "Juliana",
            "Lagoa Seca",
            "Loteamento Paraíso",
            "Monte Belo",
            "Monte Líbano",
            "Moradas da Serra",
            "Nossa Senhora de Fátima",
            "Nossa Senhora de Lourdes",
            "Nova Estação",
            "Novo Horizonte Carneiro Imóveis",
            "Orebe",
            "Parque das Águas",
            "Parque Olímpico",
            "Pedreira",
            "Pontal da Federal",
            "Porção Sudeste dos Bairros Serra Azul e Jardim das Acácias",
            "Porta do Céu",
            "Porto Alegre",
            "Recanto das Paineiras",
            "Residencial Carioca",
            "Residencial Ferreira de Souza",
            "Residencial Haidar",
            "Residencial Rio Verde I e II",
            "Rodoviária e adjacências",
            "Rua Batista Luzardo",
            "Rua Pedro Ribeiro Arantes",
            "Santa Cecília",
            "Santa Mônica I e II",
            "Santa Terezinha",
            "Santo Cruzeiro",
            "São João",
            "São Lourenço Velho",
            "São Mateus; Serra Verde I e II",
            "Serra Azul e Jardim das Acácias",
            "Solar dos Lagos",
            "Toda região central da cidade",
            "Várzea",
            "Vila Carneiro I e II",
            "Vila Dutra",
            "Vila Esperança",
            "Vila Nova I e II",
            "Vila Pascoal"
          ]}
        ]
};

$(document).ready(function () {
      dados = bairros;
      var option_cidade  = '<option value="none">Selecione uma cidade... </option>';
      $.each(dados.cidades, function (i, val) {
          option_cidade +=  '<option value="' + val.nome + '">' + val.nome + '</option>';
      });    
      $('#cidades').html(option_cidade);
      $('#cidades').change(poulateBairros);
});
  
    
                              
        
function poulateBairros(){
    var idx  = $(this)[0].selectedIndex;
    var val  = $(this).val();
    var bairros = (idx > 0)? dados.cidades[idx-1].bairros : ['Selecione uma cidade'];
    var option_bairros = '';
    $.each(bairros, function(i, val){
      option_bairros += '<option value="' + val + '">' + val + '</option>';
    });
    $('#bairros').html(option_bairros);
}