export type Task = {
  id: string;
  name: string;
  done: boolean;
};

export type TasksState = {
  tasks: Task[];
};
