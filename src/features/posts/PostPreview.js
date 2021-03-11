import React from 'react'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostsAuthor'
import { ReactionButtons } from './ReactionButtons'
import { TimeAgo } from './TimeAgo'
import { selectPostById } from './postsSlice'
import { useSelector } from 'react-redux'

export const PostPreview = ({postId}) => {
    const post = useSelector(state => selectPostById(state, postId))

    return (
        <article className="post-excerpt" key={post.id}>
        <h3>
            <Link to={`/posts/${post.id}`}>
                {post.title}
            </Link>
        </h3>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
        <p className="post-content">{post.content.substring(0, 100)}</p>
        <ReactionButtons post={post} />
        </article>
    )
}

