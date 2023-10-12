import React from 'react'

export default function CompA(props) {
  return (
    <>
    <table border={1}>
      <tr>
        <td>Name</td>
        <td>Roll No</td>
      </tr>
    {
        props.data.map((e,i)=>{
            return(
                <>
                <tr>
                <td><h1>{e.name}</h1></td>
                <td><h1>{e.roll}</h1></td>
                </tr>
                </>
            )
        })
    }
    </table>
    </>
  )
}
