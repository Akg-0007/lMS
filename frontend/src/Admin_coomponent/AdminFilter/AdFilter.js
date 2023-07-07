import React, { useState, useEffect } from 'react'
import "./AdFilter.css"
// import filter_img from "../../assets/AdjustmentsOutline.svg"
function AdFilter() {
    const programs = ['Btech', 'BCA', 'ECE', 'CE'];
    const sections = ['K19HZ', 'K21FH', 'K22LX'];
    const batches = ['2020', '2021', '2022'];
    
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedProgram, setSelectedProgram] = useState("");
    const [selectedSection, setSelectedSection] = useState('');
    const [selectedBatch, setSelectedBatch] = useState('');
    
    const handleProgramChange = (event) => {
      setSelectedProgram(event.target.value);
    };
    
    const handleSectionChange = (event) => {
      setSelectedSection(event.target.value);
    };
    
    const handleBatchChange = (event) => {
      setSelectedBatch(event.target.value);
    };
    
    const updateSelectedItems = () => {
      const newData = {
        program: selectedProgram,
        section: selectedSection,
        batch: selectedBatch
      };
    
      if (selectedItems.length === 3) {
        // Remove the first item in the selectedItems array
        const updatedItems = selectedItems.slice(1);
        setSelectedItems([...updatedItems, newData]);
      } else {
        setSelectedItems([...selectedItems, newData]);
      }
    };
    
    // Call the updateSelectedItems function whenever selectedProgram, selectedSection, or selectedBatch changes
    useEffect(() => {
      updateSelectedItems();
    }, [selectedProgram, selectedSection, selectedBatch]);
    
    console.log(selectedItems);
    
    const cancelProgram = () => {
      setSelectedProgram('');
    };
    
    const cancelSection = () => {
      setSelectedSection('');
    };
    
    const cancelBatch = () => {
      setSelectedBatch('');
    };
    
    // Rest of your code...
    
    

    return (

        <div className='filter-bkg'>
  <div className="filter_container">
            <div className="filter_wrapper">

                <div className="upper_header_filter">
                    <div className="filter_logo1">
                         {/* <img src={filter_img} alt="" /> */}
                          </div>
                    <div className="filter_text_head">Filter Options</div>
                </div>

                <form action="
            ">    {/* applied filters */}
                    {
                        (selectedProgram || selectedBatch || selectedSection) && (
                            <div className="Applied_filter">
                                <div className="applied_filter_head">
                                    Applied Filter
                                </div>
                                <div className="program_box_group">
                                    {selectedProgram.length > 0 && (
                                        <div className="applied_box" onClick={cancelProgram}>
                                            {selectedProgram} <span className='cross_icon_app'>&#x2716;</span>
                                        </div>
                                    )}
                                    {selectedSection.length > 0 && (
                                        <div className="applied_box" onClick={cancelSection} >
                                            {selectedSection}  <span className='cross_icon_app'>&#x2716;</span>
                                        </div>
                                    )}
                                    {selectedBatch.length > 0 && (
                                        <div className="applied_box" onClick={cancelBatch}>
                                            {selectedBatch}  <span className='cross_icon_app'>&#x2716;</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    }

                    {/* selection of program */}
                    <div className="program_slection_filter">
                        <div className="program_filter_head">
                            Program
                        </div>
                        <div className="program_box_group">
                            {programs.map((program) => (
                                <div className='program_box' key={program}>
                                    <input
                                        type="radio"
                                        name="program"
                                        id={program}
                                        value={program}
                                        checked={selectedProgram === program}
                                        onChange={handleProgramChange}
                                    />
                                    <label htmlFor={program}>{program}</label>
                                </div>
                            ))}
                        </div>

                    </div>
                    {/*    section slection group */}
                    <div className="program_slection_filter">

                        <div className="program_filter_head">Section</div>
                        <div className="program_box_group">
                            {sections.map((section) => (
                                <div className='program_box' key={section}>
                                    <input
                                        type="radio"
                                        name="section"
                                        id={section}
                                        value={section}
                                        checked={selectedSection === section}
                                        onChange={handleSectionChange}
                                    />
                                    <label htmlFor={section}>{section}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* batch selction */}
                    <div className="program_slection_filter">
                        <div className="program_filter_head">Batch</div>
                        <div className="program_box_group">
                            {batches.map((batch) => (
                                <div className='program_box' key={batch}>
                                    <input
                                        type="radio"
                                        name="batch"
                                        id={batch}
                                        value={batch}
                                        checked={selectedBatch === batch}
                                        onChange={handleBatchChange}
                                    />
                                    <label htmlFor={batch}>{batch}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button type='submit' className='applied_box'>Apply</button>
                </form>


            </div>
        </div>
        </div>
      


    )
}

export default AdFilter