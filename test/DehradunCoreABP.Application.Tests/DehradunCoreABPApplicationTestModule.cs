using Volo.Abp.Modularity;

namespace DehradunCoreABP
{
    [DependsOn(
        typeof(DehradunCoreABPApplicationModule),
        typeof(DehradunCoreABPDomainTestModule)
        )]
    public class DehradunCoreABPApplicationTestModule : AbpModule
    {

    }
}