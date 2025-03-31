-- DropForeignKey
ALTER TABLE "vacancy" DROP CONSTRAINT "vacancy_company_id_fkey";

-- AddForeignKey
ALTER TABLE "vacancy" ADD CONSTRAINT "vacancy_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
