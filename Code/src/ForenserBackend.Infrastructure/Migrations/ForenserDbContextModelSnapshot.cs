﻿// <auto-generated />
using System;
using System.Collections.Generic;
using ForenserBackend.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace ForenserBackend.Infrastructure.Migrations
{
    [DbContext(typeof(ForenserDbContext))]
    partial class ForenserDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("ForenserBackend.Domain.entities.ImageEntity", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double>("ImageSize")
                        .HasColumnType("double precision");

                    b.Property<string>("ImageUrl")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("OccurenceId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("OccurenceId");

                    b.HasIndex("UserId");

                    b.ToTable("Images");
                });

            modelBuilder.Entity("ForenserBackend.Domain.entities.OccurrenceEntity", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime>("LastUpdatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<List<string>>("ObjectList")
                        .IsRequired()
                        .HasColumnType("text[]");

                    b.Property<string>("OccurrenceCity")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("OccurrenceDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("OccurrenceDescription")
                        .HasColumnType("text");

                    b.Property<int>("OccurrenceState")
                        .HasColumnType("integer");

                    b.Property<string>("OccurrenceStreet")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<List<string>>("ReferencePoints")
                        .IsRequired()
                        .HasColumnType("text[]");

                    b.Property<int>("Type")
                        .HasColumnType("integer");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<List<string>>("Vitms")
                        .IsRequired()
                        .HasColumnType("text[]");

                    b.Property<List<string>>("WitnessList")
                        .IsRequired()
                        .HasColumnType("text[]");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Occurrences");
                });

            modelBuilder.Entity("ForenserBackend.Domain.entities.ReportEntity", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ContactPhone")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("PostalCode")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ReportedPeopleName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("ReportingDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("State")
                        .HasColumnType("integer");

                    b.Property<string>("Street")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Reports");
                });

            modelBuilder.Entity("ForenserBackend.Domain.entities.ServiceScheduleEntity", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ContactPhone")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("PoliceUnity")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("PostalCode")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("State")
                        .HasColumnType("integer");

                    b.Property<int>("Type")
                        .HasColumnType("integer");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("ServiceSchedules");
                });

            modelBuilder.Entity("ForenserBackend.Domain.entities.UserEntity", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<DateTime>("BornDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("CPF")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<List<string>>("ContactPhonesNumbers")
                        .IsRequired()
                        .HasColumnType("text[]");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("UserEmail")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("UserName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("ForenserBackend.Domain.entities.VehicleEntity", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("Model")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("OcurrenceId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("UserRegisterId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("VehicleMark")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("VehicleYear")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("OcurrenceId");

                    b.HasIndex("UserRegisterId");

                    b.ToTable("Vehicles");
                });

            modelBuilder.Entity("ForenserBackend.Domain.entities.ImageEntity", b =>
                {
                    b.HasOne("ForenserBackend.Domain.entities.OccurrenceEntity", "Occurrence")
                        .WithMany("Images")
                        .HasForeignKey("OccurenceId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ForenserBackend.Domain.entities.UserEntity", "User")
                        .WithMany("Images")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Occurrence");

                    b.Navigation("User");
                });

            modelBuilder.Entity("ForenserBackend.Domain.entities.OccurrenceEntity", b =>
                {
                    b.HasOne("ForenserBackend.Domain.entities.UserEntity", "User")
                        .WithMany("Occurrences")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("ForenserBackend.Domain.entities.ReportEntity", b =>
                {
                    b.HasOne("ForenserBackend.Domain.entities.UserEntity", "User")
                        .WithMany("Reports")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("ForenserBackend.Domain.entities.ServiceScheduleEntity", b =>
                {
                    b.HasOne("ForenserBackend.Domain.entities.UserEntity", "User")
                        .WithMany("Schedules")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("ForenserBackend.Domain.entities.VehicleEntity", b =>
                {
                    b.HasOne("ForenserBackend.Domain.entities.OccurrenceEntity", "Occurrence")
                        .WithMany("Vehicles")
                        .HasForeignKey("OcurrenceId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ForenserBackend.Domain.entities.UserEntity", "User")
                        .WithMany("Vehicles")
                        .HasForeignKey("UserRegisterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Occurrence");

                    b.Navigation("User");
                });

            modelBuilder.Entity("ForenserBackend.Domain.entities.OccurrenceEntity", b =>
                {
                    b.Navigation("Images");

                    b.Navigation("Vehicles");
                });

            modelBuilder.Entity("ForenserBackend.Domain.entities.UserEntity", b =>
                {
                    b.Navigation("Images");

                    b.Navigation("Occurrences");

                    b.Navigation("Reports");

                    b.Navigation("Schedules");

                    b.Navigation("Vehicles");
                });
#pragma warning restore 612, 618
        }
    }
}
