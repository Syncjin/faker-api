# faker-api
portfolio api

git clone https://github.com/Syncjin/faker-api.git
1. cd faker-api
2. npm install
3. npm start

더미 데이터가 담긴 api입니다.

이미지를 얻을 때
>http://localhost:3000/api/image/cat.jpg

모든 데이터
>http://localhost:3000/api/card

여러개의 데이터
>http://localhost:3000/api/card?count=5

>id가 1~5까지 5개 리턴

여러개의 데이터 
>http://localhost:3000/api/card?count=10&page=2 

>id가 21~30까지 10개 리턴