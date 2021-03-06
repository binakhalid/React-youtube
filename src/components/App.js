import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
const API_KEY = 'AIzaSyD-Ln5z_lvO7LwJSucxwsIIQoEmtKcOLbY';


class App extends Component {
    constructor(props){
        super(props);
        this.state = { videos: []};

        YTSearch({
    key: API_KEY,
    term: 'surfboards'}, (videos) => {
        this.setState({videos});

});
    }
    render() {
        return(
            <div>
            <SearchBar />
            <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

    export default App;