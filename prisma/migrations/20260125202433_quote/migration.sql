-- DropIndex
DROP INDEX "Quote_email_key";

-- AlterTable
ALTER TABLE "Quote" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Quote_pkey" PRIMARY KEY ("id");
