import React from 'react'
import _sortBy from 'lodash/sortBy'
import Content from '../components/Content'
import PageHeader from '../components/PageHeader'
import PostSection from '../components/PostSection'
import { GitHub } from 'react-feather';
import { Linkedin } from 'react-feather';
import { Twitter } from 'react-feather';
import './css/Home.css'

export default ({ fields, posts = [], postCategories = []}) => {
  const { title, subtitle, featuredImage, body } = fields
  posts = _sortBy(posts, ['date']).reverse();
  return (
    <main className='home wrapper'>
      <div className='section about'>
        <span className="name">Nick Morris</span>
        <span className="tagline">developer / designer</span>
        <div className="seperator"></div>
        <span className="description">{body}</span>
        <div className="contact-section">
          <div className="icon-container">
            <GitHub/> 
          </div>
          <div className="icon-container">
            <Twitter/> 
          </div>
          <div className="icon-container">
            <Linkedin/> 
          </div>
        </div>
      </div>
      <div className="writing">
        {!!posts.length && <PostSection posts={posts} />}
      </div>
    </main>
  )
}
