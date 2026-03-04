import { Suspense } from "react";
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
  const ticketPromise = fetchTicketData();
  return (
    <div className="max-w-300 mx-auto">
      {" "}
      <NavBar></NavBar>
      <Banner></Banner>
      <Suspense
        fallback={
          <span className="loading loading-spinner text-primary"></span>
        }
      >
        <CustomerTickets ticketPromise={ticketPromise}></CustomerTickets>
      </Suspense>
      <Footer></Footer>
    </div>
  );
}

export default App;
