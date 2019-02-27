import React, { Component } from 'react';
import StoryList from '../components/StoryList';
import Header from '../components/Header';

class NewsContainer extends Component {
constructor(props) {
  super(props);
  this.state = {
    storyIds: [], stories: []
  }
}
  componentDidMount() {
    this.getStoryIds();
  }

  getStoryIds() {
    const url = "https://hacker-news.firebaseio.com/v0/topstories.json"
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState(() => {
        return { storyIds: data }
      }))
      .then(() => {
        const allFetches = this.setupStoryRequests();
        Promise.all(allFetches)
        .then((data) => {
          this.setState({ stories: data })
        })
      })
  }

  setupStoryRequests() {
    const top10 = this.state.storyIds.splice(0, 10);
    const allRequests = top10.map((storyID) => {
      return this.getStory(storyID)
    })

    return allRequests;
  }


  getStory(storyId){
    const url = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`;
    return fetch(url)
      .then(res => res.json())
   }


  render() {
    return (
      <div>
        <Header/>
        <StoryList stories={this.state.stories}/>
      </div>
    )
  }

}

export default NewsContainer;
