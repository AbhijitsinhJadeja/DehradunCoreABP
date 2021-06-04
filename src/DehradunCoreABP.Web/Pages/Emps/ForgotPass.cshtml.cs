using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using DehradunCoreABP.Emps;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DehradunCoreABP.Web.Pages.Emps
{
    public class ForgotPassModel : DehradunCoreABPPageModel
    {
        [BindProperty]
        public CreateUpdateEmpDto Emp { get; set; }

        public List<EmpDto> emp { get; set; }

        private readonly IEmpAppService _empAppService;

        private readonly IWebHostEnvironment _hostEnvironment;
        public ForgotPassModel(IEmpAppService empAppService, IWebHostEnvironment hostEnvironment)
        {
            _empAppService = empAppService;
            _hostEnvironment = hostEnvironment;
        }

        public void OnGet()
        {
            Emp = new CreateUpdateEmpDto();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            emp = await _empAppService.GetListAsync();
            var isValid = emp.Any(x => x.Email == Emp.Email);

            Console.WriteLine("Executeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");

            if (isValid) {
                using (MailMessage mail = new MailMessage())
                {
                    var forPass = emp.FirstOrDefault(x => (x.Email == Emp.Email));
                    var body = "<h3>Your Password : " + forPass.Password + "</h3>";
                    mail.From = new MailAddress("examwebsite19@gmail.com");
                    mail.To.Add(Emp.Email);
                    mail.Subject = "Password Recovery";
                    mail.Body = String.Format(body, Emp.Password);
                    mail.IsBodyHtml = true;

                    using (SmtpClient smtpClient = new SmtpClient("smtp.gmail.com", 587))
                    {
                        smtpClient.Credentials = new NetworkCredential("examwebsite19@gmail.com", "abhi191299");
                        smtpClient.EnableSsl = true;
                        smtpClient.Send(mail);
                    }
                }
                Console.WriteLine("Email Sent...............");
                return RedirectToAction("SignIn", "Emps");
            }
            else
            {
                Console.WriteLine("Email Not Send........... + " + isValid);
                return NoContent();
            }

            //Console.WriteLine("Exevuteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee + " + isValid);
            //Console.WriteLine(isValid);
        }
    }
}
