-- DropForeignKey
ALTER TABLE "LabTest" DROP CONSTRAINT "LabTest_serviceId_fkey";

-- DropIndex
DROP INDEX "LabTest_serviceId_key";

-- AlterTable
ALTER TABLE "LabTest" ALTER COLUMN "serviceId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "LabTest" ADD CONSTRAINT "LabTest_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Services"("id") ON DELETE SET NULL ON UPDATE CASCADE;
