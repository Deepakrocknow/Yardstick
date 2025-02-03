'use server'

import { revalidatePath } from 'next/cache';
import connectDB from './mongodb';
import Task from '../models/Task';
import { CreateTaskInput, UpdateTaskInput, Task as TaskType } from '../../types/task';


export async function getTasks() {
  try {
    await connectDB();
    const tasks = await Task.find({}).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(tasks));
  } catch (error) {
    throw new Error('Failed to fetch tasks');
  }
}

export async function createTask(formData: FormData) {
  try {
    await connectDB();
    const task = await Task.create({
      title: formData.get('title'),
      description: formData.get('description'),
      dueDate: new Date(formData.get('dueDate') as string),
    });
    revalidatePath('/');
    return JSON.parse(JSON.stringify(task));
  } catch (error) {
    throw new Error('Failed to create task');
  }
}

export async function updateTask(id: string, data: any) {
  try {
    await connectDB();
    const task = await Task.findByIdAndUpdate(
      id, 
      {
        ...data,
        ...(data.dueDate && { dueDate: new Date(data.dueDate) })
      },
      { new: true }
    );
    revalidatePath('/');
    return JSON.parse(JSON.stringify(task));
  } catch (error) {
    throw new Error('Failed to update task');
  }
}

export async function deleteTask(id: string) {
  try {
    await connectDB();
    await Task.findByIdAndDelete(id);
    revalidatePath('/');
  } catch (error) {
    throw new Error('Failed to delete task');
  }
}