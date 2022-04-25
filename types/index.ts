 export type Post = {
    slug: string;
    frontmatter: {
        title: string;
        date: string;
        metaDesc: string;
        metaTitle: string;
        socialImage: string;
        tags: string[];
    };
    content: string
  }
  
  
export type Image = {
  id: number
  href: string
  imageSrc: string
  name: string
  username: string}
}
