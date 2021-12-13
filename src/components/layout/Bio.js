import React, {useRef, useEffect, useContext} from 'react';
import MainContext from '../../context/mainContext';


const Bio = () => {

    const mainContext = useContext(MainContext);
    const {getBio} = mainContext;

    const myBio = useRef();

    useEffect(()=> {
        getBio(myBio.current);
    }, [])

    return (
        <div ref={myBio} style={{paddingTop:'5em'}}>
            <div className="container">
                <div className="row">
                    <div className="col s4 green offset-s1">
                        aca va la fotito de la mari
                    </div>
                    <div className="col s5 red">
                        <p>
                            La mari es muy bonita y vamos a mandar aca toda la datita
                            de su vida porque es una muy linda coloradita dibujosa
                            que hizo muchas cositas en muchos lados. Sin embargo, a veces,
                            se olvida lo grosa que es y todas las cositas que hace. 
                            Yo la amo igual.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio;
