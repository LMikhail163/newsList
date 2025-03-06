import {JSX, StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const appElement: JSX.Element = <App />

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {appElement}
    </StrictMode>,
)