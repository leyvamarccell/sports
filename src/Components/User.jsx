import { User } from "@nextui-org/react";
import { userEmail, userName } from "./Auth";
import { userPhoto } from "./Auth";

export default function Users({image}) {
  return (
    <>
 <User
    
    src={image}
      
      
    />
    </>
   
  );
}
