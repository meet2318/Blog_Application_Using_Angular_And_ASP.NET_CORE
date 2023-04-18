﻿namespace TheDevBlog.API.Models.DTO
{
    public class UpdatePostRequest
    {
        public string Title { get; set; }

        public string Content { get; set; }

        public string Summary { get; set; }

        public string UrlHandle { get; set; }

        public string FeaturedImageUrl { get; set; }

        public bool Visible { get; set; }

        public string Author { get; set; }

        public DateTime PublishDate { get; set; }

        public DateTime UpdatedDate { get; set; }
    }
}
