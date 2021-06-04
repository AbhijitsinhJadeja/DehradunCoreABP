using DehradunCoreABP.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace DehradunCoreABP.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class DehradunCoreABPController : AbpController
    {
        protected DehradunCoreABPController()
        {
            LocalizationResource = typeof(DehradunCoreABPResource);
        }
    }
}