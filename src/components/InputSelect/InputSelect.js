const Input = ({ inputValue, currency, rates, setInputValue, setCurrencySelect, style }) => {
    return(
        <div className="main__form">
          <input style={style} type="number" className="form__input" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
          <select name="input_value" id="" className="form__select" value={currency} onChange={(e) => setCurrencySelect(e.target.value)}>
            {rates && rates.map((value, i) => 
            (<option key={i} value={value}>{value}</option>))}
          </select>
        </div>
    )
}

export default Input;