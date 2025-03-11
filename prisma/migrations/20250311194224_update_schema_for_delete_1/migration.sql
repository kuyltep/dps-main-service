-- DropForeignKey
ALTER TABLE "vacancy" DROP CONSTRAINT "vacancy_company_name_fkey";

-- AddForeignKey
ALTER TABLE "vacancy" ADD CONSTRAINT "vacancy_company_name_fkey" FOREIGN KEY ("company_name") REFERENCES "company"("name") ON DELETE CASCADE ON UPDATE CASCADE;
