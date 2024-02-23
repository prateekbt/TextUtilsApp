import React, { useState } from 'react'

export default function About() {
    
    const [mystyle, setMyStyle] = useState(    
        {
            color: '#35374B',
            backgroundColor: 'white'
        })
    const [btn, setBtnStyle] = useState( "Enable Dark Mode")

    const toggleStyle = ()=>{
        if(mystyle.color == '#35374B'){
            setMyStyle({
                color: 'white',
                backgroundColor: '#35374B'
              })
              setBtnStyle("Enable Ligth Mode")
        }
        else{
            setMyStyle({
                color: '#35374B',
                backgroundColor: 'white'
            })
            setBtnStyle("Enable Dark Mode")
        }
    }

  return (
         <div classNameName='container' style={mystyle}>
        <h2>About us</h2>
        <hr/>
        <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Company Profile
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Something You Imagine
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Something You Can't Do!!
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
      

    <div className="container">
      <button onClick={toggleStyle} type="button" className='btn btn-primary my-3'>{btn}</button>
    </div>
    
    </div>
  )
}
