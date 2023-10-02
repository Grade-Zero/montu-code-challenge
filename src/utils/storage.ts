import { Gif } from "./types";

enum ITEM_KEY {
  TRENDING_KEY = 'trending',
  OFFSET_KEY = 'offset',
}

const getItemFromStorage = (item: ITEM_KEY) => {
  const trending = localStorage.getItem(item);
  if (trending !== null) {
    return JSON.parse(trending);
  }

  return null;
};

const saveItemInStorage = (item: ITEM_KEY, trending: Gif[] | number) => {
  localStorage.setItem(item, JSON.stringify(trending));
}

const checkItemInStorage = (item: ITEM_KEY) => {
  return localStorage.getItem(item) !== null ? true : false;
}

export {
  getItemFromStorage,
  saveItemInStorage,
  checkItemInStorage,
  ITEM_KEY,
};