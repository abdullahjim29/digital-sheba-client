import toast from "react-hot-toast";
import UseAuth from "../hooks/useAuth";
import axiosInstance from "../hooks/AxiosInstance";

const AddService = () => {
  const { user } = UseAuth();

  // add service form
  const handleAddService = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.imageUrl.value;
    const service = form.serviceName.value;
    const price = parseFloat(form.price.value);
    const area = form.serviceArea.value;
    const description = form.description.value;

    const newService = {
      image,
      service,
      price,
      area,
      description,
      provider_img: user?.photoURL,
      provider_name: user?.displayName,
      provider_email: user?.email,
    };

    // post service
    axiosInstance.post(`/add-service`, newService).then((res) => {
      if (res.data.acknowledged) {
        toast.success("Service added succsessfully!");
      }
    });
  };

  return (
    <div className="flex flex-col md:flex-row my-10 w-11/12 mx-auto">
      <div className="bg-[#FFEDEB] w-full lg:w-1/2 p-10 space-y-4">
        <h2 className="text-center text-2xl lg:text-5xl font-bold">
          Add Your Service to DigitalSheba
        </h2>
        <p>
          Share your skills with a growing community! Whether you're offering
          design, marketing, development, or consulting services, filling out
          this form will help users find and book what you do best. Be sure to
          provide clear information and an engaging description—your service
          deserves the spotlight.
        </p>
      </div>

      <div className="w-full lg:w-1/2">
        <form
          onSubmit={handleAddService}
          className="bg-base-100 p-10 space-y-5 shadow-md"
        >
          {/* image url */}
          <div className="space-y-2">
            <label className="block">Image URL</label>
            <input
              type="url"
              name="imageUrl"
              id=""
              placeholder="Image URL"
              className="border w-full p-2 rounded-md dark:border-gray-300"
            />
          </div>
          {/* service name */}
          <div className="space-y-2">
            <label className="block">Service Name</label>
            <input
              type="text"
              name="serviceName"
              id=""
              placeholder="Service Name"
              className="border w-full p-2 rounded-md dark:border-gray-300"
            />
          </div>
          {/* price */}
          <div className="space-y-2">
            <label className="block">Price</label>
            <input
              type="text"
              name="price"
              id=""
              placeholder="Price"
              className="border w-full p-2 rounded-md dark:border-gray-300"
            />
          </div>
          {/* Service Area*/}
          <div className="space-y-2">
            <label className="block">Service Area</label>
            <input
              type="text"
              name="serviceArea"
              id=""
              placeholder="Service Area"
              className="border w-full p-2 rounded-md dark:border-gray-300"
            />
          </div>
          {/* Description */}
          <div className="space-y-2">
            <label className="block">Description</label>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="5"
              className="border rounded-md w-full dark:border-gray-300 p-2"
            ></textarea>
          </div>
          <div>
            <button className="btn bg-[#FF6B6B] text-white hover:bg-[#E63946] cursor-pointer w-full text-lg">
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
