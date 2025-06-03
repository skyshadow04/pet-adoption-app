-- CreateTable
CREATE TABLE "contact_submissions" (
    "contact_id" SERIAL NOT NULL,
    "contact_user_name" TEXT NOT NULL,
    "contact_user_email" TEXT NOT NULL,
    "contact_user_comment" TEXT NOT NULL,
    "contact_created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contact_submissions_pkey" PRIMARY KEY ("contact_id")
);
