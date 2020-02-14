import React from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import { MDBInput} from "mdbreact";
import './dashboard.css';
import db from "./Db.png";
import db1 from "./db1.png"
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const FlippyOnClick = ({ flipDirection = 'vertical' }) => (
    <Flippy
      flipOnClick={true}
      flipDirection={flipDirection}
    >
        I flip {flipDirection}ly on click
     
    </Flippy>
  );


class Dashboard extends React.Component {

   render(){ 
       return(
         <div>
             <div>
                 <h1 className="h12">IllUminated DB</h1>
             </div>
               <div className="center">
                        <Flippy
                          ref={(r) => this.flippyHorizontal = r}
                          flipOnClick={false}
                        style={{ width: '700px', height: '500px' }}
                        >
                        <FrontSide
                        style={{
                            backgroundColor: 'white',
                        }}
                        >
                        <div>  
                        <p>
                           <img src={db} className="img1"/>
                                <p className="heading">
                                Online Database Viewer
                                </p>
                            <ul>
                                <li>View Data in table and chart format!</li>
                                <br></br>
                                <li>Allow you to edit database realtime</li>
                                <br></br>
                                <li>Enter you Url or Select file to view Databse</li>
                                <br></br>
                                <li>Website features with various options like
                                    <ul>
                                    <li>database view</li>
                                    <li>inserting</li>
                                    <li>deleting</li>    
                                    <li>updating</li>
                                    </ul> 
                                    </li>
                            </ul>
                         <button className="button1"   onClick={() => this.flippyHorizontal.toggle()}><p className="foo1"><strong>! Click me to Enter the Url or select file !</strong></p></button>
                        </p>
                        </div>
                        </FrontSide>


                        <BackSide
                        style={{ backgroundColor: ''}}>
                            <div>
                                <p className="headingback">
                                Online Database Viewer
                                </p>
                                <div className="input1">
                                <MDBInput label="Enter Url" icon="search" outline size="lg" />
                                </div>
                                <div>
                                    <p className="headingback"><strong>OR</strong></p>
                                <div className="App">
                                    <FilePond />
                                    {
                                    //allowMultiple={true}} for chooose multiple file option
                                    }
                                 </div>
                                 <button className="buttonview">View DB</button>
                                </div>
                               <button className="buttonback"   onClick={() => this.flippyHorizontal.toggle()}>!Return!</button>
                              </div>
                        </BackSide>
                    </Flippy>   
               </div>
         </div> 

       );

   }

}

export default Dashboard;