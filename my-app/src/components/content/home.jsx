import React, { Component } from "react";
import "../../App.scss";
import video1 from "../videos/video1.mp4";
import {Button, Table} from 'react-bootstrap';
import logo from '.././images/logo.png';
import { observer } from "mobx-react-lite"
import { useStore } from "../users/store";
import {useEffect} from 'react';
export class home extends Component{
//export default observer(function Home() {
  //const {commonStore,userStore} = useStore();
  // const {userStore} = useStore();
  constructor(props) {
    super(props);
    this.state = { homs: []};
  }

  refreshList() {
    fetch("http://localhost:5000/api/Home")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ homs: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }
  // handleScroll() {
  //   window.scroll({
  //     top: document.body.offsetHeight,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }

  
    
  // useEffect(() => {
  //   if(commonStore.token) {
  //     userStore.getUser().finally(() => commonStore.setAppLoaded());
  //   } else {
  //     commonStore.setAppLoaded();
  //   }
  // }, [commonStore, userStore]
  // )

  render(){
  function handleScroll() {
      window.scroll({
        top: document.body.offsetHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  const { homs, homid, titulli, content } = this.state;
  return (
    <div class="componentsHome">
      <div class="homeContent">
        <div id="vijaL"></div>
        <div className="homeData">
          <Table className="homeTable">
          <tbody>
              {homs.map((hom) => (
                <tr key={hom.idHome} className="firstTr">
                  <tr className="h1 tabler">{hom.Titulli}</tr>
                  <tr className="textHome tabler">{hom.Content}</tr>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        {/* <h1>PER CFARE PERDORET E-VOTING</h1>
     
        <p>
          E-Voting përdoret për arsyje se është mënyra më e mire dhe më e
          sigurtë për votim në tërë botën. Qe nga viti 2021 kjo menyrë e votimit
          përdoret edhe në Kosovë
        </p> */}
        <button className="home-btn" onClick={handleScroll}>
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
            autoPlay={false}
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
          }
  // }
  // }
}//)
export default home;
