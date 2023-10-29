using CadastroTelefonesApi.Base;
using CadastroTelefonesApi.Enumerators;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CadastroTelefonesApi.Model
{
    [Table("Detalhe")]
    public class DetalheModel : RelacionalBase
    {
       
        [Required]
        public int DDD { get; set; }

        [Required]
        public int Numero { get; set; }

        [Required]
        public bool Status { get; set; }

        [Required]
        public virtual CadastroModel Cadastro { get; set; }
    }
}
