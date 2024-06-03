const BlogLayout = ({children}) => {
  return (
    <div>
      {/* Nhung tp su dung chung */}
      <p>Breadcome cho trang blog</p>

      {/* Cac thanh phan khac */}
      {children}
    </div>
  )
}

export default BlogLayout