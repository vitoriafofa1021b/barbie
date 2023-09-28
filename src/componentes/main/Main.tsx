import {useState} from "react";
import Filme from "../filme/Filme";
import './Main.css'
type FilmesType = {
  id:number,
  titulo:string,
  sinopse:string,
  imagem:string
}
export default function Main(){
  //Hook
  const [texto,setTexto]= useState("")

  
const filmes: FilmesType[] = [
  {
  id:1,
  titulo:"Barbie",
  sinopse:"A jovem Barbie (Margot Robbie) vive no mundo perfeito das bonecas,chamado Barbielândia, onde todo dia é incrível. No entanto, quando ela entra em uma crise existencial, acaba sendo exilada devido às suas imperfeições.Agora a boneca precisa optar por viver uma aventura no mundo real dos humanos,onde aprenderá uma importante lição sobre a vida e o que realmente importa.",
  imagem:"/barbie.png" 
},
{
  id:2,
  titulo:"Barbie a Princesa e a Popstar",
   sinopse:"Keira é uma estrela pop mundialmente conhecida.Tori é a princesa de Meribella e fã de Keira. Keira está em crise com o estrelate Tori sonha com a vida de estrela pop.As duas resolvem trocar de vida,mas as coisas não são assim tão fáceis..",
  imagem:"/cachorro.png" 
},
{
  id:3,
  titulo:"Barbie e os Segredos das Fadas" ,
  sinopse:"Mundos mágicos, fadas e cavalos voadores são alguns dos elementos encontrados neste filme da Barbie.Ela precisa viajar a um mundo encantado para salvar Ken Nesta aventura, serão revelados segredos e algumas amizades serão testadas.",
  imagem:"/Barbie_Fairy_Secret.png" 
},
{
  id:4,
  titulo:"Barbie Escola de Princesas" ,
  sinopse:"Blair é uma garota simples e órfã que foi sorteada para estudar na exclusiva Escola de Princesas.A escola é um lugar incrível, onde as meninas aprendem dança, etiqueta, arte e outras habilidades indispensáveis a uma princesa. Blair adora suas aulas, suas novas fadinhas assistentes e suas novas amigas, as princesas Hadley e Isla. Porém, quando a malvada Dama Devin desconfia que Blair é a princesa e herdeira desaparecida, ela faz de tudo para impedir que Blair assuma o trono.",
   imagem:"/princess.png" 
},
{
  id:5,
  titulo:"Barbie em Vida de Sereia",
   sinopse:"Barbie é uma campeã de surfe que vive com sua família em Malibu.Um dia, ela descobre um segredo de família:ela é uma sereia. Sua mãe, a rainha de Oceana, está em perigo e ela parte numa grande aventura no fundo do mar para salvá-la..",
  imagem:"/barbiesereia.jpg" 

},
{
 id:6,
titulo:"Barbie e as Doze Princesas Bailarinas",
 sinopse:"Genevieve e suas irmãs adoram dançar.Como são impedidas pela Duquesa Rowena, as princesas bailarinas descobrem um mundo mágico onde dançam sem serem incomodadas.Porém, acontecimentos mais urgentes as levam a tentar salvar a vida do pai.",
  imagem:"/bailarina.png" 
},
{
  id:7,
  titulo:"Barbie um Natal Perfeito",
  sinopse:"Com grandes planos e o Natal chegando, Barbie e suas irmãs fazem as malas para visitar a tia Millie.Mas, em vez disso, elas acabam em uma pequena cidade coberta de neve e super festiva. Será este o melhor Natal de sempre?",
  imagem:"/natal.jpg" 

},
{
  id:8,
  titulo:"Barbie e o Portal Secreto" ,
  sinopse:"A tímida princesa Alexa descobre um portal secreto e entra em uma terra desconhecida.Após conhecer Romy e Nori, uma sereia e uma fada, Alexa descobre seus poderes mágicos e as três decidem deter a malvada Malucia..",
  imagem:"/portal.png" 

},
{
  id:9,
  titulo:"Barbie e as Três Mosqueteiras",
  sinopse:"Corinne treina em segredo para se tornar uma mosqueteira. Quando chega a hora de proteger o príncipe e a família real de um plano maligno, ela precisa da ajuda dos outros empregados do palácio..",
  imagem:"/mosqueteiras.webp" 
},
{
  id:10,
  titulo:"Barbie o Quebra-Nozes",
   sinopse:"Clara é uma menina órfã que ganha de presente de Natal um boneco,o Quebra-Nozes. Enquanto Clara está dormindo,o boneco ganha vida e defende a menina dos soldados comandados pelo Rei dos Ratos. Quando ela acorda, percebe que foi encolhida através de um feitiço. Clara e o Quebra-Nozes iniciam uma jornada em busca da Fada Caramelo, a única que pode desfazer o feitiço..",
  imagem:"/quebra.jpg" 
}

]


  // a função recebe um atributo chamado e de "event"
  function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
     console.log(e.target.value)
     setTexto(e.target.value)
  }
    return(
      <>
      <div className="pesquisa">
        <p>Buscar Filme</p>
      <input className='barrapesquisa' type="text" onChange={mudaTexto} />
      <div>
          <p className='texto_digitado'>pesquisa: {texto}</p>
      </div>
   </div>
          <main className="content-main">   
        {filmes.filter((filme)=>filme.titulo.toLocaleLowerCase().includes(texto)).map((filme:FilmesType)=> <Filme key={filme.id}
         titulo={filme.titulo} sinopse={filme.sinopse} imagem={filme.imagem}/>
        )}

         
       
        </main>
        </>
    )
}