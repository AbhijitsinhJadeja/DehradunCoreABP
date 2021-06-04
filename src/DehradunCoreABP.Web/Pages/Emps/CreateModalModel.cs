using System;
using System.IO;
using System.Threading.Tasks;
using DehradunCoreABP.Emps;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace DehradunCoreABP.Web.Pages.Emps
{
    public class CreateModalModel :DehradunCoreABPPageModel
    {
        [BindProperty]
        public CreateUpdateEmpDto Emp { get; set; }

        //public UploadFileDto UploadFileDto { get; set; }
        private readonly IEmpAppService _empAppService;
        //private readonly IFileAppService _fileAppService;
        private readonly IWebHostEnvironment _hostEnvironment;
        public CreateModalModel(IEmpAppService empAppService, IWebHostEnvironment hostEnvironment)
        {
            _empAppService = empAppService;
            //_fileAppService = fileAppService;
            _hostEnvironment = hostEnvironment;
        }

        public void OnGet()
        {
            Emp = new CreateUpdateEmpDto();

        }
        //public async Task<IActionResult> OnPostAsync()
        //{
        //    await _bookAppService.CreateAsync(Book);
        //    return NoContent();
        //}

        public async Task<IActionResult> OnPostAsync()
        {

            await _empAppService.CreateAsync(Emp);
            Console.WriteLine("Executeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
            
            return NoContent();
        }
    }
}


