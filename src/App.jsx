import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import CustomerTickets from "./components/CustomerTickets";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const fetchTicketData = async () => {
  const res = await fetch("data.json");
  return res.json();
};

function App() {
  const [count, setCount] = useState(0);
  const [resolveCount, setResolveCount] = useState(0);
  const [addTask, setAddTask] = useState([]);
  const ticketPromise = fetchTicketData();

  console.log(addTask);
  return (
    <div className="max-w-300 mx-auto">
      {" "}
      <NavBar></NavBar>
      <Banner count={count} resolveCount={resolveCount}></Banner>
      <Suspense
        fallback={
          <span className="loading loading-spinner text-primary"></span>
        }
      >
        <CustomerTickets
          resolveCount={resolveCount}
          setResolveCount={setResolveCount}
          addTask={addTask}
          setAddTask={setAddTask}
          ticketPromise={ticketPromise}
          setCount={setCount}
          count={count}
        ></CustomerTickets>
      </Suspense>
      <Footer></Footer>
    </div>
  );
}

export default App;
