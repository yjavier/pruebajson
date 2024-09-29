import styled from 'styled-components';

const ContentSection = styled.section`
    background: #171717;
    background-size: cover;
    padding: 180px 0;
    color: #ffffff;
    overflow: hidden;
`;

const ContentDiv = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
`;


const Presentacion = () => {

    return (
        <ContentSection>
            <ContentDiv>
                <div>
                    <h1>
                        Rifa de prueba
                    </h1>
                    <div>
                        25 Nov 2022 12:00 AM
                    </div>
                    <div>
                        descripcion
                    </div>
                    <div>
                        <button>COMPRAR AHORA</button>
                    </div>
                </div>
                <div>

                </div>
            </ContentDiv>
        </ContentSection>
    );
};

export default Presentacion;