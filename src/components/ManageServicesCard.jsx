const ManageServicesCard = ({ service }) => {
  const { image, service: serviceName, description, price } = service || {};
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 w-full">
      {/* Service Card */}
      <div className="bg-white rounded-lg shadow p-4">
        {/* Service Image */}
        <img
          src={image}
          alt="Service"
          className="w-full object-cover rounded-md mb-3"
        />

        {/* Service Info */}
        <h2 className="text-lg font-semibold">{serviceName}</h2>
        <p className="text-sm text-gray-600 mb-2">{description.slice(0, 50)}</p>
        <p className="font-medium text-rose-600 mb-4">${price}</p>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
            onClick={() => {
              // Handle edit action (open modal or navigate)
            }}
          >
            Edit
          </button>
          <button
            className="px-4 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
            onClick={() => {
              // Handle delete confirmation
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageServicesCard;
