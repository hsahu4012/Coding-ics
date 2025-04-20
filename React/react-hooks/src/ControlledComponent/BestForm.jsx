import React, { useState } from 'react'

const BestForm = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: ''
    })
    const handleForm = (e) => {
        const { name, value } = e.target;

        setUser((prev) => ({
            ...prev, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = user;
        console.log(formData);

    }

    return (
        <>
            <div className='form'>
                <div>
                    <label htmlFor="firstName">
                        <b>First Name</b>
                    </label>
                    <input type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleForm}
                        placeholder='Enter First Name'
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">
                        <b>Last Name</b>
                    </label>
                    <input type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleForm}
                        placeholder='Enter Last Name'
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input type="email"
                        name="email"
                        value={user.email}
                        onChange={handleForm}
                        placeholder='Enter email'
                        required
                    />
                </div>

                <div>
                    <label htmlFor="phoneNumber">
                        <b>Phone Number</b>
                    </label>
                    <input type="phone"
                        name="phoneNumber"
                        value={user.phoneNumber}
                        onChange={handleForm}
                        placeholder='0123456789'
                        required
                    />

                </div>

                <div>
                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input type="password"
                        name="password"
                        value={user.password}
                        onChange={handleForm}
                        placeholder='Enter Password'
                    />
                </div >


            </div >
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default BestForm
