import Swal from "sweetalert2";

const addHandler = (stName, stReg, classValue) => {
  const value = classValue;

  fetch(`https://sjmmhs-server-techasync.vercel.app/student-info/${value}`, {
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
      } else {
        console.error("Error adding item");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export default addHandler;
