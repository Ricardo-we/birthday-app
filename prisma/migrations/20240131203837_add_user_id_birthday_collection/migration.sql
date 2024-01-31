-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BirthdayCollection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "BirthdayCollection_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BirthdayCollection" ("code", "id", "name") SELECT "code", "id", "name" FROM "BirthdayCollection";
DROP TABLE "BirthdayCollection";
ALTER TABLE "new_BirthdayCollection" RENAME TO "BirthdayCollection";
CREATE UNIQUE INDEX "BirthdayCollection_code_key" ON "BirthdayCollection"("code");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
