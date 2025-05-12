import { useLoaderData } from "react-router-dom";
const ServiceDetails = () => {
  const serviceData = useLoaderData();

  const {
    service: serviceName,
    image,
    price,
    area,
    description,
    provider_img,
    provider_name,
  } = serviceData.data || {};

  return (
    <div>
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
            <button class="bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 rounded shadow">
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
            <p class="text-sm text-gray-600"><span className="font-bold">Location:</span> {area}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
