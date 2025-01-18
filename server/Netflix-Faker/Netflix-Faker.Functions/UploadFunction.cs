using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;
using Netflix_Faker.Domain.Entities;
using Netflix_Faker.Domain.Interfaces;
using Netflix_Faker.Domain.Interfaces.Repositories;

namespace Netflix_Faker.Functions
{
    public class UploadFunction
    {
        private readonly ILogger<UploadFunction> _logger;
        private readonly IBlobService _blobService;
        private readonly ICatalogoRepository _catalogoRepository;
        private const string ContainerName = "catalogo";

        public UploadFunction(ILogger<UploadFunction> logger, IBlobService blobService, ICatalogoRepository catalogoRepository)
        {
            _logger = logger;
            _blobService = blobService;
            _catalogoRepository = catalogoRepository;
        }

        [Function("Upload")]
        public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Anonymous, "post")] HttpRequest req)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");
            // Verifica se o conte�do da requisi��o � multipart/form-data
            if (!req.HasFormContentType)
            {
                return new BadRequestObjectResult("Conte�do n�o � multipart/form-data");
            }

            var formData = await req.ReadFormAsync();
            var file = formData.Files.FirstOrDefault();

            if (file == null)
            {
                return new BadRequestObjectResult("Nenhum arquivo foi enviado.");
            }

            // Verifica a extens�o do arquivo (apenas .xlsx ou .xls s�o permitidos)
            var fileExtension = Path.GetExtension(file.FileName).ToLower();
            //if (fileExtension != ".xlsx" && fileExtension != ".xls")
            //{
            //    return new BadRequestObjectResult("Apenas arquivos Excel (.xlsx, .xls) s�o permitidos.");
            //}

            // Aqui voc� pode fazer algo com o arquivo, como armazen�-lo em um Blob Storage, salvar no disco, etc.
            var fileName = file.FileName;
            var fileLength = file.Length;
            var filePath = Path.Combine(Path.GetTempPath(), fileName);

            var movieName = formData["movieName"].ToString();
            var genero = formData["genre"].ToString();

            var url = await _blobService.Upload(file, ContainerName);

            var catalogo = new Catalogo(movieName, genero, url);

            await _catalogoRepository.AddMovieAsync(catalogo);

            return new OkObjectResult("Upload sucess!");
        }
    }
}
