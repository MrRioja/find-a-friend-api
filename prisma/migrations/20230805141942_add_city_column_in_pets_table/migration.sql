/*
  Warnings:

  - Added the required column `city` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pet" ADD COLUMN     "city" TEXT NOT NULL;
