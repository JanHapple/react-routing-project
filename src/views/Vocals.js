import React from 'react';
// import { CSSTransition } from 'react-transition-group';

const Vocals = () => {
    // const [show, setShow] = useState(false);
    
    return(
        <>
        {/* <CSSTransition
                in={show}
                timeout={300}
                classNames="transition"
                unmountOnExit
                onEnter={() => setShow(false)}
                onExited={() => setShow(true)}
            > */}
                <div className="pic vocals transition"><span>Dave Grohl</span></div>        
         {/* </CSSTransition> */}
        </>
    )
}

export default Vocals;