import { Dropdown } from "@nextui-org/react";
import { state } from "./Auth";

export default function Drop() {
  const menuItems = [
    { key: "new", name: "Cerrar Sesión" },
   
  ];

  return (
  <>
{state === true ?  <div className="drop">
    <Dropdown>
         <Dropdown.Button flat></Dropdown.Button>
         <Dropdown.Menu aria-label="Dynamic Actions" items={menuItems}>
           {(item) => (
             <Dropdown.Item
               key={item.key}
               color={item.key === "delete" ? "error" : "default"}
             >
               {item.name}
             </Dropdown.Item>
           )}
         </Dropdown.Menu>
       </Dropdown>
       </div> : ''}
  </>
  
  );
}
