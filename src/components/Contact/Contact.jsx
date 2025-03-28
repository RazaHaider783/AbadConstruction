import React from 'react'
import './Contact.css'
import msgicon from '../../assets/msgicon.png'
import emailicon from '../../assets/emailicon.png'
import phoneicon from '../../assets/phoneicon.png'
import locicon from '../../assets/locicon.jpg'

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "85348235-25c2-4b69-91ec-c675bc9540a0");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us message <img src={msgicon} alt="" /></h3>
            <p>Fell free to reach out through contact form or find our contact information below</p>
          <ul>
            <li><img src={emailicon} alt="" />abadcontruction@hotmail.com </li>
            <li><img src={phoneicon} alt="" />03003592692 </li>
            <li><img src={locicon} alt="" />A1-20 Gulistan Society </li>
          </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name="name" placeholder='Enter Your Name' required />
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder='Enter Your Phone Number' required />
                <label>Write Your Message</label>
                <textarea name="message" id="" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now</button>
            </form>
         <span>{result}</span>
        </div>

    </div>
  );
}

export default Contact