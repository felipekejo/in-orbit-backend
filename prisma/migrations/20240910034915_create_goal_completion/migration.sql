-- CreateTable
CREATE TABLE "goal_complitions" (
    "id" TEXT NOT NULL,
    "goal_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "goal_complitions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "goal_complitions_goal_id_key" ON "goal_complitions"("goal_id");

-- AddForeignKey
ALTER TABLE "goal_complitions" ADD CONSTRAINT "goal_complitions_goal_id_fkey" FOREIGN KEY ("goal_id") REFERENCES "goals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
