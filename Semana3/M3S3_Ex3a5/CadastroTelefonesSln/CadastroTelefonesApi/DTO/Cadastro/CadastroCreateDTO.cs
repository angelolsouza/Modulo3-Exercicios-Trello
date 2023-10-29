using System.ComponentModel.DataAnnotations;

namespace CadastroTelefonesApi.DTO.Cadastro
{
    public class CadastroCreateDTO
    {
        [Required(ErrorMessage = "Campo Obrigatório")]
        [MaxLength(3, ErrorMessage = "Este campo aceita até 3 digitos")]
        [MinLength(3, ErrorMessage = "Favor digitar o número do DDD")]
        public int DDD { get; set; }

        [Required(ErrorMessage = "Campo Obrigatório")]
        [Display(Name = "Número")]
        public int Numero { get; set; }

        [Required(ErrorMessage = "Campo Obrigatório")]
        [Display(Name = "Ativo")]
        public bool Status { get; set; }

    }
}
