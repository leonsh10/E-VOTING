import React,{Component} from 'react';
import '../../App.scss';

export class home extends Component{
    render(){
        return(
            <div class="componentsHome">
                <div class="homeContent">
                    <h1>PER CFARE ARSYJE PERDORET E-VOTING</h1>
                    <p>E-Voting perdoret per arsyje se eshte menyra me e mire dhe me e sigurte per votim ne tere boten. Qe nga viti 2021 kjo menyre e votimit perdoret edhe ne Kosove</p>
                    <button class="home-btn">SI TE VOTONI</button>
                </div>
            </div>
        )
    }
}

export default home