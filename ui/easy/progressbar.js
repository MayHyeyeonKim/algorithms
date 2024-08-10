//ProgressBar.js
const MIN = 0;
const MAX = 100;

export default function ProgressBar({value}) {

  const clampedValue = Math.min(MAX, Math.max(value, MIN));

  return (
     <div className="progress">
    <div 
      className="progress-bar"
      style= {{ width: `${clampedValue}%` }}
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={MIN}
      aria-valuemax={MAX}
    >
    {clampedValue}%
    </div>
  </div>
  );
}


// App.js
// import ProgressBar from './ProgressBar';

// import './styles.css';

// export default function App() {
//   return (
//     <div className="wrapper">
//       <ProgressBar value={0}/>
//       <ProgressBar value={25}/>
//       <ProgressBar value={50}/>
//       <ProgressBar value={75}/>
//       <ProgressBar value={100}/>
//     </div>
//   );
// }


// styles.css
// body {
//     font-family: sans-serif;
//   }
  
//   .wrapper {
//     display: flex;
//     flex-direction: column;
//     gap: 12px;
//   }
  
//   .progress {
//     background-color: rgb(233, 236, 239);
//     border: 1px solid #c5c5c5;
//     border-radius: 8px;
//     height: 20px;
//     overflow: scroll;
//   }
  
//   .progress-bar {
//     background-color: blue;
//     color: #fff;
//     height: 100%;
//     overflow: hidden;
//     text-align: center;
//   }