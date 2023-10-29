using AutoMapper;
using CadastroTelefonesApi.DTO.Cadastro;
using CadastroTelefonesApi.Model;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Linq;
using Microsoft.IdentityModel.Tokens;
using Microsoft.EntityFrameworkCore;

namespace CadastroTelefonesApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CadastroController : ControllerBase
    {
        private readonly ILogger<CadastroController> _logger;
        private readonly CadastroTelefonesDbContext _cadastroTelefonesDbContext;
        private readonly IMapper _mapper;


        public CadastroController(ILogger<CadastroController> logger, CadastroTelefonesDbContext cadastroTelefonesDbContext, IMapper mapper)
        {
            _logger = logger;
            _cadastroTelefonesDbContext = cadastroTelefonesDbContext;
            _mapper = mapper;
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status409Conflict)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<CadastroReadDTO> Post([FromBody] CadastroCreateDTO cadastroCreateDTO)
        {
            try
            {
                var cadastroModel = _mapper.Map<CadastroModel>(cadastroCreateDTO);

                if (_cadastroTelefonesDbContext.CadastroModels.ToList().Exists(e => e.DDD == cadastroCreateDTO.DDD))
                {
                    return Conflict(new { erro = "DDD Cadastrado" });
                }

                _cadastroTelefonesDbContext.CadastroModels.Add(cadastroModel);
                _cadastroTelefonesDbContext.SaveChanges();


                var cadastroReadDTO = _mapper.Map<CadastroReadDTO>(cadastroModel);

                return StatusCode(HttpStatusCode.Created.GetHashCode(), cadastroReadDTO);
            }
            catch (Exception ex)
            {
                return StatusCode(HttpStatusCode.InternalServerError.GetHashCode(), ex);
            }

        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<IEnumerable<CadastroReadDTO>> Get([FromQuery] string? DDD)
        {
            try
            {
                List<CadastroModel> cadastroModels;

                if (DDD.IsNullOrEmpty())
                {
                    cadastroModels = _cadastroTelefonesDbContext.CadastroModels
                                                         .Include(i => i.Detalhes)
                                                         .ToList();
                }
                else
                {
                    cadastroModels = _cadastroTelefonesDbContext.CadastroModels
                                                         .Where(w => w.DDD.Equals(DDD!))
                                                         .Include(i => i.Detalhes).ToList();
                }

                var cadastroReadDTO = _mapper.Map<List<CadastroReadDTO>>(cadastroModels);
                return Ok(cadastroReadDTO);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<CadastroReadDTO> Get(int id)
        {
            try
            {
                var cadastroModel = _cadastroTelefonesDbContext.CadastroModels.Find(id);

                if (cadastroModel == null)
                {
                    return NotFound(new { erro = "Cadastro não encontrado" });
                }

                var cadastroReadDTO = _mapper.Map<CadastroReadDTO>(cadastroModel);
                return Ok(cadastroReadDTO);
            }
            catch (Exception ex)
            {
                return StatusCode(HttpStatusCode.InternalServerError.GetHashCode(), ex);
            }
        }


        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<CadastroReadDTO> Put(int id, [FromBody] CadastroUpdateDTO cadastroUpdateDTO)
        {
            try
            {
                var cadastroModel = _cadastroTelefonesDbContext.CadastroModels.Where(w => w.Id == id).FirstOrDefault();

                if (cadastroModel == null)
                {
                    return NotFound(new { erro = "Registro não encontrado" });
                }

                cadastroModel = _mapper.Map(cadastroUpdateDTO, cadastroModel);

                _cadastroTelefonesDbContext.CadastroModels.Update(cadastroModel);
                _cadastroTelefonesDbContext.SaveChanges();
                var cadastroReadDTO = _mapper.Map<CadastroReadDTO>(cadastroModel);

                return Ok(cadastroReadDTO);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult Delete(int id)
        {
            try
            {
                var cadastroModel = _cadastroTelefonesDbContext.CadastroModels.Where(w => w.Id == id).FirstOrDefault();

                if (cadastroModel == null)
                {
                    return NotFound(new { erro = "Registro não encontrado" });
                }

                if (cadastroModel.Detalhes != null && cadastroModel.Detalhes!.Count > 0)
                {
                    return NotFound(new { erro = "Existe Detalhes relacionados com o cadastro" });
                }

                _cadastroTelefonesDbContext.CadastroModels.Remove(cadastroModel);
                _cadastroTelefonesDbContext.SaveChanges();

                return StatusCode(200);

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

    }
}