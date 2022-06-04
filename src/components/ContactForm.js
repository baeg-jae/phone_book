import React from 'react';
import { Form, Button } from 'react-bootstrap';
// 오 이거 처음써본다 설렌다!!
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    const dispatch = useDispatch();
    const addContact = (e) => {
        e.preventDefault();
        //preventDefault이녀석은 뭘까?? 처음본다...

        //디프패치 타입은 항상 대문자 기억하자!!!
        dispatch({ type: 'ADD_CONTACT', payload: { name, phoneNumber } });
        //{ name: name, phoneNumber: phoneNumber }를 {name, phoneNumber}로 줄일수있다.
        // 이걸 별다줄 별걸다 줄인다. ㅋ? es6 최신 js문법이다
    };
    return (
        <div>
            <Form onSubmit={addContact}>
                <Form.Group className="mb-3" controlId="formname">
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text" placeholder="이름 입력" onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formContact">
                    <Form.Label>전화번호</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="전화번호 입력"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    추가
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;
