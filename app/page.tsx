import Navbar from "@/components/Navbar"
import TodoApp from "@/components/TodoApp";

export default function Home() {
  return (
    <div className="container max-w-7xl m-auto px-4">
      <Navbar />
      <TodoApp />
    </div>
  );
}
