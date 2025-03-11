-- AlterTable
ALTER TABLE "vacancy" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "vacancy_responses" ALTER COLUMN "message" DROP NOT NULL;
