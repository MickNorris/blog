import React from 'react'
import { Link } from 'react-router-dom'

import { slugify } from '../util/url'
import BackgroundImage from './BackgroundImage'
import './PostCard.css'


// format the given date
const format_date = (date) => {
  // setup formatting options
  let options = { year: 'numeric', month: 'short', day: 'numeric' };

  // format the date
  let new_date = new Date(date);

  // return new formatted date
  return(new_date.toLocaleDateString("en-US", options));
}

const PostCard = ({ postItem, className = '', ...props }) => (
  <Link
    to={slugify(`/blog/${postItem.title}/`)}
    className={`PostCard ${className}`}
    {...props}
  >
    {postItem.postFeaturedImage && (
      <div className='PostCard--Image relative'>
        <BackgroundImage
          src={postItem.postFeaturedImage}
          alt={postItem.title}
        />
      </div>
    )}
    {postItem.category && (
      <div className='PostCard--Category'>{postItem.category}</div>
    )}
    <div className='PostCard--Content'>
      <h3 className="PostCard--Title">{postItem.title}</h3>
      <span className="PostCard--Date">{format_date(postItem.date)}</span>
      {postItem.excerpt && (
        <div className='PostCard--Excerpt'>
          {postItem.excerpt.length > 160
            ? postItem.excerpt.slice(0, 157) + '...'
            : postItem.excerpt}
        </div>
      )}
    </div>
  </Link>
)

export default PostCard
