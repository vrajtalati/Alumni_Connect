import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Flex
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import BackgrndImage from "../backgrnd.jpg";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <div style={{ margin:"5%", width:'100%', height:'100%', display:'flex', flexDirection:'row'}} >

      <div style={{ width:'50%'}}>
      <Container maxW="xl"  centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        opacity={0.9}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Flex  fontSize="4xl"  d={Flex}
        justifyContent="center"  alignItems="center"   fontFamily="Work sans">
          Alumni-Connect
        </Flex>
      </Box>
      <Box bg="white"
       w="100%" p={4}
        
        borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
      </div>
      <div style={{ display:"flex", justifyItems:"center",alignItems:"center",  width:'50%'}} > <img src={BackgrndImage}/></div>
    
    </div>
  );
}

export default Homepage;
