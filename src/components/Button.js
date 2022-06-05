import PropTypes from 'prop-types'

import React from 'react'
const Button =({color ,Text, onClick}) => {
   
    return(
<>
        <button onClick ={onclick}  style ={{backgroundColor : color}} className ='btn'>{Text}</button>
        <button>hi</button>
</>
    )
}
//Button.defaultProps {
//color:steelblue
//}

Button.propTypes = {
    text : PropTypes.string,
    color : PropTypes.string,
    onClick : PropTypes.func.isRequired
};
export default Button