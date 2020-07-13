/*eslint-disable */
import React from 'react';
import './AddOp.css';
import ViewAddOp from '../components/addop/ViewAddOp';
import InputAddOp from '../components/addop/InputAddOp';
import FloatingStat from '../components/addop/FloatingStat';

class AddOp extends React.Component {
    stat = [
        'STR', 'DEX', 'INT', 'LUK',
        '최대 HP', '최대 MP',
        '공/마 (기본)',
        '공격력(추옵)', '마력(추옵)',
        '보공', '데미지',
        '방어력', '이동속도', '점프력', '올스탯', '착용레벨 감소',
    ];

    state = {
        statArr: Array(16).fill(0),
        lv: '',
        checkFire: 0,
        asdf: [],
        gmAddop: [],
    }

    testFetch = async () => {
        const { statArr, lv, checkFire } = this.state;
        let tmpObj = {};
        for (let i = 0; i < this.stat.length; i++)tmpObj[`${this.stat[i]}`] = statArr[i];
        tmpObj['lv'] = lv;
        tmpObj['checkFire'] = checkFire;
        console.log(tmpObj);
        this.setState({
            asdf: await fetch('https://34.82.191.176:443/api/addop', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tmpObj),
            }).then(res => res.json())
        })
        console.log('test:' + this.state.asdf);
    }

    testFetchTwo = async () => {
        const { lv, statArr } = this.state;
        let tmpObj = {};
        for (let i = 0; i < this.stat.length; i++)tmpObj[`${this.stat[i]}`] = statArr[i];
        tmpObj['lv'] = lv;
        this.setState({
            gmAddop: await fetch('https://34.82.191.176:443/api/addop/weapon', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tmpObj)
            }).then(res => res.json())
        })

    }

    handleChange = (e) => {
        const { statArr } = this.state;
        const index = e.target.name;
        const nextStat = [...statArr];
        nextStat[index] = e.target.value;
        this.setState({
            statArr: nextStat,
        });
    }

    handleChangeSingle = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.testFetch();
        this.testFetchTwo();
        this.setState({
            statArr: Array(16).fill(0),
            lv: '',
            checkFire: '',
        })
        console.log('test');
    }


    render() {
        return (
            <>
                <InputAddOp
                    handleChangeSingle={this.handleChangeSingle} handleSubmit={this.handleSubmit}
                    lv={this.state.lv} checkFire={this.state.checkFire}
                    statArr={this.state.statArr} stat={this.stat} handleChange={this.handleChange} />
                <div className="view_stat">
                    <ViewAddOp data={this.state.asdf} lv={this.state.lv} statArr={this.state.statArr} gmAddop={this.state.gmAddop} />
                </div>
                <FloatingStat />
            </>
        );
    }
}
export default AddOp;
