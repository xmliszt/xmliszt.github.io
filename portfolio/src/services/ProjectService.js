import { db } from "../firebase";
import { collection, getDocs } from "@firebase/firestore";

export async function getProjects() {
  return new Promise((res, rej) => {
    const uid = localStorage.getItem("uid");
    if (uid !== null) {
      getDocs(collection(db, "v2", uid, "projects"))
        .then((snapshot) => {
          const result = [];
          snapshot.docs.map((doc) => {
            result.push(doc.data());
          });
          res(result);
        })
        .catch((err) => {
          rej(err);
        });
    } else {
      rej({
        message: "No user found!",
      });
    }
  });
}
