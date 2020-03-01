import React from 'react';
import { Link } from 'react-router-dom';

var navStyling = 
  {
    display: 'block'
    // margin: '20px 0px'
  }

var linkStyleLeft = 
  {
    color: 'black',
    paddingLeft: '102px',
    float: 'left',
    // textDecoration: 'none',
    fontSize: '16px',
    fontFamily: 'didot'
  }

var linkStyleRight = 
  {
    color: 'black',
    marginTop: '-53px',
    paddingRight: '105px',
    // textDecoration: 'none',
    float: 'right',
    fontSize: '16px',
    fontFamily: 'didot'
  }

function Header() {
  return (

    <div style={navStyling}>
      <p style={linkStyleLeft}><Link to='/'>Home</Link> | <Link to='/'>About Us</Link></p>
      <center>
      <h2>
        <style jsx> {`
      h2 {
        color: orange;
        letter-spacing: 3px;
        padding-right: 223px;
        font-style: italic;
        font-size: 34px;
        font-family: monospace no. 20;
      }
      h2:hover {
        color: orange;
      }
      `}</style> 
       Wildlife Tracker</h2>
       </center>
       <p style={linkStyleRight}><Link to='/'>Submit new sighting</Link> | <Link to='/'>View map</Link> | <Link to='/'>View all logs</Link></p>
      {/* <hr/> */}
    </div>
  );
}

export default Header;