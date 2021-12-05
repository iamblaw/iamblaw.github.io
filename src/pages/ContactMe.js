import React, { useRef} from 'react'

function Form() {

    const nameRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
          Name: nameRef.current.value,
      }
        alert("Hey " + data.Name + " your message sent successfully!")
    }

    return (
        <div  className="App-header">
            <h1>Contact Me: bryant.law@lc.cuny.edu</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="name">
                    <label for="Name" id="nameLabel">First Name</label>
                    <input type="text" placeholder="What momma calls you by?" ref={nameRef}/>
                </div>
                <label for="email">Email</label>
                <input type="email" placeholder="blahblahblah@email.com" />

                <label for="message">Message</label>
                <textarea 
                placeholder="Kind words sir">

                </textarea>
                <button type="submit" className="send">Send</button>
            </form>
        </div>
    )
}

export default Form
