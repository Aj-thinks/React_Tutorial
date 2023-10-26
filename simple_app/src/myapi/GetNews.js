import React, { useEffect, useState } from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react'

export default function GetNews() {

    const [list, setList] = useState([])
    const [n, setn] = useState(0)
    const [loading, setLoading] = useState(true)

    const count = 10

    // https://telugunewsadda.com/wp-json/wp/v2/posts?_fields=title  (Actual Link)

    useEffect(() => {

        let data = {
            _fields: 'title, jetpack_featured_media_url,date',
            offset: n,
            per_page: count
        }

        //const url = 'https://telugunewsadda.com/wp-json/wp/v2/posts?_fields=title'

        const urlParams = new URLSearchParams(data).toString()
        const url = 'https://telugunewsadda.com/wp-json/wp/v2/posts?' + urlParams
        setLoading(true)

        fetch(url)
            .then(res => res.json())
            .then(json => {
                setList(json)
                setLoading(false)
            })

    }, [n])


    function handleNext() {
        if (n >= 50) {
            return
        }
        setn(n + count)

    }

    function handlePrev() {
        if (n <= 0) {
            return
        }
        setn(n - count)
    }


    return (
        <div>
            <h3> News Articles : {n} </h3>

            <div style={{ paddingBottom: 20 }}>
                {n > 0 && <Button color='red' onClick={handlePrev}>Previous</Button>}
                {n < 50 && <Button color='green' onClick={handleNext}>Next</Button>}
            </div>

            {loading ?
                <div style={{ padding: 50 }}>
                    <Icon name='spinner' loading size='huge' />  {/*use loading in order to rotate the icon*/}
                </div>

                :

                <Card.Group itemsPerRow={5}>
                    {list.map((item) => {
                        return (

                            <Card>
                                <Image src={item.jetpack_featured_media_url} wrapped ui={false} />

                                <Card.Content>
                                    <Card.Header>{item.title.rendered}</Card.Header>
                                </Card.Content>
  
                                <Card.Content extra>
                                    <a>
                                        <Icon name='calendar alternate outline' />
                                        {item.date.slice(0, 10)}
                                    </a>
                                </Card.Content>
                            </Card>
                        )
                    })}

                </Card.Group>

            }

        </div>
    )
}

