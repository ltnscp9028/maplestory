import React from 'react';

class Data extends React.Component {
    state = {
        data: '',
    }
    componentDidMount() {
        let data = this.state;
        fetch('/api/addop/')
            .then(res => res.json())
            .then(data => this.setState({ data }), () => {
                console.log('data read : ', data);
            });
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state.data)}
            </div>
        );
    }
}

export default Data;