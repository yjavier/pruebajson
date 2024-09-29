import { createSelector } from 'reselect';

export const getContactos = state => state.contactos.data;
export const getContactosLoading = state => state.contactos.isLoading;

export const getContactosToView = createSelector(
    [getContactos],
    (contactos) => {
        const groupedWords = contactos.reduce((acumulador, valorActual) => {
            const initial = valorActual.name[0].toUpperCase(); // Obtener la primera letra y convertirla a mayúscula
            if (!acumulador[initial]) {
                acumulador[initial] = []; // Si no existe la letra en el acumulador, crear un array vacío
            }
            acumulador[initial].push(valorActual); // Agregar la palabra al array correspondiente
            return acumulador;
        }, {});

        const sortedGroupedWords = Object.keys(groupedWords)
            .sort() // Ordenar las claves alfabéticamente
            .reduce((acumulador, key) => {
                acumulador[key] = groupedWords[key]; // Reconstruir el objeto con las claves ordenadas
                return acumulador;
            }, {});

            
        console.log(sortedGroupedWords);
        return sortedGroupedWords;
    }
);

