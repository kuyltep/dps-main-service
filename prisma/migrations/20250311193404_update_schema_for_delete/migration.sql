-- CreateEnum
CREATE TYPE "VacancyResponseStatus" AS ENUM ('UNDER_CONSIDERATION', 'REJECTED', 'ACCEPTED');

-- DropForeignKey
ALTER TABLE "admin_to_company" DROP CONSTRAINT "admin_to_company_company_id_fkey";

-- DropForeignKey
ALTER TABLE "admin_to_university" DROP CONSTRAINT "admin_to_university_university_id_fkey";

-- DropForeignKey
ALTER TABLE "employee_to_company" DROP CONSTRAINT "employee_to_company_company_id_fkey";

-- DropForeignKey
ALTER TABLE "student_to_university" DROP CONSTRAINT "student_to_university_university_id_fkey";

-- DropForeignKey
ALTER TABLE "vacancy_responses" DROP CONSTRAINT "vacancy_responses_vacancy_id_fkey";

-- AlterTable
ALTER TABLE "vacancy_responses" ADD COLUMN     "status" "VacancyResponseStatus" NOT NULL DEFAULT 'UNDER_CONSIDERATION';

-- AddForeignKey
ALTER TABLE "vacancy_responses" ADD CONSTRAINT "vacancy_responses_vacancy_id_fkey" FOREIGN KEY ("vacancy_id") REFERENCES "vacancy"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_to_company" ADD CONSTRAINT "employee_to_company_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admin_to_company" ADD CONSTRAINT "admin_to_company_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_to_university" ADD CONSTRAINT "student_to_university_university_id_fkey" FOREIGN KEY ("university_id") REFERENCES "university"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admin_to_university" ADD CONSTRAINT "admin_to_university_university_id_fkey" FOREIGN KEY ("university_id") REFERENCES "university"("id") ON DELETE CASCADE ON UPDATE CASCADE;
