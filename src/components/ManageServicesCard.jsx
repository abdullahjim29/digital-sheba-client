import useTheme from "../hooks/useTheme";

const ManageServicesCard = ({ service, handleDelete, setEditingService }) => {

  const { image, service: serviceName, description, price, _id } = service;
  const theme = useTheme();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 w-full">
      <div className={`rounded-lg shadow py-12 px-6 ${theme === 'light' ? 'bg-[#F4F6F0] text-black' : 'border border-gray-700 shadow-md text-white bg-[#1d252e]'}`}>
        <img
          src={image}
          alt="Service"
          className="w-full object-cover rounded-md mb-3"
        />
        <h2 className="text-lg font-semibold">{serviceName}</h2>
        <p className={`font-[300] font-o mb-2 text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>{description.slice(0, 50)}</p>
        <p className="font-medium font-o mb-4">${price}</p>

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
