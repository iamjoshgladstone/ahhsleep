import { db } from "../firebase/config";
import { query, where, collection, getDocs } from "firebase/firestore";
import { ref } from "vue";

const getCollection = (tag) => {
  const targetWords = ref([]);
  let q;
  const colRef = collection(db, "words");

  if (tag === "all") {
    q = colRef;
  } else {
    q = query(colRef, where("tags", "array-contains", tag));
  }

  getDocs(q)
    .then((doc) => {
      doc.forEach((doc) => {
        targetWords.value.push(doc.data().fileURL);
      });
    })
    .catch((err) => {
      console.log(err);
    });
  return { targetWords };
};

export default getCollection;
