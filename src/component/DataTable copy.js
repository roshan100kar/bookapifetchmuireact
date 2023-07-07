import React, {useState, useEffect} from 'react'
import '../App.css'
import { TableContainer,Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const columns = [
    {field: 'id', headerName: 'ID'},
    {field: 'title', headerName: 'Title', width: 300},
    {field: 'category', headerName: 'Category', width: 600},
    {field: 'notes', headerName: 'Notes', width: 300 },
]

const DataTable = () => {
    const [tableData, setTableData] = useState([])
    useEffect(()=> {
        fetch("https://api.gyanibooks.com/library/get_dummy_notes/")
        .then((data)=> data.json())
        .then((data)=> setTableData(data))
    })
  return (
   <div>
        <TableContainer component={Paper}>
            <Table className='table-style' sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>{columns?.map((items) => {
                        return (
                            <>
                                <TableCell align="center">{items.headerName}</TableCell>
                            </>
                        )
                })}
                </TableRow>
                </TableHead>
                <TableBody>
                {tableData.map((row) => (
                    <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0} }}
                    >
                    {/* <TableCell component="th" scope="row">
                        {tableData.name}
                    </TableCell> */}
                    <TableCell align="left">{row.id}</TableCell>
                    <TableCell align="left">{row.title}</TableCell>
                    <TableCell align="left">{row.category}</TableCell>
                    <TableCell align="left">{JSON.parse(row?.notes)?.content?.map((item2, indx) => {
                    return (
                        <>
                     
                        {item2?.content?.map((item3, indx) => {
                            return (
                            <>
                                {item3?.content.map((item4) => {
                                if (item4?.content) {
                                    return(
                                    <>{
                                        item4?.content.map((item5) => {
                                        return (<p>{item5?.text}</p>)
                                        })
                                    }</>
                                    ) 
                                }
                                })}
                            </>
                            )
                        })}
                        </>
                    )
                    })}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
   </div>
  )
}

export default DataTable