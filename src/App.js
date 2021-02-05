import React, { Component } from 'react';
import classes from './App.module.css';
import amazonLogo from './amazon_PNG25.png';
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import ProductData from './ProductData';

class App extends Component {
  state = {
    productData : ProductData,
    currentPreviewImagePos : 0,
    currentButton : 0,
    showHeartBeatSection : false
  }

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos : pos});
  }

  onButtonClick = (pos) => {
    this.setState({currentButton : pos});
    if(pos === 0) this.setState({showHeartBeatSection : false});
    else this.setState({showHeartBeatSection : true});
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <nav className={classes.Topbar}>
            <img src={amazonLogo} alt="Amazon logo" />
          </nav>
        </header>
        <div className={classes.MainContainer}>
          <ProductPreview currentPreviewImage={this.state.productData.colorOptions
          [this.state.currentPreviewImagePos].imageUrl} 
          showHeartBeatSection={this.state.showHeartBeatSection} />
          <ProductDetails data = {this.state.productData} 
          onColorOptionClick = {this.onColorOptionClick}
          onButtonClick = {this.onButtonClick}
          currentPreviewImagePos = {this.state.currentPreviewImagePos}
          currentButton = {this.state.currentButton} />
        </div>
      </div>
    );
  }
}

export default App;
