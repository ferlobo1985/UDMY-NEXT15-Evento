import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
    providers:[
        CredentialsProvider({
            name:'Credentials',
            credentials:{
                email:{
                    label:"Email",
                    type:"email",
                    placeholder:"Enter your email"
                },
                password:{
                    label:"Password",
                    type:"password",
                    placeholder:"Enter your password"
                }
            },
            async authorize(credentials){
                /// go to the DB and sign in or register
                const user = {
                    id:98673,
                    email:"francis@gmail.com",
                    password:"testing123"
                }

                if(credentials?.email === user.email && credentials?.password === user.password){
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    theme: {
        colorScheme: "light", // "auto" | "dark" | "light"
        brandColor: "", // Hex color code
        logo: "", // Absolute URL to image
        buttonText: "" // Hex color code
    }
}