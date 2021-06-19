import React, { Component } from 'react';

class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    text: 'text disini',
  };

  // callFirstName = (callBack) => {
  //   setTimeout(() => {
  //     callBack("nursyafriady, ");
  //   }, 2000);
  // };

  // callLastName = (callBack) => {
  //   setTimeout(() => {
  //     callBack("ST");
  //   }, 2000);
  // };

  // login = () => {
  //   this.callFirstName((res) => {
  //     this.callLastName((res2) => {
  //       const first = res;
  //       const last = res2;
  //       const name = first + last;

  //       this.setState({
  //         text: name
  //       });
  //     });
  //   });
  // };

  callFirstName = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve('Nursyafriady, ');
    }, 2000);
  });

  callLastName = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve('ST');
    }, 2000);
  });

  /*
    1. aynchronous hanya bisa dihandle oleh new Promise dan callback function
    2. Ketika menggunakan promise bisa dihandle dengan 3 cara
      a. chaining then
      b. promise.all
      c. async await
    3. untuk menangani proses asynchronous bisa dihandle dengan
      a. callback : js terdahulu
      b. promise : js terbaru
  */

  login = async () => {
    const firts = await this.callFirstName();
    const last = await this.callLastName();
    const name = firts + last;
    this.setState({
      text: name,
    });
    // Promise.all([this.callFirstName(), this.callLastName()]).then(
    //   ([res1, res2]) => {
    //     this.setState({
    //       text: res1 + res2
    //     });
    //   }
    // );
    // this.callFirstName()
    //   .then((res) => {
    //     return this.callLastName(res);
    //   })
    //   .then((res2) => {
    //     this.setState({
    //       text: res2
    //     });
    //   });
  };

  render() {
    const { text } = this.state;
    const { login } = this;
    return (
      <div className="App">
        <button type="button" onClick={login}>Login</button>
        <div />
        <h2>{text}</h2>
      </div>
    );
  }
}

export default App;

// export default function App() {
//   return (
//     <div className="App">
//       <button>Login</button>
//       <div></div>
//       <h2>teks Disini</h2>
//     </div>
//   );
// }
