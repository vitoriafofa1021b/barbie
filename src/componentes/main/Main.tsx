import Filme from "../filme/Filme";
import './Main.css'
export default function Main(){
    return(
        <main className="content-main">
            <Filme titulo="Barbie" sinopse="Depois de ser expulsa da Barbieland
             por ser uma boneca de aparência menos do que perfeita, 
             Barbie parte para o mundo humano em busca da verdadeira felicidade."
             imagem="/barbie.png" />


            <Filme titulo="Barbie" sinopse="Depois de ser expulsa da Barbieland
             por ser uma boneca de aparência menos do que perfeita, 
             Barbie parte para o mundo humano em busca da verdadeira felicidade."
             imagem="/pop.star.jpg" />
             

           
        </main>
    )
}