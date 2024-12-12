interface SignInWithOAuthParams {
  provider: "google" | "github";
  providerAccountId: string;
  user: {
    email: string;
    name: string;
    image: string;
    username: string;
  };
}
