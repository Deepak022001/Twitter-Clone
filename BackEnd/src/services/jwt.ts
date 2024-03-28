import { PrismaClient } from "../clients/db"
import JWT from 'jsonwebtoken'
class JWTService(
    public static generateTokenForUser(userId:string){
        const user=await PrismaClient.user.Unique
    }
)