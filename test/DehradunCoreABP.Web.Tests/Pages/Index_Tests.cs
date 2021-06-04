using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace DehradunCoreABP.Pages
{
    public class Index_Tests : DehradunCoreABPWebTestBase
    {
        [Fact]
        public async Task Welcome_Page()
        {
            var response = await GetResponseAsStringAsync("/");
            response.ShouldNotBeNull();
        }
    }
}
