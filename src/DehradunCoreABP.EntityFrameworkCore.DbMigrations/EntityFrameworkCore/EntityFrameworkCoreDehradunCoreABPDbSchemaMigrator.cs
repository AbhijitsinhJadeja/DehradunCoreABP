using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using DehradunCoreABP.Data;
using Volo.Abp.DependencyInjection;

namespace DehradunCoreABP.EntityFrameworkCore
{
    public class EntityFrameworkCoreDehradunCoreABPDbSchemaMigrator
        : IDehradunCoreABPDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreDehradunCoreABPDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the DehradunCoreABPMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<DehradunCoreABPMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}