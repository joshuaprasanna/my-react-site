import { useSelector } from "react-redux";

function Header()
{

      const selector=  useSelector(state=>state.counter );


    return (<><h1> APCFSS HEADER  </h1></>);


}
export default Header;