import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, deletUser } from './store/reducers/user.slice'
import { Button, Tbody, Td, Tr, Box, Table, Th, Thead, Heading, Flex } from '@chakra-ui/react'
import { BsFillPersonPlusFill } from "react-icons/bs";
import { AiFillDelete } from 'react-icons/ai'

const App = () => {
  const { users } = useSelector(state => state.user)
  const dispatch = useDispatch()

  console.log(users.slice(0, 5));

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        dispatch(fetchUsers(data))
      })
  }, [])

  return (
    <Box w={'80%'} mx={'auto'} my={'30px'} shadow={'2xl'} rounded={'2xl'}>
      <Box bg={'gray.700'} borderTopRadius={'8px'}>
        <Flex w={'90%'} mx={'auto'} py={'20px'} justifyContent={'space-between'} alignItems={'center'}>
          <Heading fontSize={"24px"} color={'white'}>STUDENTS</Heading>
          <Button colorScheme='green' rightIcon={<BsFillPersonPlusFill />}>ADD STUDENTS</Button>
        </Flex>
      </Box>
      <Box p={'30px'}>
        <Table variant={"simple"}>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>UserName</Th>
              <Th>Email</Th>
              <Th>Phone Number</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users?.slice(0, 5).map((item, index) => (
              <Tr key={item.id}>
                <Td>{index}</Td>
                <Td>{item.username}</Td>
                <Td>{item.email}</Td>
                <Td>{item.phone}</Td>
                <Td><Button colorScheme='red' onClick={() => dispatch(deletUser(item.id))} rightIcon={<AiFillDelete />}>Delete</Button></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
}

export default App