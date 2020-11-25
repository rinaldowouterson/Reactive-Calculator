import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
  <App></App>
  </>
  ,
  document.getElementById('root')
);

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(),1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }



//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// function Clock2(){
//   // useState is State Hook
//   const [count, setCount] = useState(new Date().toLocaleTimeString())

//   // useEffect is Effect Hook
//   useEffect(() => {    // After component is loaded into DOM
//   const interval =  setInterval(()=>setCount(new Date().toLocaleTimeString()),1000)
//     return  () => clearInterval(interval)
//   })
  
  
//   return (
//       <div>
//         <h1>Hello, this is Clock2!</h1>
//         <h2>It is {count}.</h2>
//       </div>
//     );
      
//   }


// ReactDOM.render(
//   <>
//   <Clock />
//   <Clock2 />
//   </>
//   ,
//   document.getElementById('root')
// );




// const HelloName = (props) => {
//   return <h1>Hello, {props.name}</h1>;
// };

// function Avatar(object) {
//   return (
//     <img className="Avatar" src={object.user.avatarUrl} alt={object.user.name} />
//   );
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
// <Avatar user={props.author}></Avatar>
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {props.date}
//       </div>
//     </div>
//   );
// }



// function tick() {
//   // const props={name:"Rinaldo"};
//   const testprop = { author: { avatarUrl: "testURL", name: "testURL ==> testName" }, text: "this is sample text to see if i guessed the object right?", date: "random test date fuckery" }

//   const element = (
//     <div>
//       <HelloName name="Rinaldo"></HelloName>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       {/* <div> */}
//       <h1>Testing Comment bullshit</h1>
//       {Comment(testprop)}
//       {/* </div> */}
//     </div>
//   );



//   ReactDOM.render(element, document.getElementById('root'));

// }

// setInterval(tick, 1000)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
