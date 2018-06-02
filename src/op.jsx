import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
} from 'react-router'
import './css/bound.css'
import './css/arrow.css'
import './css/cube.css'
import './css/fire.css'
import './css/bomb.css'
import './css/darts.css'

class Op extends Component {
    render() {
        return (

<div id='stage'>

    <div id="screen">
        <div className = 'paint'></div>
        <div className = 'paint'></div>
        <div className = 'paint'></div>
        <div className='reverse_stage'>
            <div className="paint__reverse"> </div>
        </div>
        <div className='reverse_stage'>
            <div className="paint__reverse"> </div>
        </div>
        <div className='reverse_stage'>
            <div className="paint__reverse"> </div>
        </div>
        <div className="word-1">
            <p>3</p>
            <p>2</p>
            <p>1</p>
        </div>
    </div>
    {/*
    <div id="box">
        <div className="base" id="door1"></div>
        <div className="base" id="door2"></div>
    </div>
*/}

    <div id="wrapper">

            <div class="cube_top"></div>


            <div class="cube_bottom"></div>


            <div class="cube_left"></div>


            <div class="cube_right"></div>



            <div class="cube_center">
                <div class="bomb black">
                    <span class="ledge"></span>
                        <div class="fuse"></div>
                </div>
                <div className='hacka-watyawatya'>
                    <div className='tobideru'/>
                    <div className='tobideru'/>
                    <div className='tobideru'/>
                    <div className='tobideru'/>
                    <div className='tobideru'/>
                    <div className='tobideru'/>
                    <div className='tobideru'/>
                    <div className='mini_hacka'></div>
                </div>



            </div>

            <div className='rhombus-field'>
            <div className="rhombus"></div>
            <div className="rhombus"></div>
            <div className="rhombus"></div>
            <div className="rhombus"></div>
            <div className="rhombus"></div>
            <div className="rhombus"></div>
            <div className="rhombus"></div>
            </div>




    </div>

    <div className='hacka_field'>
        <div class="feeling-box">
            <div class="feeling-ribon">HAPPY</div>
        </div>
        <div class="feeling-box">
            <div class="feeling-ribon">ANGRY</div>
        </div>
        <div class="feeling-box">
            <div class="feeling-ribon">SAD</div>
        </div>
        <div class="feeling-box">
            <div class="feeling-ribon">SURPRISE</div>
        </div>
    </div>
    <div className='to_down_arrow'/>
    <div className='to_right_arrow'/>
    <div className='hacka_field'>
        <div className='fonts'>パーソナルエンタメAI</div>
        <div className='hackadoool'>ハッカドール！</div>

    </div>
    <div className='hacka_field'>

        <div className='hacka'/>
        <div className='hacka'/>
        <div className='hacka'/>
        <div className='hacka'/>
    </div>
    <div class="loader">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <div className='icon_field'>
        <i class="huge blue thumbs up icon " id='icon_position' ></i>
        <i class="huge orange music icon icon_position" id='icon_position'></i>
        <i class="huge green android icon icon_position" id='icon_position'></i>
        <i class="huge red youtube icon icon_position" id='icon_position'></i>
    </div>
    <div className = 'waving'/>

    <div className='kanban'>
        <div className='poster'/>
    </div>
{/*}
    //<div id="box">
        //<div className="base" id="door1"></div>
        //<div className="base" id="door2"></div>
//    </div>
*/}
    <div className='throw__stage'>
        <div className='throw__parts'/>
        <div className='throw__parts'/>
        <div className='throw__parts'/>
        <div className='throw__parts'/>
    </div>




    {/*
    <div className='fonts'>パーソナルエンタメAI</div>



    <div class="loader">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <div class="spinner gradation">
      <div class="cube1"></div>
      <div class="cube2"></div>
      <div class="cube3"></div>
      <div class="cube4"></div>
    </div>*/}



{/*
<div id='warped-happy'>
       <span class='w0'>h</span><span class='w1'>a</span><span class='w2'>p</span><span class='w3'>p</span><span class='w4'>y</span>
</div>

<div id='warped-angry'>
       <span class='w0'>a</span><span class='w1'>n</span><span class='w2'>g</span><span class='w3'>r</span><span class='w4'>y</span>
</div>
              <div id='warped-surprise'>
                     <span class='w0'>s</span><span class='w1'>u</span><span class='w2'>r</span><span class='w3'>p</span><span class='w4'>r</span><span class='w5'>i</span><span class='w6'>s</span><span class='w7'>e</span>
              </div>

              <div id='warped-sad'>
                     <span class='w0'>s</span><span class='w1'>a</span><span class='w2'>d</span>
              </div>

*/}


</div>

        );
    }
}


export default Op
{/*getelementbyid()の中にindex.html<div id="この部分">を書く  */}
