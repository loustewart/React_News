import React from 'react';

const Story = (props) => {
  return (
    <div className="story">
      <a href={props.story.url}>{props.story.title}</a>


    </div>
  )
}


export default Story;
