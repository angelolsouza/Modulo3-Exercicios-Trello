using CadastroTelefonesApi.Model;
using Microsoft.AspNetCore.Mvc;

namespace CadastroTelefonesApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DetalheController : ControllerBase
    {
        private readonly ILogger<CadastroController> _logger;
        private readonly CadastroTelefonesDbContext _cadastroTelefonesDbContext;


        public DetalheController(ILogger<CadastroController> logger, CadastroTelefonesDbContext cadastroTelefonesDbContext)
        {
            _logger = logger;
            _cadastroTelefonesDbContext = cadastroTelefonesDbContext;
        }

    }
}