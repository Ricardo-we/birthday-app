import {Module} from "@nestjs/common";
import { BirthDayController } from "./birthday.controller";
import { BirthDayService } from "./birthday.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers: [BirthDayController],
    providers: [BirthDayService],
    imports: [PrismaModule],
})
export class BirthDaysModule {}