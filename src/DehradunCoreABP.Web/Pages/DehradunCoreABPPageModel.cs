using DehradunCoreABP.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace DehradunCoreABP.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class DehradunCoreABPPageModel : AbpPageModel
    {
        protected DehradunCoreABPPageModel()
        {
            LocalizationResourceType = typeof(DehradunCoreABPResource);
        }
    }
}