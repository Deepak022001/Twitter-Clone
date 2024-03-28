import { Prisma, User } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import JWT from 'jsonwebtoken';
const JWT_SECRET = 'DEEPAK';
const prisma = new PrismaClient();
class JWTService {
  public static generateforuser(userId: User) {
    const user = prisma.user.findUnique({ where: { id: userId } });
    const payload = {
      id: userId.id,
      email: userId?.id,
    };
    const token = JWT.sign(payload, JWT_SECRET);
    return token;
  }
}
export default JWTService;
