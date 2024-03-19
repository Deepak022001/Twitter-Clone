import { PrismaClient } from '@prisma/client';
import axios from 'axios';
interface GoogleTokenResults {
  iss?: string;
  nbf?: string;
  aud?: string;
  sub?: string;
  email?: string;
  email_verifed: string;
  azp?: string;
  name?: string;
  pictures?: string;
  given_name: string;
  family_name?: string;
  iat?: string;
  exp?: string;
  jti?: string;
  alg?: string;
  kid?: string;
  typ?: string;
}
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
    const checkForUser = await PrismaClient.checkForUser.findUnique({
      where: { email: data.email },
    });
    if (!checkForUser) {
      await PrismaClient.user.create({
        data: {
          email: data.email,
          firstName: data.given_name,
          lastName: data.family_name,
          profileImageUrl: data.pictures,
        },
      });
    }

    console.log(data);
  },
};

export const resolvers = { queries };
