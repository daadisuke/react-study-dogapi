import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '/styles/Home.module.css'

export default function Dogs({dogs}: {dogs: string[]}) {
          console.log(dogs)
  return (
    <div className="wrapper">
      <h1 className={styles.ttlLarge}>犬種一覧を表示</h1>
      <ul className={styles.cardList}>
       {dogs.message.map((dog)=>{
         return(
           <li className={styles.card}>
             <Link href={`/dog/${dog}`}>
                 <p>{dog}</p>
             </Link>
           </li>
         )
       })}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/list/")
  const dogs = await res.json()

  return {
    props:{dogs}
  }
}