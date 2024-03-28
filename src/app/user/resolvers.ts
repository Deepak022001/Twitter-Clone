import { PrismaClient } from '@prisma/client';
import axios, { toFormData } from 'axios';
import JWTService from '../../services/jwt';

interface GoogleTokenResults {
  iss?: string;
  nbf?: string;
  aud?: string;
  sub?: string;
  email: string;
  email_verifed: string;
  azp?: string;
  name?: string;
  pictures?: string;
  given_name: string;
  family_name: string;
  iat?: string;
  exp?: string;
  jti?: string;
  alg?: string;
  kid?: string;
  profileImageUrl?: string;
  typ?: string;
}
const prisma = new PrismaClient();

const queries = {
  verifyGoogleToken: async (parent: any, { token }: { token: string }) => {
    const googleToken = token;
    const googleOauthURL = new URL('https://oauth2.googleapis.com/tokeninfo');
    googleOauthURL.searchParams.set('id_token', googleToken);
    const { data } = await axios.get<GoogleTokenResults>(
      googleOauthURL.toString(),
      {
        responseType: 'json',
      }
    );
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (!user) {
      await prisma.user.create({
        data: {
          email: data.email,
          firstName: data.given_name,
          lastName: data.family_name,
          // profileImageUrl: data.pictures,
        },
      });
    }
    const userInDb = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (!userInDb) throw new Error('User with email not found');
    const userToken = await JWTService.generateforuser(userInDb);

    return userToken;
  },
};
export const resolvers = { queries };
