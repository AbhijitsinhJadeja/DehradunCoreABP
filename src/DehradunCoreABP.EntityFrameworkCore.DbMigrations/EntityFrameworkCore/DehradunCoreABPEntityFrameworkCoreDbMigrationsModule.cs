using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace DehradunCoreABP.EntityFrameworkCore
{
    [DependsOn(
        typeof(DehradunCoreABPEntityFrameworkCoreModule)
        )]
    public class DehradunCoreABPEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<DehradunCoreABPMigrationsDbContext>();
        }
    }
}
