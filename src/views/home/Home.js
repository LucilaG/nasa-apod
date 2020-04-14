import React, { Fragment } from 'react'
import { useGet } from "restful-react"
import APODComponent from '../../components/APODComponent/APODComponent'
import { Header, Title, Body, Content } from './style'
import Loading from '../../components/loading/Loading'
import Error from '../../components/error/Error';

const URL = 'https://api.nasa.gov/planetary/apod'
const URL_PARAMS = '?api_key=aFTcAdnON8NotVOegGndAMcsUKn1t9a1bieDPAmO'

const Home = () => {

    const { data, error, loading } = useGet({
        path: URL.concat(URL_PARAMS)
    });

    return (
        <Fragment>
            {loading && <Loading className='fixed' />}
            {data &&
                <Content>
                    <Header>
                        <Title>Hey, Look!</Title>
                        <Title subtitle>this is the Astronomy Picture of the Day</Title>
                    </Header>
                    <Body>
                        <APODComponent data={data} urlParams={URL_PARAMS}></APODComponent>
                    </Body>
                </Content>
            }
            {error &&
                <Error />
            }
        </Fragment>
    )

}

export default Home;