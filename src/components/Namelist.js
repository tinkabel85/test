import React from "react";

function Namelist() {
    return (
        <ul className="NameList">
            {['Alice', 'Oksana', 'Anna', 'Naomi'].map((item, i) => {
                return <li key={i}>{item}</li>
            })}
        </ul>
    );
}

export default Namelist;
