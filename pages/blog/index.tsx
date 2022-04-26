import Navbar from '../../components/navbar'
import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '../../types'

export async function getStaticProps() {
  const files = fs.readdirSync('blog')

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const readFile = fs.readFileSync(`blog/${fileName}`, 'utf-8')
    const { data: frontmatter } = matter(readFile)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts,
    },
  }
}

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <>
      <Navbar />
      <div className="grid  grid-cols-1 p-4 md:mx-20 md:grid-cols-3 md:p-0 lg:grid-cols-4">
        {posts.map(({ slug, frontmatter }) => (
          <div
            key={slug}
            className=" m-4 flex flex-col overflow-hidden rounded-xl border border-gray-200 p-4 shadow-lg"
          >
            <Link href={`blog/p/${slug}`}>
              <a>
                <Image
                  width={800}
                  height={600}
                  alt={frontmatter.title}
                  src={frontmatter.socialImage}
                  objectFit="cover"
                />
                <h1 className="p-4">{frontmatter.title}</h1>
                <small className="m-4  font-bold  ">
                  tags:{' '}
                  <span className="rounded-lg bg-yellow-300 p-2">
                    {frontmatter.tags}
                  </span>
                </small>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
