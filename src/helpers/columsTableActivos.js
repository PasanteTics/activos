export const columns = [
    { name: '', selector: (_, index) => index + 1, sortable: true, maxWidth: '80px', style: { paddingLeft: '1px', } },
    { name: 'Placa', selector: row => row.placa, sortable: true, maxWidth: '120px', style: { paddingLeft: '1px', borderLeft: '1px' } },
    { name: 'Descripción', selector: row => row.descripcion, sortable: true, },
    { name: 'Categoría', selector: row => row.categoria, sortable: true, maxWidth: '250px' },
    { name: 'Responsable', selector: row => row.colaborador, sortable: true, maxWidth: '250px' },
    { name: 'Compra', selector: row => row.compra, sortable: true, maxWidth: '250px' },
    { name: 'Sede', selector: row => row.sede, sortable: true, maxWidth: '250px' },
]