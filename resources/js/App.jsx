import { AppRoutes } from './routes/routes'

import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'

export function App() {
    return (
        <main>
            <div className='row g-0'>
                <div className='col'>
                    <Navbar />
                </div>
            </div>
            <div className='row g-0'>
                <div className='col'>
                    <AppRoutes />
                </div>
            </div>
        </main>
    )
}
