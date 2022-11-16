import { useState, useEffect } from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

import { Section } from '../../components/Section'
import { getRoles } from '../../services/roles'

export function SolicitanteForm() {
    const [roles, setRoles] = useState([])

    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        cedula: '',
        id_role: '',
        nickname: '',
        email: '',
        clave: '',
        telefono: '',
    })

    const [solicitante, setSolicitante] = useState({
        nombre: '',
        apellido: '',
        cedula: '',
        id_role: '',
        nickname: '',
        email: '',
        clave: '',
        telefono: '',
        carnet: '',
	    id_usuario: null,
	    edad: '',
	    direccion: '',
	    sexo: '',
	    ocupacion: '',
	    nombre_institucion: '',
	    direccion_institucion: '',
	    telefono_institucion: ''
    })

    useEffect(() => {
        (async () => {
            const { data } = await getRoles()
            const roles = data.roles.filter(role => role.nombre === 'Lector')
            setRoles(roles)
            usuario.id_role = roles[0].id_role
            setUsuario(usuario)
        })()
    }, [])

    const labelRequired = 'Este campo es obligatorio.'
    const labelNumberTypeError = 'Debe ingresar valores numéricos.'
    const labelInteger = 'Debe ingresar valores enteros.'
    const labelPositiveNumber = 'Debe ingresar valores positivos.'

    return (
        <Section title={'Registro de nuevo solicitante'}>
            <Formik
                initialValues={solicitante}
                enableReinitialize
                validationSchema={Yup.object({
                    nombre: Yup.string().required(labelRequired),
                    apellido: Yup.string().required(labelRequired),
                    cedula: Yup.number().typeError(labelNumberTypeError).required(labelRequired).integer(labelInteger).positive(labelPositiveNumber),
                    nickname: Yup.string().required(labelRequired),
                    email: Yup.string().email('El correo electrónico debe ser un formato valido.').required(labelRequired),
                    clave: Yup.string().min(6, 'Clave debe contener mas de 6 caracteres.').required(labelRequired),
                    telefono: Yup.number().typeError(labelNumberTypeError).required(labelRequired),
                    carnet: Yup.string().required(labelRequired),
                    edad: Yup.number().typeError(labelNumberTypeError).required(labelRequired).integer(labelInteger).positive(labelPositiveNumber),
                    direccion: Yup.string().required(labelRequired),
                    telefono_institucion: Yup.number().typeError(labelNumberTypeError)
                })}
                onSubmit={(values, actions) => {
                    console.log(values)
                }}
            >
                {
                    ({ isSubmitting, handleSubmit, resetForm }) => (
                        <Form onSubmit={handleSubmit}>
                            <div className='card shadow mb-4'>
                                <div className='card-header py-3'>
                                    <h6 className='m-0 font-weight-bold text-primary'>Datos Personales:</h6>
                                </div>

                                <div className="card-body p-4">
                                    <div className='row mb-4'>
                                        <div className='col-4'>
                                            <label className='form-label' htmlFor="carnet">N° Carnet:</label>
                                            <Field className='form-control' name='carnet' id='carnet' />
                                            <ErrorMessage
                                                component="small"
                                                name="carnet"
                                                className="text-danger"
                                            />
                                        </div>
                                        <div className='col-4'>
                                            <label className='form-label' htmlFor="nombre">Nombres:</label>
                                            <Field className='form-control' name='nombre' id='nombre' />
                                            <ErrorMessage
                                                component="small"
                                                name="nombre"
                                                className="text-danger"
                                            />
                                        </div>
                                        <div className='col-4'>
                                            <label className='form-label' htmlFor="apellido">Apellidos:</label>
                                            <Field className='form-control' name='apellido' id='apellido' />
                                            <ErrorMessage
                                                component="small"
                                                name="apellido"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className='col-4'>
                                            <label className='form-label' htmlFor="cedula">Cédula de identidad:</label>
                                            <Field className='form-control' name='cedula' id='cedula' />
                                            <ErrorMessage
                                                component="small"
                                                name="cedula"
                                                className="text-danger"
                                            />
                                        </div>
                                        <div className='col-4'>
                                            <label className="form-label" htmlFor='sexo'>Sexo:</label>
                                            <Field className='form-control' as="select" name="sexo" id='sexo'>
                                                <option value="Masculino">Masculino</option>
                                                <option value="Femenino">Femenino</option>
                                                <option value="Otros">Otros</option>
                                            </Field>
                                        </div>
                                        <div className='col-4'>
                                            <label className='form-label' htmlFor="edad">Edad:</label>
                                            <Field className='form-control' name='edad' id='edad' />
                                            <ErrorMessage
                                                component="small"
                                                name="edad"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='card shadow mb-4'>
                                <div className='card-header py-3'>
                                    <h6 className='m-0 font-weight-bold text-primary'>Contacto:</h6>
                                </div>
                                <div className="card-body p-4">
                                    <div className='row mb-3'>
                                        <div className='col-4'>
                                            <label className='form-label' htmlFor="telefono">Teléfono:</label>
                                            <Field className='form-control' name='telefono' id='telefono' />
                                            <ErrorMessage
                                                component="small"
                                                name="telefono"
                                                className="text-danger"
                                            />
                                        </div>
                                        <div className='col-4'>
                                            <label className='form-label' htmlFor="email">Correo electrónico:</label>
                                            <Field className='form-control' name='email' id='email' />
                                            <ErrorMessage
                                                component="small"
                                                name="email"
                                                className="text-danger"
                                            />
                                        </div>
                                        <div className='col-4'>
                                            <label className='form-label' htmlFor="direccion">Dirección de habitación:</label>
                                            <Field className='form-control' name='direccion' id='direccion' />
                                            <ErrorMessage
                                                component="small"
                                                name="direccion"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='card shadow mb-4'>
                                <div className='card-header py-3'>
                                    <h6 className='m-0 font-weight-bold text-primary'>Lugar de estudio o trabajo:</h6>
                                </div>
                                <div className="card-body p-4">
                                    <div className='row mb-3'>
                                        <div className='col-6'>
                                            <label className='form-label' htmlFor="ocupacion">Ocupacion:</label>
                                            <Field className='form-control' as="select" name='ocupacion' id='ocupacion'>
                                                <option value="Trabajador">Trabajador</option>
                                                <option value="Estudiante">Estudiante</option>
                                                <option value="Ninguno">Ninguno</option>
                                            </Field>
                                        </div>
                                        <div className='col-6'>
                                            <label className='form-label' htmlFor="nombre_institucion">Nombre del lugar de estudio o trabajo:</label>
                                            <Field className='form-control' name='nombre_institucion' id='nombre_institucion' />
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-6'>
                                            <label className='form-label' htmlFor="direccion_institucion">Dirección:</label>
                                            <Field className='form-control' name='direccion_institucion' id='direccion_institucion' />
                                        </div>
                                        <div className='col-6'>
                                            <label className='form-label' htmlFor="telefono_institucion">Teléfono:</label>
                                            <Field type='text' className='form-control' name='telefono_institucion' id='telefono_institucion' />
                                            <ErrorMessage
                                                component="small"
                                                name="telefono_institucion"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='card shadow mb-4'>
                                <div className='card-header py-3'>
                                    <h6 className='m-0 font-weight-bold text-primary'>Cuenta de usuario:</h6>
                                </div>
                                <div className="card-body p-4">
                                    <div className='row mb-3'>
                                        <div className='col-6'>
                                            <label className='form-label' htmlFor="nickname">Nombre de usuario:</label>
                                            <Field className='form-control' name='nickname' id='nickname' />
                                            <ErrorMessage
                                                component="small"
                                                name="nickname"
                                                className="text-danger"
                                            />
                                        </div>
                                        <div className='col-6'>
                                            <label className='form-label' htmlFor="clave">Contraseña:</label>
                                            <Field className='form-control' name='clave' id='clave' />
                                            <ErrorMessage
                                                component="small"
                                                name="clave"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='text-end mb-4'>
                                <button className='btn btn-outline-secondary mx-2' onClick={resetForm}>Restabler campos</button>
                                <button type='submit' className='btn btn-primary'>Incorporar</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </Section>
    )
}
