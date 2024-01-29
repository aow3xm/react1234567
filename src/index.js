import React from 'react';
import ReactDOM from 'react-dom/client';
import { Card } from './components/Card.js';
import { Alert } from './components/Alert.js';
import HomeLayout from './components/HomeLayout/HomeLayout.js';
import DataBinding from './components/DataBinding/DataBinding.js';
import StyleComponents from './components/StyleComponents/StyleComponents.js';
import HandleEvent from './components/HandleEvent/HandleEvent.js';
import StateComponents from './components/StateComponents/StateComponents.js';
import ChangeColor from './components/StateComponents/ChangeColor.js';
import ChangeAvatar from './components/StateComponents/ChangeAvatar.js';
import ChangeCar from './components/ChangeCar/ChangeCar.js';
// import StateComponents from './components/StateComponents/StateComponents.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <HomeLayout />
    {/* <DataBinding /> */}
    {/* <StyleComponents />
    <HandleEvent />
    <StateComponents />
    <ChangeColor />
    <ChangeAvatar /> */}

    <ChangeCar />
  </div>

)

