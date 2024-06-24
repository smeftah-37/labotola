import { IsInt, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAbonnementDto } from '../../abonnement/dto/create-abonnement.dto';

export class CreateUserDto {
  
  @IsString()
  username: string;

  @IsString()
  fullname: string;

  @IsString()
  favoriteTeam: string;

  @IsInt()
  age: number;

  @IsString()
  city: string;

  @ValidateNested()
  @Type(() => CreateAbonnementDto)
  role?: CreateAbonnementDto | null;

  @IsInt()
  limitWatching: number;
}
