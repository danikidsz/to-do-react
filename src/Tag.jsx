import React from 'react'
import "./Tag.css";


const Tag = ({tagName, selectTag, selected}) => {
  const tagStyle = {
    HTML: {backgroundColor: "#CA76F5"},
    CSS: {backgroundColor: "#7676F5"},
    Javascript: {backgroundColor: "#F576AB"},
    default: {backgroundColor: "#f9f9f9"},
  }
  return (
    <button type="button" 
    className='tag' 
    style={selected ? tagStyle[tagName] : tagStyle.default}
    onClick={()=> selectTag(tagName)} >{tagName}</button>
  );
};

export default Tag