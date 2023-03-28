import './Test.css';
import {useState} from "react";

export const Test = ()=> {
    const [testPaste, setTestPaste] = useState('');
    const [testCopy, setTestCopy] = useState('Hello John');
    const handleCopy = (e) => {
        const start = e.target.selectionStart;
        const stop = e.target.selectionEnd;
        setTestPaste(testCopy.slice(start,stop));
    }

    // const handlePaste = (e)=> {
    //     e.target.nextElementSibling.value = e.clipboardData.getData('text/plain');
    // }

    // const handleButtonClick = (e)=> {
    //     alert('Vous avez cliqué sur le button');
    // }
    //
    // const handleButtonMouseEnter = (e)=> {
    //     e.target.style.backgroundColor = "pink";
    // }
    //
    // const handleButtonMouseLeave = (e)=> {
    //     e.target.style.backgroundColor = 'yellow';
    // }

    return(
        <>
            <input type="text" name="test-copy" value={testCopy} onCopy={handleCopy} onChange={e=> setTestCopy(e.target.value)}/>
            <input type="text" name="test-paste" value={testPaste}/>
            <div>Valeur de testPaste: <span>{testPaste}</span></div>
            {/*<textarea name="target" id="target" cols="30" rows="10" contentEditable={false}></textarea>*/}
            {/*<button onClick={handleButtonClick} onMouseEnter={handleButtonMouseEnter} onMouseLeave={handleButtonMouseLeave}>Test</button>*/}
        </>
    );
}