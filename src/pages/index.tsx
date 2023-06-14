import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import {NewTweet} from "~/components/NewTweet";


const Home: NextPage = () => {

  return (
    <>
     <header className="sticky top-0 z-10 border-b bg-white pt-2">
     <h1>Home</h1>
     </header>
     <NewTweet />
     
    </>
  );
};

export default Home;


