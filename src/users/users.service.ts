import { BadRequestException, ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { CheckUserDto } from './dto/check-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel : typeof User,
    private jwtService : JwtService
  ){}

  async create(createUserDto: CreateUserDto) {
    console.log("createUserDto : ",CreateUserDto)
    const existingUser = await this.userModel.findOne({where:{email:createUserDto.email}});
    if(existingUser){
      throw new BadRequestException("Email Already in Use!!")
    }
    //salt 
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(createUserDto.password , salt);

    const newUser = await this.userModel.create({
      email:createUserDto.email,
      password:hashedPassword,
      name : createUserDto.name || "New User"
    })

    return {
      id:newUser.id,
      email:newUser.email,
      message:'User Registered Successfully'
    }
  }

  async findOne(id:number) {
    const user = await this.userModel.findOne({where:{id:id}});
    console.log("user : ",user);
    if(user){
      return {
        message:"User found.",
        email:user.email,
        name:user.name
      }
    }else{
      return {
        message:"User Not Found!!"
      }
    }
  }

  async login(loginUserDto:LoginUserDto){
    const {email , password } = loginUserDto;
    const user = await this.userModel.findOne({where:{email:email}});
    if(!user){
      throw new UnauthorizedException("Invalid Credentials!")
    }
    const isMatch = await bcrypt.compare(password , user.password);
    if(!isMatch){
      throw new UnauthorizedException("Invalid Credentials !");
    }
    const payload = { sub: user.id , email : user.email}
    const token = this.jwtService.sign(payload);

    return {
      message : "Login Successfull!",
      access_token : token,
      user:{
        id:user.id,
        email:user.email,
        name:user.name
      }
    }

  }

  async userExists(checkUserDto:CheckUserDto){
    const email = checkUserDto.email;
    const user = await this.userModel.findOne({where:{email:email}});
    if(user){
      throw new ConflictException("User Already Exists!")
    }else{
      return {
        message:"User dosen't Exists!",
        isExists:false
      }
    }

  }

  findAll() {
    return `This action returns all users`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
