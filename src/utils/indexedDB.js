// src/utils/indexedDB.js
import { openDB } from "idb";

const DB_NAME = "ecommerce-db";
const STORE_NAME = "products";

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME, { keyPath: "id" });
    },
  });
};

export const saveProducts = async (products) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  products.forEach((product) => {
    tx.store.put(product);
  });
  await tx.done;
};

export const getProducts = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};
