import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50">
            <div className="p-6">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Create New Task
              </h2>
              <TaskForm />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50">
            <div className="p-6">
              <h2 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Your Tasks
              </h2>
              <Suspense fallback={
                <div className="animate-pulse space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-24 bg-gray-100 rounded-lg"></div>
                  ))}
                </div>
              }>
                <TaskList />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}