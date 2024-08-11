
import React from 'react'
import Filters from '../../Componenets/Filters'

function Employee() {

  const empDetail = async () => {
    let data = {
      userName: "Zahoor",
      password: 0
    }
    try {
      let res = await getEmployeDetail(data)
      setState(res)
    } catch (error) {

    }
  }

  return (
    <Filters />
  )

}

export default Employee
