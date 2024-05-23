
import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./add.css"
import axios from 'axios';

const Add = () => {
    const { data, setdata } = useContext(MainContext)
    return (
        <>
            <Helmet>
                <title>Add</title>
            </Helmet>
            <div>
                <Formik
                    initialValues={{ title: '', price: '', image: '', }}

                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            axios.post("http://localhost:8080/api/vine", {
                                title: values.title,
                                price: values.price,
                                image: values.image,
                                count: 1,
                                totalPrice:values.price
                            })
                            setdata([...data,values])
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field type="text" name="title" id="field" placeholder="Title" />
                            <ErrorMessage name="title" component="div" />


                            <Field type="text" name="image" id="field" placeholder="Image URL" />
                            <ErrorMessage name="image" component="div" />

                            <Field type="number" name="price" id="field" placeholder="Price" />
                            <ErrorMessage name="price" component="div" />

                            <button id='submit' type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>

            </div >
        </>
    )
}

export default Add
