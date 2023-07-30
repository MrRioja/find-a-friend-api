/*
  Warnings:

  - You are about to drop the column `organization` on the `Pet` table. All the data in the column will be lost.
  - Added the required column `organizationId` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_organization_fkey";

-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "organization",
ADD COLUMN     "organizationId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
