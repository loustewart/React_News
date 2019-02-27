import React from 'react';
import Story from './Story.js';

const StoryList = (props) => {
  const storyDetails = props.stories.map((story, index) => {
    return <Story key={index} story={story}>
    </Story>
  })

  return (
      <div>
        <ul>
          {storyDetails}
        </ul>
      </div>
  )
}



export default StoryList;
