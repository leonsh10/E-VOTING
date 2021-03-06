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
          E-Voting p??rdoret p??r arsyje se ??sht?? m??nyra m?? e mire dhe m?? e
          sigurt?? p??r votim n?? t??r?? bot??n. Qe nga viti 2021 kjo menyr?? e votimit
          p??rdoret edhe n?? Kosov??
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
            Q?? t?? kryeni votimin me sukses ne kemi p??rgaditur nje video tutorial
            ku tregojme hap pas hapi se si duhet t?? votoni. P??r ??do paqart??si
            klikoni butonin m?? posht?? q?? t?? kontaktoni me ne.
          </p>
          <a href="contactus">
          <button class="home-btn">Na Kontaktoni</button></a>
        </div>
      </div>
      <div class="footerH">
          <img src={logo} class="imageF"></img>
          <i>&copy;</i>
          <p>Republika e Kosov??s - Te gjitha te drejtat e rezervuara</p>
      </div>
    </div>
  );
          }
  // }
  // }
}//)
export default home;
