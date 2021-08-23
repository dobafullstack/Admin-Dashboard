import React from 'react'
import classnames from 'classnames'

export default function Button(props) {
    let btn = [];

    Object.keys(props).sort().forEach(item => {
        switch (item){
            case "color":
                btn.push(`btn-${props.color}`)
                break;
            case "outline":
                btn.push(`btn-outline-${props.color}`);
                btn = btn.filter(item => item !== `btn-${props.color}`)
                break;
            case "inverse":
                btn.push(`btn-inverse-${props.color}`);
                btn = btn.filter(item => item !== `btn-${props.color}`)   
                break;
            case "rounded":
                btn.push("btn-rounded")
                break;
            case "icon":
                btn.push(`btn-icon`)
                break;
            case "size":
                btn.push(`btn-${props.size}`);
                break;
            case "block":
                btn.push("btn-block");
                break;
            
            
        }
    })

    const btnClassName = classnames('btn', btn)
    return (
        <button className={btnClassName}>
            {props.children}
        </button>
    )
}
