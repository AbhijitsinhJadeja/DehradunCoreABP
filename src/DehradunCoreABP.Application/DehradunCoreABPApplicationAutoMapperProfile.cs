using AutoMapper;
using DehradunCoreABP.Emps;

namespace DehradunCoreABP
{
    public class DehradunCoreABPApplicationAutoMapperProfile : Profile
    {
        public DehradunCoreABPApplicationAutoMapperProfile()
        {
            CreateMap<Emp, EmpDto>();
            CreateMap<CreateUpdateEmpDto, Emp>();
            /* You can configure your AutoMapper mapping configuration here.
             * Alternatively, you can split your mapping configurations
             * into multiple profile classes for a better organization. */
        }
    }
}
