import stl from './Blog.module.scss'
import { blogPosts, externalLinks } from '../../constants'
import Image from 'next/image'

function Blog() {
    return (
        <section id="blog">
            <div className={stl.sectionBox}>
                <div className={stl.blogBox}>
                    <h3 className={stl.blogHeader}>Blog</h3>
                    <a className={stl.link} href={externalLinks.blog}>
                        See all
                    </a>
                    <div className={stl.blogPostsList}>
                        {blogPosts.map((post, idx) => {
                            return (
                                <div className={stl.blogPost} key={idx}>
                                    <a href={post.link}>
                                        <div className={stl.blogPostImage}>
                                            <Image
                                                fill={true}
                                                src={post.coverLink}
                                                alt={'blog post cover'}
                                            />
                                        </div>
                                    </a>
                                    <div className={stl.blogPostText}>
                                        <p className={stl.blogPostTitle}>
                                            {post.title}
                                        </p>
                                        <a
                                            className={`${stl.link} ${stl.blogPostLink}`}
                                            href={post.link}
                                        >
                                            Read more
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
