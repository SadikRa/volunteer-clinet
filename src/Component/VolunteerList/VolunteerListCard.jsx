import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const VolunteerListCard = ({ volunteer, index }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, name, email, date, organize,  } = volunteer;

  const handleDelete = (_id) =>{

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

        fetch(`http://localhost:5000/newVolunteer/${_id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)


                  Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
                  )
            
        })

         
        }
      })


   
  }
  return (
    <tr>
      <th>{index}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td>{organize}</td>
      <button onClick={() =>handleDelete(_id)} className="btn btn-primary">X</button>
    </tr>
  );
};

export default VolunteerListCard;
