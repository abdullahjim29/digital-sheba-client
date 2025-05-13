const ManageServicesCard = ({ service, handleDelete, setEditingService }) => {
  const {
    image,
    service: serviceName,
    description,
    price,
    _id,
  } = service;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 w-full">
      <div className="bg-white rounded-lg shadow p-4">
        <img src={image} alt="Service" className="w-full object-cover rounded-md mb-3" />
        <h2 className="text-lg font-semibold">{serviceName}</h2>
        <p className="text-sm text-gray-600 mb-2">{description.slice(0, 50)}</p>
        <p className="font-medium text-rose-600 mb-4">${price}</p>

        <div className="flex justify-end gap-3">
          <button
            onClick={() => setEditingService(service)}
            className="px-4 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 cursor-pointer"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="px-4 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageServicesCard;
