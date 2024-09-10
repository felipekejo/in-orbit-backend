/*
  Warnings:

  - You are about to drop the `goal_complitions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "goal_complitions" DROP CONSTRAINT "goal_complitions_goal_id_fkey";

-- DropTable
DROP TABLE "goal_complitions";

-- CreateTable
CREATE TABLE "goal_completions" (
    "id" TEXT NOT NULL,
    "goal_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "goal_completions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "goal_completions_goal_id_key" ON "goal_completions"("goal_id");

-- AddForeignKey
ALTER TABLE "goal_completions" ADD CONSTRAINT "goal_completions_goal_id_fkey" FOREIGN KEY ("goal_id") REFERENCES "goals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
