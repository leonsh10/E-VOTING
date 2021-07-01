import React from "react";

import '../../stili/contactus.scss'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Segment from 'react-bootstrap/Button';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
class contactus extends React.Component {
    constructor(props) {
        super(props);
      }

    render(){
        return(
            <div class="divForma">

<div class="formm">
<h4 id="epara">CONTACT US </h4>
<form className="forma1">
 

    {/* <Form.Label>Shkruaj Emrin:</Form.Label> */}
    <input type="text" class="inputi" size="30"
                  placeholder="Emri" />
 
 
    {/* <Form.Label>Shkruaj Email-in</Form.Label> */}
    <input type="email" class="inputi" size="30"
                  placeholder="Email" />
 
    {/* <Form.Label>Shkruaj Numrin e Telefonit</Form.Label> */}
    <input type="text" class="inputi" size="30"
                  placeholder="Nr.Telefonit" />
 
    {/* <Form.Label>Shkruaj Paqartesite</Form.Label> */}
    <textarea  rows="7" cols="60" placeholder="Mesazhi.."></textarea>
 
  
  <button  type="submit" class="butoni">  
    Dergo Mesazhin
  </button>
</form>
</div>


<div class="contactMajte">
<div class="njeshi">
<IoIcons.IoMdLocate class="llogot"/>
<div class="dyshi">
<h4 class="h42">E-VOTING</h4>
<p class="posht">KOSOVA,XK</p>
</div>
</div>

<div class="dysh">
<IoIcons.IoMdCall class="llogot"/>
<div class="dyshi">
<h4 class="h42">+38345121212</h4>
</div>
</div>

<div class="tresh">
<IoIcons.IoMdMail class="llogot"/>
<div class="dyshi">
<h4 class="h42">e_voting@outlook.com</h4>
</div>
</div>


<div class="vija"></div>

<div class="llogotSocial">
  <div class="llogotDesign">
<FaIcons.FaFacebookF class="llogot1"/>
</div>
<div class="llogotDesign">
<FaIcons.FaInstagram class="llogot1"/>
</div>
<div class="llogotDesign">
<FaIcons.FaTwitter class="llogot1"/>
</div>
<div class="llogotDesign">
<FaIcons.FaGooglePlusG class="llogot1"/>
</div>

</div>


<p id="posht" class="posht">E-VOTING KOSOVA</p>

</div>

</div>





        );
    }
}

export default contactus;
