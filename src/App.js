import './App.css';
import { useState, useEffect} from 'react';
import useData from './lib/useData';
import InputSelect from './components/InputSelect/InputSelect';

function App() {
  const data = useData([]);
  console.log(data)
  const [inputValue, setInputValue] = useState(1);
  const [result, setResult] = useState('');
  const [inputSelect, setInputSelect] = useState('USD');
  const [baseCurrencySelect, setBaseCurrencySelect] = useState('UAH');

  useEffect(() => {
    if(data) {
      handleInputChange(1)
    }
  }, [data])

  function handleInputChange(inputValue) {
    let result = (data.rates[baseCurrencySelect]/data.rates[inputSelect]) * inputValue;
    setResult(result.toFixed(2))
    setInputValue(inputValue)
  }
  function handleSelectChange(inputSelect) {
    let result = (data.rates[baseCurrencySelect]/data.rates[inputSelect]) * inputValue;
    setResult(result.toFixed(2))
    setInputSelect(inputSelect)
  }
  function handleResultSelectChange(baseCurrencySelect) {
    let result = (data.rates[baseCurrencySelect]/data.rates[inputSelect]) * inputValue;
    setResult(result.toFixed(2))
    setBaseCurrencySelect(baseCurrencySelect)
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">
          Currency Converter
        </h1>
        <span>Choose base currency: </span>
        <InputSelect
        currency={baseCurrencySelect}
        rates={data && Object.keys(data.rates)}
        setCurrencySelect={handleResultSelectChange}
        style={{ display: 'none' }}
        />
        <p className="header__date">
          Date: {data && data.date}
        </p>
      </header>
      <main className="main">
        <InputSelect 
        inputValue={inputValue} 
        currency={inputSelect} 
        rates={data && Object.keys(data.rates)} 
        setInputValue={handleInputChange}
        setCurrencySelect={handleSelectChange}
        />
        <p>
          Result: {result} {baseCurrencySelect}
        </p>
      </main>
    </div>
  );
}

export default App;
