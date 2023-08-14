import { db, resourceId } from "../firebase";
import { collection, getDocs } from "@firebase/firestore";

export async function getPackages() {
  return new Promise((res, rej) => {
    getDocs(collection(db, "v2", resourceId, "packages"))
      .then((snapshot) => {
        const result = [];
        snapshot.docs.map((doc) => {
          result.push(doc.data());
        });
        result.sort((a, b) => a.priority - b.priority);
        result.sort((a) => {
          if (a.hot || false) {
            return -1;
          }
        });
        console.log(result);
        res(result);
      })
      .catch((err) => {
        rej(err);
      });
  });
}
