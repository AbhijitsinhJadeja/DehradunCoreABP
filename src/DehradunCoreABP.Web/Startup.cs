using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace DehradunCoreABP.Web
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddApplication<DehradunCoreABPWebModule>();
           
            
            services.AddMvc().AddRazorPagesOptions(options =>
            {
                options.Conventions.ConfigureFilter(new IgnoreAntiforgeryTokenAttribute());
            });
        }

        public void Configure(IApplicationBuilder app)
        {
            app.InitializeApplication();
        }
      
    }
}
