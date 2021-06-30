import React from "react";

import '../../stili/contactus.scss'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Segment from 'react-bootstrap/Button';
import * as IoIcons from 'react-icons/io';
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
<h4>E-VOTING</h4>
<p>KOSOVA,XK</p>
</div>
</div>
</div>

</div>





        );
    }
}

export default contactus;
