import { Routes, Route } from 'react-router-dom'

import {
    Dashboard,
    UserProfile,
    Solicitantes,
    SolicitanteForm
} from '../pages/index'

export function AppRoutes() {
    const baseUrl = 'application'
    const url = {
        home: baseUrl + '/',
        perfil: baseUrl + '/perfil',
        solicitantes: baseUrl + '/solicitantes',
    }

    return (
        <Routes>
            <Route path={url.home} element={<Dashboard />} />
            <Route path={url.perfil} element={<UserProfile />} />
            <Route path={url.solicitantes} element={<Solicitantes />} />
            <Route path={url.solicitantes + '/nuevo'} element={<SolicitanteForm />} />
        </Routes>
    )
}
