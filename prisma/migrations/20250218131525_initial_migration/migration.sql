-- CreateEnum
CREATE TYPE "VacancyType" AS ENUM ('INTERNSHIP', 'PRACTICE');

-- CreateTable
CREATE TABLE "company" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "logo_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "university" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "logo_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "university_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vacancy" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "questions" TEXT NOT NULL,
    "type" "VacancyType" NOT NULL,
    "start_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),
    "city" TEXT NOT NULL,
    "address" TEXT,
    "salary" DOUBLE PRECISION,
    "company_name" TEXT NOT NULL,
    "employee_id" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "vacancy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vacancy_responses" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "vacancy_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vacancy_responses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee_to_company" (
    "id" TEXT NOT NULL,
    "employee_id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,

    CONSTRAINT "employee_to_company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin_to_company" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,

    CONSTRAINT "admin_to_company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_to_university" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "university_id" TEXT NOT NULL,

    CONSTRAINT "student_to_university_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin_to_university" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "university_id" TEXT NOT NULL,

    CONSTRAINT "admin_to_university_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "company_name_key" ON "company"("name");

-- CreateIndex
CREATE UNIQUE INDEX "university_name_key" ON "university"("name");

-- CreateIndex
CREATE UNIQUE INDEX "vacancy_responses_student_id_vacancy_id_key" ON "vacancy_responses"("student_id", "vacancy_id");

-- CreateIndex
CREATE UNIQUE INDEX "employee_to_company_company_id_employee_id_key" ON "employee_to_company"("company_id", "employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "admin_to_company_company_id_user_id_key" ON "admin_to_company"("company_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "student_to_university_student_id_university_id_key" ON "student_to_university"("student_id", "university_id");

-- CreateIndex
CREATE UNIQUE INDEX "admin_to_university_user_id_university_id_key" ON "admin_to_university"("user_id", "university_id");

-- AddForeignKey
ALTER TABLE "vacancy" ADD CONSTRAINT "vacancy_company_name_fkey" FOREIGN KEY ("company_name") REFERENCES "company"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vacancy_responses" ADD CONSTRAINT "vacancy_responses_vacancy_id_fkey" FOREIGN KEY ("vacancy_id") REFERENCES "vacancy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_to_company" ADD CONSTRAINT "employee_to_company_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admin_to_company" ADD CONSTRAINT "admin_to_company_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_to_university" ADD CONSTRAINT "student_to_university_university_id_fkey" FOREIGN KEY ("university_id") REFERENCES "university"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admin_to_university" ADD CONSTRAINT "admin_to_university_university_id_fkey" FOREIGN KEY ("university_id") REFERENCES "university"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
