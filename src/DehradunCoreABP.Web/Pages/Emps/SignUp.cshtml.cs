using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DehradunCoreABP.Emps;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DehradunCoreABP.Web.Pages.Emps
{
    public class SignUpModel : DehradunCoreABPPageModel
    {
        [BindProperty]
        public CreateUpdateEmpDto Emp { get; set; }
        public List<EmpDto> emp { get; set; }

        //public UploadFileDto UploadFileDto { get; set; }
        private readonly IEmpAppService _empAppService;
        //private readonly IFileAppService _fileAppService;
        private readonly IWebHostEnvironment _hostEnvironment;
        public SignUpModel(IEmpAppService empAppService, IWebHostEnvironment hostEnvironment)
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
            emp = await _empAppService.GetListAsync();
            var isValid = emp.Any(x => x.Email == Emp.Email);

                if (ModelState.IsValid)
                {
                    await _empAppService.CreateAsync(Emp);
                    //Console.WriteLine("Executeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
                    return RedirectToAction("SignIn", "Emps");
                }
                else
                {
                    return NoContent();
                }
            
            
        }
    }
}
