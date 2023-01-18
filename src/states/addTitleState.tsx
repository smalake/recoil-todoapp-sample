import { atom, selector } from "recoil";
import { Task } from "../types/Task";

// タスクの中身を保管
export const addTitleState = atom<Array<Task>>({
  key: "addTitleState",
  default: [],
});

// 保管されたタスク数
export const addTitleStateLength = selector<number>({
  key: "addTitleStateLength",
  get: ({ get }) => {
    const addTitleNumber: Array<Task> = get(addTitleState);
    return addTitleNumber?.length || 0;
  },
});
