import { useState } from "react";
import "./Practice.css"

export const Practice = () => {
    const [number,setNumber] = useState(0)
    const add = () =>{
        setNumber(number+1)
    }
    const reduce = () =>{
        setNumber(number-1)
    }

    return (
      <div className='practice'>
        <div className='title'>
            <h1>MNiST-React練習ページへようこそ！</h1>
            </div>
            <div className='contents'>
                <p　className='box1'>このページは、Mstaを開発するに当たって、
                    練習として自由にコードを編集できる場所です。
                    サンプルとして簡単なページ、関数とcssを用意しました。
                    Reactを勉強しながら、このページを活用してみてください。
                    実際にgitにpushしたり、pullしてみることで、
                    gitの練習にもなると思います。
                </p>
                </div>
            <div className='checker'>
                <h3>カウントチェッカー</h3>
                <h1>Number : <span>{number}</span></h1>
                <button onClick={() => add()}>+1</button>
                <button onClick={() => reduce()}>-1</button>
                </div>            
      </div>
    );  
  }