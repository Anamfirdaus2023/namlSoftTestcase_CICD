import React, { Component } from 'react'
import Link from 'next/dist/client/link'
import { MrBlogPosts } from './KeyFeaturesData'
import MR_BlogModal from './MR_BlogModal';
export default class MatRecordBlog extends Component {

    state = {
        currentPage: 1,
        currentPosts: null ,
        currentPostIndex: null,
      };
    
      handleReadMoreClick = (post) => {
        this.setState({ currentPostIndex: post }, () => {
          // Add any other logic you want to perform when "Read More" is clicked
        });
      };
      
      
      
      render() {
        const postsPerPage = 3; // Number of posts to display per page
        const { currentPage , currentPostIndex  } = this.state;
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = MrBlogPosts.slice(indexOfFirstPost, indexOfLastPost);


    return (
      <div>
              <section className="blog-section pt-5 ">
                    <div className="container">
<h2 className="heading mb-5" style={{fontSize:"2rem"}}>
Our  <span>Blogs</span>
                  <div className="bar mt-2"></div>
      </h2>
<div className="row justify-content-center">
        {currentPosts.map((post, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="single-blog">
              {/* <div className="image" style={{height:"224px"}}>
               
                  <a >
                    <img src={post.image} alt="image" style={{height:"100%" , width:"100%" , objectFit: index === 1 ? "fill" : "cover", }}/>
                  </a>
             
              </div> */}
              <div className="content">
                <span className='d-flex justify-content-end mb-4'>{post.date}</span>
                <h3 className='text-start'>
                 
                    <a >{post.title}</a>
                
                </h3>
                <p className='text-start'>{post.content}</p>
                {/* <Link href={post.link}>
                </Link> */}
                  <a data-bs-toggle="modal" data-bs-target="#BlogModal"  className="read-more" onClick={() => this.handleReadMoreClick(post)} style={{cursor:"pointer" , zIndex:"1000000"}}>Read More</a>
              </div>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="col-lg-12 col-md-12">
          <div className="pagination-area">
            {currentPage > 1 && (
                <a
                  className="prev page-numbers"
                  onClick={() => this.setState({ currentPage: currentPage - 1 })}
                >
                  <i className="flaticon-left"></i>
                </a>
            )}

            {[...Array(Math.ceil(MrBlogPosts.length / postsPerPage))].map((_, i) => (
                <a
                 key={i}
                  className={`page-numbers ${currentPage === i + 1 ? 'current' : ''}`}
                  onClick={() => this.setState({ currentPage: i + 1 })}
                >
                  {i + 1}
                </a>
      
            ))}

            {currentPage < Math.ceil(MrBlogPosts.length / postsPerPage) && (
              
                <a
                  className="next page-numbers"
                  onClick={() => this.setState({ currentPage: currentPage + 1 })}
                >
                  <i className="flaticon-right"></i>
                </a>
            )}
          </div>
        </div>
      </div>


                    </div>
                </section>

      
          <MR_BlogModal post={currentPostIndex} />

      </div>
    )
  }
}
