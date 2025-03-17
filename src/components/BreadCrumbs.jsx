import { Link, useLocation } from "wouter"

export const BreadCrumbs = () => {

    const location = useLocation();
    const newLocation = location[0]?.split('/').splice(1, 2).join(' > ')

    return (
        <Link href="/activos/activa" className='text-md font-semibold  m-auto text-black capitalize'>{newLocation}</Link>
    )
}