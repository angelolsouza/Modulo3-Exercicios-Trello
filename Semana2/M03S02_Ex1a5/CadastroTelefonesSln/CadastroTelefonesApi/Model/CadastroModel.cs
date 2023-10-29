using CadastroTelefonesApi.Base;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CadastroTelefonesApi.Model
{
    [Table("Cadastro")]
    public class CadastroModel : RelacionalBase
    {
        [Column(TypeName = "INT"), Required, StringLength(3)]
        public int DDD { get; set; }

        [Column(TypeName = "INT"), Required, StringLength(9)]
        public int Numero { get; set; }

        [Column(TypeName = "BOOL"), Required, StringLength(1)]
        public int Status { get; set; }

        public virtual ICollection<DetalheModel> Detalhes { get; set; }

    }
}
