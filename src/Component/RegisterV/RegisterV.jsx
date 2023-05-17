
const RegisterV = () => {


    const handleRegister = event =>{
            event.preventDefault()
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const date = form.date.value;
    
            const description = form.description.value;
            const organize = form.organize.value;
            const photo = form.photo.value;

            const newRegister = {
                name, email, date, description, organize, photo
            }
            console.log(newRegister)

            fetch('http://localhost:5000/newVolunteer',{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(newRegister)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">


    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    


        <form onSubmit={handleRegister}>
        <div className="card-body p-8">

        <div className="form-control">
          <input type="text" name="name" placeholder="Full Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="email" name="email" placeholder="Username or Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="date" name="date" placeholder="Date" className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="text" name="description" placeholder="Description" className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="text" name="organize" placeholder="Organize books at the library." className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="Registration" />
        </div>

        </div>
        </form>

     
    </div>
  </div>
</div>
        </div>
    );
};

export default RegisterV;