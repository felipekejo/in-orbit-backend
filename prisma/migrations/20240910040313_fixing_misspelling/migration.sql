/*
  Warnings:

  - You are about to drop the column `desired_weekly_freequency` on the `goals` table. All the data in the column will be lost.
  - Added the required column `desired_weekly_frequency` to the `goals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "goals" DROP COLUMN "desired_weekly_freequency",
ADD COLUMN     "desired_weekly_frequency" INTEGER NOT NULL;
