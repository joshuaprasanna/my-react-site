import { useState } from "react";

export function BasicForm(){
    const [email, setEmail] = useState('')
    
    const handleEmailChange = event => {
      setEmail(event.target.value)
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      alert(`Your state values: \n 
              email: ${email} \n 
              You can replace this alert with your process`);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    )
  }