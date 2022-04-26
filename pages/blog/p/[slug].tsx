import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'
import Prism from 'prismjs'
import { useEffect } from 'react'
import Navbar from '../../../components/navbar'
import {Post} from '../../../types'


export async function getStaticPaths() {
  const files = fs.readdirSync('blog')
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }:{params:{slug:string}}) {
  const fileName = fs.readFileSync(`blog/${slug}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content,
    },
  }
}

export default function PostPage({ frontmatter, content }:Post) {
  useEffect(() => {
    Prism.highlightAll()

  }, [])
  return (
    <>
      <Navbar />
      <div className="prose mx-auto m-8">
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </>
  )
}
