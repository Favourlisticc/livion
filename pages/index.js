import Image from "next/image";
import Head from 'next/head'
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>HomePage | Livion</title>
        <meta name="description" content="Livion - " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/png for website.png" />
      </Head>
      <Navbar/>

    </div>
  );
}
