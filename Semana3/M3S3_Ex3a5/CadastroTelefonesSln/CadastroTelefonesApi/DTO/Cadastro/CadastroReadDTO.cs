using CadastroTelefonesApi.Base;
using CadastroTelefonesApi.Enumerators;

namespace CadastroTelefonesApi.DTO.Cadastro
{
    public class CadastroReadDTO : DTOBase 
    {
        public int DDD { get; set; }

        public int Numero { get; set; }

        public bool Status { get; set; }

 //     public IList<CadastroDetalheReadDTO>? CadastroComDetalhes  { get; set; }
    }

//  public class CadastroDetalheReadDTO : DTOBase 
//  {
//       public CadastroEnum Nota { get; set; }
//       public string Justificativa { get; set; }
//  }
}
