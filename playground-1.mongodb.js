use("patissier");
db.createCollection("cake");

db.cake.insertOne({
    _id:ObjectId(1),
    nome:"Bolo de cenoura",
    peso: 1,
    preco:25,
    ingredientes:[
        {
            nome:"ovo",
            quantidade:"3"
        },
        {
            nome:"trigo",
            quantidade:"2 xicaras"
        },
        {
            nome:"acucar",
            quantidade:"1 xicara e meia"
        },
        {
            nome:"cenoura",
            quantidade:"3"
        },
        {
            nome:"margarina",
            quantidade:"1 xicara"
        },
        {
            nome:"fermento",
            quantidade:"1 colher"
        },
       

    ]
     
})
db.cake.insertOne({
    _id:ObjectId(2),
    nome:"Bolo de chocolate",
    peso: 2,
    preco:35,
    ingredientes:[
        {
            nome:"ovo",
            quantidade:"3"
        },
        {
            nome:"trigo",
            quantidade:"3 xicaras"
        },
        {
            nome:"acucar",
            quantidade:"meia xicara"
        },
        {
            nome:"chocolate",
            quantidade:"1 xicara"
        },
        {
            nome:"bicarbonato",
            quantidade:"meia colher"
        },
        {
            nome:"oleo",
            quantidade:"1 xicara"
        },
        {
            nome:"leite",
            quantidade:"2 xicaras"
        },
        {
            nome:"fermento",
            quantidade:"1 colher"
        },
    
    ]
})
    db.cake.insertOne({
        _id:ObjectId(3),
        nome:"Bolo de fubá",
        peso: 2,
        preco:30,
        ingredientes:[
            {
                nome:"ovo",
                quantidade:"3"
            },
            {
                nome:"trigo",
                quantidade:"3 colheres"
            },
            {
                nome:"acucar",
                quantidade:"2 xicaras"
            },
            {
                nome:"fuba",
                quantidade:"2 xicaras"
            },
            {
                nome:"oleo",
                quantidade:"1 xicara e meia"
            },
            {
                nome:"leite",
                quantidade:"1 copo"
            },
            {
                nome:"fermento",
                quantidade:"1 colher"
            },
    
        ]
     
})
db.cake.insertOne({
    _id:ObjectId(4),
    nome:"Bolo de milho",
    peso: 3,
    preco:40,
    ingredientes:[
        {
            nome:"ovo",
            quantidade:"3"
        },
        {
            nome:"trigo",
            quantidade:"meia xicara"
        },
        {
            nome:"acucar",
            quantidade:"1 copo"
        },
        {
            nome:"milho",
            quantidade:"1 lata"
        },
        {
            nome:"oleo",
            quantidade:"1 xicara e meia"
        },
        {
            nome:"leite",
            quantidade:"1 copo"
        },
        {
            nome:"flocao de milho",
            quantidade:"1 copo"
        },
        {
            nome:"fermento",
            quantidade:"1 colher"
        },

    ]
 
})

//3 excluir a collection cake com id = 1
use ("patissier");
db.cake.deleteOne({_id: ObjectId(1)});

// 4 Listar o nome e preço de todos os bolos

use ("patissier");
db.cake.find({}, { _id: 0, nome: 1, preco: 1 })

//5 Listar o nome e preço de todos os bolos com o preco menor ou igual a 70
use ("patissier");
db.cake.find({ preco: { $lte: 70 } }, { _id: 0, nome: 1, preco: 1 })

// 6 criar uma consulta que mude nome , peso e acrescente 1 ingrediente no bolo do id 2
use ("patissier");
db.cake.updateOne(
    { _id: ObjectId(2) },
    {
       $set: {
          nome: "Bolo de toddy", 
          peso: 3 
       },
       $push: {
          ingredientes: {
             nome: "barra de chocolate",
             quantidade: "meia barra"
          },
       },
    }
 )
 //7 criar um update que modifique 1 ingrediente de um bolo para ovos e quantidade 3
 use("patissier")
 db.cake.updateOne(
    { _id: ObjectId(1), "Bolo de cenoura": "ovo" },
    {
       $set: {
          "leite.$.quantidade": "3" 
       }
    }
 )



















 








//use("teretreino");
//db.treino.find({_id:ObjectId("64f743fc249ef74c29691f35")})

//use("teretreino");
//db.treino.updateOne({_id:ObjectId("64f743fc249ef74c29691f35")},
//{
  //  $set:{diaSemana:"Sexta",
 //   nome:"Peito e Bíceps A"
//}
//}
//)
//use("teretreino");
//db.treino.updateOne({_id:ObjectId("64f743fc249ef74c29691f35"),"exercicios.nome":"Voador"},

//{
  //  $set:{"exercicios.$.nome":"Peck Deck"
//}
//}
//)
//use("teretreino");
//db.treino.updateOne({_id:ObjectId("64f743fc249ef74c29691f35"),"exercicios.nome":"Rosca scott"},

//{
//    $set:{"exercicios.$.series":5,
 //    "exercicios.$.repeticoes":12
//}
//}
//)


