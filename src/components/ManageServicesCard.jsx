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
      <div className="bg-[#F4F6F0] rounded-lg shadow py-12 px-6">
        <img src={image} alt="Service" className="w-full object-cover rounded-md mb-3" />
        <h2 className="text-lg font-semibold">{serviceName}</h2>
        <p className="text-sm text-gray-600 mb-2">{description.slice(0, 50)}</p>
        <p className="font-medium text-[#3CA200] font-o mb-4">${price}</p>

        <div className="flex justify-end gap-3">
          <button
            onClick={() => setEditingService(service)}
            className="px-4 py-1 bg-[#F2D701] text-black text-sm rounded hover:bg-[#fce856] cursor-pointer font-o"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="px-4 py-1 bg-black text-white text-sm rounded hover:bg-[#000000a4] cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageServicesCard;
