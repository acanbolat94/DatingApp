using AutoMapper.Configuration.Conventions;

namespace API.Helpers
{
    public class MessageParams : PaginationParams
    {
        public string Username { get; set; }
        public string Container { get; set; } = "Unread";
        

    }
}