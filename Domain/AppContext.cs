using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Domain
{
	public class ApplicationContext : IdentityDbContext
	{
		private IConfiguration _config;

		public ApplicationContext(IConfiguration config)
		{
			_config = config;
		}

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			base.OnConfiguring(optionsBuilder);

			var conStr = _config.GetConnectionString("PostgreDatabase");

			optionsBuilder
				.UseNpgsql(conStr);
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);
		}
	}
}
