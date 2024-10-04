import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

const customStyles = {
    table: {
        style: {
            borderTopRightRadius: '10px',
            borderTopLeftRadius: '10px',
            overflow: 'hidden',
        },
    },
    headRow: {
        style: {
            backgroundColor: '#f3f3f3',
            color: '#333333',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    headCells: {
        style: {
            fontSize: '16px',
            fontWeight: '600',
            textTransform: 'uppercase',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    cells: {
        style: {
            fontSize: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    pagination: {
        style: {
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            backgroundColor: '#f3f3f3',
            padding: '10px',
        },
    },
};

const SelectingRowsInTable = () => {

    const column = [
        {
            name: "ID",
            selector: row => row.id,
            sortable: true
        },
        {
            name: "Name",
            selector: row => row.name,
            sortable: true
        },
        {
            name: "Email",
            selector: row => row.email
        },
        {
            name: "City",
            selector: row => row.address.city
        },
        {
            name: 'Actions',
            cell: row => (
                <div>
                    <button onClick={() => handleEdit(row.id)}>Edit</button>
                    <button onClick={() => handleDelete(row.id)}>Delete</button>
                </div>
            ),
        },
    ]

    const handleEdit = (id) => {
        console.log(`Edit item with id: ${id}`);
        // Implement your edit logic here
      };
      
      const handleDelete = (id) => {
        console.log(`Delete item with id: ${id}`);
        // Implement your delete logic here
      };

    useEffect(() => {
        const fetData = async () => {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(res => {
                    setRecords(res.data)
                    setFilterRecords(res.data)
                })
                .catch(err => console.log(err));
        }
        fetData();
    }, [])

    const [records, setRecords] = useState([])
    const [filterRecords, setFilterRecords] = useState([])

    const handleFilter = (event) => {
        const newData = filterRecords.filter(row => row.name.toLowerCase().includes(event.target.value.toLowerCase()))
        setRecords(newData);
    }
    return (
        <div className='py-12 px-[10%] bg-[gray]'>
            <div className='flex justify-end'>
                <input type="text" placeholder='Search...' onChange={handleFilter} className='py-1 px-2' />
            </div>
            <DataTable
                columns={column}
                data={records}
                customStyles={customStyles}
                pagination
                selectableRows
            >
            </DataTable>
        </div>
    )
}

export default SelectingRowsInTable