using Volo.Abp.Settings;

namespace DehradunCoreABP.Settings
{
    public class DehradunCoreABPSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(DehradunCoreABPSettings.MySetting1));
        }
    }
}
