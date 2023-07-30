/*
  Warnings:

  - You are about to drop the column `petId` on the `AdoptionRequirements` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `Pet` table. All the data in the column will be lost.
  - Added the required column `pet_id` to the `AdoptionRequirements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organization_id` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AdoptionRequirements" DROP CONSTRAINT "AdoptionRequirements_petId_fkey";

-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_organizationId_fkey";

-- AlterTable
ALTER TABLE "AdoptionRequirements" DROP COLUMN "petId",
ADD COLUMN     "pet_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "organizationId",
ADD COLUMN     "organization_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdoptionRequirements" ADD CONSTRAINT "AdoptionRequirements_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "Pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
