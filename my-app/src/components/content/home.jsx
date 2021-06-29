import React,{Component} from 'react';
import '../../App.scss';
import video1 from "../videos/video1.mp4";

export class home extends Component{
    render(){
        return(
            <div class="componentsHome">
                <div class="homeContent">
                    <h1>PER CFARE ARSYJE PERDORET E-VOTING</h1>
                    <p>E-Voting perdoret per arsyje se eshte menyra me e mire dhe me e sigurte per votim ne tere boten. Qe nga viti 2021 kjo menyre e votimit perdoret edhe ne Kosove</p>
                    <button class="home-btn">SI TE VOTONI</button>
                </div>
                <div class="videoDiv">
                    <div class="rainbow">
                <video src={video1} width="600" height="300" class="vid" controls="controls" autoplay="false" />
                </div>
                <div class="pershkrimi">
                <h1>Pershkrimi i videos</h1>
                <p>E-Voting perdoret per arsyje se eshte menyra me e mire dhe me e sigurte per votim ne tere boten. Qe nga viti 2021 kjo menyre e votimit perdoret edhe ne Kosove</p>
                </div>
                </div>

            
            </div>
        )
    }
}

export default home