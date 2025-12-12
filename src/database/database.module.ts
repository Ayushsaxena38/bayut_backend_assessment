import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    imports:[
        ConfigModule.forRoot({
         isGlobal: true,
        }),
        SequelizeModule.forRoot({
            dialect:'mysql',
            // host:'localhost',
            // port:3306,
            // username:'root',
            // password:'1234',
            // database:'bayut_clone_db',
            uri:process.env.MYSQLURI,
            synchronize:true,
            logging:false,
            pool:{
                max:5,
                min:0,
                idle:1000
            }
        })
    ]
})
export class DatabaseModule {}