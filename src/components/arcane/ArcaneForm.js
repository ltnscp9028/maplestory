import React from 'react';
const ArcaneForm = ({ ArcaneArr, handleChange }) => {
    let formArr = [];
    const arcaneRegion = ['소멸의여로', '츄츄 아일랜드', '레헬른', '아르카나', '모라스', '에스페라'];
    for (let i = 0, j = 0; i < 18; i++) {
        if (i % 3 == 0) {
            formArr.push(<label>{arcaneRegion[j++]}</label>);
        }
        formArr.push(<input value={ArcaneArr[i]} onChange={handleChange} name={i} />)
    }
    return (
        <>
            {formArr}
        </>
    )
}

export default ArcaneForm;