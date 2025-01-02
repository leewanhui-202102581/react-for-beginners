### ReactJS로 영화 웹 서비스 만들기

- **강의 출처**: [노마드코더: ReactJS로 영화 웹 서비스 만들기](https://nomadcoders.co/react-for-beginners/lobby)  
- **사용한 API**: [YTS API](https://yts.mx/api)  
- **사용 언어 & 스택**: HTML, JSX, JavaScript, CSS, React  
- **개발 기간**: 2024 ~ 2025.01 완료  

---

## 구현 기능
1. **영화 리스트 목록**
   - YTS API를 통해 가져온 데이터를 표시.
   - 영화 제목, 커버 이미지, 장르, 요약 정보를 컴포넌트화.
   
2. **영화 상세정보**
   - 특정 영화 클릭 시 상세 정보를 표시.
   - `React Router`를 사용해 URL 기반으로 영화 상세 페이지 구현.

3. **영화 제목으로 검색**
   - 검색 창에서 입력한 키워드를 기반으로 영화 제목을 필터링.
   - 입력된 키워드와 부분 일치하는 영화를 실시간으로 표시.

---

## 추가 구현 내용
1. **사용한 주요 라이브러리**
   - **React Router**: 페이지 이동과 URL 기반 라우팅 처리.
   - **PropTypes**: 컴포넌트 props의 타입을 정의하고 검증.

2. **컴포넌트 설계 구조**
   - **`Home`**: 메인 페이지, 영화 목록 표시.
   - **`Movie`**: 영화 카드 컴포넌트, 단일 영화 정보를 렌더링.
   - **`Searcher`**: 검색 기능 컴포넌트, 검색어 입력 및 필터링 처리.

3. **학습한 주요 개념**
   - `useEffect`: API 호출과 같은 비동기 작업 처리.
   - `useState`: 상태 관리 및 컴포넌트 간 데이터 전달.
   - 부모-자식 간 상태와 이벤트 핸들링 (`props` 전달 및 콜백 함수 사용).

---

## 추가 개발 아이디어 (언젠가...)
1. **페이지네이션**
   - 영화가 많아질 경우 한 번에 로드하지 않고, 페이지를 나눠서 표시.

2. **별점 및 장르 필터**
   - 최소 별점이나 특정 장르를 기준으로 영화를 필터링.

3. **영화 정렬 옵션**
   - 최신순, 평점순, 제목순 등 정렬 기능 추가.

4. **디자인 개선**
   - CSS 애니메이션을 활용한 hover 효과, 반응형 레이아웃 개선.

5. **즐겨찾기 기능**
   - 사용자가 좋아하는 영화를 저장하는 기능 추가.

---

### 프로젝트를 통해 얻은 것
- **React 기초**: 컴포넌트 설계, 상태 관리, 비동기 데이터 처리 학습.
- **API 연동**: YTS API 사용을 통한 데이터 통신 이해.
- **React Router 사용법**: URL 라우팅과 동적 페이지 처리.
- **코드 모듈화**: 재사용 가능한 컴포넌트 설계 및 관리.
- 
