import React from 'react';
import CreateDivWrap from './CreateDivWrap';
const InputAddOp = ({ lv, checkFire, handleChangeSingle, handleChange, handleSubmit, statArr, stat }) => {

    return (
        <div className="div_form_op">
            <div className="div_wrap_def">
                <div className="form_label">아이템 레벨</div>
                <input type="number" value={lv} onChange={handleChangeSingle} name='lv' />
            </div>
            <div className="div_wrap_def">
                <select value={checkFire} onChange={handleChangeSingle} name='check_fire' className='def_set_op'>
                    <option value='0'>강환,영환 미사용</option>
                    <option value='1'>강환 사용</option>
                    <option value='2'>영환 사용</option>
                </select>
            </div>
            <form className="div_test_op">
                <CreateDivWrap statArr={statArr} stat={stat} handleChange={handleChange} />
                <button onClick={handleSubmit} className='submit_bt2'>등록</button>
            </form>
        </div>
    );
}
export default InputAddOp;