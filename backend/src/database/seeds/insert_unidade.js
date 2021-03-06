
exports.seed = function(knex) {
  return knex('unidade').del()
    .then(function () {
      return knex('unidade').insert([
        {
          nome: 'Litro',
          sigla: 'L',
          taxa_conversao: 1,
          id_tipo_unidade: 1  
        },
        {
          nome: 'Mililitro',
          sigla: 'Ml',
          taxa_conversao: 0.001,
          id_tipo_unidade: 1   
        },
        {
          nome: 'Grama',
          sigla: 'g',
          taxa_conversao: 1,
          id_tipo_unidade: 2    
        },
        {
          nome: 'Miligrama',
          sigla: 'Mg',
          taxa_conversao: 0.001,
          id_tipo_unidade: 2    
        },
        {
          nome: 'Quilograma',
          sigla: 'Kg',
          taxa_conversao: 1000,
          id_tipo_unidade: 2     
        },
        {
          nome: 'Unidade',
          sigla: 'U',
          taxa_conversao: 1,
          id_tipo_unidade: 3
        },
        {
          nome: 'Xicara (Farinha de Trigo)',
          sigla: 'Xicara',
          taxa_conversao: 120,
          id_tipo_unidade: 2,
          id_ingrediente: 4
        },
        {
          nome: 'Colher de Sopa (Farinha de Trigo)',
          sigla: 'Colher de Sopa',
          taxa_conversao: 7.5,
          id_tipo_unidade: 2,
          id_ingrediente: 4
        },
        {
          nome: 'Colher de Chá (Farinha de Trigo)',
          sigla: 'Colher de Cha',
          taxa_conversao: 2.5,
          id_tipo_unidade: 2,
          id_ingrediente: 4
        },
        {
          nome: 'Xicara (Farinha de Mandioca)',
          sigla: 'Xicara',
          taxa_conversao: 150,
          id_tipo_unidade: 2,
          id_ingrediente: 8
        },
        {
          nome: 'Colher de Sopa (Farinha de Mandioca)',
          sigla: 'Colher de Sopa',
          taxa_conversao: 9,
          id_tipo_unidade: 2,
          id_ingrediente: 8
        },
        {
          nome: 'Colher de Chá (Farinha de Mandioca)',
          sigla: 'Colher de Cha',
          taxa_conversao: 3,
          id_tipo_unidade: 2,
          id_ingrediente: 8
        },
        {
          nome: 'Xicara (Farinha de Rosca)',
          sigla: 'Xicara',
          taxa_conversao: 80,
          id_tipo_unidade: 2,
          id_ingrediente: 9
        },
        {
          nome: 'Colher de Sopa (Farinha de Rosca)',
          sigla: 'Colher de Sopa',
          taxa_conversao: 5,
          id_tipo_unidade: 2,
          id_ingrediente: 9
        },
        {
          nome: 'Colher de Chá (Farinha de Rosca)',
          sigla: 'Colher de Cha',
          taxa_conversao: 1.5,
          id_tipo_unidade: 2,
          id_ingrediente: 9
        },
        {
          nome: 'Xicara (Fubá)',
          sigla: 'Xicara',
          taxa_conversao: 120,
          id_tipo_unidade: 2,
          id_ingrediente: 10
        },
        {
          nome: 'Colher de Sopa (Fubá)',
          sigla: 'Colher de Sopa',
          taxa_conversao: 7.5,
          id_tipo_unidade: 2,
          id_ingrediente: 10
        },
        {
          nome: 'Colher de Chá (Fubá)',
          sigla: 'Colher de Cha',
          taxa_conversao: 2.5,
          id_tipo_unidade: 2,
          id_ingrediente: 10
        },
        {
          nome: 'Xicara (Amido Milho)',
          sigla: 'Xicara',
          taxa_conversao: 150,
          id_tipo_unidade: 2,
          id_ingrediente: 5
        },
        {
          nome: 'Colher de Sopa (Amido Milho)',
          sigla: 'Colher de Sopa',
          taxa_conversao: 9,
          id_tipo_unidade: 2,
          id_ingrediente: 5
        },
        {
          nome: 'Colher de Chá (Amido Milho)',
          sigla: 'Colher de Cha',
          taxa_conversao: 3,
          id_tipo_unidade: 2,
          id_ingrediente: 5
        },
        {
          nome: 'Xicara (Sal)',
          sigla: 'Xicara',
          taxa_conversao: 300,
          id_tipo_unidade: 2,
          id_ingrediente: 6
        },
        {
          nome: 'Colher de Sopa (Sal)',
          sigla: 'Colher de Sopa',
          taxa_conversao: 13,
          id_tipo_unidade: 2,
          id_ingrediente: 6
        },
        {
          nome: 'Colher de Chá (Sal)',
          sigla: 'Colher de Cha',
          taxa_conversao: 5,
          id_tipo_unidade: 2,
          id_ingrediente: 6
        },
        {
          nome: 'Xicara (Açucar)',
          sigla: 'Xicara',
          taxa_conversao: 160,
          id_tipo_unidade: 2,
          id_ingrediente: 7
        },
        {
          nome: 'Colher de Sopa (Açucar)',
          sigla: 'Colher de Sopa',
          taxa_conversao: 10,
          id_tipo_unidade: 2,
          id_ingrediente: 7
        },
        {
          nome: 'Colher de Chá (Açucar)',
          sigla: 'Colher de Cha',
          taxa_conversao: 3.5,
          id_tipo_unidade: 2,
          id_ingrediente: 7
        },
        {
          nome: 'Xicara (Achocolatado)',
          sigla: 'Xicara',
          taxa_conversao: 90,
          id_tipo_unidade: 2,
          id_ingrediente: 11
        },
        {
          nome: 'Colher de Sopa (Achocolatado)',
          sigla: 'Colher de Sopa',
          taxa_conversao: 6,
          id_tipo_unidade: 2,
          id_ingrediente: 11
        },
        {
          nome: 'Colher de Chá (Achocolatado)',
          sigla: 'Colher de Cha',
          taxa_conversao: 2,
          id_tipo_unidade: 2,
          id_ingrediente: 11
        },
        {
          nome: 'Xicara (Arroz)',
          sigla: 'Xicara',
          taxa_conversao: 200,
          id_tipo_unidade: 2,
          id_ingrediente: 12
        },
        {
          nome: 'Colher de Sopa (Arroz)',
          sigla: 'Colher de Sopa',
          taxa_conversao: 15,
          id_tipo_unidade: 2,
          id_ingrediente: 12
        },
        {
          nome: 'Xicara (Feijão)',
          sigla: 'Xicara',
          taxa_conversao: 202,
          id_tipo_unidade: 2,
          id_ingrediente: 13
        },
        {
          nome: 'Colher de Sopa (Feijão)',
          sigla: 'Colher de Sopa',
          taxa_conversao: 12.6,
          id_tipo_unidade: 2,
          id_ingrediente: 13
        },
        {
          nome: 'Xicara (Mel)',
          sigla: 'Xicara',
          taxa_conversao: 340,
          id_tipo_unidade: 2,
          id_ingrediente: 14
        },
        {
          nome: 'Colher de Sopa (Mel)',
          sigla: 'Colher de Sopa',
          taxa_conversao: 20,
          id_tipo_unidade: 2,
          id_ingrediente: 14
        },
        {
          nome: 'Colher de Chá (Mel)',
          sigla: 'Colher de Cha',
          taxa_conversao: 8,
          id_tipo_unidade: 2,
          id_ingrediente: 14
        },
        {
          nome: 'Xicara (Aveia)',
          sigla: 'Xicara',
          taxa_conversao: 80,
          id_tipo_unidade: 2,
          id_ingrediente: 15
        },
        {
          nome: 'Colher de Sopa (Aveia)',
          sigla: 'Colher de Sopa',
          taxa_conversao: 5,
          id_tipo_unidade: 2,
          id_ingrediente: 15
        },
        {
          nome: 'Colher de Chá (Aveia)',
          sigla: 'Colher de Cha',
          taxa_conversao: 1.5,
          id_tipo_unidade: 2,
          id_ingrediente: 15
        },
        {
          nome: 'Xicara (Polvilho)',
          sigla: 'Xicara',
          taxa_conversao: 150,
          id_tipo_unidade: 2,
          id_ingrediente: 16
        },
        {
          nome: 'Colher de Sopa (Polvilho)',
          sigla: 'Colher de Sopa',
          taxa_conversao: 9,
          id_tipo_unidade: 2,
          id_ingrediente: 16
        },
        {
          nome: 'Colher de Chá (Polvilho)',
          sigla: 'Colher de Cha',
          taxa_conversao: 3,
          id_tipo_unidade: 2,
          id_ingrediente: 16
        },
        {
          nome: 'Xicara (Coco Ralado)',
          sigla: 'Xicara',
          taxa_conversao: 80,
          id_tipo_unidade: 2,
          id_ingrediente: 17
        },
        {
          nome: 'Colher de Sopa (Coco Ralado)',
          sigla: 'Colher de Sopa',
          taxa_conversao: 5,
          id_tipo_unidade: 2,
          id_ingrediente: 17
        },
        {
          nome: 'Colher de Chá (Coco Ralado)',
          sigla: 'Colher de Cha',
          taxa_conversao: 1.5,
          id_tipo_unidade: 2,
          id_ingrediente: 17
        }
      ]);
    });
};
