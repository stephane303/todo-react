import React from 'react'
import { Link} from 'react-router-dom';
function Header (){
  return (
    <div style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </div>
  )
}

const linkStyle = {
  color:'#fff',
  textDecoration:'none'
}

const headerStyle = {
  background:'#333',
  color:'#fff',
  textAlign:'center' as 'center',
  padding :'10px'
}
export default Header;
