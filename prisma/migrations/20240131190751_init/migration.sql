-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "rol" TEXT DEFAULT 'USER'
);

-- CreateTable
CREATE TABLE "Email" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "BirthdayCollection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "BirthDay" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "collection_id" INTEGER,
    CONSTRAINT "BirthDay_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "BirthdayCollection" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_BirthDayToEmail" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_BirthDayToEmail_A_fkey" FOREIGN KEY ("A") REFERENCES "BirthDay" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_BirthDayToEmail_B_fkey" FOREIGN KEY ("B") REFERENCES "Email" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Email_email_key" ON "Email"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BirthdayCollection_code_key" ON "BirthdayCollection"("code");

-- CreateIndex
CREATE UNIQUE INDEX "_BirthDayToEmail_AB_unique" ON "_BirthDayToEmail"("A", "B");

-- CreateIndex
CREATE INDEX "_BirthDayToEmail_B_index" ON "_BirthDayToEmail"("B");
