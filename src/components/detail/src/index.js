import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
  
function Picture() {
    return <img src={`test.png`} alt="Logo" />;
}

function Button1() {
  return <button type="button" id="button"><img src={`reversetriangle.png`} alt="Logo" /></button>;
}

function Button2() {
  return <button type="button" id="button"><img src={`triangle.png`} alt="Logo" /></button>;
}

class Person extends React.Component {
    render() {
        return (
            <div>
                <h1>女性　10代</h1>
                <p>福井県鯖江市新横江２丁目３−４</p>
            </div>
        );
    }
  }

class Comment extends React.Component {
    render() {
        return (
            <div>
                <div>人形供養とかじゃないでめがね供養があった</div>
            </div>
        );
    }
}

class Heart extends React.Component {
  render() {
      return (
        <div>❤200</div>
      );
  }
}

class Main extends React.Component {
  render() {
    return (
      <div className="main">
         <div className="main-picture">
          <Button1/><Picture/><Button2/>
        </div>
        <div className="main-person">
          <Person />
        </div>
        <div className="main-comment">
          <Comment/>
        </div>
        <div className="main-heart">
          <Heart/>
        </div>
      </div>
    );
  }
}  
  const Kard = () => {
    return (
      <Main/>
    );
  }
  export default Kard;
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Main />);
  