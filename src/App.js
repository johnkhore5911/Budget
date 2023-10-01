import "./App.css";
import AddExpenseForm from "./components/AddExpenseForm";
import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import Remaining from "./components/Remaining";
import { AppProvider } from "./context/AppContext";
import Monthly from "./components/Monthly";
import logo from '../src/images/Group 2.svg';
import house from './images/house.png';
import pic from './images/pic2.png'
function App() {
  return (
    <AppProvider>
        <div className="container ">
          <div className="inside_container mt-8">
            <img src={logo} ></img>
            <div className="flex gap-[200px]">
              <div className="mt-5">
                <p className="welcome">Welcome, <b className="bold">Johnny</b></p>
                <p className="date mt-1">01 Oct 2023</p>
                {/* <p className="mt-4 welcome ">Enter Budget</p> */}
                <Monthly/>
                <p className="Balance_Info mt-2">MONTHLY INCOME</p>
                <Budget/> 
                <p className="Balance_Info mt-2">REMAINING BALANCE</p>
                <Remaining/>
                <p className="Balance_Info mt-2">TOTAL EXPENSE</p>
                <ExpenseTotal/>

                {/* <h3>Add Expense</h3> */}
                <AddExpenseForm/>
              </div>
              <div>
                <img src={house}></img>
              </div>
            </div>
            <div>
              <h4 className="list_of_expenses mt-2">LIST OF MOVEMENTS</h4>
              <div className="flex mt-1 ">
                <div className="line"></div>
                <div className="line2"></div>
              </div>
              {/* <h3>Expenses</h3> */}
              <div className="flex gap-[200px] mb-2">
                <div><ExpenseList/></div>
                <div><img src={pic}></img></div>
              </div>
            </div>
          </div>
          
        </div>
    </AppProvider>
  );
}

export default App;
