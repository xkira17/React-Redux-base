import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, deletUser } from './store/reducers/user.slice'
import { Button, Tbody, Td, Tr, Box, Table, Th, Thead, Heading, Flex } from '@chakra-ui/react'

const App = () => {
  const { users } = useSelector(state => state.user)
  const dispatch = useDispatch()

  console.log(users);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        dispatch(fetchUsers(data))
      })
  }, [])

  return (
    <Box w={'80%'} mx={'auto'} my={'30px'} shadow={'dark-lg'} rounded={'2xl'}>
      <Box bg={'gray.700'}>
        <Flex w={'90%'} mx={'auto'} py={'20px'} justifyContent={'space-between'} alignItems={'center'}>
          <Heading fontSize={"24px"} color={'white'}>Students</Heading>
          <Button colorScheme='green'>Add student</Button>
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
            {users?.map((item) => (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td>{item.username}</Td>
                <Td>{item.email}</Td>
                <Td>{item.phone}</Td>
                <Td><Button colorScheme='red' onClick={() => dispatch(deletUser(item.id))}>Delete</Button></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
}

export default App