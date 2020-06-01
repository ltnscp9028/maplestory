import React from 'react';

class CalStaticAddOp extends React.Component {
    url = 'https://34.82.191.176';
    state = {
        qaz: [],
        tmp: [],
    }

    async componentDidMount() {
        if (this.props.check === 1) {
            this.setState({
                tmp: await fetch(`${this.url}/api/addop/${this.props.lv}/${this.props.sorm}`, {
                    mode: 'cors',
                    redirect: 'follow'
                })
                    .then(res => res.json())
            });
        }
        else if (this.props.check === 2) {
            this.setState({
                tmp: await fetch(`${this.url}/api/addop/${this.props.lv}`, {
                    mode: 'cors',
                    redirect: 'follow'
                })
                    .then(res => res.json())
            });
        }
    }

    render() {
        const tmpArr = [];
        for (let i = 0; i < 7; i++) {
            tmpArr.push(<div className="const_op_stat" key={i}>{this.state.tmp[i]}
            </div>);
        }

        return (
            <>
                {tmpArr}
            </>
        );
    }
}

export default CalStaticAddOp;