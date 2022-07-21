import React, { Profiler } from "react"
import s from './loginpage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from "formik";
import { setUserData } from "../../redux/authreducer";
import { Navigate } from "react-router-dom";
import ProfilePage from "../profile/profile";


const LoginPage = () => {

    const state = useSelector(state => state.auth);
    const dispatch = useDispatch();

    if (state.isAuth) {
        return <ProfilePage />
    }
    return (
        <div className={s.from} >

            <Formik
                initialValues={{
                    login: '',
                    password: '',
                    isAuth: false,
                }}
                onSubmit={(values, { resetForm }) => {
                    dispatch(setUserData(values.login, values.password, true));
                    resetForm({ values: '' });
                }}
            >
                {formik => (
                    <Form className={s.form}>
                        <h2>Login to see</h2>
                        <div >
                            <Field className={s.field}
                                name={'login'}
                                type={'text'}
                                placeholder={'Enter your login'}
                                onChange={formik.handleChange} value={formik.values.login}
                            />
                        </div>
                        <div>
                            <Field className={s.field}
                                name={'password'}
                                type={'text'}
                                placeholder={'Enter your password'}
                                onChange={formik.handleChange} value={formik.values.password}
                            />
                        </div>

                        <button className={formik.values.login === 'developer21' && formik.values.password === "123456"
                            ? s.btn
                            : s.btnDisabled}
                            type={'submit'}>Send</button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}
export default LoginPage