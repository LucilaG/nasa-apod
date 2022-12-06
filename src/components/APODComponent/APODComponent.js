import React, { Fragment } from 'react'
import { Article, Item, Paragraph, CardTitle, Row, Image } from './style'

const APODComponent = (props) => {

    const { data } = props;

    return (
        <Fragment>
            {data &&
                <Item primaryColor={'#F5ECE8'}>
                    <Article>
                        <CardTitle>{data.title}</CardTitle>
                        <Row>
                            <Image img={data.url} alt={data.title} />
                            <Paragraph description>{data.explanation}</Paragraph>
                        </Row>
                    </Article>

                </Item>
            }
        </Fragment>
    )
}

export default APODComponent;

