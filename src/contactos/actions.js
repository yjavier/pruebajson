export const LOAD_CONTACTOS_IN_PROGRESS = 'LOAD_CONTACTOS_IN_PROGRESS';
export const loadContactosInProgress = () => ({
    type: LOAD_CONTACTOS_IN_PROGRESS,
});

export const LOAD_CONTACTOS_SUCCESS = 'LOAD_CONTACTOS_SUCCESS';
export const loadContactosSuccess = contactos => ({
    type: LOAD_CONTACTOS_SUCCESS,
    payload: { contactos },
});

export const LOAD_CONTACTOS_FAILURE = 'LOAD_CONTACTOS_FAILURE';
export const loadContactosFailure = () => ({
    type: LOAD_CONTACTOS_FAILURE,
});