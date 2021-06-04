using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace DehradunCoreABP.Emps
{
    public interface IEmpAppService :
        ICrudAppService<
            EmpDto,
            Guid,
            PagedAndSortedResultRequestDto,
            CreateUpdateEmpDto>

    {
            Task<List<EmpDto>> GetListAsync();
    }
}