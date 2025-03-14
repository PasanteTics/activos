export const BreadCrumbs = ({ principalRoute = 'Activos', routeState = 'ActivA' }) => (
    <h3 className='text-md font-semibold mb-4 m-auto text-black'>{principalRoute} {'>'} {routeState}</h3>
)