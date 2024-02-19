import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/navbar";
import Footer from "@/comps/footer";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>My First Next js</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis eveniet deserunt beatae ad minima nisi. Alias voluptatum, minima cum quos tempora laudantium voluptates recusandae assumenda nostrum nisi et autem officia!</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis eveniet deserunt beatae ad minima nisi. Alias voluptatum, minima cum quos tempora laudantium voluptates recusandae assumenda nostrum nisi et autem officia!</p>
    <Footer />
    </div>
    
  );
}
