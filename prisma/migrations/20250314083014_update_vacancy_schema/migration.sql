/*
  Warnings:

  - You are about to drop the column `company_name` on the `vacancy` table. All the data in the column will be lost.
  - Added the required column `company_id` to the `vacancy` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "vacancy" DROP CONSTRAINT "vacancy_company_name_fkey";

-- AlterTable
ALTER TABLE "vacancy" DROP COLUMN "company_name",
ADD COLUMN     "company_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "vacancy" ADD CONSTRAINT "vacancy_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("name") ON DELETE CASCADE ON UPDATE CASCADE;
