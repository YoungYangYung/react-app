import React, { Suspense } from "react";
import "./App.css";
import store from "./redux/store";
import { Provider } from 'react-redux';
import Demo1 from './reduxDemo/Demo1';
import Demo2 from './reduxDemo/Demo2';
import StyleDemo1 from './styleDemo/Demo1';

const RectL = React.lazy(() => import("./Rect"));
const Step = React.lazy(() => import("./step"));

function App() {
    return (
      <Provider store={store}>
        <Suspense fallback={<div>加载中...</div>}>
            <RectL />
            <Step />

            <Demo1/>
            <Demo2/>
            <StyleDemo1/>
        </Suspense>
      </Provider>
    );
}

export default App;
