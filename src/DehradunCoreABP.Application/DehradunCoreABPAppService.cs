using System;
using System.Collections.Generic;
using System.Text;
using DehradunCoreABP.Localization;
using Volo.Abp.Application.Services;

namespace DehradunCoreABP
{
    /* Inherit your application services from this class.
     */
    public abstract class DehradunCoreABPAppService : ApplicationService
    {
        protected DehradunCoreABPAppService()
        {
            LocalizationResource = typeof(DehradunCoreABPResource);
        }
    }
}
