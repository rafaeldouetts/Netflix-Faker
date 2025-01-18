using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Netflix_Faker.Domain.Entities;

namespace Netflix_Faker.Domain.Interfaces.Repositories
{
    public interface ICatalogoRepository
    { 
        // Método para adicionar um novo filme
        Task AddMovieAsync(Catalogo movie);

        // Método para obter todos os filmes
        Task<IEnumerable<object>> GetAllMoviesAsync();

        // Método para obter um filme por seu ID
        Task<object> GetMovieByIdAsync(int id);

        // Método para atualizar informações de um filme
        Task UpdateMovieAsync(object movie);

        // Método para remover um filme
        Task DeleteMovieAsync(int id);

        // Método para encontrar filmes por gênero
        Task<IEnumerable<object>> GetMoviesByGenreAsync();
    }
}
