import react from "react";
import "./style.css";

interface MainProps {
  children?: React.ReactNode;
}


const Main = ({children}: MainProps) => {
return (
    <main className="main-container" >
        {children}
    </main>

)

}
export default Main;