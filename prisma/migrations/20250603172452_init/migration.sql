-- CreateTable
CREATE TABLE "pet_adopt_account" (
    "account_id" SERIAL NOT NULL,
    "account_name" TEXT NOT NULL,
    "account_email" TEXT NOT NULL,
    "account_con_number" TEXT NOT NULL,
    "account_password" TEXT NOT NULL,
    "account_role" TEXT NOT NULL DEFAULT 'USER',
    "account_created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "account_valid" BOOLEAN NOT NULL DEFAULT true,
    "account_verified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "pet_adopt_account_pkey" PRIMARY KEY ("account_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pet_adopt_account_account_email_key" ON "pet_adopt_account"("account_email");
