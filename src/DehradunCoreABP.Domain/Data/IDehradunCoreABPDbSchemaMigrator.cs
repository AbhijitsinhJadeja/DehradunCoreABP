using System.Threading.Tasks;

namespace DehradunCoreABP.Data
{
    public interface IDehradunCoreABPDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
