import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText)
  }
    const handleClearClick = () => {
    let newText = "";
    setText(newText)
}
    const handleInverseClick = () => {
      const newText = text.split('').map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
    setText(newText);
  }

    const handleOnChange = (event) => {
        setText(event.target.value)

    }

  const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
         <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange}  id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleInverseClick}>Inverse</button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container  my-3">
      <h2>YOUR TEXT SUMMARY</h2>
      <p>{text.split(/\s+/).filter(word => word !== '').length} words and {text.length} characters</p>
      <p>{0.008*text.split(/\s+/).filter(word => word !== '').length}minutes to read</p>
      <h2>PREVIEW</h2>
      <p>{text.length>0?text:"Enter your text"}</p>
    </div>
    </>
  )
}
