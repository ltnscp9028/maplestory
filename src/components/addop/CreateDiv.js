import React from 'react';
class CreateDiv extends React.Component {
    render() {
        const tmpArr = [];
        for (let i = 7; i; i--) tmpArr.push(<div className="const_op" key={i}>{i}추옵</div>);
        return (
            <>
                {tmpArr}
            </>
        );
    }
}

export default CreateDiv;