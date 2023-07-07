import React,{useState} from 'react';
import "./Acordian.css"

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import down from "../../assets/downkey.svg"
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Accordian() {
   
    return (
        <>
       
    
        {/* <div className="ad_accordian"> */}
        <div class=".ad_accordian accordion">
  <details>
    <summary>
      <span>What is artificial intelligence (AI)?</span>
      <span class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
          <path d="M1 1L7 7L13 1" stroke="#EBE8F0" stroke-width="2" stroke-linecap="round" />
        </svg>
      </span>
    </summary>
    <div>
      <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid qui aspernatur perspiciatis dignissimos vel facere dolorum doloremque, in vero. Explicabo provident maiores totam dignissimos ea minima, ratione beatae expedita. Numquam aliquid alias maiores sint, voluptate accusamus repudiandae, possimus sequi voluptatum optio incidunt! Eligendi beatae perferendis nostrum, at laudantium ad necessitatibus.</p>
      </div>
    </div>
  </details>
</div>
       
        {/* </div> */}
        </>
    );
}