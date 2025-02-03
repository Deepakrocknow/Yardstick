export interface Task {
    _id: string;
    title: string;
    description: string;
    dueDate: string;
    completed: boolean;
    createdAt: string;
    __v?: number;
  }
  
  export interface CreateTaskInput {
    title: string;
    description: string;
    dueDate: string;
  }
  
  export interface UpdateTaskInput {
    title?: string;
    description?: string;
    dueDate?: string;
    completed?: boolean;
  }