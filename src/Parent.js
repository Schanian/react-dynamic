import React, { useState } from 'react';
import loadable from '@loadable/component';
import Loading from './notYetLoaded';

export default () => {
    let [world, setWorld ] = useState(null);
    let [user, setUser] = useState(null);
    let [option,setOption] = useState(null);
    const clickWorld = (event) =>{ event.preventDefault() ;
        console.log('The click handler');
     const LoadedComponent = loadable(() => import('./helloWorld.js'),{
            fallback: <Loading/>
        }) 
            setWorld(<LoadedComponent />);    
    };
    const clickUser = (event) =>{ event.preventDefault() ;
        console.log('The click handler');
     const LoadedComponent = loadable(() => import('./helloUser.js'),{
            fallback: <Loading/>
        }) 
        setUser(<LoadedComponent />);    
    };

    const clickOption = (event) =>{ event.preventDefault() ;
        console.log('The click handler');
     const LoadedComponent = loadable(() => import('./The3drOption.js'),{
            fallback: <Loading/>
        }) 
        setOption(<LoadedComponent />);    
    };

  return <div>
        {
            (world) || (<button onClick ={clickWorld}>
            Hello World
        </button>)
        }
        {
            (user) || (<button onClick ={clickUser}>
            Hello User
        </button>)
        }
        {
            (option) || (<button onClick ={clickOption}>
            3rd Option
        </button>)
        }            
    </div>
}