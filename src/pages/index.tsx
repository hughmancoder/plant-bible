import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

// Components
import Body from "../components/Body";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>🪴 Plant bible</h1>
        <Body />
      </main>
    </>
  );
}
