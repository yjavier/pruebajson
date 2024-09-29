import {
    loadContactosInProgress,
    loadContactosSuccess,
    loadContactosFailure,
} from './actions';

export const loadContactos = () => async (dispatch, getState) => {
    try {
        dispatch(loadContactosInProgress());

        
        const contactos = await new Promise((resolve, reject) => {
            setTimeout(async () => {
                // Simular una respuesta exitosa
                const response = await fetch('https://raw.githubusercontent.com/yjavier/pruebajson/a75325f4f198609703c7c1ef5dec9eb51183393b/db.json');
                const todos = await response.json();
                console.log(todos);
                resolve(todos);

                // Para simular un error, puedes descomentar la línea siguiente
                // reject(new Error('Error simulado'));
            }, 1000); // Tiempo de espera de 2 segundos
        });
    
        dispatch(loadContactosSuccess(contactos));
    } catch (e) {
        dispatch(loadContactosFailure());
        dispatch(displayAlert(e));
    }
}
export const displayAlert = text => () => {
    alert(text);
};