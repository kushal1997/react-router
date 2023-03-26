import { useNavigate,Outlet } from "react-router-dom"

export const Contact = () => {
  const navigate=useNavigate();
  const handleSubmit=()=>{
    navigate("/");
  }
  return (
    <>
      <div className="component">Contact</div>
      <Outlet/>
      <button onClick={handleSubmit}>Back To Home</button>
      
    </>
    
  )
}
