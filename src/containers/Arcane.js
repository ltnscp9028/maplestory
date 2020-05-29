/*eslint-disable */
import React from 'react';
import Data from './Data';
class Arcane extends React.Component {
    state = {
        symbol_list: Array(6),
        tempArr: Array(6),
    }
    handleChangeSingle = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleChange = (e) => {
        const { tempArr } = this.state;
        const index = e.target.name;
        const nextStat = [...tempArr];
        nextStat[index] = e.target.value;
        this.setState({
            tempArr: nextStat,
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { tempArr } = this.state;
        const wname = ['STR', 'DEX'];
        let tempA = {};
        for (let i = 0; i < tempArr.length; i++)tempA[`${wname[i]}`] = tempArr[i];
        // tempA[`${this.state.temp}`] = this.state.temp;
        // let arr = { temp: `${this.state.temp}` };
        console.log(tempA);
        await fetch('/api/addop/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tempA)
            // { temp: "temp" }
        })
            .then(res => res.json())
    }
    render() {

        return (
            <>
                <form>
                    <input value={this.state.tempArr[0]} onChange={this.handleChange} name='0' />
                    <input value={this.state.tempArr[1]} onChange={this.handleChange} name='1' />
                    <button onClick={this.handleSubmit}>버튼</button>
                </form>
            </>
        );
    }
}
export default Arcane;