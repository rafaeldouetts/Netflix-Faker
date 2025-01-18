using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using Netflix_Faker.Domain.Interfaces.Repositories;

namespace Netflix_Faker.Functions
{
    public class GetCatalogoFunction
    {
        private readonly ILogger<GetCatalogoFunction> _logger;
        private readonly ICatalogoRepository _catalogoRepository;
        public GetCatalogoFunction(ILogger<GetCatalogoFunction> logger, ICatalogoRepository catalogoRepository)
        {
            _logger = logger;
            _catalogoRepository = catalogoRepository;
        }

        [Function("GetCatalogoFunction")]
        public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get")] HttpRequest req)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");
            var catalogo = await _catalogoRepository.GetMoviesByGenreAsync();

            return new OkObjectResult(catalogo);
        }
    }
}
