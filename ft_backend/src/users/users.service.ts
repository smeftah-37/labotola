import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Abonnement } from 'src/abonnement/entities/abonnement.entity';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly  userRepository: Repository<User>,
    @InjectRepository(Abonnement)  private readonly abonnementRepository: Repository<Abonnement>,
  ){}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const {role, ...userDetails} = createUserDto;
    let savedAbonnement = null;
    if(role)
    {

      const abonnement = this.abonnementRepository.create(role);
      savedAbonnement = await this.abonnementRepository.save(abonnement);
    }
    const user = this.userRepository.create({...userDetails, role: savedAbonnement});
    return this.userRepository.save(user);
  }
  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
  async updateByUsername(username: string, updateUserDto: UpdateUserDto): Promise<string> {
    const { role } = updateUserDto;
    if (role) {
        await this.userRepository.update({ username }, { role });
        return `User with username ${username} has been updated with new role: ${role}`;
    } else {
        return `No role provided for user with username ${username}.`;
    }
}
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
