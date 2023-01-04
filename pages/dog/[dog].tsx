import Link from 'next/link'
import Image from 'next/image'
import styles from './Dog.module.css'

export default function Dog({image}) {
  // console.log(id)
  return (
     <div className="wrapper">
      {/* <h1>{id}</h1> */}
        {/* <p><Image src={dog} alt="" width={100} height={40} /></p> */}
        <ul className={styles.cardListDetail}>
        {image.message.map((src)=>{
         return(
           <li>
             <Image src={src} alt="" layout='fill' />
           </li>
         )
       })}
       </ul>
       <p className={styles.btnBack} >
        <Link href={`/`}>
            一覧へ戻る
        </Link>
        </p>
        
      </div>
  )
}

export const getStaticPaths = async () => {
  const res=await fetch("https://dog.ceo/api/breeds/list/")
  const dogs=await res.json()
  const paths = dogs.message.map((dog) => ({
    params: { dog },
  }))


  return {
    paths,
    fallback:false
  }
}

export const getStaticProps=async (context)=>{

  console.log(context.params.dog);
  
  const id=context.params.dog
  // const res=await fetch(`https://dog.ceo/api/breed/hound/images`)
  const res=await fetch(`https://dog.ceo/api/breed/${id}/images`)
  const image=await res.json()

  return{
    props:{image}
  }
}


