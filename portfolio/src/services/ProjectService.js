import { db, resourceId } from "../firebase";
import { collection, getDocs } from "@firebase/firestore";

export async function getProjects() {
  return new Promise((res, rej) => {
    getDocs(collection(db, "v2", resourceId, "projects"))
      .then((snapshot) => {
        const result = [];
        snapshot.docs.map((doc) => {
          result.push(doc.data());
        });
        result.sort((a) => {
          if (a.hot || false) {
            return -1;
          }
        });
        res(result);
      })
      .catch((err) => {
        rej(err);
      });
  });
}
