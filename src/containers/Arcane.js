/*eslint-disable */
import React from 'react';
import './Arcane.css';
class Arcane extends React.Component {
    state = {
        ArcaneArr: Array(18).fill(0),
        res: [],
    }
    loadArcane = async () => {
        const { ArcaneArr } = this.state;
        let ArcaneObj = {};
        ArcaneObj['소멸의여로'] = {};
        ArcaneObj['소멸의여로']['nowSymbolLevel'] = ArcaneArr[0];
        ArcaneObj['소멸의여로']['nowSymbolCount'] = ArcaneArr[1];
        ArcaneObj['소멸의여로']['getSymbolCount'] = ArcaneArr[2];
        console.log(ArcaneObj);
        this.setState({
            res: await fetch('https://34.82.191.176/api/arcane/symbol', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ArcaneObj),
            }).then(res => res.json())
        })
        console.log(this.state.res);
    }

    handleChange = (e) => {
        const { ArcaneArr } = this.state;
        const index = e.target.name;
        const nextStat = [...ArcaneArr];
        nextStat[index] = e.target.value;
        this.setState({
            ArcaneArr: nextStat,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.loadArcane();
        // this.setState({
        //     ArcaneArr: Array(16).fill(0),
        // })
    }

    render() {
        const { ArcaneArr } = this.state;
        return (
            <div className="wrapper">
                <form>
                    <label>소멸의 여로</label>
                    <input value={ArcaneArr[0]} onChange={this.handleChange} name={0} />
                    <input value={ArcaneArr[1]} onChange={this.handleChange} name={1} />
                    <input value={ArcaneArr[2]} onChange={this.handleChange} name={2} />
                    <button onClick={this.handleSubmit}>등록</button>
                </form>
                <div>nowSymbolLevel : {ArcaneArr[0]}</div>
                <div>nowSymbolCount : {ArcaneArr[1]}</div>
                <div>getSymbolCount : {ArcaneArr[2]}</div>
            </div>
        );
    }
}
export default Arcane;