import React, { Fragment } from 'react'
import { Article, Item, Paragraph, CardTitle, Row} from './style'

const APODComponent = (props) => {

    const { data } = props;

    return (
        <Fragment>
            {data &&
                <Item primaryColor={'#F5ECE8'}>
                    <Article>
                        <CardTitle>{data.title}</CardTitle>
                        <Row>
                            <Paragraph><img src={data.url} alt={data.title}></img></Paragraph>
                            <Paragraph description>{data.explanation}</Paragraph>
                        </Row>
                    </Article>

                </Item>
            }
        </Fragment>
    )
}

export default APODComponent;

