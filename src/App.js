import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from "./components/BurgerBuilder/BurgerBuilder";
import Backdrop from './components/UI/Backdrop/Backdrop';

class App extends Component {
    state = {
        purchasing: false
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

  render() {

    return (
      <div className="App">

          <Layout>
            <BurgerBuilder></BurgerBuilder>
        </Layout>

      </div>
    );
  }
}

export default App;
