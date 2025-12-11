import { Table , Column , Model , DataType } from "sequelize-typescript";
@Table({tableName:"users"})
export class User extends Model {
    @Column({
        type:DataType.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    })
    declare email:string;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    declare password:string;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    declare name:string;

}
