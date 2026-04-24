/*
  Warnings:

  - You are about to drop the column `date` on the `Quote` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Feedback" ADD COLUMN     "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Newsletter" ADD COLUMN     "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Quote" DROP COLUMN "date",
ADD COLUMN     "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "businessName" DROP NOT NULL;
