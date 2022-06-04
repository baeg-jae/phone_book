import React, { useState } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const SearchBox = () => {
    let [keyword, setKeyword] = useState('');
    let dispatch = useDispatch();
    let { contact } = useSelector((state) => state);
    //이건 왜 그냥 state일까?? 리스트에선 state.contactList였는데
    //여기선 state.keyword여야하는거 아닌가??
    const searchByName = (e) => {
        e.preventDefault();
        dispatch({ type: 'SEARCH_BY_USERNAME', payload: { keyword } });
    };
    return (
        <Form onSubmit={searchByName} className="search-form">
            {/*className="search-form"??? 부트스트랩??  */}
            <Row>
                <Col lg={10}>
                    <Form.Control type="text" placeholder="name" onChange={(e) => setKeyword(e.target.value)} />
                </Col>
                <Col lg={2}>
                    <Button type="submit">찾기</Button>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchBox;
