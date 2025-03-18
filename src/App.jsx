import { CustomLoader } from './components/CustomLoader'
import { CustomModal } from './components/CustomModal'
import { HeaderCustom } from './components/HeaderCustom'
import { AppRouter } from './routes/AppRouter'

export const App = () => (
    <>
        <CustomModal />
        <CustomLoader/>
        <AppRouter />
    </>
)