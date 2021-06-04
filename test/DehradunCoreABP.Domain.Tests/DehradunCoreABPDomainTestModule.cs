using DehradunCoreABP.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace DehradunCoreABP
{
    [DependsOn(
        typeof(DehradunCoreABPEntityFrameworkCoreTestModule)
        )]
    public class DehradunCoreABPDomainTestModule : AbpModule
    {

    }
}