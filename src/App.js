
import React, {useState} from 'react';
import './App.css'

const App = () => {

    const [fox, setFox] = useState('')

    async function getDucknpx create-react-app <my-second-project>s () {
        const response = await fetch('https://randomfox.ca/floof/')
        const data = await response.json()
        setFox(data.image)
    }


    return (
        <div className='container'>
            <input type="button" value='Получить лисичек' onClick={getDucks}/>
            <img src={fox && fox} alt=""/>
        </div>
    );
};

export default App;

import React from 'react';

class App extends React.Component {
    fetchData = async () => {
        try {
            const response = await fetch('https://randomfox.ca/floof/');
            const data = await response.json();
            console.log(data.image);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.fetchData}>Запросить картинку лисы</button>
            </div>
        );
    }
}

export default App;




