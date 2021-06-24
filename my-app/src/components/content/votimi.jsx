import React,{Component} from 'react';
import '../../App.scss';
import './stiliTabel.scss';
import {Button, ButtonToolbar, Form, Row, Col, Table} from 'react-bootstrap';
import  {Colgroup}  from 'react-bootstrap';
import { EditDepModal } from "./EditDepModal";
export class votimi extends Component{


render(){
    return(

<div id="votimi" >
  <h1>Forma e Votimit</h1>
  <section class="u-align-left u-clearfix u-image u-shading u-section-1" id="carousel_3c5d">
  <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
  <div class="u-expanded-width u-table u-table-responsive u-table-1">
    <Table className="u-table-entity u-table-entity-1">


  <colgroup>
             <col />
             <col />
             <col/>
             <col />
             <col/>
  </colgroup>

  <thead class="u-align-center u-custom-font u-heading-font u-palette-1-base u-table-header u-table-header-1">
              <tr >
                <th class="u-table-cell">Column 1</th>
                <th class="u-table-cell">Column 2</th>
                <th class="u-table-cell">Column 3</th>
                <th class="u-table-cell">Column 4</th>
                <th class="u-table-cell">Column 5</th>
              </tr>
            </thead>

            <tbody class="u-align-center u-table-body u-text-body-color">
              <tr >
                <td class="u-first-column u-table-cell u-white">Item #1</td>
                <td class="u-table-cell">Description</td>
                <td class="u-table-cell u-white u-table-cell-8">Description</td>
                <td class="u-table-cell">Description</td>
                <td class="u-table-cell u-white u-table-cell-10">Description</td>
              </tr>
              <tr >
                <td class="u-first-column u-table-cell u-white">Item #2</td>
                <td class="u-table-cell">Description</td>
                <td class="u-table-cell u-white u-table-cell-13">Description</td>
                <td class="u-table-cell">Description</td>
                <td class="u-table-cell u-white u-table-cell-15">Description</td>
              </tr>
              <tr >
                <td class="u-first-column u-table-cell u-white">Item #3</td>
                <td class="u-table-cell">Description</td>
                <td class="u-table-cell u-white u-table-cell-18">Description</td>
                <td class="u-table-cell">Description</td>
                <td class="u-table-cell u-white u-table-cell-20">Description</td>
              </tr>
              <tr >
                <td class="u-first-column u-table-cell u-white">Item #4</td>
                <td class="u-table-cell">Description</td>
                <td class="u-table-cell u-white u-table-cell-23">Description</td>
                <td class="u-table-cell">Description</td>
                <td class="u-table-cell u-white u-table-cell-25">Description</td>
              </tr>
            </tbody>

    </Table>
    </div>
    </div>
</section>

</div>




    )
}

}

export default votimi