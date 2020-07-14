/*eslint-disable */
import React from 'react';
import './Arcane.css';
import ArcaneForm from '../components/arcane/ArcaneForm';
import ViewArcaneCost from '../components/arcane/ViewArcaneCost';
class Arcane extends React.Component {
    state = {
        ArcaneArr: Array(18).fill(0),
        res: [],
    }
    loadArcane = async () => {
        const { ArcaneArr } = this.state;
        const arcaneRegion = ['소멸의여로', '츄츄 아일랜드', '레헬른', '아르카나', '모라스', '에스페라'];
        let ArcaneObj = {};
        for (let i = 0; i < 6; i++)ArcaneObj[`${arcaneRegion[i]}`] = {};
        for (let i = 0, j = 0; i < 18; i += 3) {
            ArcaneObj[`${arcaneRegion[i / 3]}`]['nowSymbolLevel'] = ArcaneArr[i];
            ArcaneObj[`${arcaneRegion[i / 3]}`]['nowSymbolCount'] = ArcaneArr[i + 1];
            ArcaneObj[`${arcaneRegion[i / 3]}`]['getSymbolCount'] = ArcaneArr[i + 2];
        }
        // ArcaneObj['소멸의여로'] = {};
        // ArcaneObj['소멸의여로']['nowSymbolLevel'] = ArcaneArr[0];
        // ArcaneObj['소멸의여로']['nowSymbolCount'] = ArcaneArr[1];
        // ArcaneObj['소멸의여로']['getSymbolCount'] = ArcaneArr[2];
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
                <form className="arcane_form">
                    <ArcaneForm ArcaneArr={ArcaneArr} handleChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>등록</button>
                </form>
                <ViewArcaneCost res={this.state.res} />
            </div>
        );
    }
}
export default Arcane;