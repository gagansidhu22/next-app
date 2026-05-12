import Image from 'next/image'
import Link from 'next/link'
import productCard, { ProductCard } from '../app/users/components/ProductCard'

export default function Home() {
  return (
    <main>
    <h1>Restaurant App</h1>
    <Link href="/users">Users</Link>
    <ProductCard/>
    </main>
  )
}