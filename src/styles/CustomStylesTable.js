export const CustomStylesTable = {
    headCells: {
        style: {
            fontWeight: 'bold',
            color: 'black',
            fontSize: '0.9rem',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

        },
    },
    cells: {
        style: {
            fontSize: '0.9rem',
            color: 'black',
            borderTop: '1px solid #000000',
            textAlign: 'center',
            height: '3.5rem',
            display: 'flex',
            justifyContent: 'center',
        },
    },
    table: {
        style: {
            maxHeight: '65vh',
            '@media screen and (max-width: 768px)': {
                maxHeight: '50vh',
            },
            '@media screen and (max-width: 480px)': {
                maxHeight: '46vh',
            },
            overflowY: 'auto',

            overflowX: 'hidden',
        }
    },
    pagination: {
        style: {
            color: 'black',
            fontSize: '0.9rem',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
        },
    },
}