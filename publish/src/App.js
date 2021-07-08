import './App.css';
import Navbar from './pages/Navbar';
import Bar from './pages/Bar';
import Contents from './pages/Contents';


function App() {

  //python으로 velog 크롤링후 정형화 한 후 배열에 삽입
  const information = [
    { 'img': 'https://media.vlpt.us/images/danmin20/post/2614211e-eb04-4b21-8a8a-be575ca5f866/스크린샷 2021-06-28 오후 1.17.59.png?w=640', 'title': '프론트엔드 개발자의 포트폴리오 웹사이트', 'subtit': '개발자가 디자인 감각을 영끌해서 웹사이트를 만들어본다면?! 🤔', 'datetime': '2021년 6월 28일', 'comment': '24개의 댓글', 'icon': 'https://media.vlpt.us/images/danmin20/profile/777b86ef-0a12-485c-9113-5df40ec0d5a1/social.jpeg?w=120', 'who': 'danmin20', 'like': '104' },
    { 'img': 'https://media.vlpt.us/images/gomjellie/post/d464dfc0-53da-4988-9548-870d05eb7912/google internship.png?w=640', 'title': '구글 코리아 면접후기', 'subtit': 'googlyness: 구글스러움', 'datetime': '2021년 6월 29일', 'comment': '19개의 댓글', 'icon': 'https://media.vlpt.us/images/gomjellie/profile/b1c6a41b-4d7b-44df-bdd3-4903354be563/구경.png?w=120', 'who': 'gomjellie', 'like': '77' },
    { 'img': 'https://media.vlpt.us/images/dell_mond/post/8440ee63-2fb8-43c9-a916-4911c0ced3e4/image.jpeg?w=640', 'title': '애자일을 대충 알고 있는 당신을 위하여', 'subtit': '운이 좋았던 내가 경험한 제대로 된 애자일과 내가 이해한 애자일을 좀 더 쉽게 풀어서 이야기하고 싶었다. 알려주고 싶었다.\n\n애자일을 "대충" 알고 있는 당신을 위해서.', 'datetime': '4일 전', 'comment': '6개의 댓글', 'icon': 'https://media.vlpt.us/images/dell_mond/profile/525d59a4-a7e8-4c25-b4bf-6fc5945849a3/KakaoTalk_Photo_2021-06-01-15-43-09.jpeg?w=120', 'who': 'dell_mond', 'like': '31' },
    { 'img': 'https://media.vlpt.us/images/gomjellie/post/92d4b16b-41c8-48be-873d-6f6e53a6e256/meta_heading_Woowa.jpg?w=640', 'title': '🏕 우아한 테크캠프 합격 후기', 'subtit': '우아한: 교묘하고 단순해 보기에 즐거운', 'datetime': '6일 전', 'comment': '7개의 댓글', 'icon': 'https://media.vlpt.us/images/gomjellie/profile/b1c6a41b-4d7b-44df-bdd3-4903354be563/구경.png?w=120', 'who': 'gomjellie', 'like': '21' },
    { 'img': 'https://media.vlpt.us/images/gicomong/post/914dee8d-be74-4240-aa83-7e097cf59ccc/스크린샷 2021-03-29 오후 9.04.23.png?w=640', 'title': 'js 코드를 더 짧게 써보자', 'subtit': '이번시간에는 js 코드를 짧게 쓸 수 있는 방법을 알아보고자 한다!', 'datetime': '7일 전', 'comment': '4개의 댓글', 'icon': 'https://media.vlpt.us/images/gicomong/profile/5774970e-7d94-41a7-ac7b-e2d7b5962706/title.png?w=120', 'who': 'gicomong', 'like': '21' },
    { 'img': 'https://media.vlpt.us/images/jjunyjjuny/post/e9ad5d23-ddaf-476b-9422-7c9e4dc1e587/대지 1.png?w=640', 'title': '2021년 코드스쿼드 마무리 회고', 'subtit': '마지막이 아닌 앞으로의 우리를 위해', 'datetime': '2021년 6월 29일', 'comment': '13개의 댓글', 'icon': 'https://media.vlpt.us/images/jjunyjjuny/profile/c154920b-b1a4-45e8-9eb1-f0fafb75957c/social.png?w=120', 'who': 'jjunyjjuny', 'like': '28' },
    { 'img': 'https://media.vlpt.us/images/somangoi/post/11cc0034-1e6c-4c1d-a041-8730cffcf90e/giphy (3).gif?w=640', 'title': 'NGO활동가가 개발자에 도전하는 이야기', 'subtit': '커리큘럼이나 프로젝트에 대한 말들은 다들 많이 할테니 나는 좀더 개인적인 이야기를 풀어볼까한다.', 'datetime': '4일 전', 'comment': '2개의 댓글', 'icon': 'https://media.vlpt.us/images/somangoi/profile/968c578f-7eee-452c-bb61-a51ba01a2c9e/profile.jpg?w=120', 'who': 'somangoi', 'like': '13' },
    { 'img': 'https://media.vlpt.us/images/mnjsk7541/post/c0bdac5d-21b7-4087-b50a-97a0cd9f4478/다운로드.png?w=640', 'title': '나의 귀욤깜찍한 GoGo Bot', 'subtit': '약 4일동안 푹 빠져서 만든 GoGo Bot을 봐요! \n귀여워요(제일 중요)', 'datetime': '2021년 7월 1일', 'comment': '7개의 댓글', 'icon': 'https://media.vlpt.us/images/mnjsk7541/profile/6dbd9e11-b7c1-4c9e-8aa2-0a24ed560698/얼굴2.jpeg?w=120', 'who': 'mnjsk7541', 'like': '15' },
    { 'img': 'https://media.vlpt.us/images/yourmean/post/b2bfcb5c-bbe2-4508-9991-4980b98d66c0/image.png?w=640', 'title': '(아마도) 벨로그 마지막글', 'subtit': '결론부터 말하면.. 취업했다! (+합격 후기)', 'datetime': '3일 전', 'comment': '6개의 댓글', 'icon': 'https://media.vlpt.us/images/yourmean/profile/89cf532d-6fe7-4795-92a9-dd3c1c526574/social.jpeg?w=120', 'who': 'yourmean', 'like': '9' },
    { 'img': 'blank', 'title': '3개월을 돌아보며', 'subtit': "3개월의 위코드 생활이 끝났다. 시작하기 전에는 '이것만 잘 수료하면 뭐든 할 수 있을것 같아!' 하는 마음이었지만, 실제 수료를 하고 나니 '앗 이제야 본격적인 시작이구나!' 하는 마음이 든다.\n본격적인 시작에 앞서 이 3개월 동안 나는 무엇을 배웠고 앞으로 어떻게 ...", 'datetime': '3일 전', 'comment': '14개의 댓글', 'icon': 'https://media.vlpt.us/images/sgr2134/profile/88d03a5e-9018-417e-ba4d-53e5ea459208/B8AF99E8-0572-47F3-8D26-F873BC791790.jpeg?w=120', 'who': 'sgr2134', 'like': '7' },
    { 'img': 'https://media.vlpt.us/images/gil0127/post/540376e9-9eb4-46d8-9cff-816a1d9cce1f/싱글 vs 멀티.png?w=640', 'title': '싱글스레드(Single thread) vs 멀티스레드 (Multi thread)', 'subtit': '오늘은 싱글 스레드와 멀티 스레드가 무엇인가와 이 둘의 장단점에 대해서 알아보자!!일단, 시작에 앞서 이해를 돕기 위해 이 그림을 봐주길 바란다.=> 싱글 스레드와 멀티 스레드의 차이는 이 그림을 통해서 가장 확실하게 보일 것같다. 그런데, 상식적으로 생각해보면, 하나...', 'datetime': '2021년 6월 28일', 'comment': '2개의 댓글', 'icon': 'https://media.vlpt.us/images/gil0127/profile/166ee0dd-b06e-4c64-b45a-8389ac154a7e/조은길- 증명사진.jpg?w=120', 'who': 'gil0127', 'like': '12' },
    { 'img': 'https://media.vlpt.us/images/frozing/post/b39dbaf6-c27e-4b59-bfa5-319aef839857/벨로그 썸네일 개발자 필독서4.jpg?w=640', 'title': '2021 개발자 필독서 55권 (4)', 'subtit': '2010년 출간되어 꾸준하게 읽히는 <프로그래머의 길, 멘토에게 묻다>에서 <유닉스의 탄생>, <해커, 광기의 랩소디>, <읽기 좋은 코드가 좋은 코드다>, <기계는 어떻게 생각하고 학습하는가>까지! 읽어보면 도움이 될 필독서 31~40번 목록입니다!', 'datetime': '2021년 6월 30일', 'comment': '1개의 댓글', 'icon': 'https://media.vlpt.us/images/frozing/profile/b14a0e1f-8dda-4c95-a860-284725ff5039/KakaoTalk_20210611_101208191.jpg?w=120', 'who': 'frozing', 'like': '10' },
    { 'img': 'https://images.velog.io/images/hiryuji/post/097e36f0-434a-482c-9589-a06fdd3c2afd/Markdown-mark.svg', 'title': '벨로그 마크다운 작성방법', 'subtit': 'markdown공부한 것을 복습할 겸 블로그에 글을 남겨보기로 했다.벨로그는 처음 접했기 때문에 어떻게 사용하는지 검색해 보았다.마크다운(markdown)은 일반 텍스트 기반의 경량 마크업 언어다.쉽고 간단하게 사용할 수 있는 마크업 언어로 기억하자.마크업 언어(mar...', 'datetime': '2021년 6월 29일', 'comment': '0개의 댓글', 'icon': 'https://media.vlpt.us/images/hiryuji/profile/d6f5e38c-b1af-4566-93ba-dab47d61047e/social.png?w=120', 'who': 'hiryuji', 'like': '9' },
    { 'img': 'https://media.vlpt.us/images/nibble/post/12e620bf-a293-441b-bb79-a0a3d1e11f37/2.jpeg?w=640', 'title': '한달차 쭈니어의 업무일지 작성 😤', 'subtit': '회사에 막 취업했을 때 벨로그에 성장하는 개발자라는 글을 쓴적이 있습니다.원래 회사에서 일정하지는 않지만 중요 이슈가 있을 때마다 업무일지를 작성해왔었다. 생각해보니 업무일지를 작성해서 손해본 일은 없었고 언제 어떤날 이슈가 생겼는지 알 수 있어서 귀찮지만 좋았던 점이...', 'datetime': '2021년 6월 30일', 'comment': '1개의 댓글', 'icon': 'https://media.vlpt.us/images/nibble/profile/426a1bc0-e10f-11e9-906f-8f0a86a18be5/-.jpeg?w=120', 'who': 'nibble', 'like': '7' },
    { 'img': 'https://media.vlpt.us/images/dosilv/post/ad5585e2-5a0b-4fb9-904f-639f182912ef/zoomnpan.png?w=640', 'title': '[React] Zoom and Pan 기능 구현하기', 'subtit': '얼렁뚱땅 구현한... Zoom & Pan 🔍', 'datetime': '2021년 7월 1일', 'comment': '4개의 댓글', 'icon': 'https://media.vlpt.us/images/dosilv/profile/f0ce8b98-2e3f-4904-9930-374ad63f0c02/bali.jpg?w=120', 'who': 'dosilv', 'like': '6' },
    { 'img': 'https://media.vlpt.us/images/mgm-dev/post/90376fe7-0a56-4e18-aa68-a34c49895327/image.png?w=640', 'title': '[번역] 아토믹 웹 디자인 (Atomic Web Design)', 'subtit': '우리는 페이지를 디자인 하는 것이 아니라, 컴포넌트로 이루어진 시스템을 디자인한다', 'datetime': '5일 전', 'comment': '0개의 댓글', 'icon': 'https://media.vlpt.us/images/mgm-dev/profile/76927dd7-398c-4f09-baee-29391748b697/circle-cropped.png?w=120', 'who': 'mgm-dev', 'like': '7' },
    { 'img': 'https://media.vlpt.us/images/jodawooooon/post/92b0f25f-28a3-477c-8d66-2a67fb92c4bc/logo-title-opengraph.png?w=640', 'title': 'Jenkins - CI/CD', 'subtit': 'Jenkins로 Git 프로젝트 자동 배포', 'datetime': '2021년 7월 1일', 'comment': '2개의 댓글', 'icon': 'https://media.vlpt.us/images/jodawooooon/profile/e04bec8f-8f12-4533-b877-cc4daa0f9e74/KakaoTalk_20210630_214744743.jpg?w=120', 'who': 'jodawooooon', 'like': '6' },
    { 'img': 'https://media.vlpt.us/images/pdlma0904/post/8b51c565-7f60-463a-9875-8a37f508fbb8/제목 없음-1.png?w=640', 'title': '🏫 소프트웨어 마이스터고를 2년 6개월 다니면서 느낀점', 'subtit': '2019년 부터 2021년 까지 소프트웨어 마이스터고를 2년 6개월 다니면서 프론트 공부를 했습니다. 그래서 저를 되돌아보며 느낀점과 회고록을 적었습니다.', 'datetime': '2021년 6월 29일', 'comment': '7개의 댓글', 'icon': 'https://media.vlpt.us/images/pdlma0904/profile/01cc4b64-cf5f-4d5e-80f2-ea66eb3c91e6/스크린샷(213) (2020_04_10 16_24_42 UTC).png?w=120', 'who': 'pdlma0904', 'like': '19' },
    { 'img': 'https://media.vlpt.us/images/rhfovk/post/e291bd4c-23c3-4847-970e-befba5c49a2b/자기소개페이지4.jpeg?w=640', 'title': '자기소개 페이지(2) 리뷰', 'subtit': '자기소개 페이지 리뷰(문제점과 풀이 및 미완 문제들)', 'datetime': '5일 전', 'comment': '1개의 댓글', 'icon': 'https://media.vlpt.us/images/rhfovk/profile/aaab47de-7c30-470b-8c78-2afc8b33386a/KakaoTalk_20201115_164004517.png?w=120', 'who': 'rhfovk', 'like': '5' },
    { 'img': 'https://media.vlpt.us/images/dydalsdl1414/post/870d87fb-fe55-4c9a-b797-41307b4b2a39/20210616_090903.jpg?w=640', 'title': '개발자가 되기 위한 고군분투 (feat.위코드)', 'subtit': '위코드 3달 회고록!!', 'datetime': '3일 전', 'comment': '8개의 댓글', 'icon': 'https://media.vlpt.us/images/dydalsdl1414/profile/0805e316-6c3b-47aa-851e-aaef72c77b81/toystory.gif?w=120', 'who': 'dydalsdl1414', 'like': '4' },
    { 'img': 'https://media.vlpt.us/images/hayejun1013/post/7ce67d48-07fd-4cba-af21-9fa737318e4b/Velog Prjoject Banner.png?w=640', 'title': '[Github] 깃헙 프로필을 어떻게 관리하지?', 'subtit': 'Github을 통해 나의 정체성을 표현해보자', 'datetime': '2일 전', 'comment': '2개의 댓글', 'icon': 'https://media.vlpt.us/images/hayejun1013/profile/43f3dd65-1f1d-47da-894d-00d19a50ced6/social.jpeg?w=120', 'who': 'hayejun1013', 'like': '5' },
    { 'img': 'https://media.vlpt.us/images/jsw9330/post/2553bc56-3f80-4b32-ae2c-0d018177991b/js.png?w=640', 'title': '[JS] 유용한 자바스크립트 테크닉', 'subtit': "if 조건문 안에 수많은 || 조건을 넣어야 할 때 includes를 사용?? 연산자는 왼쪽 피연산자값이 null이나 undefined일 때 오른쪽 피연산자를 반환만약 null이나 undefined 외에도 0이나 ''같은 값을 함께 처리하고 싶다면 ?? 대신 ||을 사...", 'datetime': '2021년 7월 1일', 'comment': '0개의 댓글', 'icon': 'https://media.vlpt.us/images/jsw9330/profile/413adeb7-f9c1-4247-9b4a-d914d9401559/a.PNG?w=120', 'who': 'jsw9330', 'like': '5' },
    { 'img': 'https://media.vlpt.us/images/goody/post/fe41d00f-a2d0-40db-b434-bdb8ce370753/image.png?w=640', 'title': 'webpack.config.js 파헤치기', 'subtit': '웹팩 설정은 왜, 어떻게 하는걸까?', 'datetime': '7일 전', 'comment': '0개의 댓글', 'icon': 'https://media.vlpt.us/images/goody/profile/a7091326-eb38-41d0-a6b1-8f68469d2d0f/social.png?w=120', 'who': 'goody', 'like': '5' },
    { 'img': 'blank', 'title': '위코드에서의 한 달', 'subtit': '서른 명 남짓의 동기들이 각자의 사연을 가지고 위코드에 모였다고 생각한다.그렇기에 그 중, 코딩을 남들보다 잘하시는 분들, 들어는 보신 분, 한 번도 해보지 않았지만, 어떠한 이유로 인해 시작하게 된 분들도 있겠지,,\xa0\xa0혼자 공부하는 것보다, 프론트엔드 / ...', 'datetime': '4일 전', 'comment': '2개의 댓글', 'icon': 'https://media.vlpt.us/images/93_0312/profile/0bb456af-6318-41cd-bdaa-caf7b83ecd49/social.jpeg?w=120', 'who': '93_0312', 'like': '4' },
];


  const content_list = information.map((information) => (<Contents props={information}></Contents>))

  return (
    <>
      <Navbar></Navbar>
      <Bar></Bar>
      <div className="main-wrapper">
        <main className="main">
          <div className="contents">
            {content_list}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
