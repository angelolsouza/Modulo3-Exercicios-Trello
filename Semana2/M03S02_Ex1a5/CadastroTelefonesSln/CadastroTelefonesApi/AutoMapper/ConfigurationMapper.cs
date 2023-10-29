using AutoMapper;
using CadastroTelefonesApi.DTO.Cadastro;
using CadastroTelefonesApi.Model;

namespace CadastroTelefonesApi.AutoMapper
{
    public class ConfigurationMapper : Profile
    {
        public ConfigurationMapper()
        {
//          CreateMap<CadastroModel, CadastroReadDTO>()
//              .ForMember(dest => dest.CadastroComDetalhes, opt => opt.MapFrom(src => src.Detalhes));

            CreateMap<CadastroCreateDTO, CadastroModel>()
                .ForMember(dest => dest.DDD, opt => opt.MapFrom(src => src.DDD))
                .ForMember(dest => dest.Numero, opt => opt.MapFrom(src => src.Numero))
                .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.Status));

            CreateMap<CadastroUpdateDTO, CadastroModel>();

//          CreateMap<DetalheModel, CadastroDetalheReadDTO>();
        }
    }
}
