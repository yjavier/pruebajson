import {
    LOAD_CONTACTOS_IN_PROGRESS,
    LOAD_CONTACTOS_SUCCESS,
    LOAD_CONTACTOS_FAILURE,
} from './actions';

const initialState = { isLoading: false, data: [] };

export const contactos = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_CONTACTOS_SUCCESS: {
            const { contactos } = payload;
            return {
                ...state,
                isLoading: false,
                data: contactos,
            };
        }
        case LOAD_CONTACTOS_IN_PROGRESS:
            return {
                ...state,
                isLoading: true,
            }
        case LOAD_CONTACTOS_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}