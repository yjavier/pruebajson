import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import {getContactosLoading, getContactosToView,} from './selectors';
import { loadContactos } from './thunks';
import {
    Container, SectionContact, GroupContact, IconContact, Letter, NameContact, ContactDiv,ExtraInfo,
} from './ContactosStyles';
import Header from '../header/Header';

const Contactos = ({ isLoading, contactosFormated, startLoadingContactos}) => {
    const [expandedContactId, setExpandedContactId] = useState(null);
    useEffect(() => {
        startLoadingContactos();
    }, [startLoadingContactos]);

    const loadingMessage = <div>Loading contacts...</div>;
    const content =  (
        <Container>
            <Header />
        <h1>
            <button>agregar</button>
        </h1>
            {Object.entries(contactosFormated).map(([letter, data]) => (
                <SectionContact key={letter}>
                    <Letter>
                        {letter}
                    </Letter>
                    <GroupContact>
                        {data.map((contact, index) => (
                        <div key={contact.id}>
                            <ContactDiv onClick={() => setExpandedContactId(expandedContactId === contact.id ? null : contact.id)} >
                                <IconContact>{letter}</IconContact>
                                <NameContact 
                                    $expanded={expandedContactId === contact.id ? 'expand' : undefined}
                                    $islast={(index === data.length - 1) ? 'isLast' : undefined}>
                                        {contact.name}
                                </NameContact>
                            </ContactDiv>
                            {expandedContactId === contact.id && ( // Mostrar ExtraInfo si el contacto está expandido
                                <ExtraInfo>
                                    <div>{contact.phone}</div> {/* Aquí puedes mostrar el número */}
                                    <div>actions</div>
                                </ExtraInfo>
                            )}
                        </div>
                        ))}
                    </GroupContact>
                </SectionContact>
            ))}
        </Container>
    );

    return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
    isLoading: getContactosLoading(state),
    contactosFormated: getContactosToView(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingContactos: () => dispatch(loadContactos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contactos);
