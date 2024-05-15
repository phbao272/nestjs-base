-- CreateTable
CREATE TABLE "TestAndTEST" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TestAndTEST_pkey" PRIMARY KEY ("id")
);
