import Navbar from "../../components/navbar"
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

type Post = {
    slug: string;
    frontmatter: {
        [key:string]:any 
    };
}

export async function getStaticProps() {
    const files = fs.readdirSync('blog');

    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`blog/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);
        
        return {
          slug,
          frontmatter,
        };
    });

    return {
        props: {
          posts,
        },
    };
  }

export default function Blog ({posts}:{posts:Post[]}){
    console.log(posts[0])
    
    return(
        <>
        <Navbar/>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className='border border-gray-200 m-4 p-4 rounded-xl shadow-lg overflow-hidden flex flex-col'
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
              <h1 className='p-4'>{frontmatter.title}</h1>
            <small className="m-4 font-bold">tags: {frontmatter.tags}</small>
            </a>
          </Link>
        </div>
      ))}
    </div>
        </>
    )
}