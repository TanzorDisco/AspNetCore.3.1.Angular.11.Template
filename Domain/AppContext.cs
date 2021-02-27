using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Domain
{
	public class AppContext : DbContext
	{
		private IConfiguration _config;

		public DbSet<User> Users { get; set; }

		public AppContext(IConfiguration config)
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

			modelBuilder.Entity<User>().HasIndex(e => e.Username);
		}
	}
}
