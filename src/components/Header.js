import Proptypes from 'prop-types'
import React from 'react'
import Button from './Button'

const Header = ({title}) =>
{
    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button color ='green'  text ='Add Task'/>
            <Button color ='red'  text ="Add Task2"/>
            <Button color ='blue'  text ="Add Task3"/>
        </header>
        
    )
}

Header.defaultProps={
 title :'Task Tracker',
}
Header.propTypes={
title:Proptypes.string.isRequired
}
//const heading style ={
 //   style ={{color: 'red',backgroundColor:'black' }}
//}

export default Header