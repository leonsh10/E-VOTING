import React, { Component } from "react";
import "../../App.scss";
import video1 from "../videos/video1.mp4";
import {Button} from 'react-bootstrap';
<<<<<<< HEAD

=======
import logo from '.././images/logo.png';
>>>>>>> 76307f3b3920b32408d693ab746221774bcecf8c

// export class home extends Component{
function home() {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  // render();{
  return (
    <div class="componentsHome">
      <div class="homeContent">
        <h1>PER CFARE ARSYJE PERDORET E-VOTING</h1>
        <p>
          E-Voting perdoret per arsyje se eshte menyra me e mire dhe me e
          sigurte per votim ne tere boten. Qe nga viti 2021 kjo menyre e votimit
          perdoret edhe ne Kosove
        </p>
        <button class="home-btn" onClick={handleScroll}>
          SI TE VOTONI
        </button>

        {/* <ScrollButton 
                behavior={'smooth'} 
                buttonBackgroundColor={'red'}
                iconType={'arrow-up'}
                style= {{fontSize: '30px'}}
            /> */}
      </div>
      <div class="videoDiv">
        <div class="rainbow">
          <video
            src={video1}
            width="600"
            height="300"
            class="vid"
            controls="controls"
            autoplay={false}
          />
        </div>
        <div class="pershkrimi">
          <h1>Si te votoni?</h1>
          <p>
            Qe te kryeni votimin me sukses ne kemi pergatitur nje video tutorial
            ku tregojme hap pas hapi se si duhet te votoni.Per qdo paqartesi
            klikoni butonin me poshte qe te kontaktoni me ne.
          </p>
          <button class="home-btn">Contact Us</button>
        </div>
      </div>
      <div class="footerH">
<<<<<<< HEAD
            <p>All rights reserved</p>
=======
          <img src={logo} class="image"></img>
          <i>&copy;</i>
          <p>Te gjitha te drejtat e rezervuara</p>
>>>>>>> 76307f3b3920b32408d693ab746221774bcecf8c
      </div>
    </div>
  );
  // }
  // }
}
export default home;
