using DehradunCoreABP.Emps;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace DehradunCoreABP.EntityFrameworkCore
{
    public static class DehradunCoreABPDbContextModelCreatingExtensions
    {
        public static void ConfigureDehradunCoreABP(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));
            builder.Entity<Emp>(b =>
            {
                b.ToTable(DehradunCoreABPConsts.DbTablePrefix + "Emps", DehradunCoreABPConsts.DbSchema);
                b.ConfigureByConvention(); //auto configure for the base class props
                //...
            });
        }
    }
}