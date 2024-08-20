using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ForenserBackend.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class ReconfigureRelations9 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Images_Occurrences_OccurrenceId",
                table: "Images");

            migrationBuilder.DropForeignKey(
                name: "FK_Vehicles_Occurrences_OccurrenceId",
                table: "Vehicles");

            migrationBuilder.DropForeignKey(
                name: "FK_Vehicles_Users_UserId",
                table: "Vehicles");

            migrationBuilder.DropIndex(
                name: "IX_Vehicles_OccurrenceId",
                table: "Vehicles");

            migrationBuilder.DropIndex(
                name: "IX_Vehicles_UserId",
                table: "Vehicles");

            migrationBuilder.DropIndex(
                name: "IX_Images_OccurrenceId",
                table: "Images");

            migrationBuilder.DropColumn(
                name: "OccurrenceId",
                table: "Vehicles");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Vehicles");

            migrationBuilder.DropColumn(
                name: "OccurrenceId",
                table: "Images");

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_OcurrenceId",
                table: "Vehicles",
                column: "OcurrenceId");

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_UserRegisterId",
                table: "Vehicles",
                column: "UserRegisterId");

            migrationBuilder.CreateIndex(
                name: "IX_Images_OccurenceId",
                table: "Images",
                column: "OccurenceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Images_Occurrences_OccurenceId",
                table: "Images",
                column: "OccurenceId",
                principalTable: "Occurrences",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Vehicles_Occurrences_OcurrenceId",
                table: "Vehicles",
                column: "OcurrenceId",
                principalTable: "Occurrences",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Vehicles_Users_UserRegisterId",
                table: "Vehicles",
                column: "UserRegisterId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Images_Occurrences_OccurenceId",
                table: "Images");

            migrationBuilder.DropForeignKey(
                name: "FK_Vehicles_Occurrences_OcurrenceId",
                table: "Vehicles");

            migrationBuilder.DropForeignKey(
                name: "FK_Vehicles_Users_UserRegisterId",
                table: "Vehicles");

            migrationBuilder.DropIndex(
                name: "IX_Vehicles_OcurrenceId",
                table: "Vehicles");

            migrationBuilder.DropIndex(
                name: "IX_Vehicles_UserRegisterId",
                table: "Vehicles");

            migrationBuilder.DropIndex(
                name: "IX_Images_OccurenceId",
                table: "Images");

            migrationBuilder.AddColumn<string>(
                name: "OccurrenceId",
                table: "Vehicles",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Vehicles",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "OccurrenceId",
                table: "Images",
                type: "text",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_OccurrenceId",
                table: "Vehicles",
                column: "OccurrenceId");

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_UserId",
                table: "Vehicles",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Images_OccurrenceId",
                table: "Images",
                column: "OccurrenceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Images_Occurrences_OccurrenceId",
                table: "Images",
                column: "OccurrenceId",
                principalTable: "Occurrences",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Vehicles_Occurrences_OccurrenceId",
                table: "Vehicles",
                column: "OccurrenceId",
                principalTable: "Occurrences",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Vehicles_Users_UserId",
                table: "Vehicles",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
