"use client"
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import Card from './Card';
import {useEffect, useState} from "react";
import { Portfolios } from '@utils/data';
import Link from 'next/link';

const Carousel = () => {
    const [width, setWidth] = useState();

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;
    
  return (
    <Splide
    options={{
        type: "loop",
        gap: "40px",
        drag: "free",
        arrows: false,
        pagination: false,
        perPage: isMobile ? 2: 3,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: 1
        },
        autoplay: true
      }}
    >
{Portfolios.portfolio.map((resource, index) => {
          return (
            <SplideSlide key={index}>
                <Link href={resource.link} key={index}><Card key={index} title={resource.title} image={resource.image_url} tags={resource.subtitle} /></Link>
            </SplideSlide>
          );
        })}
    </Splide>
        
     
  )
}

export default Carousel


