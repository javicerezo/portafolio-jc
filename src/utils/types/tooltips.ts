
/**
 * type para el tooltip que aparece al hacer clic en los iconos de tecnologías
 */
export interface TooltipProp {
    duration?: number;
    text: string;
    onClose?: () => void;
}