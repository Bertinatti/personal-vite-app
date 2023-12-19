import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Header from './components/Header.jsx'
import Section from './components/Section.jsx';
import ListItem from './components/ListItem.jsx';

const movieListData = [
  {
    href: "https://www.imdb.com/title/tt0120737/",
    src: "https://m.media-amazon.com/images/M/MV5BNDEyMzU0ODUtMTdjOS00Y2E2LWJlZmEtYmJjMmQ2NWZlNGQ1XkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_FMjpg_UX745_.jpg",
    alt: "O Senhor dos Anéis: A Sociedade do Anel | Movie Image"
  },
  {
    href: "https://www.imdb.com/title/tt0167261/",
    src: "https://m.media-amazon.com/images/M/MV5BMDFlNDVjYzEtMTA5NC00ZDU4LWI2M2YtZjlhMWNkNTlmMWUzXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_FMjpg_UX250_.jpg",
    alt: "O Senhor dos Anéis: As Duas Torres | Movie Image"
  },  
  {
    href: "https://www.imdb.com/title/tt0167260/",
    src: "https://m.media-amazon.com/images/M/MV5BMjA2MzQxODU3NV5BMl5BanBnXkFtZTYwNTA2MjA3._V1_FMjpg_UX350_.jpg",
    alt: "O Senhor dos Anéis: O Retorno do Rei | Movie Image"
  },  
  {
    href: "https://www.imdb.com/title/tt2243973/",
    src: "https://m.media-amazon.com/images/M/MV5BZmNmMTg5NDItYzdiMi00YzgyLTlkNWEtNDdlMTdmYjZlNDU5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY2100_.jpg",
    alt: "Hannibal | Movie Image"
  },
  {
    href: "https://www.imdb.com/title/tt1190634/",
    src: "https://m.media-amazon.com/images/M/MV5BNGEyOGJiNWEtMTgwMi00ODU4LTlkMjItZWI4NjFmMzgxZGY2XkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_FMjpg_UX675_.jpg",
    alt: "The Boys | Movie Image"

  }
]

const careerProjectData = [
  {
    href: "https://www.linkedin.com/in/leobertinatti/",
    src: "https://img.icons8.com/nolan/64/linkedin.png",
    alt: "Leonardo Bertinatti | LinkedIn"
  },
  {
    href: "https://github.com/Bertinatti",
    src: "https://img.icons8.com/nolan/64/github.png",
    alt: "Leonardo Bertinatti | Github"
  },
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header/>

    <main>
      <Section title="Sobre mim" 
        subtitle="Olá, me chamo Leonardo Cardoso Bertinatti mas podem me chamar de Bertinatti.
                  Sou graduado em Engenharia Civil, técnico em Informática e graduando em Análise e Desenvolvimento de Sistema.
                  Um programador de primeira viagem que se aventurou pelos mares turbulentos e se viciou na adrenalina dos códigos."
      />
      <Section title="Experiências Profissionais" 
        subtitle="Desenvolvedor CRM Dynamics 365, com conhecimentos em C# e Javascript.
                  Atualmente trabalho na Atos Brasil, atuando com demandas para CRM Dynamics 365. Abaixo um pouco sobre minha carreira e alguns projetos pessoais:" 
        className="social-list">
        { 
          careerProjectData.map((item) => {
            return (
              <ListItem 
                href={item.href}
                src={item.src}
                alt={item.alt}
              />
            )
          })
        }

      </Section>

      <Section title="Filmes e Séries" subtitle="Alguns dos meus filmes e séries favoritos:" className="movies-list">
        
        {
          movieListData.map((item) => {
            return (
              <ListItem 
                href={item.href}
                src={item.src}
                alt={item.alt}
              />
            )
          })
        }

      </Section>
    </main>
  </>
);
