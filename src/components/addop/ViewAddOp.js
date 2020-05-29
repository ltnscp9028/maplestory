import React from 'react';
class ViewAddOp extends React.Component {
    static defaultProps = {
        data: [],
    }

    render() {
        const { data, gmAddop } = this.props;
        // console.log(data);
        const viewArr = [];
        for (let i = 0; i < data.length; i++) {
            const arr = [];
            const tparr = data[i].split(',');
            for (let j = 0; j < tparr.length; j++) {
                arr.push(<div className="view_value" key={j}>{tparr[j]}</div>);
            }
            viewArr.push(<div className="view_div" key={i}>{arr}</div>);
        }
        const arr = [];
        const gmTmp = Array.from(gmAddop);
        for (let i = 0; i < gmAddop.length; i++) {
            arr.push(<div className="view_value" key={i}>{gmTmp[i]}</div>)
        }
        if (gmTmp.length > 0) viewArr.push(<div className="view_div">{arr}</div>)

        return (
            <>
                {viewArr}
            </>
        );
    }



}

export default ViewAddOp;