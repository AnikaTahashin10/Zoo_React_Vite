import { useState } from "react";
import { Link } from "react-router-dom";

const Card = (name) =>{

const [count, setCount] = useState(0);

const increaseCount = () => {
    setCount(count+1);
};

const decreaseCount = () => {
    setCount(count-1);
    
};

return (
  <>
  <div className="card">
<img src = "https://source.unsplash.com/random" style = {{width: "200px"}} alt ="animals"/>
{/* <h2>{prop.name}</h2> */}

      <button style= {styles.close}>close</button>
      <button style= {styles.decrease} onClick={decreaseCount}>-</button>
      <span className="material-symbols-outlined">{count}</span>
      <button style= {styles.add} onClick={increaseCount}>+</button>
  </div>
  </>
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