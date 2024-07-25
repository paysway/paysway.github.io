import stl from './Blog.module.scss'
import { blogPosts, externalLinks } from '../../constants'

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
                        {blogPosts.map((post) => {
                            return (
                                <div className={stl.blogPost}>
                                    <a
                                        href={post.link}>
                                        <img
                                            className={stl.blogPostImage}
                                            src={post.coverLink}
                                            alt={'blog post cover'}
                                        />
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
