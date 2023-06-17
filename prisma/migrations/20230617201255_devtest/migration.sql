/*
  Warnings:

  - A unique constraint covering the columns `[password]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Employer` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Employee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "isWorking" BOOLEAN NOT NULL,
    "employer_id" INTEGER NOT NULL,
    "commission" REAL,
    "employerId" INTEGER,
    CONSTRAINT "Employee_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "Employer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Employee" ("commission", "employerId", "employer_id", "id", "isWorking", "name") SELECT "commission", "employerId", "employer_id", "id", "isWorking", "name" FROM "Employee";
DROP TABLE "Employee";
ALTER TABLE "new_Employee" RENAME TO "Employee";
CREATE UNIQUE INDEX "Employee_employerId_key" ON "Employee"("employerId");
CREATE TABLE "new_Employer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_Employer" ("id", "name") SELECT "id", "name" FROM "Employer";
DROP TABLE "Employer";
ALTER TABLE "new_Employer" RENAME TO "Employer";
CREATE UNIQUE INDEX "Employer_email_key" ON "Employer"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");
