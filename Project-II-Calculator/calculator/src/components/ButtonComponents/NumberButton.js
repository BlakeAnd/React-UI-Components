import React from 'react';
import './Button.css';
function Button (){
    return(
        <div>
        <div className="row">
            <p className="wide">clear</p>
            <p className="right">/</p>
        </div>
        <div className="row">
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p className="right">X</p>
        </div>    
        <div className="row">
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p className="right">-</p>
        </div>
        <div className="row">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p className="right">+</p>
        </div>
        <div className="row">
            <p className="wide">0</p>
            <p className="right">=</p>
        </div>  
    </div>

    );

}

export default Button;
