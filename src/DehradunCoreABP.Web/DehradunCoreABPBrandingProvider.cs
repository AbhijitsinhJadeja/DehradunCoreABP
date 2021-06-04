using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace DehradunCoreABP.Web
{
    [Dependency(ReplaceServices = true)]
    public class DehradunCoreABPBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "DehradunCoreABP";
    }
}
