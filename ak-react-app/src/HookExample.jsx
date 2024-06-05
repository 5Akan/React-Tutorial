import React, {useState} from "react"
function Hookexample() {
    const [name,setName ] = useState("Guest");
    const [quantity,setQuantity] = useState(0);
    const [comment,setComment ] = useState("");
    const [payment,setPayment] = useState("");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }
    function handleCommentChange(event){
        setComment(event.target.value)
    }
    function handlePaymentChange(event){
        setPayment(event.target.value)
    }

    return (<div>
            <input value = {name} onChange = {handleNameChange}/>
            <p>Name:{name}</p>
            <input value = {quantity} onChange = {handleQuantityChange}/>
            <p>Quantity:{quantity}</p>
            <textarea value= {comment} placeholder= "Write your description"  onChange = {handleCommentChange}></textarea>
            <p>Comment: {comment}</p>

            <select value = {payment} onChange = {handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="visa">Visa</option>
                <option value="mastercard">Mastercard</option>
                <option value="giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>
          </div>)
}

export default Hookexample