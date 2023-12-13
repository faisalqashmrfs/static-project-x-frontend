/* eslint-disable react/prop-types */
import './AdminAllprojects.css'
import { CardProject } from '../../../../Components/CardProject/CardProject';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'


export const AdminAllProjects = () => {

  const isAdmin = true;

  var settings = {
    dots: true,
    customPaging: (i) => {
      return <div>{i + 1}</div>;
    },
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className=''>
      <div className="sa_divTitle d-flex align-items-center justify-content-between">
        <p className="header-style">Projects</p>
        <Link to={'/dashboard/adminprojects/add'}><button className='btn'>Create</button></Link>
      </div>
      <div className='pb-4'>
      <Slider {...settings} className='sa_containerSlideAllProjects'>
        <div className='sa_AdminAllProjects_BodyDiv'>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>          
        </div>
        <div className='sa_AdminAllProjects_BodyDiv'>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>          
        </div>
        <div className='sa_AdminAllProjects_BodyDiv'>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>
          <Link to={'/dashboard/adminprojects/details/1'}><CardProject isAdmin={isAdmin} /></Link>          
        </div>
        
        
      </Slider>
      </div>
    </div>
  )
}