import Swal from "sweetalert2";

const addHandler = (e, stName, stReg, classValue) => {
  e.preventDefault();
  const value = classValue;

  fetch(`http://localhost:5000/student-info/${value}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: stName, reg: stReg }),
  })
    .then((response) => {
      if (response.status === 200) {
        console.log(response);
        Swal.fire("Student Added!", "Your file has been Updated.", "success");
        refetch();
      } else {
        console.error("Error adding item");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export default addHandler;