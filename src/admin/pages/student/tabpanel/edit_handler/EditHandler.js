import Swal from "sweetalert2";

const editHandler = (e, _id, value, refetch, stName, stReg) => {
  e.preventDefault();

  fetch(
    `https://sjmmhs-server-techasync.vercel.app/student-info/${value}/${_id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify({ name: stName, reg: stReg }),
    }
  )
    .then((response) => {
      if (response.status === 200) {
        console.log(response);
        Swal.fire("Updated!", "Your file has been Updated.", "success");
        refetch();
      } else if (response.status === 404) {
        console.error("Item not found");
      } else {
        console.error("Error updating item");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export default editHandler;
