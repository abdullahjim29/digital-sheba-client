import { useEffect, useRef, useState } from "react";
import useAuth from "../hooks/useAuth";
import ManageServicesCard from "../components/ManageServicesCard";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import noDataLottie from "../assets/lottieFiles/noDataLottie.json";
import Lottie from "lottie-react";
import { ImCross } from "react-icons/im";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useTheme from "../hooks/useTheme";

const ManageServices = () => {
  const { user } = useAuth();
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);
  const modalRef = useRef(null);
  const axiosInstance = useAxiosSecure();
  const theme = useTheme();

  useEffect(() => {
    axiosInstance(`/manage-services/?email=${user?.email}`)
      .then((res) => setServices(res.data))
      .catch(() => {});
  }, [user?.email]);

  useEffect(() => {
    if (editingService && modalRef.current) {
      modalRef.current.showModal();
    }
  }, [editingService]);

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
    setEditingService(null);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3CA200",
      cancelButtonColor: "#000000",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axiosInstance.delete(`/services/${id}`).then(() => {
            toast.success("Service deleted!");
            setServices((prev) => prev.filter((service) => service._id !== id));
          });
        }
      })
      .catch((err) => toast.error(err.message));
  };

  const handleEdit = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const image = form.serviceImage.value;
    const service = form.serviceName.value;
    const price = form.servicePrice.value;
    const area = form.serviceArea.value;
    const description = form.serviceDescription.value;

    const updatedService = { image, service, price, area, description };

    axiosInstance
      .patch(`/service/${id}`, updatedService)
      .then(() => {
        toast.success("Service updated!");
        setServices((prev) =>
          prev.map((service) =>
            service._id === id ? { ...service, ...updatedService } : service
          )
        );
        closeModal();
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="mb-32 mt-10">
      <div className="divider"></div>
      <Helmet>
        <title>Manage-Service</title>
      </Helmet>
      <h1 className="text-2xl md:text-3xl font-medium mb-2 text-center mt-10 font-p">
        Manage Your Services
      </h1>
      <p className="text-sm text-gray-500 mb-6 text-center font-o font-[300]">
        Here you can edit or delete the services you’ve added.
      </p>

      {services.length === 0 && (
        <div className="my-10 flex flex-col items-center">
          <Lottie className="w-2/4" animationData={noDataLottie}></Lottie>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service) => (
          <ManageServicesCard
            key={service._id}
            service={service}
            handleDelete={handleDelete}
            setEditingService={setEditingService}
          />
        ))}
      </div>

      {/* Modal */}
      <dialog id="my_modal_1" className="modal" ref={modalRef}>
        {editingService && (
          <div className={`modal-box w-full max-w-4xl relative ${theme === 'light' ? 'grad text-black' : 'grad2'}`}>
            <button
              className={`absolute right-4 top-4 ${theme === 'light' ? 'text-[#000000c7] hover:text-[#000000]' : 'text-white hover:text-[#ffffffaf]'}`}
              onClick={closeModal}
            >
              <ImCross className="cursor-pointer" size={20} />
            </button>

            <h2 className="text-2xl text-center font-medium mb-8 font-p">
              Update Your Service
            </h2>

            <form
              onSubmit={(e) => handleEdit(e, editingService._id)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium font-p">
                  Service Image URL
                </label>
                <input
                  type="url"
                  defaultValue={editingService.image}
                  name="serviceImage"
                  className={`w-full rounded p-2 outline-[#3CA200] placeholder:font-[200] ${theme === 'light' ? 'bg-white text-black border border-white hover:border hover:border-[#3CA200]' : 'bg-[#1D232A] border border-[#26313D] hover:border hover:border-[#1D232A]'}`}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium font-p">
                  Service Name
                </label>
                <input
                  type="text"
                  defaultValue={editingService.service}
                  name="serviceName"
                  className={`w-full rounded p-2 outline-[#3CA200] placeholder:font-[200] ${theme === 'light' ? 'bg-white text-black border border-white hover:border hover:border-[#3CA200]' : 'bg-[#1D232A] border border-[#26313D] hover:border hover:border-[#1D232A]'}`}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium font-p">Price</label>
                <input
                  type="text"
                  defaultValue={editingService.price}
                  name="servicePrice"
                  className={`w-full rounded p-2 outline-[#3CA200] placeholder:font-[200] ${theme === 'light' ? 'bg-white text-black border border-white hover:border hover:border-[#3CA200]' : 'bg-[#1D232A] border border-[#26313D] hover:border hover:border-[#1D232A]'}`}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-1 font-medium font-p">
                  Service Area
                </label>
                <input
                  type="text"
                  defaultValue={editingService.area}
                  name="serviceArea"
                  className={`w-full rounded p-2 outline-[#3CA200] placeholder:font-[200] ${theme === 'light' ? 'bg-white text-black border border-white hover:border hover:border-[#3CA200]' : 'bg-[#1D232A] border border-[#26313D] hover:border hover:border-[#1D232A]'}`}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-1 font-medium font-p">
                  Description
                </label>
                <textarea
                  name="serviceDescription"
                  defaultValue={editingService.description}
                  rows="3"
                  className={`w-full rounded p-2 outline-[#3CA200] placeholder:font-[200] ${theme === 'light' ? 'bg-white text-black border border-white hover:border hover:border-[#3CA200]' : 'bg-[#1D232A] border border-[#26313D] hover:border hover:border-[#1D232A]'}`}
                />
              </div>

              <div className="md:col-span-2 text-left">
                <button className="bg-black text-white px-6 py-2 rounded hover:bg-[#000000d2] cursor-pointer font-p">
                  Update
                </button>
              </div>
            </form>
          </div>
        )}
      </dialog>
    </div>
  );
};

export default ManageServices;
