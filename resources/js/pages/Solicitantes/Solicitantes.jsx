import { useState, useEffect } from 'react'
import { FaEye, FaEdit, FaTrash, FaDownload } from 'react-icons/fa'
import { Section } from '../../components/Section'
import { getSolicitantes } from '../../services/solicitantes'

export function Solicitantes() {
    const [solicitantes, setSolicitantes] = useState([])
    const [solicitante, setSolicitante] = useState(null)

    useEffect(() => {
        (async () => {
            const { data } = await getSolicitantes()
            setSolicitantes(data.solicitantes)
        })()
    }, [])

    const verDetalleSolicitante = (id) => {
        const solicitante = solicitantes.find(solicitante => solicitante.id_solicitante === id)
        setSolicitante(solicitante)
    }

    return (
        <Section title={'Solicitantes'} labelLink={'Añadir nuevo solicitante'} link={'/application/solicitantes/nuevo'}>
            <div className="card shadow">
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Cédula</th>
                                <th scope="col">Estado</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                solicitantes.map(solicitante => (
                                    <tr key={solicitante.id_solicitante}>
                                        <td>{solicitante.carnet}</td>
                                        <td>{solicitante.id_usuario.nombre}</td>
                                        <td>{solicitante.id_usuario.apellido}</td>
                                        <td>{solicitante.id_usuario.cedula}</td>
                                        <td>{solicitante.enabled ? 'Activo' : 'Inactivo'}</td>
                                        <td>
                                            <div className='btn-group'>
                                                <button onClick={() => verDetalleSolicitante(solicitante.id_solicitante)} className='btn btn-sm btn-primary' data-bs-toggle="modal" data-bs-target="#modalDetalleSolicitante">
                                                    <FaEye />
                                                </button>
                                                <button className='btn btn-sm btn-danger'>
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="modal fade" id="modalDetalleSolicitante" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title fs-5">{solicitante?.id_usuario.nombre} {solicitante?.id_usuario.apellido}</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row mb-5'>
                                <div className='col-4'>
                                    <h6>Cedula:</h6><span>{solicitante?.id_usuario.cedula}</span>
                                </div>
                                <div className='col-4'>
                                    <h6>Edad:</h6><span>{solicitante?.edad}</span>
                                </div>
                                <div className='col-4'>
                                    <h6>Sexo:</h6><span>{solicitante?.sexo}</span>
                                </div>
                            </div>
                            <div className='row mb-5'>
                                <div className='col-4'>
                                    <h6>Dirección:</h6><span>{solicitante?.direccion}</span>
                                </div>
                                <div className='col-4'>
                                    <h6>Telefono:</h6><span>{solicitante?.id_usuario.telefono}</span>
                                </div>
                                <div className='col-4'>
                                    <h6>Correo:</h6><span>{solicitante?.id_usuario.email}</span>
                                </div>
                            </div>
                            <div className='row mb-5'>
                                <div className='col-4'>
                                    <h6>Ocupación:</h6><span>{solicitante?.ocupacion}</span>
                                </div>
                                <div className='col-4'>
                                    <h6>Institución:</h6><span>{solicitante?.nombre_institucion}</span>
                                </div>
                            </div>
                            <div className='row mb-5'>
                                <div className='col-4'>
                                    <h6>Teléfono de la institución:</h6><span>{solicitante?.telefono_institucion}</span>
                                </div>
                                <div className='col-4'>
                                    <h6>Dirección de la institución:</h6><span>{solicitante?.direccion_institucion}</span>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Generar carnet <FaDownload /></button>
                            <button type="button" className="btn btn-primary">Historial de préstamo <FaDownload /></button>
                            <button type="button" className="btn btn-success">Editar <FaEdit /></button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
