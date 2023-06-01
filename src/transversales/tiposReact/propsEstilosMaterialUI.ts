import { PropsWithChildren } from 'react';

type ConsistentWith<DecorationTargetProps, InjectedProps> = {
  [P in keyof DecorationTargetProps]: P extends keyof InjectedProps
    ? InjectedProps[P] extends DecorationTargetProps[P]
      ? DecorationTargetProps[P]
      : InjectedProps[P]
    : DecorationTargetProps[P]
};

/**
 * Definición de tipo para la implementación de estilos con la función withStyles de la libreria material UI
 * @param T Tipo generico para contener mas definiciones de tipos
 * @author Jersson Morales
 * @copyright Infotrack. All rights reserved.
 */

type PropsEstilosMaterialUI<T = {}> = PropsWithChildren<
  ConsistentWith<PropsWithChildren<T>, { classes: Record<string, string> }> & { classes: Record<string, string> }
>;

export default PropsEstilosMaterialUI;
