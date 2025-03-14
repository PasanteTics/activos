import { useEffect, useState } from "react"

export const useListActiva = () => {
    let limitedColaboradores
    let MaxColaboradores = 10;
    let MinColaboradores = 0;
    const [validateCheck, setValidateCheck] = useState(false);
    const [maxColaboradores, setMaxColaboradores] = useState(MaxColaboradores);

    const [colaboradores] = useState([
        {
            placa: '5486',
            categoria: 'Muebles y enseres',
            descripcion: 'Sillas tandem isonet cuatro puestos estructura negra tapizada en amareto color negro',
            colaborador: 'Juan Estevan Franco Villada',
            compra: '2022-01-15',
            sede: 'La Union'
        },
        {
            placa: '5487',
            categoria: 'Muebles y enseres',
            descripcion: 'Sillas tandem isonet cuatro puestos estructura negra tapizada en amareto color negro',
            colaborador: 'Juan Estevan Franco Villada',
            compra: '2021-11-20',
            sede: 'La Union'
        },
        {
            placa: '5488',
            categoria: 'Muebles y enseres',
            descripcion: 'Sillas tandem isonet cuatro puestos estructura negra tapizada en amareto color negro',
            colaborador: 'Juan Estevan Franco Villada',
            compra: '2022-03-10',
            sede: 'La Union'
        },
        {
            placa: '5489',
            categoria: 'Muebles y enseres',
            descripcion: 'Sillas tandem isonet cuatro puestos estructura negra tapizada en amareto color negro',
            colaborador: 'Juan Estevan Franco Villada',
            compra: '2021-09-05',
            sede: 'La Union'
        },
        {
            placa: '5490',
            categoria: 'Muebles y enseres',
            descripcion: 'Sillas tandem isonet cuatro puestos estructura negra tapizada en amareto color negro',
            colaborador: 'Juan Estevan Franco Villada',
            compra: '2022-02-25',
            sede: 'La Union'
        },
        {
            placa: '5491',
            categoria: 'Muebles y enseres',
            descripcion: 'Sillas tandem isonet cuatro puestos estructura negra tapizada en amareto color negro',
            colaborador: 'Juan Estevan Franco Villada',
            compra: '2022-04-12',
            sede: 'La Union'
        },
        {
            placa: '5492',
            categoria: 'Muebles y enseres',
            descripcion: 'Sillas tandem isonet cuatro puestos estructura negra tapizada en amareto color negro',
            colaborador: 'Juan Estevan Franco Villada',
            compra: '2021-10-30',
            sede: 'La Union'
        },
        {
            placa: '5493',
            categoria: 'Muebles y enseres',
            descripcion: 'Sillas tandem isonet cuatro puestos estructura negra tapizada en amareto color negro',
            colaborador: 'Juan Estevan Franco Villada',
            compra: '2022-05-18',
            sede: 'La Union'
        },
        {
            placa: '5494',
            categoria: 'Muebles y enseres',
            descripcion: 'Sillas tandem isonet cuatro puestos estructura negra tapizada en amareto color negro',
            colaborador: 'Juan Estevan Franco Villada',
            compra: '2021-12-22',
            sede: 'La Union'
        },
        {
            placa: '5495',
            categoria: 'Muebles y enseres',
            descripcion: 'Sillas tandem isonet cuatro puestos estructura negra tapizada en amareto color negro',
            colaborador: 'Juan Estevan Franco Villada',
            compra: '2022-06-05',
            sede: 'La Union'
        },
        {
            placa: '5496',
            categoria: 'Muebles y enseres',
            descripcion: 'Sillas tandem isonet cuatro puestos estructura negra tapizada en amareto color negro',
            colaborador: 'Juan Estevan Franco Villada',
            compra: '2022-07-10',
            sede: 'La Union'
        },
        {
            placa: '5497',
            categoria: 'Muebles y enseres',
            descripcion: 'Sillas tandem isonet cuatro puestos estructura negra tapizada en amareto color negro',
            colaborador: 'Juan Estevan Franco Villada',
            compra: '2022-08-15',
            sede: 'La Union'
        },
        {
            placa: '5498',
            categoria: 'Muebles y enseres',
            descripcion: 'Sillas tandem isonet cuatro puestos estructura negra tapizada en amareto color negro',
            colaborador: 'Juan Estevan Franco Villada',
            compra: '2022-09-20',
            sede: 'La Union'
        },
        {
            placa: '5499',
            categoria: 'Muebles y enseres',
            descripcion: 'Sillas tandem isonet cuatro puestos estructura negra tapizada en amareto color negro',
            colaborador: 'Juan Estevan Franco Villada',
            compra: '2022-10-25',
            sede: 'La Union'
        },
        {
            placa: '5500',
            categoria: 'Muebles y enseres',
            descripcion: 'Sillas tandem isonet cuatro puestos estructura negra tapizada en amareto color negro',
            colaborador: 'Juan Estevan Franco Villada',
            compra: '2022-11-30',
            sede: 'La Union'
        },
        {
            placa: '5501',
            categoria: 'Muebles y enseres',
            descripcion: 'Sillas tandem isonet cuatro puestos estructura negra tapizada en amareto color negro',
            colaborador: 'Juan Estevan Franco Villada',
            compra: '2022-12-05',
            sede: 'La Union'
        }
    ]);

    useEffect(() => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', handleCheckboxChange);
        });

        return () => {
            checkboxes.forEach((checkbox) => {
                checkbox.removeEventListener('change', handleCheckboxChange);
            });
        };
    }, [maxColaboradores]);

    const multipleSelection = () => {
        document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
            checkbox.checked = document.getElementById('checkbox').checked
        })
    }

    const ValidateFilterItems = () => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        let count = 0;

        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                count++;
            }
        });

        setValidateCheck(count);
    }
    const validColaboradores = colaboradores.filter(colaborador => colaborador.placa && colaborador.descripcion && colaborador.categoria && colaborador.colaborador && colaborador.compra && colaborador.sede);

    
    const handleCheckboxChange = () => {
        ValidateFilterItems();
    }
    const handleVerMasClick = () => {
        setMaxColaboradores(prevMax => prevMax + 2);
    };

    limitedColaboradores = validColaboradores.slice(MinColaboradores, maxColaboradores);

    return { validColaboradores, multipleSelection, validateCheck, handleVerMasClick, limitedColaboradores, maxColaboradores }
}