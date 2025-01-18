using Microsoft.EntityFrameworkCore;
using Netflix_Faker.Domain.Entities;
using Netflix_Faker.Domain.Interfaces.Repositories;
using Netflix_Faker.Infrastructure.Data;

namespace Netflix_Faker.Infrastructure.Repositories
{
    public class CatalogoRepository : ICatalogoRepository
    {
        private readonly AppDbContext _context;
        public CatalogoRepository(AppDbContext context)
        {
            _context = context;
        }
        // Adiciona um novo filme (ou qualquer objeto)
        public async Task AddMovieAsync(Catalogo movie)
        {
            _context.Catalogo.Add(movie);
            await _context.SaveChangesAsync();
        }

        // Exclui um filme (ou qualquer objeto) por ID
        public async Task DeleteMovieAsync(int id)
        {
            var movie = await GetMovieByIdAsync(id);
            if (movie != null)
            {
                _context.Set<object>().Remove(movie);
                await _context.SaveChangesAsync();
            }
        }

        // Retorna todos os filmes (ou qualquer lista de objetos)
        public async Task<IEnumerable<object>> GetAllMoviesAsync()
        {
            return await _context.Set<object>().ToListAsync();
        }

        // Retorna um filme (ou qualquer objeto) por ID
        public async Task<object> GetMovieByIdAsync(int id)
        {
            return await _context.Set<object>().FindAsync(id);
        }

        // Retorna filmes (ou objetos) por gênero (ou qualquer outro critério)
        public async Task<IEnumerable<object>> GetMoviesByGenreAsync()
        {
            return await _context.Catalogo
                                 .AsNoTracking()
                                 .GroupBy(x => x.Genero)  // Agrupa por gênero
                                 .Select(x => new  // Seleciona os grupos e cria o formato desejado
                                 {
                                     GenreName = x.Key,  // Nome do gênero
                                     Movies = x.ToList()  // Lista de filmes para aquele gênero
                                 })
                                 .ToListAsync();
        }

        // Atualiza um filme (ou qualquer objeto)
        public async Task UpdateMovieAsync(object movie)
        {
            _context.Set<object>().Update(movie);
            await _context.SaveChangesAsync();
        }
    }
}