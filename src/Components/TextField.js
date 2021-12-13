import React,{ useState } from 'react'

export default function TextField(props) {
    const [text, setText] = useState("");
    const [find, setfind] = useState("");

    const HandleOnChange = (e) =>{
        setText(e.target.value);
    }

    const HandleToUppercase = () => {
        setText(text.toUpperCase());
    }

    const HandleToLowercase = () => {
        setText(text.toLowerCase());
    }

    const HandleOfFind = (e) => {
        setfind(e.target.value);
    }

    const HandleCopyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const HandleClickFind = () => {
        if(find === ""){
            props.SetAlert("please enter the word which you want to find","danger");
            
        }else{
            let temp = text.indexOf(find,0);
            if(temp>=0){
                props.SetAlert("This word present in your text","success");
            }else{
                props.SetAlert("This word not present in your text","danger");
            }
        }
    }
    return (
        <>
        <div className = "container my-4">
            <h1>{props.heading}</h1>
            <div className="mb-3 my-3">
                <textarea className="form-control" value = {text} onChange={HandleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick = {HandleToUppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick = {HandleToLowercase}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick = {HandleCopyText}>Copy Text</button>
        </div>
        <div className="container my-3">
            <p>character : {text.trim().length}</p>
            <p>word : {text.trim().split(" ").length}</p>
            <h2>Your above text</h2>
            <p>{text === ""?`please write the in above text area`:text}</p>
            <h6>Find the word from above text</h6>
            <input type="text" value = {find} onChange = {HandleOfFind} name="find" id="find" />
            <button className="btn-primary btn mx-3" onClick={HandleClickFind}>Find</button>
        </div>
        </>
    )
}
