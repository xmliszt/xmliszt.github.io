import { db, resourceId } from "../firebase";
import { collection, getDocs } from "@firebase/firestore";

export async function getSkills() {
  return new Promise((res, rej) => {
    getDocs(collection(db, "v2", resourceId, "skills"))
      .then((snapshot) => {
        const result = [];
        snapshot.docs.map((doc) => {
          result.push(doc.data());
        });
        result.sort((a, b) => a.priority - b.priority);
        res(result);
      })
      .catch((err) => {
        rej(err);
      });
  });
}
