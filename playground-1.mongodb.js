// const collection = 'NEW_COLLECTION_NAME';

//CREATE DATABASE TEST
//USE TEST
//use("test");
//Apagando a collection antes de inserir novos dados.
//db.cardapio.drop();

//Código para criar uma nova collection
//db.createCollection("cardapio");

//Código para inserir vários dados em uma collection criada anteriormente
//db.cardapio.insertMany([
   // {nome:"Macarrão",preco:29.99,ingredientes:"Macarrão"},
   // {nome:"Strogonoff",preco:59.99,ingredientes:"Carne Wagyu e Arroz"},
   // {nome:"Pirão",preco:50,ingredientes:"Farinha, Frango Caipira, Arroz"},
    //{nome:"Rozcowvo",preco:29.99,ingredientes:"Ovo, Arroz, Feijão"},
   // {nome:"Prato do Dia",preco:10.99,ingredientes:"Arroz, Feijão e Bife"}
//])

//SELECT * FROM test.cardapio;

//No mongo para selecionar vamos usar o comando find

//devolve todos os dados da collection
//db.cardapio.find();

//Filtrando pelo nome
//SELECT * FROM cardapio where nome="Macarrão"; 
//db.cardapio.find({nome:"Macarrão"});

//Para selecionar as colunas usamos a projeção
//SELECT nome, preco FROM cardapio where nome="Macarrão"; 
//db.cardapio.find({nome:"Macarrão"},{nome:true,preco:true});

//FIND ({QUERY},{PROJEÇÃO})

use("teretreino");
db.dropDatabase();
db.createCollection("treino");

db.treino.insertOne({
    nome:"Peito e Bíceps",
    diaSemana: "Segunda",
    exercicios:[
        {
            nome:"Supino",
            series:4,
            repeticoes:15
        },
        {
            nome:"Rosca Martelo",
            series:4,
            repeticoes:15
        },
        {
            nome:"Voador",
            series:4,
            repeticoes:15
        },
        {
            nome:"Rosca scott",
            series:4,
            repeticoes:15
        }
    ]

})
db.treino.insertOne({
    nome:"Costas e Tríceps",
    diaSemana: "Terça",
    exercicios:[
        {
            nome:"Tríceps polia",
            series:4,
            repeticoes:15
        },
        {
            nome:"Tríceps Corda",
            series:4,
            repeticoes:15
        },
        {
            nome:"Pull Down",
            series:4,
            repeticoes:15
        },
        {
            nome:"Remada curvada",
            series:4,
            repeticoes:15
        },
        {
            nome:"Puxada alta",
            series:4,
            repeticoes:15
        },
        {
            nome:"Remada baixa",
            series:4,
            repeticoes:15
        }
    ]
})
db.treino.insertOne({
    nome:"Inferiores",
    diaSemana: "Terça e Quinta",
    exercicios:[
        {
            nome:"Leg Press",
            series:4,
            repeticoes:15
        },
        {
            nome:"Agachamento",
            series:4,
            repeticoes:15
        },
        {
            nome:"Levantamento Terra",
            series:4,
            repeticoes:15
        },
        {
            nome:"Mesa Flexora",
            series:4,
            repeticoes:15
        },
        {
            nome:"Panturrilha",
            series:4,
            repeticoes:15
        },
        {
            nome:"Cadeira Extensora",
            series:4,
            repeticoes:15
        },
        {
            nome:"Cadeira Adutora",
            series:4,
            repeticoes:15
        },
        {
            nome:"Cadeira Abdutora",
            series:4,
            repeticoes:15
        }
    ]
})
use("teretreino");
db.treino.find({_id:ObjectId("64f743fc249ef74c29691f35")})

use("teretreino");
db.treino.updateOne({_id:ObjectId("64f743fc249ef74c29691f35")},
{
    $set:{diaSemana:"Sexta",
    nome:"Peito e Bíceps A"
}
}
)
use("teretreino");
db.treino.updateOne({_id:ObjectId("64f743fc249ef74c29691f35"),"exercicios.nome":"Voador"},

{
    $set:{"exercicios.$.nome":"Peck Deck"
}
}
)
use("teretreino");
db.treino.updateOne({_id:ObjectId("64f743fc249ef74c29691f35"),"exercicios.nome":"Rosca scott"},

{
    $set:{"exercicios.$.series":5,
     "exercicios.$.repeticoes":12
}
}
)


