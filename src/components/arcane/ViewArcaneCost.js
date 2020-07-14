import React from 'react';
const ViewArcaneCost = ({ res }) => {
    const constResultArr = [];
    for (let i = 0; i < 6; i++)constResultArr.push(<div>{res[i]}</div>);
    return (
        <>
            {constResultArr}
        </>
    )
}

export default ViewArcaneCost;