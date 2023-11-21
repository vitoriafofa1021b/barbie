import React, { useEffect, useState } from "react";
import Filme from "../filme/Filme";
import "./Main.css";

type FilmesType = {
  id: number;
  titulo: string;
  sinopse: string;
  imagem: string;
};

export default function Main() {
  const [texto, setTexto] = useState("");
  const [filmes, setFilmes] = useState<FilmesType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchFilmes = async () => {
      try {
        const response = await fetch("http://localhost:3000/filmes");
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados');
        }
        const data = await response.json();
        setFilmes(data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilmes();
  }, []);

  if (loading) return "Carregando...";
  if (error) return "Erro!";

  function mudaTexto(e: React.ChangeEvent<HTMLInputElement>) {
    setTexto(e.target.value);
  }

  return (
    <>
      <div className="pesquisa">
        <p>Buscar Filme</p>
        <input className="barrapesquisa" type="text" onChange={mudaTexto} />
        <div>
          <p className="texto_digitado">pesquisa: {texto}</p>
        </div>
      </div>
      <main className="content-main">
        {filmes
          .filter((filme) =>
            filme.titulo.toLowerCase().includes(texto.toLowerCase())
          )
          .map((filme: FilmesType) => (
            <Filme
              key={filme.id}
              titulo={filme.titulo}
              sinopse={filme.sinopse}
              imagem={filme.imagem}
            />
          ))}
      </main>
    </>
  );
}































