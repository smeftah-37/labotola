import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { AbonnementModule } from './abonnement/abonnement.module';
import { Abonnement } from './abonnement/entities/abonnement.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'smeftah',
    password: '080623',
    database: 'labotola',
    entities:[User, Abonnement],
    synchronize: true,
  }),UsersModule, AbonnementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
