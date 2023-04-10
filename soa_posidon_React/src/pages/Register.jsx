import React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from '../styles/register.module.css'
import { useNavigate } from 'react-router-dom';
function Register() {
    const MySwal = withReactContent(Swal);
    const [inputs, setInputs] = useState({});
    const form = document.getElementById('form');
    const name = document.getElementById('name');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    const surname = document.getElementById('surname');
    const phone = document.getElementById('phone');
    const username = document.getElementById('username');
    const navigate = useNavigate();
    // const check = 0;
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        checkRequired([username, password, password2, phone, surname, name]);
        checkLength(username, 3, 20);
        checkLength(password, 8, 15);
        checkLength(password2, 8, 15);
        checkPasswordMatch(password, password2);
        // check = 1;
        // }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({

            "name": inputs.name,
            "surname": inputs.surname,
            "username": inputs.username,
            "password": inputs.password,
            "phone": inputs.phone
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/guests", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.status==='200') {
                    MySwal.fire({
                        icon: 'success',
                        title: 'Good job!',
                        text: 'You clicked the button!'
                    }).then((value) => {
                        navigate('/')

                    })
                }
                })

            .catch(error => console.log('error', error));
    }
    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = styles.form_controlE;
        const small = formControl.querySelector('small');
        small.innerText = message;
    }
    function showSucces(input) {
        const formControl = input.parentElement;
        formControl.className = styles.form_controlS;
        const small = formControl.querySelector('small');
        small.innerText = '';
    }
    function checkRequired(inputArr) {
        inputArr.forEach(function (input) {
            if (input.value.trim() === '') {
                showError(input, `${getFieldName(input)} ของคุณไม่ถูกต้อง!!!`)
            } else {
                showSucces(input);
            }
        });
    }
    function checkLength(input, min, max) {
        if (input.value.length < min) {
            showError(input, `${getFieldName(input)} ต้องไม่น้อยกว่า ${min} ตัว`);
        } else if (input.value.length > max) {
            showError(input, `${getFieldName(input)} ต้องไม่มากกว่า ${max} ตัว`);
        } else {
            showSucces(input);
        }
    }
    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }
    function checkPasswordMatch(input1, input2) {
        if (input1.value !== input2.value) {
            showError(input2, 'รหัสผ่านของคุณไม่ตรงกัน');
        }
    }

    return (
        <div className={styles.back}>
            <div className={styles.bg}>
                <div className={styles.mainRegis}>
                    <h1>สมัครสมาชิก</h1>
                    <div className={styles.Regis}>
                        <form onSubmit={handleSubmit} id="form" className={styles.form}>
                            <div className={styles.form_control}>
                                <label htmlFor='name'>name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id='name'
                                    value={inputs.name || ""}
                                    onChange={handleChange} />
                                <div >
                                    <small></small>

                                </div>
                            </div>
                            <div className={styles.form_control}>
                                <label htmlFor='surname'>surname</label>
                                <input
                                    type="text"
                                    name="surname"
                                    id='surname'
                                    value={inputs.surname || ""}
                                    onChange={handleChange} />
                                <div >
                                    <small></small>
                                </div>
                            </div>
                            <div className={styles.form_control}>
                                <label htmlFor='username'>username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id='username'
                                    value={inputs.username || ""}
                                    onChange={handleChange} />
                                <div >
                                    <small></small>
                                </div>
                            </div>
                            <div className={styles.form_control}>
                                <label htmlFor='password'>password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id='password'
                                    value={inputs.password || ""}
                                    onChange={handleChange} />
                                <div >
                                    <small></small>
                                </div>
                            </div>
                            <div className={styles.form_control}>
                                <label htmlFor='password2'>รหัสผ่าน</label>
                                <input
                                    type="password"
                                    name="password2"
                                    id='password2'
                                    value={inputs.password2 || ""}
                                    onChange={handleChange} />
                                <div >
                                    <small></small>
                                </div>
                            </div>
                            <div className={styles.form_control}>
                                <label htmlFor='phone'>phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    id='phone'
                                    value={inputs.phone || ""}
                                    onChange={handleChange} />
                                <div >
                                    <small></small>
                                </div>
                            </div>


                            <button className={styles.btnRegis} type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register