using DehradunCoreABP.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace DehradunCoreABP.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(DehradunCoreABPEntityFrameworkCoreDbMigrationsModule),
        typeof(DehradunCoreABPApplicationContractsModule)
        )]
    public class DehradunCoreABPDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
