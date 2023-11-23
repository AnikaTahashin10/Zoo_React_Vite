import { useState } from "react";

const Card = () =>{

const [count, setCount] = useState(0);

const increaseCount = () => {
    setCount(count+1);
};

const decreaseCount = () => {
    setCount(count-1);
    
};

return (
  <div className="card">
<img src = "https://source.unsplash.com/random" style = {{width: "200px"}} alt ="beach"/>
<h2>Title</h2>
      <button style= {styles.close}>close</button>
      <button style= {styles.decrease} onClick={decreaseCount}>-</button>
      <span className="material-symbols-outlined">{count}</span>
      <button style= {styles.add} onClick={increaseCount}>+</button>
  </div>
)
}

export default Card;

const styles = {
add:{

},

close:{

},

decrease:{

}

}