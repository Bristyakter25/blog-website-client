import Swal from "sweetalert2";

const TryNewUi = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    Swal.fire({
      title: "Success!",
      text: "Thank you for subscribing to our newsletter!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="bg-[#DAD2FF] mx-2 dark:bg-purple-700 p-10 rounded-2xl my-5">
      <h2 className="text-center font-bold text-3xl mt-5 mb-8">Newsletter Section</h2>
      
      <div className="flex justify-center">
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col md:flex-row items-center bg-white  p-6 rounded-lg shadow-lg w-full max-w-3xl gap-4"
        >
          <label htmlFor="email" className="text-lg font-medium text-gray-700">
            Sign up for our newsletter
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
            className="input dark:text-black input-bordered w-full md:w-80 px-4 py-3 text-lg bg-gray-100 focus:ring-2 focus:ring-purple-500 rounded-lg"
          />
          <button type="submit" className="btn bg-[#7E60BF] text-white hover:bg-purple-600 px-6 py-3 rounded-lg">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default TryNewUi;
