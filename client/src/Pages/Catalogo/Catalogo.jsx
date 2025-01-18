import './Catalogo.css'
import logo from '../../assets/logo.png';

export default (props) => {
  const filmesPorCategoria = {
    Ação: [
      { nome: "Mad Max: Estrada da Fúria (2015)", imagem: logo },
      { nome: "Vingadores: Ultimato (2019)", imagem: logo },
      { nome: "John Wick: De Volta ao Jogo (2014)", imagem: logo },
      { nome: "O Protetor (2014)", imagem: logo },
      { nome: "Gladiador (2000)", imagem: logo }
    ],
    Comédia: [
      { nome: "Apertem os Cintos... O Piloto Sumiu! (1980)", imagem: "../../assets/logo.png" },
      { nome: "O Grande Lebowski (1998)", imagem: "../../assets/logo.png" },
      { nome: "Se Beber, Não Case! (2009)", imagem: "../../assets/logo.png" },
      { nome: "Superbad - É Hoje (2007)", imagem: "../../assets/logo.png" },
      { nome: "A Mentira (2010)", imagem: "../../assets/logo.png" }
    ],
    Drama: [
      { nome: "Forrest Gump - O Contador de Histórias (1994)", imagem: "../../assets/logo.png" },
      { nome: "O Poderoso Chefão (1972)", imagem: "../../assets/logo.png" },
      { nome: "À Espera de um Milagre (1999)", imagem: "../../assets/logo.png" },
      { nome: "Clube da Luta (1999)", imagem: "../../assets/logo.png" },
      { nome: "O Pianista (2002)", imagem: "../../assets/logo.png" }
    ],
    Terror: [
      { nome: "O Exorcista (1973)", imagem: "../../assets/logo.png" },
      { nome: "O Iluminado (1980)", imagem: "../../assets/logo.png" },
      { nome: "Hereditary - O Herdeiro (2018)", imagem: "../../assets/logo.png" },
      { nome: "A Bruxa (2015)", imagem: "../../assets/logo.png" },
      { nome: "Invocação do Mal (2013)", imagem: "../../assets/logo.png" }
    ],
    FiccaoCientifica: [
      { nome: "Blade Runner 2049 (2017)", imagem: "../../assets/logo.png" },
      { nome: "Matrix (1999)", imagem: "../../assets/logo.png" },
      { nome: "Interestelar (2014)", imagem: "../../assets/logo.png" },
      { nome: "Star Wars: O Império Contra-Ataca (1980)", imagem: "../../assets/logo.png" },
      { nome: "Jurassic Park (1993)", imagem: "../../assets/logo.png" }
    ],
    Animacao: [
      { nome: "Toy Story (1995)", imagem: "../../assets/logo.png" },
      { nome: "Vingadores: Ultimato (2019)", imagem: "../../assets/logo.png" },
      { nome: "Procurando Nemo (2003)", imagem: "../../assets/logo.png" },
      { nome: "Shrek (2001)", imagem: "../../assets/logo.png" },
      { nome: "Os Incríveis (2004)", imagem: "../../assets/logo.png" }
    ],
    Romance: [
      { nome: "Titanic (1997)", imagem: "../../assets/logo.png" },
      { nome: "Diário de uma Paixão (2004)", imagem: "../../assets/logo.png" },
      { nome: "Orgulho e Preconceito (2005)", imagem: "../../assets/logo.png" },
      { nome: "Como Eu Era Antes de Você (2016)", imagem: "../../assets/logo.png" },
      { nome: "Antes do Amanhecer (1995)", imagem: "../../assets/logo.png" }
    ],
    Suspense: [
      { nome: "Seven: Os Sete Crimes Capitais (1995)", imagem: "../../assets/logo.png" },
      { nome: "Garota Exemplar (2014)", imagem: "../../assets/logo.png" },
      { nome: "O Sexto Sentido (1999)", imagem: "../../assets/logo.png" },
      { nome: "O Jogo (1997)", imagem: "../../assets/logo.png" },
      { nome: "Prisioneiros (2013)", imagem: "../../assets/logo.png" }
    ],
    Documentario: [
      { nome: "Won’t You Be My Neighbor? (2018)", imagem: "../../assets/logo.png" },
      { nome: "13th: A Emenda e a Prisão em Massa (2016)", imagem: "../../assets/logo.png" },
      { nome: "O Último Dançarino de Mao (2009)", imagem: "../../assets/logo.png" },
      { nome: "Free Solo (2018)", imagem: "../../assets/logo.png" },
      { nome: "Amy (2015)", imagem: "../../assets/logo.png" }
    ]
  };

  const li = <div className='primary-color' style={{ paddingLeft: '150px', paddingRight: '150px'}}>
  <div>
    {Object.keys(filmesPorCategoria).map((categoria) => (
      <div key={categoria} style={{ marginBottom: '30px' }}>
        <h2 style={{ textAlign: 'start', color: 'red' }}>{categoria}</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {filmesPorCategoria[categoria].map((filme, index) => (
            <div key={index} style={{ marginBottom: '20px', textAlign: 'center', width: '150px' }}>
              <img 
                src={filme.imagem} 
                alt={filme.nome} 
                style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '10px' }} 
              />
              <span>{filme.nome}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>;

  return (
    <>
    <div className="catalogo-content">
    <header>
            <img src={logo} alt="logo" />
    </header>

    <div className='cabecalho'>
      <button className='button-patter'>Adicionar</button>
    </div>

    <div>
      {li}
    </div>
    <div>

    </div>
      </div>
    </>
  );
};
