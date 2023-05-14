import React from 'react'
import { useState } from 'react';
import PageHeader from '../components/PageHeader'
import { BsInfoCircleFill } from "react-icons/bs"
import { Link } from 'react-router-dom';

const portfolioData = [
  {
    id: 2, name: "Ecommerce", img: "https://img.freepik.com/premium-vector/modern-flat-people-business-m-commerce-easy-use-highly-customizable_115990-371.jpg?w=996",
    link: ""
  },
  { id: 2, name: "Youtube", img: "https://i.pinimg.com/736x/e5/e8/f7/e5e8f7ade77c5e799576eaf154f0675b.jpg",
   link:"https://youtube158.netlify.app/" },
  {
    id: 2, name: "BellaVita", img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/S/abs-image-upload-na/7/AmazonStores/A21TJRUUN4KGV/afc678bf0a083f43bef9a1e74738989c.w1333.h1333.jpg",
    link: ""
  },
  {
    id: 2, name: "Spareshub", img: "https://s3-us-west-2.amazonaws.com/issuewireassets/primg/43163/mid_spareshub84192753.jpeg",
    link: ""
  },
  {
    id: 2, name: "Google", img: "https://fossbytes.com/wp-content/uploads/2015/10/qwant-google-hd.jpg",
    link: ""
  },
  {
    id: 3, name: "Blogging", img: "https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg?w=740&t=st=1680446014~exp=1680446614~hmac=7f332823337cb2dd1197454932119041e1cd1e40f0550b051a98f8f65b4debcc",
    link: ""
  },
  {
    id: 3, name: "Open to Intern", img: "https://as1.ftcdn.net/v2/jpg/00/78/41/82/1000_F_78418208_eNjhg8sEW0OTP7ZxbpZ9QApqpgHreKV9.jpg",
    link: ""
  },
  {
    id: 3, name: "Url Shortner", img: "https://www.printrunner.com/blog/wp-content/uploads/2016/09/10_UsingURLShorteners-777x437.jpg",
    link: ""
  },
  {
    id: 3, name: "Book-Management", img: "https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/HOW-DO-YOU-DESIGN-A-LIBRARY-MANAGEMENT-SYSTEM-min.png",
    link: ""
  },
  {
    id: 3, name: "Prpduct-Management", img: "https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg",
    link: ""
  },
]

const filterData = [
  { filterId: 1, label: "all" },
  { filterId: 2, label: "frontend" },
  { filterId: 3, label: "backend" },
]

const Projects = () => {
  const [filteredValue, setFilteredValue] = useState(1)
  const [hoveredValue, setHoveredValue]= useState(null)

  const handleFilter = (currentId) => {
    setFilteredValue(currentId)
  }
  const filteredItems = filteredValue === 1 ? portfolioData :
  portfolioData.filter(item => item.id === filteredValue)
   
  const handleHover=(index)=>{
    setHoveredValue(index)
  }

  return (
    <section className='projects'>
      <PageHeader headerText="my projects" icon={<BsInfoCircleFill size={40} />} />

      <div className="project-content">
        <div className="project-content-filter">
          <ul>
            {filterData.map((item) =>
              <li
                className={item.filterId === filteredValue ? "active" : ""}
                onClick={() => handleFilter(item.filterId)} key={item.filterId}>
                {item.label}
              </li>
            )}
          </ul>
        </div>

        <div className="project-cards">
          {
            filteredItems.map((item, index) =>
              <div 
              key={`cardItem${item.name.trim()}`} 
              className='project-card-item'
              onMouseEnter={()=>handleHover(index)}
              onMouseLeave={()=>handleHover(null)}
              >
                <div className='image-wrapper'>
                    <img alt='dumy-data' src={item.img} />
                </div>

                <div className='overlay'>
                  {index===hoveredValue && (
                    <div>
                      <p>{item.name}</p>
                      <a href={item.link}><button>VISIT</button></a>
                      <a href="#">github</a>
                    </div>
                  )}
                </div>
              </div>

            )
          }
        </div>
      </div>
    </section>
  )
}

export default Projects
