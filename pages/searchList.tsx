import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import { Card } from '../src/components/Card'
import styles from '../styles/Home.module.css'

export default function SearchList() {
  return (
    <div className={styles.container}>
      <Head>
        <title>National Quick Travel</title>
      </Head>
      
      <Header />

      <Card />
    </div>
  )
}