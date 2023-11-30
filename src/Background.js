import { BackgroundImage } from 'react-image-and-background-image-fade'
import { Component } from 'react';
import React from 'react';
//import "../public/default_loader.min.css"

import App from "./App"
import reactRouterDom from 'react-router-dom';

//props = objectWithoutProperties(_ref, ['src', 'width', 'height', 'transitionTime', 'renderLoader', 'disableLoader', 'wrapperClassName', 'isResponsive', 'lazyLoad', 'wrapperRef']),

class Background extends Component {
  render() {

    return (

      <BackgroundImage
        src="./images/1440.jpg"

        isResponsive={true}

        useChild={true}

        wrapperClassName="background"
        alt='modralova'
        title='modralova'

        lazyLoad
       // transitionTime='2.5s'

       transitionTime='3s'
     
      
       //renderLoader={({hasLoaded, hasFailed})=>(<div className="myLoader"></div>)}

      
      ><React.StrictMode><App /></React.StrictMode></BackgroundImage>
    )
  }
}

export default Background
