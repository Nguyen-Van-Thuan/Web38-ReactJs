"use client"
import { useParams } from 'next/navigation';

const BlogDetail = ({params, searchParams}) => {
  console.log(params);
  console.log(searchParams);
  return (
    <h1>This is BlogDetail</h1>
  )
}

export default BlogDetail