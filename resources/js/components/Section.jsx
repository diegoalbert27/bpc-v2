import { Link } from 'react-router-dom'

export function Section({ children, title, labelLink = null, link = null }) {
    return (
        <div className="container">
            <section className="mb-2">
                <div className='d-flex justify-content-between mb-3'>
                    <h3>{title}</h3>
                    {
                        labelLink ?
                        <Link className='btn btn-success' to={link} >
                            {labelLink}
                        </Link> : null
                    }
                </div>
                    {children}
            </section>
        </div>
    )
}
