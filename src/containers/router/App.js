import React from 'react';
import Header from './../../components/header';
import Main from './../../components/main';

const App = () => {
    return (
        <React.Fragment>
            <section className='main'>
                <Header />
                <Main />
            </section>
        </React.Fragment>
    )
}
export default App;