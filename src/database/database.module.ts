import { Module } from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    imports:[
        SequelizeModule.forRoot({
            dialect:'mysql',
            host:'localhost',
            port:3306,
            username:'root',
            password:'1234',
            database:'bayut_clone_db',
            autoLoadModels:true,
            synchronize:true
        })
    ]
})
export class DatabaseModule {}