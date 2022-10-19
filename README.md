## 개요
리액트와 Next.js를 활용하여 MongoDB에 데이터를 저장하는 밋업 [페이지](https://nextjs-meetup-page-two.vercel.app/)입니다.

## 기술 스택  
- 리액트로 컴포넌트를 구성하였습니다.  
- Next.js로 페이지 라우팅을 설정하였습니다.
- MongoDB로 데이터베이스를 구성하고 연결하였습니다.

## 라우팅
Next.js의 페이지 라우팅을 활용하여 
밋업에 해당하는 [meetupid], newMeetup, index 페이지를 구성했습니다.

## DB 연결
MongoClient를 활용하여 MongoDB에 직접 연결하여 DB의 데이터를 불러왔습니다.

### Environments
- mongodb": "^4.10.0
- next": "10.0.6
- react": "17.0.1
- react-dom": "17.0.1
