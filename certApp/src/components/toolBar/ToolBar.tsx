import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon} from '@ionic/react';
import React, {createRef, useRef} from 'react';
import './ToolBar.css';


const ToolBar: React.FC = () => {


    function myFunction() {
        let elements =  document.getElementsByClassName("topnav");
        let classes: DOMTokenList = elements[0].classList;
        return classes.toggle("responsive");
    }

    return(
<>
{/* <div className="topnav" id="myTopnav">
  <a href="#home" className="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" className="icon" onClick={myFunction} >
    <i className="fa fa-bars"></i>
  </a>
</div> */}
</>
  );
};

export default ToolBar;