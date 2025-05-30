import { useLoaderData } from "react-router-dom";
import { ImCross } from "react-icons/im";
import UseAuth from "../hooks/useAuth";
import axiosInstance from "../hooks/AxiosInstance";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const ServiceDetails = () => {
  const serviceData = useLoaderData();
  const { user } = UseAuth();

  const {
    service: serviceName,
    image,
    price,
    area,
    description,
    provider_img,
    provider_name,
    provider_email,
    _id,
  } = serviceData.data || {};

  // handle Purchasing
  const handlePurchase = (e) => {
    e.preventDefault();

    const form = e.target;
    const serviceId = _id;
    const service_Name = serviceName;
    const serviceImage = image;
    const userName = user?.displayName;
    const userEmail = user?.email;
    const date = form.date.value;
    const servicePrice = price;
    const providerName = provider_name;
    const providerEmail = provider_email;
    const instruction = form.instruction.value;

    const bookingInfo = {
      serviceId,
      service_Name,
      serviceImage,
      userName,
      userEmail,
      date,
      servicePrice,
      providerName,
      providerEmail,
      instruction,
      serviceStatus: "pending",
    };


    // I will implement this after getting assignment mark

    // if (providerEmail === userEmail) {
    //   return toast("You can't book your own service!", {
    //     icon: "😄",
    //     position: 'left top',
    //   });
    // }

    axiosInstance
      .post("/services/booking", bookingInfo)
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Booking succsessfully!");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Details-of {serviceName}</title>
      </Helmet>
      <div class="max-w-5xl mx-auto p-6 grid md:grid-cols-3 gap-6 my-10">
        {/* <!-- Left Side: Service Details --> */}
        <div class="md:col-span-2 space-y-4 bg-white p-8 rounded-lg shadow-md shadow-orange-100">
          <img
            src={image}
            alt="Service"
            class="w-full object-cover rounded-lg shadow"
          />
          <h2 class="text-2xl font-bold text-gray-800">{serviceName}</h2>
          <p class="text-sm text-gray-600">{description}</p>
          <div class="flex items-center gap-4 pt-4">
            <img
              src={provider_img}
              alt="Provider"
              class="w-10 h-10 rounded-full"
            />
            <span class="font-medium">{provider_name}</span>
          </div>
          <div class="text-xl font-semibold">Price: ${price}</div>
          <div class="mt-6">
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
              class="bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 rounded shadow cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* <!-- Right Side: Service Provider Info --> */}
        <div class="bg-[#FDF2EC] p-4 rounded-lg shadow space-y-4">
          <h3 class="text-lg font-semibold text-center">Service Provider</h3>
          <img src={provider_img} class="w-24 h-24 rounded-full mx-auto" />
          <div class="text-center">
            <p class="font-bold">{provider_name}</p>
            <p class="text-sm text-gray-600">
              <span className="font-bold">Area:</span> {area}
            </p>
          </div>
        </div>
      </div>

      {/* modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-full max-w-4xl relative">
          {/* action */}
          <div className="modal-action absolute right-6 -top-5">
            <form method="dialog">
              <button className="rounded-full text-red-500 border p-2 cursor-pointer hover:text-red-700">
                <ImCross />
              </button>
            </form>
          </div>

          {/* booking form */}
          <div className="bg-white rounded-lg w-full max-w-4xl mx-auto">
            <h2 className="text-2xl text-center font-semibold mb-8">
              Service Booking Form
            </h2>

            <form
              onSubmit={handlePurchase}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* Column 1 */}

              {/* service id */}
              <div>
                <label className="block mb-1 font-medium">Service ID</label>
                <input
                  type="text"
                  name="service_id"
                  defaultValue={_id}
                  disabled={true}
                  className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2"
                />
              </div>

              {/* service name */}
              <div>
                <label className="block mb-1 font-medium">Service Name</label>
                <input
                  type="text"
                  defaultValue={serviceName}
                  name="serviceName"
                  disabled={true}
                  className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2"
                />
              </div>

              {/* Column 2 */}

              {/* service image */}
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium">
                  Service Image URL
                </label>
                <input
                  type="url"
                  defaultValue={image}
                  name="serviceImage"
                  disabled={true}
                  className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2"
                />
              </div>

              {/* Column 3 */}

              {/* user name */}
              <div>
                <label className="block mb-1 font-medium">User Name</label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  name="userName"
                  disabled={true}
                  className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2"
                />
              </div>

              {/* user email */}
              <div>
                <label className="block mb-1 font-medium">User Email</label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  name="userEmail"
                  disabled={true}
                  className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2"
                />
              </div>

              {/* Column 4 */}

              {/* date */}
              <div>
                <label className="block mb-1 font-medium">
                  Service Taking Date
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              {/* price */}
              <div>
                <label className="block mb-1 font-medium">Price</label>
                <input
                  type="text"
                  defaultValue={price}
                  name="servicePrice"
                  disabled={true}
                  className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2"
                />
              </div>

              {/* Column 5 */}

              {/* provider name */}
              <div>
                <label className="block mb-1 font-medium">Provider Name</label>
                <input
                  type="text"
                  defaultValue={provider_name}
                  name="providerName"
                  disabled={true}
                  className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2"
                />
              </div>

              {/* provider email */}
              <div>
                <label className="block mb-1 font-medium">Provider Email</label>
                <input
                  type="email"
                  defaultValue={provider_email}
                  name="providerEmail"
                  disabled={true}
                  className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2"
                />
              </div>

              {/* Column 6 */}

              {/* special instruction */}
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium">
                  Special Instructions
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  rows="3"
                  name="instruction"
                  required
                  placeholder="Address, area, service notes..."
                ></textarea>
              </div>

              {/* Button */}
              <div className="md:col-span-2 text-left">
                <button
                  type="submit"
                  className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded shadow cursor-pointer"
                >
                  Purchase
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ServiceDetails;
