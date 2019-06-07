// import the React and ReactDOM Librabries;
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

// Create a new react Component;
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Jane" />
            <CommentDetail author="Jim" />
            <CommentDetail author="Steve" />
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
        </div>
    )
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);



