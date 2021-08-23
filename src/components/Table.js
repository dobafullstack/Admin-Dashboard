import React from "react";
import classNames from "classnames";

export default function Table(props) {
    let items = Object.keys(props).filter(
        (item) => item !== "className" && item !== "children"
    );
    
    items = items.map(item => {
        return `table-${item}`
    })

    const tableClassName = classNames("table", items);
    return <table className={tableClassName}>{props.children}</table>;
}
