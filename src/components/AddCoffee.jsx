import Swal from "sweetalert2";

const AddCoffee = () => {
    const handleAddCoffee= event=>{
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.name.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const photo = form.photo.value;
       
        const newCoffee= {name, quantity, supplier, taste, category, photo}
        console.log(newCoffee);

        //send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
               'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res=> res.json())
            .then(data=> {
                console.log(data);
                if(data.insertedID){
                    Swal.fire({
                        title: 'Success!',
                        text: 'User added successfully',
                        icon: 'Success',
                        confirmButtonText: 'Cool'
                      })  
                }
            
        })

    }
  return (
    <div  className="bg-[#F4F3F0] p-36">
      <h1 className="text-4xl text-center font-extrabold font-serif">Add a Coffee</h1>
      <form onSubmit={handleAddCoffee}>
        <div className="md:flex gap-5 justify-center">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Coffee Name</span>
          </label>
          <label className="input-group">
            <span>Name</span>
            <input
              type="text"
              placeholder="Cappuccino" name="name"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Available Coffee</span>
          </label>
          <label className="input-group">
            <span>Quantity</span>
            <input
              type="text"
              placeholder="32" name="quantity"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        </div>
        <div className="md:flex gap-5 justify-center">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <label className="input-group">
            <span>Name</span>
            <input
              type="text"
              placeholder="Nestly" name="supplier"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <label className="input-group">
            <span>Taste</span>
            <input
              type="text"
              placeholder="Bitter" name="taste"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        </div>
        <div className="md:flex gap-5 justify-center">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <label className="input-group">
            <span>Category</span>
            <input
              type="text"
              placeholder="Black Coffee" name="category"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <label className="input-group">
            <span>Details</span>
            <input
              type="text"
              placeholder="A cappuccino is an espresso-based coffee." name="details"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <label className="input-group">
            <span>Photo</span>
            <input
              type="text"
              placeholder="Photo URL" name="photo"
              className="input input-bordered w-full"
            /> 
          </label>
          <input
              type="submit"
              value="Add Coffee" name="submit"
              className="input input-bordered text-gray-400 mt-6 btn btn-block"
            />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
