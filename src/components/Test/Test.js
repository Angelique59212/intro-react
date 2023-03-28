import './Test.css';

export const Test = ()=> {
    const handleCopy = (e) => {
        const start = e.target.selectionStart;
        const stop = e.target.selectionEnd;
        e.target.nextElementSibling.value = e.target.value.slice(start, stop);
    }

    const handlePaste = (e)=> {
        e.target.nextElementSibling.value = e.clipboardData.getData('text/plain');
    }

    const handleButtonClick = (e)=> {
        alert('Vous avez cliqué sur le button');
    }

    const handleButtonMouseEnter = (e)=> {
        e.target.style.backgroundColor = "pink";
    }

    const handleButtonMouseLeave = (e)=> {
        e.target.style.backgroundColor = 'yellow';
    }

    return(
        <>
            <input type="text" name="test-copy" onCopy={handleCopy}/>
            <input type="text" name="test-paste" onPaste={handlePaste}/>
            <textarea name="target" id="target" cols="30" rows="10" contentEditable={false}></textarea>
            <button onClick={handleButtonClick} onMouseEnter={handleButtonMouseEnter} onMouseLeave={handleButtonMouseLeave}>Test</button>
        </>
    );
}