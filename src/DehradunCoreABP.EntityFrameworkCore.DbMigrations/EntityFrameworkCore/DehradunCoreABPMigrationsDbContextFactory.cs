using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace DehradunCoreABP.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class DehradunCoreABPMigrationsDbContextFactory : IDesignTimeDbContextFactory<DehradunCoreABPMigrationsDbContext>
    {
        public DehradunCoreABPMigrationsDbContext CreateDbContext(string[] args)
        {
            DehradunCoreABPEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<DehradunCoreABPMigrationsDbContext>()
                .UseNpgsql(configuration.GetConnectionString("Default"));

            return new DehradunCoreABPMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../DehradunCoreABP.DbMigrator/"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
