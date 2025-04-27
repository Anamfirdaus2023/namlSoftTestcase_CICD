import React, { Component } from 'react'

export default class MR_BlogModal extends Component {
  render() {
    const { post } = this.props;




    return (
        <div className='text-center my-3'>
        <div className="modal fade" id="BlogModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel"></h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="contact-form p-0">
                  <form>
                  
                  <div className="single-blog mb-0">
  {post && (
    <>
      {/* <div className="image">
        <a>
          <img src={post.image} alt="image" style={{maxHeight:"224px" , width:"100%" , objectFit: post.id === 2 ? "fill" : "cover", objectPosition: post.id === 2 ? "" : "top" }} />
        </a>
      </div> */}
      <div className="content" style={{MaxHeight:"350px" , overflowY:"auto"}}>
        <span>{post.date}</span>
        <h3>
          <a>{post.title}</a>
        </h3>
        <p className='text-start' style={{lineHeight:"1.8"}}>{post.paragraph}</p>
        
      </div>
    </>
  )}
</div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
