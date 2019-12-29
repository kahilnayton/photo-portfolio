import React from "react";
import VideoCover from "react-video-cover";
import Nav from './components/Nav';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';


import "./App.css";

export default class App extends React.Component {
  state = {
    resizeNotifier: () => {}
  };

  render() {
    const videoOptions = {
      src: "/https://media.giphy.com/media/Svjh5xx7i0Fy2glPOI/giphy.gif",
      autoPlay: true,
      loop: true,
      muted: true
    };
    const style = {
      width: "100vw",
      height: "100vh",
      position: "fixed"
    };

    return (
      <>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>

      
        {/* <VideoCover
          videoOptions={videoOptions}
          remeasureOnWindowResize
          getResizeNotifier={resizeNotifier => {
            this.state({
              resizeNotifier
            });
          }} */}
        />
    </>
    );
  }
}

