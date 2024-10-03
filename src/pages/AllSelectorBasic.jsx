import React, { useEffect, useState } from 'react'

const AllSelectorBasic = () => {
    const userData = [
        { name: "Jeevan" },
        { name: "Manish" },
        { name: "Prince" },
        { name: "Arti" },
        { name: "rahul" }];

    const [users, setUsers] = useState([])

    useEffect(() => {
        setUsers(userData);
    }, [])

    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === "allSelect") {
            let tempUser = users.map(user => { return { ...user, isChecked: checked } });
            setUsers(tempUser);
        }
        else {
            let tempUser = users.map((user) =>
                user.name === name ? { ...user, isChecked: checked } : user
            );
            setUsers(tempUser);
        };
    };
  return (
    <div className=' w-full my-4'>
            <div className='text-center'>
                <h3>Select Users</h3>
                <div>
                    <input
                        type="checkbox"
                        className='h-6 w-6'
                        name='allSelect'
                        checked={users.filter(user => user?.isChecked !== true).length < 1}
                        onChange={handleChange}
                    />
                    <label className='ms-2'>All Select</label>
                </div>
                {
                    users.map(user =>
                        <div>
                            <input
                                type="checkbox"
                                className='h-6 w-6'
                                name={user.name}
                                checked={user?.isChecked || false}
                                onChange={handleChange}
                            />
                            <label className='ms-2'>{user.name}</label>
                        </div>
                    )
                }
            </div>
        </div>
  )
}

export default AllSelectorBasic