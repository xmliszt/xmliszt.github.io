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
        result.sort((a, b) => {
          const hotDiff = Number(b.hot ?? false) - Number(a.hot ?? false);
          if (hotDiff === 0) {
            return (a.priority ?? 999) - (b.priority ?? 999);
          }
          return hotDiff;
        });
        res(result);
      })
      .catch((err) => {
        rej(err);
      });
  });
}
