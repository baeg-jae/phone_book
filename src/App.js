import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//기억하자 처음쓰는건데 이걸써야 부트스트랩 사용가능한것 같다.
import { Container, Row, Col } from 'react-bootstrap';
// 이거들은 css인데 왜 부트스트랩으로 불러오는걸까???
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

//방법
//1.연락처 리스트와 등록이 있다.
//2. 등록을하면 연락처 리스트에 등로깅 된다.
//3. 리스트에 아이템이 몇개있는지 보인다. 검색하는 곳이 있다.
//4. 끝아닐까?

//일단 지금 코알누는 반으로 정렬되어있는데 나는 지금 전체로 정렬되어있다!? 왜?? 모르겠구만
function App() {
    return (
        <div>
            <h1 className="title">연락처</h1>
            <Container>
                <Row>
                    <Col>
                        <ContactForm />
                    </Col>
                    <Col>
                        <ContactList />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
