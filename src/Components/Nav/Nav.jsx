import { Navbar, Text } from "@nextui-org/react";
import { Layout } from "./Layout.jsx";
import { AcmeLogo } from "./AcmeLogo.jsx";

export default function App() {

  return (
    <>
 <Layout>
      <Navbar isCompact isBordered variant="sticky">
        <Navbar.Brand>
          <img src="https://play-lh.googleusercontent.com/mAnRtv6sEkY-H1oL1lf2My-lZxGzGGrwkgU1oUE2xYzP7SSW-5KYWfNXGqKSGuK2De4" height={30} alt="" />
          <Text b color="inherit" hideIn="xs">
            FireDiamons
          </Text>
        </Navbar.Brand>
       
        <Navbar.Content>

        </Navbar.Content>
      </Navbar>
    </Layout>
    
    </>
   
  )
}