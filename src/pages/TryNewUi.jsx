
import { Banner, BannerCollapseButton, Button, Label, TextInput } from "flowbite-react";
import Swal from "sweetalert2";


const TryNewUi = () => {
  const handleSubmit = ()=>{
    Swal.fire({
                        title: "Success!",
                        text: "Thank you for subscribing to our newsletter!",
                        icon: "success",
                        confirmButtonText: "OK",
                      });
  }
    return (
        <div>
          <h2 className="text-center font-bold text-3xl mt-10">News Letter Section</h2>
          <Banner>
      <div className="flex w-full items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700 my-5">
     
        <div className="mx-auto flex w-full shrink-0 items-center sm:w-auto">
          
          <form action="#" className="flex w-full flex-col items-center md:flex-row md:gap-x-3">
            <Label
              htmlFor="email"
              className="mb-2 mr-auto shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:m-0 md:mb-0"
            >
              Sign up for our newsletter
            </Label>
            <TextInput id="email" placeholder="Enter your email" required type="email" />
            <Button onClick={handleSubmit} type="submit" className="bg-teal-500 p-3  text-white rounded-lg">Subscribe</Button>
          </form>
        </div>
        <BannerCollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
        
        </BannerCollapseButton>
      </div>
    </Banner>
        </div>
    );
};

export default TryNewUi;