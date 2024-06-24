import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Abonnement } from 'src/abonnement/entities/abonnement.entity';
import { User } from './entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User, Abonnement])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
