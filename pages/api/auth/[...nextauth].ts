import { useLoginMutation } from 'hooks/queries/user';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    // 구글 소셜 로그인
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        // 액세스, id 서버에 넘기는 코드 작성
        useLoginMutation(account.access_token);
        console.log('토큰', token.accessToken);
      }

      return token;
    },
  },
});
