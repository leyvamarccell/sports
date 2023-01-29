import { User } from "@nextui-org/react";
import { userEmail, userName } from "./Auth";
import { userPhoto } from "./Auth";

export default function Users() {
  return (
    <>
 <User
      src={userPhoto}
      name={userName}
      description={userEmail}
    />
    </>
   
  );
}
