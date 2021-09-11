import React, { Component } from "react";
import "../../App.scss";
import video1 from "../videos/video1.mp4";
import {Button} from 'react-bootstrap';
import logo from '.././images/logo.png';
import { observer } from "mobx-react-lite"
// export class home extends Component{
export default observer(function home() {
  // const {userStore} = useStore();
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
        <div id="vijaL"></div>
        <h1>PER CFARE PERDORET E-VOTING</h1>
     
        <p>
          E-Voting përdoret për arsyje se është mënyra më e mire dhe më e
          sigurtë për votim në tërë botën. Qe nga viti 2021 kjo menyrë e votimit
          përdoret edhe në Kosovë
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
            Që të kryeni votimin me sukses ne kemi përgaditur nje video tutorial
            ku tregojme hap pas hapi se si duhet të votoni. Për çdo paqartësi
            klikoni butonin më poshtë që të kontaktoni me ne.
          </p>
          <a href="contactus">
          <button class="home-btn">Na Kontaktoni</button></a>
        </div>
      </div>
      <div class="footerH">
          <img src={logo} class="imageF"></img>
          <i>&copy;</i>
          <p>Republika e Kosovës - Te gjitha te drejtat e rezervuara</p>
      </div>
    </div>
  );
  // }
  // }
})
// export default home;
