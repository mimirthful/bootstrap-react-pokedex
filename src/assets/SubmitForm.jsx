import {  useState } from 'react';

export default function SubmitForm({onFinish})
{
  const [input, setInput] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        onFinish(input)
        console.log("submitted")
    }
    return <>

    <form onSubmit={handleSubmit}>
    <div className="input-group">
        <span className="input-group-text">Pokemon</span>
        <input
        className='form-control'
        placeholder='Bulbasaur'
        onChange={(e) => (setInput(e.target.value.toLowerCase()))}
        />
        </div>
        <button className="btn btn-primary mt-3" type='submit' >Search!</button>
    </form>
    </>
  
}