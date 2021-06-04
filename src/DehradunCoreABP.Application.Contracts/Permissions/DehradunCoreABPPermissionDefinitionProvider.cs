using DehradunCoreABP.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace DehradunCoreABP.Permissions
{
    public class DehradunCoreABPPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(DehradunCoreABPPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(DehradunCoreABPPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<DehradunCoreABPResource>(name);
        }
    }
}
