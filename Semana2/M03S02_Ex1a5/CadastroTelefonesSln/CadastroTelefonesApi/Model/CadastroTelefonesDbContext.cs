using Microsoft.EntityFrameworkCore;

namespace CadastroTelefonesApi.Model
{
    public class CadastroTelefonesDbContext : DbContext
    {
        public CadastroTelefonesDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<CadastroModel> CadastroModels { get; set; }
        public DbSet<DetalheModel> DetalheModels { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DetalheModel>()
                        .HasOne(e => e.Cadastro)
                        .WithMany(x => x.Detalhes)
                        .Metadata
                        .DeleteBehavior = DeleteBehavior.Restrict;

          base.OnModelCreating(modelBuilder);
        }
    }
}
