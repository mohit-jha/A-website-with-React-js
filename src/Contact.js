import React,{useState} from "react";

export default function Contact() {
    const [data, setdata] = useState({
        name:'',
        email:'',
        number:"",
        message:""
    })
const handleChange = ((event)=>{
    const {name, value} = event.target;
    setdata((prevData)=>{
        return{
            ...prevData,
            [name]:value
        }
    })
})

const submit = ((event)=>{
    event.preventDefault();
    alert(`${data.name} your form is successfully submited we will touch you soon here is your data ${data.name}
    ${data.number} ${data.email} ${data.message}`)
    setdata({
      name:'',
      email:'',
      number:"",
      message:""
  })

})

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className=" col-md-6 col-10 mx-auto mt-5">
            <form onSubmit={submit}> 
              <div className="mb-5">
                <div class="mb-3 mt-5">
                  <label for="exampleFormControlInput1" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1 "
                    placeholder="Enter Your Full Name"
                    onChange={handleChange}
                    name='name'
                    value={data.name}
                  />
                  <label for="exampleFormControlInput1" class="form-label">
                    Phone
                  </label>

                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1 "
                    placeholder="Enter your Mobile Number"
                    onChange={handleChange}

                    name='number'
                    value={data.number}
                  />
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>

                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1 "
                    placeholder="Enter Your Email"
                    onChange={handleChange}

                    name='email'
                    value={data.email}
                  />
                </div>
                <div class="">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={handleChange}

                    name='message'
                    value={data.message}
                  ></textarea>
              <div class="con col-12 mt-3">
                <button type="submit" class="btn btn-outline-primary mb-3">
                  Submit Form
                </button>
              </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
