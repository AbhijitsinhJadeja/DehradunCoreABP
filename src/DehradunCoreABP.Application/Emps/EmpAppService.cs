using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace DehradunCoreABP.Emps
{
    public class EmpAppService :
        CrudAppService<
            Emp,
            EmpDto,
            Guid,
            PagedAndSortedResultRequestDto,
            CreateUpdateEmpDto>,
        IEmpAppService
    {
        private readonly IRepository<Emp, Guid> _EmpRepository;
        public EmpAppService(IRepository<Emp, Guid> repository)
            : base(repository)
        {
            _EmpRepository = repository;
        }
        public async Task<List<EmpDto>> GetListAsync()
        {
            var items = await _EmpRepository.GetListAsync();
            return items
                .Select(item => new EmpDto
                {
                    Id = item.Id,
                    Firstname = item.Firstname,
                    Lastname = item.Lastname,
                    Email = item.Email,
                    Username = item.Username,
                    Mobile = item.Mobile,
                    Password = item.Password
                }).ToList();
        }
    }
}