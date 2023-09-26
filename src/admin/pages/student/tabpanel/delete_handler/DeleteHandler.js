import Swal from "sweetalert2";

const onDeleteHandler = (_id, value, refetch) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(
        `https://sjmmhs-server-techasync.vercel.app/student-info/${value}/${_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          if (response.status === 200) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            refetch();
          } else if (response.status === 404) {
            console.error("Item not found");
          } else {
            console.error("Error deleting item");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  });
};

export default onDeleteHandler;
