"use client"
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/blog')
  }
  return (
    <>
      <butto onClick={handleClick}>Chuyen huong trang blog</butto>
    </>
  )
}

export default Home