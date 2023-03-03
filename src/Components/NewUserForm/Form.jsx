import React from 'react';
import Card from '../UI/Card';
import './Form.css';
import Button from '../UI/Button';
import { useState } from 'react';


const Form = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');

    const addNewUserHandler = e => {
        e.preventDefault();

        //validate user input and show modal in case user has provided invalid input
        if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0){
            props.updateModal('Invalid input', 'Name or Age cannot be left blank');
        }else if(parseInt(enteredUserAge) < 0){
            props.updateModal('Invalid input', 'Age cannot be negative, please try again');
        }else{
            props.onAddNewUser(enteredUserName, enteredUserAge);
        }

        setEnteredUserName('');
        setEnteredUserAge('');

    }

    const handleUserNameChange = (e) => setEnteredUserName(e.target.value);
    const handleUserAgeChanger = (e) => setEnteredUserAge(e.target.value);

    return (
        <Card>
            <form action="" className='user__form' onSubmit={addNewUserHandler}>
                <div className="username__cont">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="" id="username" required value={enteredUserName} onChange={handleUserNameChange} />
                </div>

                <div className="age__cont">
                    <label htmlFor="username">Age (Years)</label>
                    <input type="text" name="" id="username" required value={enteredUserAge} onChange={handleUserAgeChanger} />
                </div>

                {/* <button className='submit__user__btn'>Add User</button> */}

                <Button btnClasses={"submit__btn"} btnType={"submit"}>
                    Add User
                </Button>

            </form>
        </Card>
    )
}

export default Form