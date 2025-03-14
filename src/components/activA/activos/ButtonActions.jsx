import { DropdownButton } from '../../CustomButtonDropdown';
import { useModalStore } from '../../../stores/useModalStore';
import { CustomButton } from '../../CustomButton';
import { IconPlus, IconTrash, IconEye, IconPencil, IconTransfer, IconDeviceDesktopDown, IconPrinter } from '@tabler/icons-react';

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
                onSelect={(opt) => {
                    openModal(opt);
                }}
                disabledBtn={false}
                children={IconPlus}
                titulo='Agregar activo'
            />
            <CustomButton
                children={<IconEye />} disabledBtn={onActiveButtons > 0 && onActiveButtons < 2 ? false : true}
                titulo='Información del activo'
                moreStyle='py-2'
            />
            <CustomButton children={IconPencil} titulo='Modificar activo' disabledBtn={onActiveButtons > 0 && onActiveButtons < 2 ? false : true} onClick={openModal} />
            <CustomButton children={IconTrash} titulo='Borrar activo' disabledBtn={onActiveButtons > 0 ? false : true} />
            <CustomButton children={IconTransfer} titulo='Asignar activo' disabledBtn={onActiveButtons > 0 ? false : true} />
            <CustomButton children={IconDeviceDesktopDown} titulo='Dar de baja un activo' disabledBtn={onActiveButtons > 0 ? false : true} />
            <CustomButton children={IconPrinter} titulo='Imprimir QR`S' disabledBtn={onActiveButtons > 0 ? false : true} />
        </>
    )
}