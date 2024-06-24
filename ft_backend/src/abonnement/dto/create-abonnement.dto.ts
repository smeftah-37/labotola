import { Type } from "class-transformer";
import { IsDate, IsString } from "class-validator";

export class CreateAbonnementDto {
    @IsString()
    type: string;

    @IsDate()
    @Type(() => Date)
    dateOfExper: Date;
}
