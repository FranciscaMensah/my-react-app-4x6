import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function WindowTracker (){

    const [currentSize, setCurrentSize] = React.useState(window.innerWidth);

    React.useEffect(()=>{

        function trackWidth (){
            setCurrentSize(window.innerWidth);
        }

        window.addEventListener('resize', trackWidth);

        return function (){
            window.removeEventListener('resize', trackWidth);
        }
    }, [])


    return(
        <div>
            <h1>Window Width:</h1>
            <h1>{currentSize}px</h1>
        </div>
    )
}

function App (){
    const [isShown, setIsShown] = React.useState(true);
    function toggleWidthTracker (){
        setIsShown(prevVal => !prevVal)
    }

    return ( 
        <div className='container'>
          <button
            onClick={toggleWidthTracker}
            >Toggle Width Tracker</button>
            {isShown && <WindowTracker/>}
        </div>
      )
}

root.render(<App/>);