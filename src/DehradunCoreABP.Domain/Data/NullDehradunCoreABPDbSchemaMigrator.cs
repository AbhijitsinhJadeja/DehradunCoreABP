using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace DehradunCoreABP.Data
{
    /* This is used if database provider does't define
     * IDehradunCoreABPDbSchemaMigrator implementation.
     */
    public class NullDehradunCoreABPDbSchemaMigrator : IDehradunCoreABPDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}