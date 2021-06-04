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
    public class SignInModel : DehradunCoreABPPageModel
    {
        [BindProperty]
        public CreateUpdateEmpDto Emp { get; set; }
        public List<EmpDto> emp { get; set; }
        private readonly IEmpAppService _empAppService;
        public SignInModel(IEmpAppService empAppService)
        {
            _empAppService = empAppService;
        }
        public async Task OnGetAsync()
        {
            Emp = new CreateUpdateEmpDto();
            emp = await _empAppService.GetListAsync();
        }
        public async Task<IActionResult> OnPostAsync()
        {
            emp = await _empAppService.GetListAsync();
            var isValid = emp.Any(x => x.Password == Emp.Password && x.Username == Emp.Username);
            //Console.WriteLine(emp[0].Email + " " + Emp.Email + "  Pass : " + emp[0].Password + "  " + Emp.Password);           
            Console.WriteLine("isValid : " + isValid);
            if (isValid)
            {
                Response.Cookies.Append("userName", Emp.Username);
                Response.Cookies.Append("role", Emp.Password);
                return RedirectToAction("City", "Emps");
            }
            else
            {
                return NoContent();
            }
        }
    }
}
