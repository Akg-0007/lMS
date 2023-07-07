// import React from 'react';
// import "./Accordian.css"

// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
// } from 'react-accessible-accordion';

// import down from "../../../assets/downkey.svg"
// import 'react-accessible-accordion/dist/fancy-example.css';

// export default function Accordian() {
//     return (
//         <Accordion className='accordian-container'>
//             <AccordionItem >
//                 <AccordionItemHeading >
//                     <AccordionItemButton className='accordian-icon'>
//                      <p className='accordian-heading'>  Semester 1</p>
//                      <img src={down} alt="down"/>
//                     </AccordionItemButton>
//                 </AccordionItemHeading>
//                 <AccordionItemPanel className='accordian-content-panel'>
//                     <p className='accordian-content'>
//                         Exercitation in fugiat est ut ad ea cupidatat ut in
//                         cupidatat occaecat ut occaecat consequat est minim minim
//                         esse tempor laborum consequat esse adipisicing eu
//                         reprehenderit enim.
//                     </p>
//                 </AccordionItemPanel>
//             </AccordionItem>
//             <AccordionItem >
//                 <AccordionItemHeading >
//                     <AccordionItemButton className='accordian-icon'>
//                      <p className='accordian-heading'>  Semester 1</p>
//                      <img src={down} alt="down"/>
//                     </AccordionItemButton>
//                 </AccordionItemHeading>
//                 <AccordionItemPanel className='accordian-content-panel'>
//                     <p className='accordian-content'>
//                         Exercitation in fugiat est ut ad ea cupidatat ut in
//                         cupidatat occaecat ut occaecat consequat est minim minim
//                         esse tempor laborum consequat esse adipisicing eu
//                         reprehenderit enim.
//                     </p>
//                 </AccordionItemPanel>
//             </AccordionItem>
//             <AccordionItem >
//                 <AccordionItemHeading >
//                     <AccordionItemButton className='accordian-icon'>
//                      <p className='accordian-heading'>  Semester 2</p>
//                      <img src={down} alt="down"/>
//                     </AccordionItemButton>
//                 </AccordionItemHeading>
//                 <AccordionItemPanel className='accordian-content-panel'>
//                     <p className='accordian-content'>
//                         Exercitation in fugiat est ut ad ea cupidatat ut in
//                         cupidatat occaecat ut occaecat consequat est minim minim
//                         esse tempor laborum consequat esse adipisicing eu
//                         reprehenderit enim.
//                     </p>
//                 </AccordionItemPanel>
//             </AccordionItem>
//             <AccordionItem >
//                 <AccordionItemHeading >
//                     <AccordionItemButton className='accordian-icon'>
//                      <p className='accordian-heading'>  Semester 3</p>
//                      <img src={down} alt="down"/>
//                     </AccordionItemButton>
//                 </AccordionItemHeading>
//                 <AccordionItemPanel className='accordian-content-panel'>
//                     <p className='accordian-content'>
//                         Exercitation in fugiat est ut ad ea cupidatat ut in
//                         cupidatat occaecat ut occaecat consequat est minim minim
//                         esse tempor laborum consequat esse adipisicing eu
//                         reprehenderit enim.
//                     </p>
//                 </AccordionItemPanel>
//             </AccordionItem>
//             <AccordionItem >
//                 <AccordionItemHeading >
//                     <AccordionItemButton className='accordian-icon'>
//                      <p className='accordian-heading'>  Semester 4</p>
//                      <img src={down} alt="down"/>
//                     </AccordionItemButton>
//                 </AccordionItemHeading>
//                 <AccordionItemPanel className='accordian-content-panel'>
//                     <p className='accordian-content'>
//                         Exercitation in fugiat est ut ad ea cupidatat ut in
//                         cupidatat occaecat ut occaecat consequat est minim minim
//                         esse tempor laborum consequat esse adipisicing eu
//                         reprehenderit enim.
//                     </p>
//                 </AccordionItemPanel>
//             </AccordionItem>
//             <AccordionItem >
//                 <AccordionItemHeading >
//                     <AccordionItemButton className='accordian-icon'>
//                      <p className='accordian-heading'>  Semester 5</p>
//                      <img src={down} alt="down"/>
//                     </AccordionItemButton>
//                 </AccordionItemHeading>
//                 <AccordionItemPanel className='accordian-content-panel'>
//                     <p className='accordian-content'>
//                         Exercitation in fugiat est ut ad ea cupidatat ut in
//                         cupidatat occaecat ut occaecat consequat est minim minim
//                         esse tempor laborum consequat esse adipisicing eu
//                         reprehenderit enim.
//                     </p>
//                 </AccordionItemPanel>
//             </AccordionItem>
//             <AccordionItem >
//                 <AccordionItemHeading >
//                     <AccordionItemButton className='accordian-icon'>
//                      <p className='accordian-heading'>  Semester 6</p>
//                      <img src={down} alt="down"/>
//                     </AccordionItemButton>
//                 </AccordionItemHeading>
//                 <AccordionItemPanel className='accordian-content-panel'>
//                     <p className='accordian-content'>
//                         Exercitation in fugiat est ut ad ea cupidatat ut in
//                         cupidatat occaecat ut occaecat consequat est minim minim
//                         esse tempor laborum consequat esse adipisicing eu
//                         reprehenderit enim.
//                     </p>
//                 </AccordionItemPanel>
//             </AccordionItem>
//         </Accordion>
//     );
// }


import React, { useState } from 'react';
import './Accordian.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import down from '../../../assets/downkey.svg';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function Accordian() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  const closeAccordion = () => {
    setOpenAccordion(null);
  };

  return (
    <Accordion className="accordian-container">
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton
            className="accordian-icon"
            onClick={() => toggleAccordion(1)}
          >
            <p className="accordian-heading"> Semester 1</p>
            <img
              src={down}
              alt="down"
              onClick={(e) => {
                e.stopPropagation();
                if (openAccordion === 1) {
                  closeAccordion();
                } else {
                  toggleAccordion(1);
                }
              }}
            />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel
          className={`accordian-content-panel ${
            openAccordion === 1 ? 'is-open' : ''
          }`}
        >
          <p className="accordian-content">
            Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
            occaecat ut occaecat consequat est minim minim esse tempor
            laborum consequat esse adipisicing eu reprehenderit enim.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton
            className="accordian-icon"
            onClick={() => toggleAccordion(2)}
          >
            <p className="accordian-heading"> Semester 2</p>
            <img
              src={down}
              alt="down"
              onClick={(e) => {
                e.stopPropagation();
                if (openAccordion === 2) {
                  closeAccordion();
                } else {
                  toggleAccordion(2);
                }
              }}
            />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel
          className={`accordian-content-panel ${
            openAccordion === 2 ? 'is-open' : ''
          }`}
        >
          <p className="accordian-content">
            Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
            occaecat ut occaecat consequat est minim minim esse tempor
            laborum consequat esse adipisicing eu reprehenderit enim.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
