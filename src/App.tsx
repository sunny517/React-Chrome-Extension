import React from 'react';
import './App.scss';
import popup from  './util/popup'
import localStorage from "localStorage";

function App():any {
  // localStorage.setItem("tLog", JSON.stringify(["123","222","123","222","333","123","222","333","123","222","333"]))
  let log:any = JSON.parse(localStorage.getItem("tLog"))
  let tLog: Array<any> = log ? log : [];

  const [logList, setLogList] = React.useState(tLog);

  React.useEffect(() => {
    // popup(
    //   function (objRequest) {
    //     // console.info(objRequest.background)
    //     // setLogList(logList=>{
    //     //   let list = [...logList, objRequest.background]
    //     //   localStorage.setItem("tLog", JSON.stringify(list))
    //     //   return list
    //     // })
    //   }
    // )
  }, []);

  let clearLog = (): void =>{
    setLogList(logList=>{
      localStorage.removeItem('tLog');
      return []
    })
  }

  return (
    <div className="App">

      <button className='buttonWhite buttonAct' onClick={clearLog}>
        清空记录
      </button>
      <div style={{width: "calc(100% - 20px)", paddingLeft: '20px'}}>选词记录：</div>
      <ul className="ul">
        {logList.map((log,index) => {
          return (
            <li key={index} className="li">
              {index+1}、{log}
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
