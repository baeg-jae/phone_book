const initialState = {
    contact: [],
    //[]배열함수 넣는 가로 연락처를 쫙쫙쫙 넣어보쟈!
    keyword: '',
};

function reducer(state = initialState, action) {
    //액션이 객첸데 항상 타입, 페이로드를 항상 뽑아내겠다
    const { type, payload } = action;
    switch (type) {
        case 'ADD_CONTACT':
            console.log(payload);
            return {
                ...state,
                contact: [...state.contact, { name: payload.name, phoneNumber: payload.phoneNumber }],
            };
        // return {
        //     ...state,
        //     contactList: [...state.contactList, { name: action.payload.name, phoneNumber: action.payload.phoneNumber }],
        // };  action. 이 앞에 빠질수있었던건  const { type, payload } = action; 덕분
        case 'SEARCH_BY_USERNAME':
            state.keyword = payload.keyword;
            break;
        default:
            return { ...state };
    }
}

export default reducer;
