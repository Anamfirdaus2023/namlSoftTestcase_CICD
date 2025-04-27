import React, { Component } from 'react'



export default class MTR_Review extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleReviews: 3 // Show 3 reviews initially
    };
  }

  showMoreReviews = () => {
    console.log("clicked")
    this.setState((prevState) => ({
      visibleReviews: prevState.visibleReviews + 3 // Show 3 more reviews
    }));
  };

  showLessReviews = () => {
    this.setState((prevState) => ({
      visibleReviews: Math.max(3, prevState.visibleReviews - 3) // Show 3 less reviews but not less than 3
    }));
  };


    render() {
 const { visibleReviews } = this.state;



      const reviews = [
          {
            imgSrc: '/images/clients/client1.jpg',
            text: "MatRecord is a game-changer!",
            name:"Dr.Abhay jadhav",
            degree:"MBBS",
            stars: 5,
          },
          {
            imgSrc: '/images/clients/client3.jpg',
            text: "MatRecord is a game-changer!",
            name:"Dr. John Smith",
            degree:"MBBS",
            stars: 4.5,
          },
          {
            imgSrc: '/images/clients/client2.jpg',
            text: "MatRecord is a game-changer!",
            name:"Dr.Shraddha Kulkarni",
            degree:"MBBS",
            stars: 4,
          },
          {
            imgSrc: '/images/clients/client4.jpg',
            text: "MatRecord is a game-changer!",
            name:"Dr. Michael Johnson",
            degree:"MBBS",
            stars: 4.5,
          },
          {
            imgSrc: '/images/clients/client2.jpg',
            text: "MatRecord is a game-changer!",
            name:"Dr. Olivia Brown",
            degree:"MBBS",
            stars: 4,
          },
          {
            imgSrc: '/images/clients/client1.jpg',
            text: "MatRecord is a game-changer!",
            name:"Dr.Ravindra dubey",
            degree:"MBBS",
            stars: 5,
          },
         
        ];

    const renderStars = (stars) => {
        const fullStars = Math.floor(stars);
        const halfStar = stars % 1 !== 0;
        const starElements = [];
    
        for (let i = 0; i < fullStars; i++) {
          starElements.push(<i className="fas fa-star" key={i}></i>);
        }
    
        if (halfStar) {
          starElements.push(<i className="fas fa-star-half-alt" key="half"></i>);
        }
    
        return starElements;
      };


    return (
      <div className=""style={{background:"linear-gradient(180deg, #e3f0ff, #ffffff)"}}>
<div className="container">

      <section className="review mb-5 p-5" id="review">
      <h2 className="heading" style={{fontSize:"2rem"}}>
      MatRecords Advisory Board Members - <span>Doctor</span>
       
        <div className="bar mt-2"></div>
      </h2>
    
<div className="review-slider owl-theme ">

        {reviews.slice(0, visibleReviews).map((review, index) => (
          <div className="box my-3 mx-3" key={index}>
            <div className='position-relative'>
            <img src="/images/badge.png" alt="" className='position-absolute' style={{height:"25px", width:"25px" , right:"7px" , top:"-10px"}}/>
            </div>
            <img src={review.imgSrc} alt="" />
            <div className="content">
              <h6 className='mb-0'>{review.name}</h6>
              <small className='text-primary'>{review.degree}</small>
              <p>
                <i className="fas fa-quote-left pe-2"></i>
                {review.text}
                <i className="fas fa-quote-right ps-2"></i>
              </p>
            </div>
          </div>
        ))}

</div>
          <div className="text-center mt-4">
          {visibleReviews > 3 && (
            <button onClick={this.showLessReviews} className='btn default-btn'>
              Show Less
            </button>
          )}

        {visibleReviews < reviews.length && (
            <button onClick={this.showMoreReviews} className='btn default-btn ms-3'>
              See More
            </button>
        )}

          </div>
    </section>
</div>
      </div>
    )
  }
}
