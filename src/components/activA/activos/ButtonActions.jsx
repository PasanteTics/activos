import { DropdownButton } from '../../CustomButtonDropdown';
import { useModalStore } from '../../../stores/useModalStore';
import { CustomButton } from '../../CustomButton';
import { AddIcon, AsignationIcon, DeletedIcon, EditIcon, InactiveActivosIcon, PrintIcon, VisualizeIcon } from '@/icons/TablerIcons'
import { FormCreateActivo } from '../FormCreateActivo';
import { DeleteActionForm } from '../../DeleteActionForm';

/**
 * Componente ButtonActions
 * 
 * Este componente renderiza un conjunto de botones personalizados y un botón desplegable para realizar diversas acciones relacionadas con activos.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {number} props.onActiveButtons - Número de botones activos.
 * 
 * @returns {JSX.Element} - Elemento JSX que representa los botones de acción.
 */

export const ButtonActions = ({ onActiveButtons }) => {

    const { setContent } = useModalStore();

    const openModal = (opt) => {
        if (opt.label === 'Insertar nuevo') {
            setContent(<FormCreateActivo />)
        }
    };

    return (
        <>
            <DropdownButton
                options={[
                    { label: 'Insertar nuevo' },
                    { label: 'Importar desde CSV' },
                    { label: 'Descargar plantilla' }
                ]}
                onSelect={openModal}
                disabledBtn={false}
                children={<AddIcon />}
                titulo='Agregar activo'
                style='ml-0 mt-0.5 2xl:-ml-2'
            />
            <CustomButton
                children={<VisualizeIcon />}
                disabledBtn={onActiveButtons > 0 && onActiveButtons < 2 ? false : true}
                titulo='Información del activo'
                moreStyle='py-2'
            />
            <CustomButton
                children={<EditIcon />}
                titulo='Modificar activo'
                disabledBtn={onActiveButtons > 0 && onActiveButtons < 2 ? false : true}
                onClick={openModal}
            />
            <CustomButton
                children={<DeletedIcon />}
                titulo='Borrar activo'
                disabledBtn={onActiveButtons > 0 ? false : true}
                action={() => setContent(<DeleteActionForm bodyText={'¿Está seguro que desea eliminar el registro?'} />)}
            />
            <CustomButton
                children={<AsignationIcon />}
                titulo='Asignar activo'
                disabledBtn={onActiveButtons > 0 ? false : true}
            />
            <CustomButton
                children={<InactiveActivosIcon />}
                titulo='Dar de baja un activo'
                disabledBtn={onActiveButtons > 0 ? false : true}
            />
            <CustomButton
                children={<PrintIcon />}
                titulo='Imprimir QR`S'
                disabledBtn={onActiveButtons > 0 ? false : true}
            />
        </>
    )
}